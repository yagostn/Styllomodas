import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
    title: 'Coleção Verão 2025',
    subtitle: 'Descubra as últimas tendências da estação',
    cta: 'Comprar Agora',
    link: '/products?category=clothing',
  },
  {
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg',
    title: 'Acessórios Exclusivos',
    subtitle: 'Complete seu look com nossa seleção premium',
    cta: 'Explorar',
    link: '/products?category=accessories',
  },
  {
    image: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg',
    title: 'Lançamentos',
    subtitle: 'Seja o primeiro a usar nossos novos designs',
    cta: 'Ver Coleção',
    link: '/products?newArrivals=true',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[500px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div className="relative h-full flex items-center">
                <div className="container-custom text-white">
                  <div className="max-w-xl animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
                    <Link 
                      to={slide.link}
                      className="btn-primary"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;