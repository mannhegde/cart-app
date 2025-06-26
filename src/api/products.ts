import {Product} from "@utils/types";
import productsData from "@utils/products.json";

export const fetchProducts = async (): Promise<Product[]> => {
    await new Promise<void>(resolve => setTimeout(resolve, 300)); // Simulate latency
    return productsData as Product[]
};
