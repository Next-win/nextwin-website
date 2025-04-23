'use client';

import Section from '../ui/Section';
import { SectionTitle } from '../ui/Typography';
import CaseStudyGrid from '../ui/CaseStudyGrid';
import { featuredCaseStudies } from '@/data/caseStudiesData';

const CasesSection = () => {
  return (
    <Section id="cases" className="bg-gray-50 pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionTitle
            subtitle="Succesverhalen"
            title="Ontdek onze cases"
            align="center"
          />
          <p className="mt-6 text-lg text-gray-600">
            Bekijk een selectie van onze meest succesvolle projecten
          </p>
        </div>
        
        <CaseStudyGrid 
          cases={featuredCaseStudies} 
          viewAllUrl="/cases"
          viewAllText="Alle cases bekijken"
        />
      </div>
    </Section>
  );
};

export default CasesSection; 