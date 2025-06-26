import { useQuery } from '@tanstack/react-query';
import {WidgetConfig} from "@utils/types";
import {fetchWidgets} from "@/api/widgets";

export const useWidgets = () => {
    return useQuery<WidgetConfig[]>({
        queryKey: ['widgets'],
        queryFn: fetchWidgets,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
