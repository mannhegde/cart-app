import {WidgetConfig} from "@widgets/helpers/types.ts";


export const fetchWidgets = async (): Promise<WidgetConfig[]> => {
  await new Promise<void>(resolve => setTimeout(resolve, 300)); // Simulate latency

  return [
    { type: 'sectionHeader', label: 'Review your cart' },
    { type: 'oosItems', label: 'Out of stock' },
    { type: 'availableItems', label: 'Delivery in 10 minutes' },
    { type: 'relatedProducts', label: 'Related Products' },
    { type: 'promotions', label: 'Promotions' },
    { type: 'billDetailsCard', label: 'Bill Details' },
  ];
};
