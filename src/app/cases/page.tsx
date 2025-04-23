import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Succesverhalen | Next Win',
  description: 'Ontdek onze meest succesvolle klantprojecten en casestudies',
};

// Case study data
const cases = [
  {
    id: 'verhuursysteem-2nd-ride',
    title: 'Verhuursysteem 2nd Ride',
    description: 'Een compleet verhuurplatform voor fietsen en e-bikes dat reserveringen, betalingen en voorraad beheert.',
    color: 'bg-primary-700',
    category: 'webapplicatie',
    image: '/cases/verhuursysteem-2nd-ride/thumbnail.webp'
  },
  {
    id: 'oudhollandsspel',
    title: 'Oudhollandsspel Website',
    description: 'Een frisse en vrolijke website redesign voor een familiebedrijf met een rijke historie in traditionele Nederlandse spellen.',
    color: 'bg-primary-600',
    category: 'website',
    image: '/cases/oudhollandsspel/thumbnail.webp'
  }
];

export default function CasesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Succesverhalen van onze klanten
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Ontdek hoe we bedrijven helpen groeien met digitale oplossingen op maat
          </p>
        </div>
      </Section>
      
      <div className="py-8 md:py-16"></div>
      
      {/* Cases Section */}
      <Section className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Ontdek onze cases
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Bekijk een selectie van onze meest succesvolle projecten
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cases.map((caseItem) => (
              <div 
                key={caseItem.id}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white border border-gray-100"
              >
                <Link href={`/cases/${caseItem.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    {caseItem.image ? (
                      <Image 
                        src={caseItem.image}
                        alt={caseItem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`absolute inset-0 ${caseItem.color} transition-transform duration-500 group-hover:scale-110`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_50%)]"></div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white text-primary-700 text-sm px-3 py-1 rounded-full font-medium">
                      {caseItem.category}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                      {caseItem.title}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {caseItem.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
                      Bekijk case
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <div className="py-8 md:py-16"></div>
      
      {/* CTA Section */}
      <Section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Klaar voor jouw succesverhaal?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Wij helpen je graag bij het ontwikkelen van jouw digitale strategie
          </p>
          <Button 
            href="/contact" 
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white"
          >
            Neem contact op
          </Button>
        </div>
      </Section>
    </main>
  );
} 