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
  
    </div>
  );
};

export default HomePage;