import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { formatCurrency } from '../utils/formatters';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotal, getProductDetails } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-gray-100 rounded-full p-6 mb-6">
              <ShoppingBag size={40} className="text-gray-500" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Cart items */}
          <div className="mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {items.map(item => {
                  const product = getProductDetails(item.productId);
                  if (!product) return null;
                  
                  return (
                    <div key={item.productId} className="flex border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link 
                                to={`/products/${product.id}`}
                                className="hover:text-primary-600 transition-colors"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {item.size && <span>Size: {item.size}</span>}
                              {item.color && item.size && <span> • </span>}
                              {item.color && <span>Color: {item.color}</span>}
                            </p>
                            <p className="font-medium text-primary-600 mt-1">
                              {formatCurrency(product.price)}
                            </p>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="text-gray-400 hover:text-error-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        
                        <div className="mt-4 flex items-center">
                          <div className="flex items-center">
                            <button
                              className="px-2 py-1 border border-gray-300 rounded-l-md"
                              onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-t border-b border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              className="px-2 py-1 border border-gray-300 rounded-r-md"
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="ml-auto font-semibold">
                            {formatCurrency(product.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatCurrency(getTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">{formatCurrency(getTotal())}</span>
                  </div>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="btn-primary w-full flex items-center justify-center"
              >
                Proceed to Checkout
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <div className="mt-6">
                <Link
                  to="/products"
                  className="text-primary-600 hover:underline text-sm flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;