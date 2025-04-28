import React, { useState, useEffect } from 'react';
import { ProductFilter } from '../types';
import { X, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface FilterSidebarProps {
  filter: ProductFilter;
  onChange: (filter: ProductFilter) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  filter, 
  onChange, 
  isOpen,
  onClose
}) => {
  const [localFilter, setLocalFilter] = useState<ProductFilter>(filter);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);
  
  const handleFilterChange = (newFilter: Partial<ProductFilter>) => {
    const updatedFilter = { ...localFilter, ...newFilter };
    setLocalFilter(updatedFilter);
  };
  
  const applyFilters = () => {
    onChange(localFilter);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };
  
  const resetFilters = () => {
    const resetFilter: ProductFilter = {
      searchQuery: searchParams.get('search') || undefined,
    };
    setLocalFilter(resetFilter);
    onChange(resetFilter);
  };
  
  return (
    <>
      {/* Mobile filter overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Filter sidebar */}
      <div className={`
        fixed lg:sticky top-0 lg:top-24 h-full lg:h-auto z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        bg-white lg:bg-transparent shadow-lg lg:shadow-none
        w-80 max-w-full overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Filters</h3>
            <button
              onClick={onClose}
              className="lg:hidden"
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Price range filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Min</label>
                <input
                  type="number"
                  className="input"
                  placeholder="0"
                  value={localFilter.minPrice || ''}
                  onChange={(e) => handleFilterChange({ minPrice: e.target.value ? Number(e.target.value) : undefined })}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Max</label>
                <input
                  type="number"
                  className="input"
                  placeholder="1000"
                  value={localFilter.maxPrice || ''}
                  onChange={(e) => handleFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : undefined })}
                />
              </div>
            </div>
          </div>
          
          {/* Gender filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Gender</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes('male') || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? [...genders, 'male']
                      : genders.filter(g => g !== 'male');
                    handleFilterChange({ gender: newGenders.length ? newGenders : undefined });
                  }}
                />
                <span>Men</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes('female') || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? [...genders, 'female']
                      : genders.filter(g => g !== 'female');
                    handleFilterChange({ gender: newGenders.length ? newGenders : undefined });
                  }}
                />
                <span>Women</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes('unisex') || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? [...genders, 'unisex']
                      : genders.filter(g => g !== 'unisex');
                    handleFilterChange({ gender: newGenders.length ? newGenders : undefined });
                  }}
                />
                <span>Unisex</span>
              </label>
            </div>
          </div>
          
          {/* Category filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Category</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.category?.includes('clothing') || false}
                  onChange={(e) => {
                    const categories = localFilter.category || [];
                    const newCategories = e.target.checked
                      ? [...categories, 'clothing']
                      : categories.filter(c => c !== 'clothing');
                    handleFilterChange({ category: newCategories.length ? newCategories : undefined });
                  }}
                />
                <span>Clothing</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.category?.includes('accessories') || false}
                  onChange={(e) => {
                    const categories = localFilter.category || [];
                    const newCategories = e.target.checked
                      ? [...categories, 'accessories']
                      : categories.filter(c => c !== 'accessories');
                    handleFilterChange({ category: newCategories.length ? newCategories : undefined });
                  }}
                />
                <span>Accessories</span>
              </label>
            </div>
          </div>
          
          {/* Availability filter */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Availability</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.inStock || false}
                  onChange={(e) => handleFilterChange({ inStock: e.target.checked || undefined })}
                />
                <span>In Stock Only</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.newArrivals || false}
                  onChange={(e) => handleFilterChange({ newArrivals: e.target.checked || undefined })}
                />
                <span>New Arrivals</span>
              </label>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col space-y-3">
            <button
              onClick={applyFilters}
              className="btn-primary w-full"
            >
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="btn-outline w-full"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;