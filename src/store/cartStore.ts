import { create } from 'zustand';
import { CartItem, Product } from '../types';
import { products } from '../data/products';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getProductDetails: (productId: string) => Product | undefined;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find(i => 
        i.productId === item.productId && 
        i.size === item.size && 
        i.color === item.color
      );
      
      if (existingItem) {
        return {
          items: state.items.map(i => 
            i.productId === item.productId && i.size === item.size && i.color === item.color
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        };
      }
      
      return { items: [...state.items, item] };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.productId !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map(item => 
        item.productId === productId 
          ? { ...item, quantity } 
          : item
      )
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  },
  
  getProductDetails: (productId) => {
    return products.find(p => p.id === productId);
  }
}));