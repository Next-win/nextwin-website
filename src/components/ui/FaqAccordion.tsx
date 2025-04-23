"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
  plainTextAnswer?: string; // Optional plain text version for structured data
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
  structuredData?: boolean;
}

export default function FaqAccordion({ items, className = '', structuredData = true }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate structured data for FAQs
  const generateStructuredData = () => {
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === 'string' 
            ? item.answer 
            : item.plainTextAnswer || 'See our website for detailed answer.' // Use plainTextAnswer if available
        }
      }))
    };

    return JSON.stringify(faqData);
  };

  return (
    <>
      {structuredData && (
        <Script id="faq-structured-data" type="application/ld+json">
          {generateStructuredData()}
        </Script>
      )}
      
      <div className={`space-y-4 ${className}`}>
        {items.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900" itemProp="name">{item.question}</h3>
              <div className="flex-shrink-0 ml-4">
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary-600"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                    />
                  </svg>
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4" itemProp="text">
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
} 