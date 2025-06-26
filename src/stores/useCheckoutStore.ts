import { create } from 'zustand';

export type CheckoutDetails = {
    subtotal: number;
    tax: number;
    discount: number;
    delivery: number;
    total: number;
};

interface CheckoutStore {
    details: CheckoutDetails;
    setDetails: (details: Partial<CheckoutDetails>) => void;
    reset: () => void;
}

const initialState: CheckoutDetails = {
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
    delivery: 0,
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
    details: initialState,
    setDetails: (details) =>
        set((state) => ({
            details: {
                ...state.details,
                ...details,
                total: (details.subtotal ?? state.details.subtotal)
                    + (details.tax ?? state.details.tax)
                    - (details.discount ?? state.details.discount),
            },
        })),
    reset: () => set({ details: initialState }),
}));
