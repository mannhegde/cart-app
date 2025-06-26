export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  description: string;
}


export interface CartItem {
  product: Product;
  quantity: number;
  outOfStock?: boolean;
}

export interface CartStore {
  items: Record<string, CartItem>;
  remove: (productIds: string[]) => void;
  increment: (product: Product) => void;
  decrement: (productId: string) => void;
  clear: () => void;
  markOutOfStock: (ids: string[]) => void;
  unmarkOutOfStock: (ids: string[]) => void;
  getTotal: () => number;
  getItems: () => CartItem[];
  getOutOfStockItems:() => CartItem[];
  getItemQuantity: (productId: string) => number;
  validateCart: ()=>Promise<void>;
  isValidating:boolean
}

export type WidgetType =
    | 'oosItems'
    | 'availableItems'
    | 'relatedProducts'
    | 'promotions'
    | 'billDetailsCard';

export interface WidgetConfig {
  type: WidgetType;
  label: string;
}
