// Just adding a comment to the file to indicate that dynamic case routing will be added later
// We removed the [slug] dynamic routing for now due to TypeScript issues with Next.js 15

import React from 'react';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import FeaturedCases from '@/components/ui/FeaturedCases';
import { Heading1, Paragraph } from '@/components/ui/Typography';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Case Studies & Succesverhalen | Portfolio | Next Win',
  description: 'Bekijk onze succesverhalen: +157% omzet, 80% tijdsbesparing, +125% bezoekers. Webshops, websites en web applicaties die echt resultaat leveren.',
  keywords: [
    'case studies',
    'succesverhalen',
    'portfolio',
    'klant resultaten',
    'webshop succes',
    'website portfolio',
    'digital agency portfolio',
    'klant reviews',
    'project resultaten',
    'Next Win cases'
  ],
  openGraph: {
    title: 'Case Studies & Succesverhalen | Portfolio | Next Win',
    description: 'Bekijk onze succesverhalen: +157% omzet, 80% tijdsbesparing, +125% bezoekers. Webshops, websites en web applicaties die echt resultaat leveren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/cases',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/portfolio-overview.png',
        width: 1200,
        height: 630,
        alt: 'Next Win portfolio en case studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Succesverhalen | Portfolio | Next Win',
    description: 'Bekijk onze succesverhalen: +157% omzet, 80% tijdsbesparing, +125% bezoekers.',
    images: ['/images/portfolio-overview.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/cases',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CasesPage() {
  return (
    <main>
      {/* Header with increased top spacing */}
      <Section className="pt-36 pb-10 md:pt-44 md:pb-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block text-primary-600 font-semibold mb-3">Onze portfolio</span>
          <Heading1 gradient className="mb-5 text-3xl md:text-4xl mx-auto">
            Succesverhalen van onze klanten
          </Heading1>
        </div>
      </Section>
      
      {/* Cases Section - Breathing room above and below */}
      <Section className="py-4">
        <FeaturedCases 
          bgColor="bg-white"
          maxCases={6}
          showHeader={false}
          id="case-studies"
        />
      </Section>
      
      {/* Stats Section - Better vertical rhythm */}
      <Section className="py-16 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">30+</p>
              <p className="text-gray-700 mt-2">Tevreden klanten</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">75%</p>
              <p className="text-gray-700 mt-2">Meer conversie</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">100%</p>
              <p className="text-gray-700 mt-2">Maatwerk</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">24/7</p>
              <p className="text-gray-700 mt-2">Support beschikbaar</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <Section className="py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Klaar voor jouw digitale transformatie?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Neem vandaag nog contact met ons op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                href="/contact" 
                size="lg"
                variant="white"
              >
                Maak een afspraak
              </Button>
              <Button 
                href="/contact" 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Neem direct contact op
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
} 