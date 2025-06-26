import { create } from 'zustand';
import { fetchProducts } from '@/api/products.ts';
import {Product} from "@utils/types.ts";

interface ProductsState {
  products: Product[];
  error: string | null;
  isLoading: boolean;
  loadProducts: () => Promise<void>;
  clearError: () => void;
}

export const useProductsStore = create<ProductsState>(set => ({
  products: [],
  error: null,
  isLoading: true,
  clearError: () => {
    set({ error: null });
  },
  loadProducts: async () => {
    try {
      const products = await fetchProducts();
      set(state => {
        if (JSON.stringify(state.products) === JSON.stringify(products))
          return state;
        return { products, error: null, isLoading: false };
      });
    } catch (e) {
      set({ error: 'Failed to load products' });
    }
  },
}));
