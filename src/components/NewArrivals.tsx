import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const NewArrivals: React.FC = () => {
  const newArrivalsProducts = products
    .filter(product => product.isNewArrival)
    .slice(0, 4);
    
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Lançamentos</h2>
            <p className="text-gray-600">As últimas novidades da nossa coleção</p>
          </div>
          <Link 
            to="/products?newArrivals=true"
            className="mt-4 md:mt-0 btn-outline"
          >
            Ver Todos
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivalsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;