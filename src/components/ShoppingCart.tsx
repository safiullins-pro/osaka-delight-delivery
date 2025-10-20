import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ShoppingCart as CartIcon, Trash2, Minus, Plus, Gift } from 'lucide-react';
import { useCart, DeliveryZone } from '@/contexts/CartContext';
import { formatVND } from '@/lib/utils/format';

const deliveryZones: { value: DeliveryZone; label_ru: string; label_en: string; label_zh: string; label_vi: string; fee: number }[] = [
  { value: 'north', label_ru: 'Север', label_en: 'North', label_zh: '北部', label_vi: 'Bắc', fee: 20000 },
  { value: 'far_north', label_ru: 'Дальний север', label_en: 'Far North', label_zh: '远北部', label_vi: 'Xa Bắc', fee: 30000 },
  { value: 'center', label_ru: 'Центр', label_en: 'Center', label_zh: '市中心', label_vi: 'Trung tâm', fee: 30000 },
  { value: 'south', label_ru: 'Юг', label_en: 'South', label_zh: '南部', label_vi: 'Nam', fee: 40000 },
];

export const ShoppingCart = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'ru' | 'en' | 'zh' | 'vi';
  const {
    items,
    itemCount,
    subtotal,
    deliveryFee,
    floorDelivery,
    deliveryZone,
    total,
    updateQuantity,
    removeFromCart,
    setDeliveryZone,
    setFloorDelivery
  } = useCart();

  const hasGift = total >= 500000;

  return (
    <>
      {/* Floating Cart Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            id="cart-trigger"
            size="lg"
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-6 shadow-elegant hover:shadow-2xl transition-all hover:scale-110"
          >
            <CartIcon className="w-6 h-6" />
            {itemCount > 0 && (
              <Badge className="ml-2 bg-accent text-accent-foreground">
                {itemCount}
              </Badge>
            )}
            <span className="ml-2 font-bold hidden sm:inline">
              {formatVND(total)}
            </span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-full sm:max-w-lg bg-card overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-card-foreground">
              {t('cart_title')}
            </SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
              <CartIcon className="w-16 h-16 mb-4 opacity-50" />
              <p className="text-lg">{t('cart_empty')}</p>
            </div>
          ) : (
            <div className="space-y-6 mt-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.dish.id} className="flex gap-4 bg-background/50 rounded-lg p-4">
                    <img 
                      src={item.dish.image} 
                      alt={item.dish[`name_${lang}`]}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-1">
                        {item.dish[`name_${lang}`]}
                      </h4>
                      <p className="text-primary font-bold mb-2">
                        {formatVND(item.subtotal)}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFromCart(item.dish.id)}
                          className="ml-auto text-destructive hover:text-destructive h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Zone */}
              <div className="space-y-3 border-t border-border pt-4">
                <Label className="text-base font-semibold">{t('delivery_zone')}</Label>
                <Select value={deliveryZone} onValueChange={(v) => setDeliveryZone(v as DeliveryZone)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card z-[100]">
                    {deliveryZones.map(zone => (
                      <SelectItem key={zone.value} value={zone.value}>
                        {zone[`label_${lang}`]} - {formatVND(zone.fee)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="floor" 
                    checked={floorDelivery}
                    onCheckedChange={(checked) => setFloorDelivery(!!checked)}
                  />
                  <Label htmlFor="floor" className="cursor-pointer">
                    {t('floor_delivery')} +{formatVND(20000)}
                  </Label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-card-foreground">
                  <span>{t('subtotal')}</span>
                  <span>{formatVND(subtotal)}</span>
                </div>
                <div className="flex justify-between text-card-foreground">
                  <span>{t('delivery')}</span>
                  <span>{formatVND(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-primary border-t border-border pt-2">
                  <span>{t('total')}</span>
                  <span>{formatVND(total)}</span>
                </div>
              </div>

              {/* Gift Alert */}
              {hasGift && (
                <Alert className="border-accent bg-accent/10">
                  <Gift className="h-4 w-4 text-accent" />
                  <AlertDescription className="text-accent font-semibold">
                    {t('gift_alert')}
                  </AlertDescription>
                </Alert>
              )}

              {/* Checkout Button */}
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                {t('checkout')}
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
