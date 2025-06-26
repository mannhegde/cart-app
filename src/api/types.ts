export interface Product {
  id: string;
  name: string;
  price: number;
  slashedPrice?: number;
  image: string;
  inStock: boolean;
  description: string;
}
