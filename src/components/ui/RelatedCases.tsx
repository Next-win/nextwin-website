'use client';

import React from 'react';
import FeaturedCases from './FeaturedCases';

interface RelatedCasesProps {
  maxCases?: number;
  excludeCaseId?: string;
  bgColor?: string;
}

const RelatedCases: React.FC<RelatedCasesProps> = ({
  maxCases = 3,
  excludeCaseId,
  bgColor = "bg-gray-50"
}) => {
  return (
    <FeaturedCases
      title="Gerelateerde cases"
      subtitle="Meer projecten"
      description="Bekijk ook deze andere projecten"
      bgColor={bgColor}
      maxCases={maxCases}
      showHeader={false}
      excludeCaseId={excludeCaseId}
    />
  );
};

export default RelatedCases; 