import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  image: string;
  link: string;
  description: string;
}

const categories: Category[] = [
  {
    name: "Coleção Feminina",
    image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg",
    link: "/products?gender=feminino",
    description: "Designs elegantes e estilosos para a mulher moderna"
  },
  {
    name: "Coleção Masculina",
    image: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg",
    link: "/products?gender=masculino",
    description: "Estilos clássicos e contemporâneos para todos os homens"
  },
  {
    name: "Acessórios",
    image: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg",
    link: "/products?category=acessórios",
    description: "Complete seu look com nossos acessórios selecionados"
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Compre por Categoria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index}
              className="card overflow-hidden group"
            >
              <div className="product-image-zoom h-80">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-block font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                  Explorar →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;