import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Centralized trusted logos array - UPDATE HERE TO ADD NEW LOGOS
export const trustedLogos = [
  {
    src: '/images/trusted/2nd-Ride-logo.jpg',
    alt: '2nd Ride Logo',
    width: 120,
    company: '2nd Ride'
  },
  {
    src: '/images/trusted/Flexplek-Logo-R-3.svg',
    alt: 'Flexplek Logo',
    width: 110,
    company: 'Flexplek'
  },
  {
    src: '/images/trusted/Logo_baderie_barneveld.svg',
    alt: 'Baderie Barneveld Logo',
    width: 100,
    company: 'Baderie Barneveld'
  },
  {
    src: '/images/trusted/Logo_SantosBoats_Navy-1.png',
    alt: 'Santos Boats Logo',
    width: 90,
    company: 'Santos Boats'
  },
  {
    src: '/images/trusted/access-safety.png',
    alt: 'Access Safety Logo',
    width: 100,
    company: 'Access Safety'
  },
  {
    src: '/images/trusted/oud_hollands_spel_logo_svg.svg',
    alt: 'Oud Hollands Spel Logo',
    width: 120,
    company: 'Oud Hollands Spel'
  },
  {
    src: '/images/trusted/Timberlab_logo_Kilamanjaro_CYMK.svg',
    alt: 'Timberlab Logo',
    width: 130,
    company: 'Timberlab'
  }
];

interface TrustedLogosSliderProps {
  variant?: 'slider' | 'grid';
  showTitle?: boolean;
  title?: string;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplayDelay?: number;
  grayscale?: boolean;
  showLink?: boolean;
  linkUrl?: string;
  linkText?: string;
}

const TrustedLogosSlider: React.FC<TrustedLogosSliderProps> = ({
  variant = 'slider',
  showTitle = true,
  title = 'Vertrouwd door toonaangevende bedrijven',
  className = '',
  slidesPerView = 2.3,
  spaceBetween = 20,
  autoplayDelay = 2500,
  grayscale = true,
  showLink = false,
  linkUrl = '/cases',
  linkText = 'Bekijk onze cases'
}) => {

  // Select 5 specific logos for the slider including Timberlab
  const displayLogos = [
    trustedLogos[0], // 2nd Ride
    trustedLogos[1], // Flexplek
    trustedLogos[2], // Baderie Barneveld
    trustedLogos[4], // Access Safety
    trustedLogos[6]  // Timberlab (was index 7, now 6 after removing RRReis)
  ];

  const logoClasses = `object-contain max-h-full transition-all duration-300 ${
    grayscale ? 'grayscale hover:grayscale-0 opacity-75 hover:opacity-100' : ''
  }`;

  if (variant === 'grid') {
    return (
      <div className={`${className}`}>
        {showTitle && (
          <p className="text-sm text-gray-500 mb-5 text-center font-medium">
            {title}
          </p>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {trustedLogos.map((logo, index) => (
            <div key={index} className="w-32 h-16 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={35}
                className={logoClasses}
              />
            </div>
          ))}
        </div>
        
        {showLink && (
          <div className="mt-8 text-center">
            <a href={linkUrl} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <span>{linkText}</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {showTitle && (
        <p className="text-sm text-gray-500 mb-5 text-center font-medium">
          {title}
        </p>
      )}
      
      {/* Pure CSS sliding carousel - centered and narrower */}
      <div className="flex justify-center">
        <div className="trusted-logos-carousel-wrapper overflow-hidden relative max-w-3xl w-full">
          <div className="trusted-logos-track flex items-center gap-8 animate-slide">
            {/* Create multiple copies for seamless infinite scroll */}
            {[...displayLogos, ...displayLogos, ...displayLogos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-10 flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={35}
                  className={logoClasses}
                  style={{ maxWidth: `${logo.width}px`, height: 'auto' }}
                />
              </div>
            ))}
          </div>
          
          {/* Fade overlays with stronger gradients */}
          <div className="absolute top-0 left-0 w-24 h-full z-20 pointer-events-none" 
               style={{
                 background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0) 100%)'
               }}></div>
          <div className="absolute top-0 right-0 w-24 h-full z-20 pointer-events-none"
               style={{
                 background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0) 100%)'
               }}></div>
        </div>
      </div>
      
      <style jsx>{`
        .trusted-logos-carousel-wrapper {
          position: relative;
        }
        
        .trusted-logos-track {
          animation: slideLogos 20s linear infinite;
          will-change: transform;
        }
        
        .trusted-logos-carousel-wrapper:hover .trusted-logos-track {
          animation-play-state: paused;
        }
        
        @keyframes slideLogos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        
        .trusted-logos-track > div {
          transition: transform 0.3s ease;
        }
        
        .trusted-logos-carousel-wrapper:hover .trusted-logos-track > div:hover {
          transform: scale(1.05);
        }
        
        /* Additional fade overlay using CSS pseudo-elements as backup */
        .trusted-logos-carousel-wrapper::before,
        .trusted-logos-carousel-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 96px;
          height: 100%;
          z-index: 15;
          pointer-events: none;
        }
        
        .trusted-logos-carousel-wrapper::before {
          left: 0;
          background: linear-gradient(to right, white 0%, rgba(255,255,255,0.8) 40%, transparent 100%);
        }
        
        .trusted-logos-carousel-wrapper::after {
          right: 0;
          background: linear-gradient(to left, white 0%, rgba(255,255,255,0.8) 40%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default TrustedLogosSlider; 