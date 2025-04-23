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
  const [isVisible, setIsVisible] = useState(false);
  const [observerCreated, setObserverCreated] = useState(false);

  useEffect(() => {
    // Skip animation on browsers that support the prefers-reduced-motion media query
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Only create observer once to prevent duplicate triggers
    if (observerCreated || !elementRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Use requestAnimationFrame for smoother transitions
            requestAnimationFrame(() => {
              setIsVisible(true);
              // Immediately unobserve to prevent duplicate triggers
              if (elementRef.current) {
                observer.unobserve(elementRef.current);
              }
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
      setObserverCreated(true);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, isVisible, observerCreated]);

  return (
    <div 
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ 
        animationDelay: delay ? `${delay}s` : undefined,
        // Force hardware acceleration with transform
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
        // Force proper Safari rendering
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper; 