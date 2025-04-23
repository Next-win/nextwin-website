"use client";

import React from 'react';
import WebsiteMockupDemo from '@/components/sections/WebsiteMockupDemo';

export default function MockupDemoPage() {
  return (
    <main className="min-h-screen">
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Device Mockup Demo</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This demo showcases different ways to animate website screenshots within device mockups
          </p>
        </div>
      </div>
      
      <WebsiteMockupDemo />
    </main>
  );
} 