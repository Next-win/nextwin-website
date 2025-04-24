'use client';

import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { SectionTitle } from '../ui/Typography';
import CaseStudyGrid from '../ui/CaseStudyGrid';
import CaseStudySlider from '../ui/CaseStudySlider';
import { caseStudiesData } from '@/data/caseStudiesData';

interface FeaturedCasesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  bgColor?: string;
  maxCases?: number;
  viewAllUrl?: string;
  viewAllText?: string;
  id?: string;
  showHeader?: boolean;
  excludeCaseId?: string;
}

const FeaturedCases: React.FC<FeaturedCasesProps> = ({
  title = "Ontdek onze cases",
  subtitle = "Succesverhalen",
  description = "Bekijk een selectie van onze meest succesvolle projecten",
  bgColor = "bg-gray-50",
  maxCases = 3,
  viewAllUrl = "/cases",
  viewAllText = "Alle cases bekijken",
  id = "cases",
  showHeader = true,
  excludeCaseId
}) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Filter out the excluded case id first (if any)
  const filteredCaseStudies = excludeCaseId 
    ? caseStudiesData.filter(caseStudy => caseStudy.id !== excludeCaseId)
    : caseStudiesData;
  
  // Get only valid case studies that have a slug value
  const validCaseStudies = filteredCaseStudies
    .filter(caseStudy => caseStudy.slug && caseStudy.slug.trim() !== '')
    .slice(0, maxCases);
  
  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only render if we have valid case studies
  if (validCaseStudies.length === 0) {
    return null;
  }

  return (
    <Section id={id} className={`${bgColor} pt-8 pb-16 md:pt-12 md:pb-24`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle={subtitle}
              title={title}
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              {description}
            </p>
          </div>
        )}
        
        {isMobile ? (
          <CaseStudySlider 
            cases={validCaseStudies}
            viewAllUrl={viewAllUrl}
            viewAllText={viewAllText}
          />
        ) : (
          <CaseStudyGrid 
            cases={validCaseStudies} 
            viewAllUrl={viewAllUrl}
            viewAllText={viewAllText}
          />
        )}
      </div>
    </Section>
  );
};

export default FeaturedCases; 