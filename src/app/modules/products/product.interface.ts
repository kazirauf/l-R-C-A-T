export interface ProductVariant {
  type: string;
  value: string;
}

export interface Inventory {
  quantity: number;
  inStock: boolean;
}

export interface ProductInterface {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: ProductVariant[];
  inventory: Inventory;
}
