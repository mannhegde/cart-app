import { useQuery } from '@tanstack/react-query';
import {fetchWidgets} from "@/api/widgets";
import {WidgetConfig} from "@widgets/helpers/types.ts";

export const useWidgets = () => {
    return useQuery<WidgetConfig[]>({
        queryKey: ['widgets'],
        queryFn: fetchWidgets,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
