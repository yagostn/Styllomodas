import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Denim Jacket',
    price: 129.99,
    description: 'A timeless denim jacket that never goes out of style. Perfect for layering in any season.',
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
    name: 'Leather Crossbody Bag',
    price: 89.99,
    description: 'Stylish leather crossbody bag with multiple compartments and adjustable strap.',
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
    name: 'Summer Floral Dress',
    price: 59.99,
    description: 'Light and airy floral dress, perfect for summer days and special occasions.',
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
    name: 'Slim Fit Chinos',
    price: 79.99,
    description: 'Comfortable and stylish slim fit chinos for a casual yet refined look.',
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
    name: 'Minimalist Watch',
    price: 149.99,
    description: 'Elegant minimalist watch with leather strap and sapphire crystal.',
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
    name: 'Oversized Knit Sweater',
    price: 69.99,
    description: 'Cozy oversized knit sweater for those chilly days and nights.',
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
    name: 'Leather Wallet',
    price: 49.99,
    description: 'Genuine leather wallet with multiple card slots and bill compartment.',
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
    name: 'Athletic Sneakers',
    price: 119.99,
    description: 'Comfortable athletic sneakers perfect for workouts or casual wear.',
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