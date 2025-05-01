import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatters';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore(state => state.addItem);
  
  const isNewArrival = product.isNewArrival && product.newUntil 
    ? new Date(product.newUntil) > new Date() 
    : product.isNewArrival;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock) {
      addToCart({
        productId: product.id,
        quantity: 1,
        size: product.sizes ? product.sizes[0] : undefined,
        color: product.colors ? product.colors[0] : undefined,
      });
    }
  };
  
  return (
    <div className="card group animate-fade-in">
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="relative product-image-zoom h-72 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-error-600 text-white px-4 py-2 rounded-md font-medium">
              Fora de estoque
              </span>
            </div>
          )}
          
          {isNewArrival && (
            <span className="badge-new absolute top-2 left-2">
              Novo
            </span>
          )}
          
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-50"
              aria-label="Add to cart"
            >
              <ShoppingBag size={20} className="text-primary-600" />
            </button>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="font-semibold">{formatCurrency(product.price)}</span>
            
            <div className="flex space-x-1">
              {product.colors && product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index}
                  className="h-3 w-3 rounded-full border border-gray-300" 
                  style={{ backgroundColor: getColorCode(color) }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Função auxiliar para mapear nomes de cores para códigos hexadecimais
function getColorCode(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    'Preto': '#000000',
    'Branco': '#FFFFFF',
    'Azul': '#3B82F6',
    'Azul Claro': '#93C5FD',
    'Azul Escuro': '#1E40AF',
    'Marrom': '#92400E',
    'Caramelo': '#D4A76A',
    'Floral': '#F472B6',
    'Floral Branco': '#FDF2F8',
    'Floral Azul': '#DBEAFE',
    'Cinza': '#6B7280',
  };

  return colorMap[colorName] || '#CCCCCC';
}

export default ProductCard;