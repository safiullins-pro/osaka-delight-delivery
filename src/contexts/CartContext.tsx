import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Dish {
  id: string;
  name_ru: string;
  name_en: string;
  name_zh: string;
  name_vi: string;
  composition?: string;
  ingredients?: string;
  pieces?: number;
  weight?: string;
  price: number;
  image: string;
  star?: boolean;
  category: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  subtotal: number;
}

export type DeliveryZone = 'north' | 'far_north' | 'center' | 'south';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  floorDelivery: boolean;
  deliveryZone: DeliveryZone;
  total: number;
  addToCart: (dish: Dish) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  removeFromCart: (dishId: string) => void;
  setDeliveryZone: (zone: DeliveryZone) => void;
  setFloorDelivery: (value: boolean) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DELIVERY_FEES: Record<DeliveryZone, number> = {
  north: 20000,
  far_north: 30000,
  center: 30000,
  south: 40000
};

const FLOOR_FEE = 20000;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('osaka-cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone>('center');
  const [floorDelivery, setFloorDelivery] = useState(false);

  useEffect(() => {
    localStorage.setItem('osaka-cart', JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const deliveryFee = DELIVERY_FEES[deliveryZone] + (floorDelivery ? FLOOR_FEE : 0);
  const total = subtotal + deliveryFee;

  const addToCart = (dish: Dish) => {
    setItems(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * dish.price }
            : item
        );
      }
      return [...prev, { dish, quantity: 1, subtotal: dish.price }];
    });
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.dish.id === dishId
          ? { ...item, quantity, subtotal: quantity * item.dish.price }
          : item
      )
    );
  };

  const removeFromCart = (dishId: string) => {
    setItems(prev => prev.filter(item => item.dish.id !== dishId));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        deliveryFee,
        floorDelivery,
        deliveryZone,
        total,
        addToCart,
        updateQuantity,
        removeFromCart,
        setDeliveryZone,
        setFloorDelivery,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
