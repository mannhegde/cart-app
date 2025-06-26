import { create } from 'zustand';
import {Product} from '@/api/types.ts';
import {CartItem} from "@components/cart-list-item/types.ts";

interface CartStore {
    items: Record<string, CartItem>;
    remove: (productIds: string[]) => void;
    increment: (product: Product) => void;
    decrement: (productId: string) => void;
    clear: () => void;
    markOutOfStock: (ids: string[]) => void;
    unmarkOutOfStock: (ids: string[]) => void;
    getTotal: () => number;
    getItems: () => CartItem[];
    getOutOfStockItems: () => CartItem[];
    getItemQuantity: (productId: string) => number;
    validateCart: () => Promise<void>;
    isValidating: boolean;
}


export const useCartStore = create<CartStore>((set, get) => ({
  items: {},
  isValidating: true,

  remove: (productIds: string[]) =>
    set(state => {
      const updated = { ...state.items };
      for (const id of productIds) {
        delete updated[id];
      }
      return { items: updated };
    }),

  increment: product =>
    set(state => {
      const existing = state.items[product.id];
      if (!existing) {
        return {
          items: {
            ...state.items,
            [product.id]: { product, quantity: 1 },
          },
        };
      }

      return {
        items: {
          ...state.items,
          [product.id]: {
            ...existing,
            quantity: existing.quantity + 1,
          },
        },
      };
    }),

  decrement: productId =>
    set(state => {
      const existing = state.items[productId];
      if (!existing) return state;

      if (existing.quantity <= 1) {
        const updated = { ...state.items };
        delete updated[productId];
        return { items: updated };
      }

      return {
        items: {
          ...state.items,
          [productId]: {
            ...existing,
            quantity: existing.quantity - 1,
          },
        },
      };
    }),

  clear: () => set({ items: {} }),

  markOutOfStock: ids =>
    set(state => {
      const updated = { ...state.items };
      ids.forEach(id => {
        if (updated[id]) updated[id].outOfStock = true;
      });
      return { items: updated };
    }),

  unmarkOutOfStock: ids =>
    set(state => {
      const updated = { ...state.items };
      ids.forEach(id => {
        if (updated[id]) delete updated[id].outOfStock;
      });
      return { items: updated };
    }),

  getTotal: () => {
    return Object.values(get().items).reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },

  getItems: () => Object.values(get().items),
  getItemQuantity: productId => get().items[productId]?.quantity || 0,
  getOutOfStockItems: () =>
    Object.values(get().items).filter(item => item.outOfStock),
  validateCart: async () => {
    set(_ => ({ isValidating: true }));
    const { items, markOutOfStock, unmarkOutOfStock } = get();
    const keys = Object.keys(items);
    const outOfStockIds: string[] = [];
    const inStockIds: string[] = [];

    keys.forEach((productId, index) => {
      if (index % 2 === 1) {
        outOfStockIds.push(productId);
      } else {
        inStockIds.push(productId);
      }
    });

    if (outOfStockIds.length > 0) {
      markOutOfStock(outOfStockIds);
    }
    if (inStockIds.length > 0) {
      unmarkOutOfStock(inStockIds);
    }
    set(_ => ({ isValidating: false }));
  },
}));
