export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  gender: 'masculino' | 'feminino' | 'infantil' | 'unisex';
  category: 'roupas' | 'acessórios' | 'calçados';
  brand: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  isNewArrival: boolean;
  newUntil?: string; // Sequencia de data ISO
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
  gender?: ('masculino' | 'feminino' | 'infantil' | 'unisex')[];
  category?: ('roupas' | 'acessórios' | 'calçados')[];
  brand?: string;
  inStock?: boolean;
  searchQuery?: string;
  newArrivals?: boolean;
}