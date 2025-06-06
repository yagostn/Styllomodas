import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items } = useCartStore();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Roupas', path: '/products?category=roupas' },
    { name: 'Acessórios', path: '/products?category=acessórios' },
    { name: 'Masculino', path: '/products?gender=masculino' },
    { name: 'Feminino', path: '/products?gender=feminino' },
    { name: 'Lançamentos', path: '/products?newArrivals=true' },
  ];
  
  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" className="text-2xl font-bold text-black">Styllo Modas</Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`font-medium hover:text-black transition-colors ${
                  location.pathname === link.path ? 'text-black' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/products" className="hover:text-black transition-colors">
              <Search size={20} />
            </Link>
            <Link to="/cart" className="hover:text-black transition-colors relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Menu móvel*/}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg animate-slide-down">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`font-medium hover:text-black transition-colors ${
                    location.pathname === link.path ? 'text-black' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;