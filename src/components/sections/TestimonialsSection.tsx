'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John van der Doe',
    company: 'Oud Hollands Spel',
    role: 'Eigenaar',
    text: 'Next Win heeft onze website volledig getransformeerd. Niet alleen ziet het er fantastisch uit, maar de conversies zijn met 75% gestegen sinds de lancering. Het team denkt echt mee en komt met oplossingen die werken.',
    image: '/images/trusted/oud_hollands_spel_logo_svg.svg',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Jansen',
    company: 'Baderie Barneveld',
    role: 'Marketing Manager',
    text: 'De samenwerking met Next Win is ontzettend prettig. Ze zijn proactief, denken mee en leveren kwaliteit. Onze nieuwe webshop presteert boven verwachting en de klanttevredenheid is significant gestegen.',
    image: '/images/trusted/Logo_baderie_barneveld.svg',
    rating: 5
  },
  {
    id: 3,
    name: 'Mark de Vries',
    company: 'Access Safety',
    role: 'Directeur',
    text: 'Van strategie tot uitvoering, Next Win heeft ons geholpen om online beter zichtbaar te worden. Hun kennis van SEO en online marketing heeft onze organische traffic met 95% verhoogd binnen 6 maanden.',
    image: '/images/trusted/access-safety.png',
    rating: 5
  },
  {
    id: 4,
    name: 'Lisa Bakker',
    company: '2nd Ride',
    role: 'E-commerce Manager',
    text: 'Next Win begrijpt precies wat we nodig hebben. Ze hebben niet alleen een prachtige webshop gebouwd, maar zorgen er ook voor dat deze goed converteert. De klantreis is geoptimaliseerd en dat zien we terug in de cijfers.',
    image: '/images/trusted/2nd-Ride-logo.jpg',
    rating: 5
  },
];

// Background decoration elements
const decorationElements = [
  { id: 1, x: '5%', y: '15%', size: 30, delay: 0, duration: 20 },
  { id: 2, x: '95%', y: '85%', size: 40, delay: 5, duration: 25 },
  { id: 3, x: '80%', y: '10%', size: 25, delay: 2, duration: 18 },
  { id: 4, x: '10%', y: '85%', size: 35, delay: 8, duration: 22 },
  { id: 5, x: '88%', y: '45%', size: 20, delay: 3, duration: 24 },
  { id: 6, x: '18%', y: '65%', size: 28, delay: 6, duration: 19 },
];

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Single testimonial card component for reuse
  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div
      className="bg-white h-full rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md p-7 relative flex flex-col mx-0.5"
    >
      {/* Logo/Image */}
      <div 
        className="w-16 h-12 relative mb-6 rounded-md overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center"
      >
        <Image
          src={testimonial.image}
          alt={testimonial.company}
          width={60}
          height={30}
          className="object-contain"
        />
      </div>
      
      {/* Quote */}
      <div className="flex-1 mb-6 relative">
        <p className="text-gray-700 leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>
      
      {/* Author info */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div 
          className="flex mb-2"
        >
          {renderStars(testimonial.rating)}
        </div>
        <h3 className="font-bold text-base">{testimonial.name}</h3>
        <p className="text-gray-600 text-sm">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      {/* Animated background elements */}
      {decorationElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10 bg-primary-500 z-0"
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Decorative shapes - removed yellow blob and kept only primary color shapes */}
      <motion.div 
        className="absolute right-[5%] bottom-[20%] w-40 h-40 bg-primary-100 rounded-full opacity-30 blur-xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute left-[10%] top-[30%] w-32 h-32 bg-primary-50 rounded-full opacity-30 blur-xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      {/* Floating quotes decoration */}
      <motion.div
        className="absolute left-[8%] top-[20%] text-5xl opacity-15 text-primary-500 z-0 font-serif"
        animate={{ 
          y: [0, -15, 0], 
          rotate: [-5, 5, -5],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        "
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[40%] text-7xl opacity-10 text-primary-500 z-0 font-serif"
        animate={{ 
          y: [0, -25, 0], 
          rotate: [5, -5, 5],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        "
      </motion.div>

      <motion.div
        className="absolute left-[25%] bottom-[15%] text-6xl opacity-10 text-primary-400 z-0 font-serif"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [-3, 3, -3],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ 
          duration: 13, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        "
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <ScrollAnimationWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">Klantervaringen</span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              animate={{ 
                textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 5px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Wat onze klanten zeggen
              </span>
            </motion.h2>
            <p className="text-xl text-gray-600">
              Echte resultaten voor echte ondernemers
            </p>
          </div>
        </ScrollAnimationWrapper>
        
        {/* Testimonials - Swiper slider for both mobile and desktop */}
        <div className="relative testimonials-container mx-auto max-w-7xl px-6 md:px-20">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            centerInsufficientSlides={true}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              el: '.testimonial-pagination',
              type: 'bullets',
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              }
            }}
            className="w-full testimonial-slider pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="px-1">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
            
            {/* Add empty slides to ensure we have at least 3 slides for looping */}
            {testimonials.length < 3 && testimonials.map((testimonial) => (
              <SwiperSlide key={`duplicate-${testimonial.id}`} className="px-1">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom pagination outside the swiper container */}
          <div className="testimonial-pagination flex justify-center items-center space-x-3 mt-8 h-4"></div>
          
          {/* Custom navigation buttons */}
          <div 
            className="testimonial-button-prev absolute top-1/2 -translate-y-1/2 -left-3 md:-left-10 z-10 cursor-pointer bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
            onClick={handlePrevClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </div>
          <div 
            className="testimonial-button-next absolute top-1/2 -translate-y-1/2 -right-3 md:-right-10 z-10 cursor-pointer bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
            onClick={handleNextClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </div>
          
          <style jsx global>{`
            /* Custom pagination bullets */
            .testimonial-pagination {
              position: relative;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 1.5rem;
              min-height: 16px;
            }
            
            .testimonial-pagination .swiper-pagination-bullet {
              background-color: #e2e8f0;
              opacity: 1;
              width: 8px;
              height: 8px;
              margin: 0 4px;
              transition: all 0.3s ease;
              display: inline-block;
              border-radius: 50%;
            }
            
            .testimonial-pagination .swiper-pagination-bullet-active {
              background-color: #0062ff;
              width: 24px;
              height: 8px;
              border-radius: 4px;
            }
            
            /* Position navigation buttons outside the slider */
            .testimonial-button-prev,
            .testimonial-button-next {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 10;
            }
            
            .testimonial-button-prev {
              left: -6px;
            }
            
            .testimonial-button-next {
              right: -6px;
            }
            
            @media (min-width: 768px) {
              .testimonial-button-prev {
                left: -14px;
              }
              
              .testimonial-button-next {
                right: -14px;
              }
            }
            
            @media (min-width: 1024px) {
              .testimonial-button-prev {
                left: -20px;
              }
              
              .testimonial-button-next {
                right: -20px;
              }
            }
            
            /* Hide default Swiper navigation */
            .testimonial-slider .swiper-button-next,
            .testimonial-slider .swiper-button-prev {
              display: none;
            }
            
            /* Make sure content is visible */
            .testimonial-slider .swiper-wrapper {
              padding: 8px 4px 8px 2px;
            }
            
            /* Ensure slide cards are fully visible */
            .testimonial-slider .swiper-slide {
              height: auto;
              display: flex;
              padding: 0 2px;
            }
            
            /* Fix for right border */
            .testimonial-slider {
              padding: 0 1px;
              margin: 0 -1px;
            }
          `}</style>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection; 