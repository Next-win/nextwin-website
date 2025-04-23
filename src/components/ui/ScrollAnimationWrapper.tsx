"use client";

import React, { useEffect, useRef, ReactNode } from 'react';

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

  useEffect(() => {
    // Skip animation on browsers that support the prefers-reduced-motion media query
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (elementRef.current) {
        elementRef.current.classList.add('is-visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Use requestAnimationFrame for smoother transitions
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              if (elementRef.current) {
                elementRef.current.classList.add('is-visible');
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
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div 
      ref={elementRef}
      className={`animate-on-scroll ${className}`}
      style={{ animationDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper; 