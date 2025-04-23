"use client";

import React, { useEffect, useRef, ReactNode, useState } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  // Set initial state to visible if on server-side to prevent hydration issues
  const [isVisible, setIsVisible] = useState(typeof window === 'undefined');
  const hasBeenObserved = useRef(false);

  useEffect(() => {
    // If already visible, no need to observe
    if (isVisible) return;

    // Skip animation on browsers that support the prefers-reduced-motion media query
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // If element has already been observed, don't create another observer
    if (hasBeenObserved.current) return;

    // Create a new observer
    let observer: IntersectionObserver;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Mark as observed to prevent duplicate observers
              hasBeenObserved.current = true;
              
              // Make visible immediately - no delay for browser performance
              setIsVisible(true);
              
              // Unobserve after triggering
              if (elementRef.current) {
                observer.unobserve(elementRef.current);
              }
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      // Observe the element
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    } catch (error) {
      // Fallback if IntersectionObserver fails or is not supported
      console.warn('ScrollAnimationWrapper: IntersectionObserver failed, using fallback', error);
      setIsVisible(true);
    }

    // Clean up the observer on component unmount
    return () => {
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, isVisible]);

  // Initial visibility class for immediate mount cases (SSR)
  const visibilityClass = isVisible ? 'animate-on-scroll-visible' : '';
  
  return (
    <div 
      ref={elementRef}
      className={`animate-on-scroll ${visibilityClass} ${className}`}
      style={{ 
        animationDelay: delay ? `${delay}s` : undefined,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        // Force GPU acceleration for performance
        willChange: 'transform, opacity',
        // Improve Safari rendering
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper; 