import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Styllo Modas</h3>
            <p className="mb-4">A Moda Ao Seu Estilo.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Loja</Link>
              </li>
              <li>
                <Link to="/products?newArrivals=true" className="hover:text-white transition-colors">Lançamentos</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?gender=feminino" className="hover:text-white transition-colors">Feminino</Link>
              </li>
              <li>
                <Link to="/products?gender=masculino" className="hover:text-white transition-colors">Masculino</Link>
              </li>
              <li>
                <Link to="/products?category=acessórios" className="hover:text-white transition-colors">Acessórios</Link>
              </li>
              <li>
                <Link to="/products?category=roupas" className="hover:text-white transition-colors">Roupas</Link>
              </li>
            </ul>
          </div>
          
            <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Rua 88, 03 - Marcos Freire II, Nossa Senhora do Socorro - SE</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(79) 998992944</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>styllomodas10@gmail.com</span>
                </li>
                <li className="flex items-center">
                <Instagram size={18} className="mr-2 flex-shrink-0" />
                <span>@styllomodas_10</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Styllo Modas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;