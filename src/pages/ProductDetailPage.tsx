import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingBag, Heart, ArrowLeft, Check } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import ImageGallery from '../components/ImageGallery';
import { useCartStore } from '../store/cartStore';

const PaymentMethods = [
  { name: 'Cartão De Crédito', icon: '💳' },
  { name: 'Cartão De Débito', icon: '💳' },
  { name: 'PIX', icon: '📱' },
  { name: 'Dinheiro', icon: '💵' },
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );
  
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors?.[0]
  );
  
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    addItem({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
    
    setAddedToCart(true);
    
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const isNewArrival = product.isNewArrival && product.newUntil 
    ? new Date(product.newUntil) > new Date() 
    : product.isNewArrival;
    
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <button 
          onClick={handleGoBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Voltar aos produtos
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product images */}
          <div>
            <ImageGallery images={product.images} alt={product.name} />
          </div>
          
          {/* Product info */}
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                  <p className="text-gray-600 mb-2">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)} • {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}
                  </p>
                </div>
                <div>
                  {!product.inStock && (
                    <span className="badge-out-of-stock">Out of Stock</span>
                  )}
                  {isNewArrival && (
                    <span className="badge-new ml-2">New Arrival</span>
                  )}
                </div>
              </div>
              <p className="text-2xl font-bold text-primary-600 mt-2">
                {formatCurrency(product.price)}
              </p>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              {/* Size selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-md ${
                          selectedSize === size
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'border-gray-300 hover:border-primary-500'
                        }`}
                        onClick={() => setSelectedSize(size)}
                        disabled={!product.inStock}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Color selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-10 h-10 rounded-full border-2 relative ${
                          selectedColor === color
                            ? 'border-primary-600 ring-2 ring-primary-200'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: getColorCode(color) }}
                        onClick={() => setSelectedColor(color)}
                        disabled={!product.inStock}
                        title={color}
                      >
                        {selectedColor === color && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <Check
                              size={16}
                              className={getTextColor(color)}
                            />
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity selector */}
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 border border-gray-300 rounded-l-md disabled:opacity-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.inStock || quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b border-gray-300">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-1 border border-gray-300 rounded-r-md disabled:opacity-50"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className={`btn-primary flex-1 flex items-center justify-center ${
                  !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {addedToCart ? (
                  <>
                    <Check size={20} className="mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} className="mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </>
                )}
              </button>
              <button
                className="btn-outline flex items-center justify-center"
              >
                <Heart size={20} className="mr-2" />
                Save
              </button>
            </div>
            
            {/* Payment info */}
            <div>
              <h3 className="font-medium mb-3">Payment Methods</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {PaymentMethods.map((method) => (
                  <div 
                    key={method.name}
                    className="border border-gray-200 rounded-md p-3 text-center"
                  >
                    <div className="text-xl mb-1">{method.icon}</div>
                    <div className="text-sm">{method.name}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                After checkout, you'll be redirected to WhatsApp to complete your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to map color names to hex codes
function getColorCode(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Blue': '#3B82F6',
    'Light Blue': '#93C5FD',
    'Dark Blue': '#1E40AF',
    'Brown': '#92400E',
    'Tan': '#D4A76A',
    'Floral Print': '#F472B6',
    'White Floral': '#FDF2F8',
    'Blue Floral': '#DBEAFE',
    'Beige': '#E5E5DB',
    'Navy': '#172554',
    'Olive': '#4D7C0F',
    'Black/Silver': '#6B7280',
    'Brown/Gold': '#B45309',
    'Cream': '#FEFCE8',
    'Gray': '#6B7280',
    'Dusty Pink': '#F9A8D4',
    'White/Black': '#E5E7EB',
    'All Black': '#1F2937',
    'Gray/Blue': '#94A3B8',
  };
  
  return colorMap[colorName] || '#CCCCCC';
}

// Helper function to determine text color based on background color
function getTextColor(colorName: string): string {
  const darkColors = [
    'Black', 'Dark Blue', 'Navy', 'All Black', 'Black/Silver'
  ];
  
  return darkColors.includes(colorName) ? 'text-white' : 'text-black';
}

export default ProductDetailPage;