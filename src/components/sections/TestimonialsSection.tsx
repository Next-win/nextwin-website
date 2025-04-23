'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
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

// Animation variants for smoother transitions
const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Update windowWidth on resize
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

  // Calculate the total number of pages for desktop view
  const totalPages = Math.ceil(testimonials.length / 3);

  // Switch to next slide set (desktop)
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  // Automatically switch slides every 8 seconds (desktop)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        nextSlide();
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Single testimonial card component for reuse
  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <motion.div
      key={testimonial.id}
      variants={cardVariants}
      className="bg-white h-full rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md p-7 relative flex flex-col"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
        borderColor: "#E4E9F0"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo/Image */}
      <motion.div 
        className="w-16 h-12 relative mb-6 rounded-md overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.company}
          width={60}
          height={30}
          className="object-contain"
        />
      </motion.div>
      
      {/* Quote */}
      <div className="flex-1 mb-6 relative">
        <p className="text-gray-700 leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>
      
      {/* Author info */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <motion.div 
          className="flex mb-2"
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.1, x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {renderStars(testimonial.rating)}
        </motion.div>
        <h3 className="font-bold text-base">{testimonial.name}</h3>
        <p className="text-gray-600 text-sm">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </motion.div>
  );

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
        
        {/* Testimonials - Conditional rendering based on screen size */}
        <div className="relative">
          {isMobile ? (
            /* Mobile view - Swiper slider with 1 card per view */
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              loop={true}
              className="w-full testimonial-slider pb-12 overflow-hidden"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
              
              <style jsx global>{`
                .testimonial-slider .swiper-pagination-bullet {
                  background-color: rgb(var(--color-primary-600));
                  opacity: 0.6;
                }
                .testimonial-slider .swiper-pagination-bullet-active {
                  background-color: rgb(var(--color-primary-600));
                  opacity: 1;
                }
              `}</style>
            </Swiper>
          ) : (
            /* Desktop view - Grid layout with pagination */
            <>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {testimonials.slice(0 + (activeIndex * 3), 3 + (activeIndex * 3)).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation dots - Desktop only */}
              <div className="flex justify-center space-x-3 mt-10">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? "bg-primary-600 w-8 h-3" 
                        : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`View testimonials ${index * 3 + 1}-${Math.min((index + 1) * 3, testimonials.length)}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection; 