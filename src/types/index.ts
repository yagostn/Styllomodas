export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  gender: 'male' | 'female' | 'unisex';
  category: 'clothing' | 'accessories';
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  isNewArrival: boolean;
  newUntil?: string; // ISO date string
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
}

export type ProductFilter = {
  minPrice?: number;
  maxPrice?: number;
  gender?: ('male' | 'female' | 'unisex')[];
  category?: ('clothing' | 'accessories')[];
  inStock?: boolean;
  searchQuery?: string;
  newArrivals?: boolean;
}