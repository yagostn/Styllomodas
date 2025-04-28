import React from 'react';
import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import FeaturedCategories from '../components/FeaturedCategories';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <FeaturedCategories />
      
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Moda de qualidade para todos os estilos</h2>
            <p className="text-gray-700 mb-8">
            Descubra a combinação perfeita de design contemporâneo e elegância atemporal com nossa coleção selecionada de roupas e acessórios. Sejam peças marcantes ou itens essenciais para o dia a dia, temos algo para cada ocasião.
            </p>
            <a 
              href="/products"
              className="btn-primary"
            >
              Explore A Coleção
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;