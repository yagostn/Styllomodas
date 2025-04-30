import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Jaqueta jeans clássica',
    price: 129.99,
    description: 'Uma jaqueta jeans atemporal que nunca sai de moda. Perfeita para usar em qualquer estação.',
    gender: 'unisex',
    category: 'clothing',
    images: [
      'https://images.pexels.com/photos/1020052/pexels-photo-1020052.jpeg',
      'https://images.pexels.com/photos/1020052/pexels-photo-1020052.jpeg?auto=compress',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Light Blue', 'Dark Blue'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-08-01',
    featured: true
  },
  {
    id: '2',
    name: 'Bolsa tiracolo de couro',
    price: 89.99,
    description: 'Bolsa tiracolo de couro estilosa com vários compartimentos e alça ajustável.',
    gender: 'female',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress',
    ],
    colors: ['Black', 'Brown', 'Tan'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-07-15',
    featured: true
  },
  {
    id: '3',
    name: 'Vestido floral de verão',
    price: 59.99,
    description: 'Vestido floral leve e arejado, perfeito para dias de verão e ocasiões especiais.',
    gender: 'female',
    category: 'clothing',
    images: [
      'https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg',
      'https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Print', 'White Floral', 'Blue Floral'],
    inStock: true,
    isNewArrival: false,
    featured: false
  },
  {
    id: '4',
    name: 'Calças justas',
    price: 79.99,
    description: 'Calça chino slim fit, confortável e estilosa para um visual casual e refinado.',
    gender: 'male',
    category: 'clothing',
    images: [
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg',
      'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress',
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Beige', 'Navy', 'Olive', 'Black'],
    inStock: true,
    isNewArrival: false,
    featured: false
  },
  {
    id: '5',
    name: 'Relógio minimalista',
    price: 149.99,
    description: 'Relógio minimalista elegante com pulseira de couro e cristal de safira.',
    gender: 'unisex',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg',
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress',
    ],
    colors: ['Black/Silver', 'Brown/Gold'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-06-30',
    featured: true
  },
  {
    id: '6',
    name: 'Suéter de malha oversized',
    price: 69.99,
    description: 'Suéter de malha grande e aconchegante para os dias e noites frios.',
    gender: 'female',
    category: 'clothing',
    images: [
      'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg',
      'https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress',
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Cream', 'Gray', 'Dusty Pink'],
    inStock: false,
    isNewArrival: false,
    featured: false
  },
  {
    id: '7',
    name: 'Carteira de couro',
    price: 49.99,
    description: 'Carteira de couro legítimo com vários compartimentos para cartões e notas.',
    gender: 'male',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress',
    ],
    colors: ['Black', 'Brown'],
    inStock: true,
    isNewArrival: false,
    featured: false
  },
  {
    id: '8',
    name: 'Tênis esportivos',
    price: 119.99,
    description: 'Tênis esportivos confortáveis, perfeitos para treinos ou uso casual.',
    gender: 'unisex',
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg',
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress',
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White/Black', 'All Black', 'Gray/Blue'],
    inStock: true,
    isNewArrival: true,
    newUntil: '2025-07-30',
    featured: true
  }
];