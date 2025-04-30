import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  
  if (images.length === 0) {
    return <div className="bg-gray-200 h-full flex items-center justify-center">Nenhuma imagem disponível</div>;
  }
  
  return (
    <div className="space-y-4">
      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        navigation
        pagination={{ clickable: true }}
        zoom={{ maxRatio: 3 }}
        className="w-full rounded-lg overflow-hidden aspect-square"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img 
                src={image} 
                alt={`${alt} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {images.length > 1 && (
        <div className="hidden sm:grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <div 
              key={index}
              className="cursor-pointer border rounded-md overflow-hidden hover:border-primary-500 transition-colors"
            >
              <img 
                src={image} 
                alt={`${alt} - thumbnail ${index + 1}`}
                className="w-full h-24 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;