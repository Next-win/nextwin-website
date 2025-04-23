"use client";

import React from 'react';
import { SectionTitle } from '@/components/ui/Typography';
import { websiteUsps } from '@/data/websiteUsps';

type WebsiteUsp = typeof websiteUsps[number];

interface UspsSectionProps {
  title: string;
  subtitle?: string;
  usps: WebsiteUsp[];
  className?: string;
}

export default function UspsSection({ title, subtitle, usps, className = '' }: UspsSectionProps) {
  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionTitle
            subtitle={subtitle}
            title={title}
            align="center"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {usps.map((usp) => (
            <div 
              key={usp.id}
              className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {usp.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{usp.title}</h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 