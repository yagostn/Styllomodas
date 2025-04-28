import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-bold mb-4">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-8">
          Essa página parece que não existe ou foi movida.
        </p>
        <Link 
          to="/"
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" />
          Voltar Para O Início
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;