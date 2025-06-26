import { useQuery } from '@tanstack/react-query';
import {Product} from "@/api/types.ts";
import {fetchRelatedProducts} from "@/api/reated-products.ts";

export const useRelatedProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['related-products'],
        queryFn: fetchRelatedProducts,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
