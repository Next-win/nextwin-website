import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimate, useMotionValue, useTransform } from 'framer-motion';

interface DeviceMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
  scrollHeight?: number; // Custom scroll height percentage (0-100)
  scrollMode?: 'js' | 'css' | 'hover' | 'none'; // Different scrolling animation modes
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ 
  imageSrc, 
  alt,
  className = '',
  scrollHeight = 70, // Default to 70% scroll height
  scrollMode = 'js' // Default to JS animation
}) => {
  const [scope, animate] = useAnimate();
  const [screenRef, animateScreen] = useAnimate();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Mouse movement tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);
  
  useEffect(() => {
    // Subtle automatic rotation animation for the device
    const animateSequence = async () => {
      await animate(scope.current, { 
        rotateY: [0, -1, 1, 0], 
        rotateX: [0, 0.5, -0.5, 0],
        translateZ: [0, 3, 0] 
      }, { 
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      });
    };
    
    // Webpage scrolling animation inside the screen
    const animateScrolling = async () => {
      // Only use JS scrolling if specified
      if (scrollMode !== 'js') return;
      
      // Get the image element
      const imageElement = screenRef.current?.querySelector('img');
      
      if (imageElement && imageLoaded) {
        // Set initial position to top of image
        await animateScreen(imageElement, { 
          y: 0, 
        }, { duration: 0 });
        
        // Get container dimensions
        const container = screenRef.current;
        const containerHeight = container?.offsetHeight || 0;
        const imageHeight = imageElement.naturalHeight;
        const imageWidth = imageElement.naturalWidth;
        const containerWidth = container?.offsetWidth || 0;
        
        // Calculate the height of the image when displayed at full width
        const aspectRatio = imageWidth / imageHeight;
        const displayHeight = containerWidth / aspectRatio;
        
        // Calculate how much we need to scroll
        // Maximum scroll distance is the actual image height minus container height
        const scrollDistance = displayHeight - containerHeight;
        
        if (scrollDistance > 0) {
          const scrollAmount = -scrollDistance * (scrollHeight / 100);
          
          // Start scroll sequence with a delay
          setTimeout(async () => {
            // Scroll down
            await animateScreen(imageElement, { 
              y: scrollAmount 
            }, { 
              duration: 12, 
              ease: "easeInOut" 
            });
            
            // Pause at bottom
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Scroll back to top
            await animateScreen(imageElement, { 
              y: 0 
            }, { 
              duration: 2, 
              ease: "easeInOut" 
            });
            
            // Pause at top before repeating
            await new Promise(resolve => setTimeout(resolve, 2500));
            
            // Loop the animation
            animateScrolling();
          }, 2000);
        }
      }
    };
    
    // Run both animations
    animateSequence();
    
    // Only start scrolling animation when image is loaded
    if (imageLoaded) {
      animateScrolling();
    }
  }, [animate, animateScreen, imageLoaded, scope, screenRef, scrollHeight, scrollMode]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Determine the correct CSS classes based on scrollMode
  const getImageClasses = () => {
    const baseClass = 'device-mockup-image';
    
    switch (scrollMode) {
      case 'css':
        return `${baseClass} auto-scroll`;
      case 'hover':
        return `${baseClass} hover:translate-y-[-60%] hover:duration-[15s] hover:ease-out`;
      default:
        return baseClass;
    }
  };

  return (
    <div 
      className={`relative w-full h-full ${scrollMode === 'hover' ? 'device-hover-animate' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div 
        ref={scope}
        className="w-full h-full relative perspective-1000"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          rotateX,
          rotateY,
        }}
      >
        {/* Device frame */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[24px] shadow-xl" 
          style={{ transform: 'translateZ(-5px)' }} 
        />
        
        {/* Screen bezel */}
        <div 
          className="absolute inset-[2px] bg-black rounded-[22px]" 
          style={{ transform: 'translateZ(-3px)' }} 
        />
        
        {/* Screen */}
        <div 
          ref={screenRef}
          className="absolute inset-[4px] overflow-hidden rounded-[20px] bg-white"
          style={{ transform: 'translateZ(0px)' }}
        >
          <div className="w-full h-full relative overflow-hidden">
            <div className="w-full absolute preserve-3d" style={{ height: 'auto', minHeight: '100%' }}>
              <Image
                src={imageSrc}
                alt={alt}
                width={1200}
                height={3000}
                priority
                style={{ 
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  display: 'block',
                  objectPosition: 'top',
                }}
                className={getImageClasses()}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </div>
          
          {/* Screen glare effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"
            initial={{ x: '-100%', y: '-100%' }}
            animate={{ x: '100%', y: '100%' }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatType: 'loop',
              ease: 'linear',
              repeatDelay: 3
            }}
          />
        </div>
        
        {/* Reflection */}
        <div 
          className="absolute inset-x-0 -bottom-12 h-20 bg-gradient-to-b from-black/20 to-transparent blur-md opacity-70 rounded-full mx-8" 
          style={{ transform: 'rotateX(70deg) translateZ(-10px)' }}
        />
        
        {/* Power button */}
        <div 
          className="absolute top-16 right-[1px] w-1 h-6 bg-gray-700 rounded-r-md"
          style={{ transform: 'translateZ(-2px)' }}
        />
        
        {/* Volume buttons */}
        <div 
          className="absolute top-32 right-[1px] w-1 h-10 bg-gray-700 rounded-r-md"
          style={{ transform: 'translateZ(-2px)' }}
        />
      </motion.div>
    </div>
  );
};

export default DeviceMockup; 