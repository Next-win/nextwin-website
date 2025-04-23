import React from 'react';
import Section from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/Typography';
import CaseStudyGrid from '@/components/ui/CaseStudyGrid';
import { featuredCaseStudies } from '@/data/caseStudiesData';

interface HomePageFeaturedCasesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  bgColor?: string;
}

const HomePageFeaturedCases: React.FC<HomePageFeaturedCasesProps> = ({
  title = "Onze succesverhalen",
  subtitle = "Case studies",
  description = "Bekijk enkele van onze recente projecten en ontdek hoe we ondernemers zoals jij hebben geholpen.",
  bgColor = "bg-gray-50"
}) => {
  return (
    <Section className={`py-24 ${bgColor}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <CaseStudyGrid 
          cases={featuredCaseStudies} 
          viewAllUrl="/cases"
          viewAllText="Bekijk al onze projecten"
        />
      </div>
    </Section>
  );
};

export default HomePageFeaturedCases; 