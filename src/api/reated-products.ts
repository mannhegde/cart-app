import {Product} from "@/api/types.ts";
import productsData from "@utils/related-products.json";

export const fetchRelatedProducts = async (): Promise<Product[]> => {
    await new Promise<void>(resolve => setTimeout(resolve, 300)); // Simulate latency
    return productsData as Product[]
};
