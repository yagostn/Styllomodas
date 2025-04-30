import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product, ProductFilter } from '../types';
import { products as allProducts } from '../data/products';

export const useProductFilter = () => {
  const [searchParams] = useSearchParams();
  
  // Inicializar filtro a partir de parâmetros de pesquisa de URL
  const initialFilter: ProductFilter = {
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    gender: searchParams.getAll('gender').length > 0 
      ? searchParams.getAll('gender') as ('masculino' | 'feminino' | 'infantil' | 'infantil')[] 
      : undefined,
    category: searchParams.getAll('category').length > 0 
      ? searchParams.getAll('category') as ('roupas' | 'acessórios' | 'calçados')[] 
      : undefined,
    inStock: searchParams.get('inStock') === 'true' ? true : undefined,
    newArrivals: searchParams.get('newArrivals') === 'true' ? true : undefined,
    searchQuery: searchParams.get('search') || undefined,
  };
  
  const [filter, setFilter] = useState<ProductFilter>(initialFilter);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  
  // Aplicar filtros
  useEffect(() => {
    let filtered = [...allProducts];
    
    // Filtrar por consulta de pesquisa
    if (filter.searchQuery) {
      const query = filter.searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Filtrar por faixa de preço
    if (filter.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filter.minPrice!);
    }
    
    if (filter.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filter.maxPrice!);
    }
    
    // Filtrar por gênero
    if (filter.gender && filter.gender.length > 0) {
      filtered = filtered.filter(product => filter.gender!.includes(product.gender));
    }
    
    // Filtrar por categoria
    if (filter.category && filter.category.length > 0) {
      filtered = filtered.filter(product => filter.category!.includes(product.category));
    }
    
    // Filtrar por disponibilidade
    if (filter.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }
    
    // Filtrar por novidades
    if (filter.newArrivals) {
      filtered = filtered.filter(product => {
        if (!product.isNewArrival) return false;
        if (!product.newUntil) return true;
        return new Date(product.newUntil) > new Date();
      });
    }
    
    setFilteredProducts(filtered);
  }, [filter]);
  
  return {
    products: filteredProducts,
    filter,
    setFilter,
  };
};