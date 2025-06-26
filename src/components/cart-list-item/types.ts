import {Product} from "@/api/types.ts";

export interface CartItem {
    product: Product;
    quantity: number;
    outOfStock?: boolean;
}
