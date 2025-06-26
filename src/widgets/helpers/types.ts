export type WidgetType =
    | 'sectionHeader'
    | 'oosItems'
    | 'availableItems'
    | 'relatedProducts'
    | 'promotions'
    | 'billDetailsCard';

export interface WidgetConfig {
    type: WidgetType;
    label: string;
}
