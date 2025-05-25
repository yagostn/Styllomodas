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
    image: '/img/capa1.jpg',	
    title: 'Coleção Verão 2025',
    subtitle: 'Descubra as últimas tendências da estação',
    cta: 'Comprar Agora',
    link: '/products?category=clothing',
  },
  {
    image: '/img/capa3.jpg',
    title: 'Acessórios Exclusivos',
    subtitle: 'Complete seu look com nossa seleção premium',
    cta: 'Explorar',
    link: '/products?category=accessories',
  },
  {
    image: '/img/capa2.jpg',
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
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                  <div className="max-w-xl animate-fade-in mt-32">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-12">{slide.subtitle}</p>
                    <Link 
                      to={slide.link}
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full mt-24"
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

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color:rgba(19, 19, 19, 0.73) !important;
          background: rgba(245, 241, 6, 0.93);
          width: 20px !important;
          height: 50px !important;
          border-radius: 50%;
          top: 60% !important;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px !important;
        }

        .swiper-pagination {
          bottom: 0rem !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;