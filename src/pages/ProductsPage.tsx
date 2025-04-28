import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import { useProductFilter } from '../hooks/useProductFilter';

const ProductsPage: React.FC = () => {
  const { products, filter, setFilter } = useProductFilter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Update URL params when filter changes
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filter.searchQuery) params.set('search', filter.searchQuery);
    if (filter.minPrice !== undefined) params.set('minPrice', filter.minPrice.toString());
    if (filter.maxPrice !== undefined) params.set('maxPrice', filter.maxPrice.toString());
    if (filter.gender?.length) filter.gender.forEach(g => params.append('gender', g));
    if (filter.category?.length) filter.category.forEach(c => params.append('category', c));
    if (filter.inStock) params.set('inStock', 'true');
    if (filter.newArrivals) params.set('newArrivals', 'true');
    
    setSearchParams(params, { replace: true });
  }, [filter, setSearchParams]);
  
  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
  };
  
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-6">Produtos</h1>
          <SearchBar />
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Filter button (mobile) */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="btn-outline flex items-center"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filtros
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setGridView(true)}
                className={`p-2 rounded-md ${gridView ? 'bg-gray-200' : 'bg-white'}`}
                aria-label="Grid view"
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={`p-2 rounded-md ${!gridView ? 'bg-gray-200' : 'bg-white'}`}
                aria-label="List view"
              >
                <List size={20} />
              </button>
            </div>
          </div>
          
          {/* Filter sidebar */}
          <FilterSidebar
            filter={filter}
            onChange={handleFilterChange}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
          
          {/* Products grid */}
          <div>
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Mostrar <span className="font-semibold">{products.length}</span> Produtos
              </p>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setGridView(true)}
                  className={`p-2 rounded-md ${gridView ? 'bg-gray-200' : 'bg-white'}`}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setGridView(false)}
                  className={`p-2 rounded-md ${!gridView ? 'bg-gray-200' : 'bg-white'}`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            
            {products.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">Nenhum Produtos</h3>
                <p className="text-gray-600 mb-6">Tente ajustar sua pesquisa ou filtro</p>
                <button
                  onClick={() => {
                    setFilter({});
                    navigate('/products');
                  }}
                  className="btn-outline"
                >
                  Limpar Todos Os Filtros
                </button>
              </div>
            ) : (
              <div className={gridView 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;