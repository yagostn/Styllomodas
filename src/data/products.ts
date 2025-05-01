import { Product } from '../types';
//import { optimizeImageUrl } from '../utils/cloudinary';


export const products: Product[] = [
  {
    id: '1',
    name: 'Jaqueta Jeans Clássica',
    price: 129.99,
    description: 'Uma jaqueta jeans atemporal que nunca sai de moda.',
    gender: 'unisex',
    category: 'roupas',
    brand: 'Fashion Denim',
    images: [
      'https://res.cloudinary.com/dsenvvbiz/image/upload/v1746050866/cld-sample-3.jpg',
      'https://res.cloudinary.com/dsenvvbiz/image/upload/v1746050866/cld-sample-5.jpg',
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Azul', 'Azul Claro', 'Azul Escuro'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-08-01',
    featured: true
  },
  {
    id: '2',
    name: 'Bolsa Tiracolo de Couro',
    price: 89.99,
    description: 'Bolsa tiracolo de couro estilosa com vários compartimentos.',
    gender: 'feminino',
    category: 'acessórios',
    brand: 'Leather Luxe',
    images: [
      'https://res.cloudinary.com/dsenvvbiz/image/upload/v1746058005/good-friday-scene-with-jesus-christ_cqs7fz.jpg',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress',
    ],
    colors: ['Preto', 'Marrom', 'Caramelo'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-07-15',
    featured: true
  },
  {
    id: '3',
    name: 'Vestido Floral de Verão',
    price: 59.99,
    description: 'Vestido leve e florido, perfeito para dias de verão.',
    gender: 'feminino',
    category: 'roupas',
    brand: 'Summer Style',
    images: [
      'https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg',
      'https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress',
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    colors: ['Floral', 'Floral Branco', 'Floral Azul'],
    inStock: true,
    isNewArrival: false,
    featured: false
  },
  {
    id: '4',
    name: 'Tênis Casual',
    price: 149.99,
    description: 'Tênis casual confortável para o dia a dia.',
    gender: 'unisex',
    category: 'calçados',
    brand: 'ComfortStep',
    images: [
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg',
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress',
    ],
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: ['Branco', 'Preto', 'Cinza'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-07-30',
    featured: true
  }
];