import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.1';

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface OrderRequest {
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  deliveryZone: string;
  floorDelivery: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { items, subtotal, deliveryFee, total, deliveryZone, floorDelivery }: OrderRequest = await req.json();

    console.log('Processing order:', { items, subtotal, deliveryFee, total, deliveryZone, floorDelivery });

    // First, save order to database
    const { data: savedOrder, error: dbError } = await supabase
      .from('orders')
      .insert({
        items: items,
        subtotal: subtotal,
        delivery_fee: deliveryFee,
        total: total,
        delivery_zone: deliveryZone,
        floor_delivery: floorDelivery,
        status: 'pending',
        telegram_sent: false
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to save order: ${dbError.message}`);
    }

    console.log('Order saved to database:', savedOrder.id);

    // Now try to send to Telegram
    let telegramSent = false;
    let telegramError = null;

    // Format order message for Telegram
    let message = `🍣 *НОВЫЙ ЗАКАЗ OSAKA #${savedOrder.id.slice(0, 8)}*\n\n`;
    message += `📋 *Товары:*\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Количество: ${item.quantity} шт\n`;
      message += `   Цена: ${item.price.toLocaleString('vi-VN')} VND\n`;
      message += `   Сумма: ${item.subtotal.toLocaleString('vi-VN')} VND\n\n`;
    });

    message += `\n💰 *Итого:*\n`;
    message += `Сумма товаров: ${subtotal.toLocaleString('vi-VN')} VND\n`;
    message += `Доставка (${deliveryZone}): ${deliveryFee.toLocaleString('vi-VN')} VND\n`;
    if (floorDelivery) {
      message += `Подъем на этаж: ✅\n`;
    }
    message += `\n*ВСЕГО: ${total.toLocaleString('vi-VN')} VND*\n`;

    if (total >= 500000) {
      message += `\n🎁 *Подарок: Яки краб в подарок!*`;
    }

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData);
      telegramError = telegramData.description || 'Unknown Telegram error';
    } else {
      telegramSent = true;
      console.log('Order sent to Telegram successfully:', telegramData);
    }

    // Update order with Telegram status
    await supabase
      .from('orders')
      .update({
        telegram_sent: telegramSent,
        telegram_error: telegramError
      })
      .eq('id', savedOrder.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        orderId: savedOrder.id,
        message: 'Order saved successfully',
        telegramSent: telegramSent
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in send-order function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
