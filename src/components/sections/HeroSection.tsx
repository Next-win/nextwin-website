'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import Image from 'next/image';
import Section from '../ui/Section';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Trusted logos array
const trustedLogos = [
  {
    src: '/images/trusted/2nd-Ride-logo.jpg',
    alt: '2nd Ride Logo',
    width: 120
  },
  {
    src: '/images/trusted/Flexplek-Logo-R-3.svg',
    alt: 'Flexplek Logo',
    width: 110
  },
  {
    src: '/images/trusted/Logo_baderie_barneveld.svg',
    alt: 'Baderie Barneveld Logo',
    width: 100
  },
  {
    src: '/images/trusted/Logo_SantosBoats_Navy-1.png',
    alt: 'RRReis Logo',
    width: 90
  },
  {
    src: '/images/trusted/access-safety.png',
    alt: 'Access Safety Logo',
    width: 100
  },
  {
    src: '/images/trusted/oud_hollands_spel_logo_svg.svg',
    alt: 'Oud Hollands Spel Logo',
    width: 120
  }
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // State to track window width for responsive behavior
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isMobile, setIsMobile] = useState(false);

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section 
      noContainer
      id="hero"
      className="min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-lg"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Klaar voor de volgende stap?
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Wij creëren <span className="text-green-500 font-semibold">winstgevende</span> digitale oplossingen die jouw bedrijf naar de <span className="text-primary-600 font-semibold">volgende stap</span> brengen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="whitespace-nowrap bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-sm flex-1"
                href="/contact"
              >
                Gratis adviesgesprek
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="whitespace-nowrap border-primary-600 text-primary-600 hover:bg-primary-50 flex-1"
                href="/services"
              >
                Ik wil online groeien
              </Button>
            </div>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-gray-800">Jouw partner voor digitale groei</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm">Websites & Webshops</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm">Digitale Applicaties</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm">CRM & Salesforce</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm">Online Marketing</span>
                </div>
                <div className="col-span-full mt-1">
                  <a href="/services" className="text-primary-600 text-sm font-medium flex items-center hover:underline">
                    Bekijk al onze diensten
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Featured Image (visible only on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[580px] w-full overflow-hidden rounded-3xl bg-white shadow-xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80"></div>
              
              {/* Device mockups */}
              <div className="absolute inset-0">
                <Image
                  src="/images/oudhollandsspel-live-mockup.png"
                  alt="Next Win Platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={true}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="drop-shadow-xl"
                />
              </div>
              
              {/* Stats card */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-5 max-w-[280px] z-10 border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm font-medium">95% Succespercentage</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "Next Win heeft onze online verkoop met 95% verhoogd binnen 6 maanden."
                </p>
                <div className="flex items-center">
                  <Image 
                    src="/images/trusted/access-safety.png"
                    alt="John Doe"
                    width={28} 
                    height={28}
                    className="rounded-full object-cover border border-gray-100"
                  />
                  <div className="ml-2">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-gray-500">CEO, Example Inc.</div>
                  </div>
                </div>
              </div>
              
              {/* Results card */}
              <div className="absolute bottom-8 left-6 bg-primary-600 rounded-xl shadow-lg p-5 text-white max-w-[200px] z-10">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm mb-4">Tevreden klanten</div>
                <div className="flex -space-x-3">
                  <div className="w-7 h-7 rounded-full bg-primary-400 border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-primary-300 border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-primary-200 border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-xs font-medium text-primary-700">
                    +46
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Trusted brands section */}
      <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm border-t border-gray-100 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-sm text-gray-500 mb-5 text-center font-medium">
            Vertrouwd door toonaangevende bedrijven
          </p>
          
          {/* Mobile view - slider */}
          {isMobile ? (
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2.3}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              loop={true}
              className="w-full overflow-hidden"
            >
              {trustedLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-10">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={35}
                      className="object-contain max-h-full grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* Desktop view - regular flex layout */
            <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4">
              {trustedLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-10">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={35}
                    className="object-contain max-h-full grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default HeroSection; 