import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const navigate = useNavigate();
  
  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, [searchParams]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/products');
    }
  };
  
  const clearSearch = () => {
    setQuery('');
    navigate('/products');
  };
  
  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          className="input pr-16"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute right-0 top-0 h-full flex items-center pr-2">
          {query && (
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="submit"
            className="p-2 text-primary-600 hover:text-primary-800"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;