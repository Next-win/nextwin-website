"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading1, Heading2, Paragraph, SectionTitle } from '@/components/ui/Typography';
import DeviceMockup from '@/components/ui/DeviceMockup';
import MobileDeviceMockup from '@/components/ui/MobileDeviceMockup';
import CalendarTimeline from '@/components/ui/CalendarTimeline';
import FeaturedCases from '@/components/ui/FeaturedCases';
import { seoTimelineData } from '@/data/seoTimelineData';
import FaqAccordion, { FaqItem } from '@/components/ui/FaqAccordion';
import SearchResultsVisualization from '@/components/ui/SearchResultsVisualization';

export default function SEOServicePage() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Define FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Wat kost zoekmachine optimalisatie?",
      answer: (
        <div className="space-y-4">
          <p>
            SEO is maatwerk, en de kosten hangen af van jouw specifieke doelen en de concurrentie in jouw branche. We kijken naar factoren zoals:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Huidige status van je website</li>
            <li>Concurrentie voor jouw zoekwoorden</li>
            <li>Gewenste resultaten en tijdspad</li>
            <li>Omvang van je website</li>
          </ul>
          <p>Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken.</p>
        </div>
      ),
      plainTextAnswer: "SEO is maatwerk, en de kosten hangen af van jouw specifieke doelen en de concurrentie in jouw branche. We kijken naar factoren zoals: Huidige status van je website, Concurrentie voor jouw zoekwoorden, Gewenste resultaten en tijdspad, Omvang van je website. Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie met SEO?",
      answer: 
        "SEO is een langetermijnstrategie die doorgaans 3-6 maanden nodig heeft voor significante verbetering. De eerste technische verbeteringen kunnen sneller effect hebben, maar voor goede posities op competitieve zoekwoorden is tijd en consistente inzet nodig. We stellen realistische verwachtingen en maken duidelijke afspraken over tijdslijnen."
    },
    {
      question: "Garanderen jullie een eerste positie in Google?",
      answer: 
        "Nee, en wees voorzichtig met bureaus die dit wel beloven. Niemand kan een #1 positie in Google garanderen omdat zoekalgoritmes constant veranderen en vele factoren een rol spelen. Wat we wel beloven is een eerlijke, transparante aanpak gebaseerd op best practices die duurzame resultaten oplevert."
    },
    {
      question: "Wat is het verschil tussen SEO en SEA (Google Ads)?",
      answer: 
        "SEO (zoekmachine optimalisatie) richt zich op het organisch verbeteren van je zichtbaarheid in zoekmachines, waarbij je niet per klik betaalt. SEA (Search Engine Advertising) zoals Google Ads is betaald adverteren waarbij je per klik betaalt. SEO werkt langzamer maar biedt duurzamere resultaten, terwijl SEA direct resultaat oplevert maar stopt zodra je stopt met betalen."
    },
    {
      question: "Maken jullie ook content voor SEO?",
      answer: 
        "Ja, content is een essentieel onderdeel van onze SEO-diensten. We kunnen zowel ondersteunen bij het maken van een contentstrategie als bij het daadwerkelijk schrijven van SEO-geoptimaliseerde teksten die zowel bezoekers als zoekmachines aanspreken."
    },
    {
      question: "Hoe meten jullie de resultaten van SEO?",
      answer: 
        "We monitoren diverse metrics, waaronder posities voor belangrijke zoektermen, organisch verkeer, tijd op site, bouncepercentage, conversies en meer. Je krijgt toegang tot een duidelijk dashboard en ontvangt regelmatige rapportages waarin we de voortgang en resultaten inzichtelijk maken."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section 
        className="min-h-[90vh] flex items-center pt-16 overflow-hidden"
        id="hero"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text and CTA */}
          <div className="text-left max-w-lg">
            <div className="flex flex-wrap items-center mb-6 text-sm">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-primary-600">Zoekmachine Optimalisatie</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Zoekmachine optimalisatie met blijvend resultaat
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Wij bouwen aan duurzame organische zichtbaarheid die niet verdwijnt zodra je stopt met adverteren.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Technische SEO optimalisatie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Content strategie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Lokale SEO</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Link building</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                href="#conversation"
                className="bg-primary-500 hover:bg-primary-600 text-white"
                size="lg"
              >
                Laten we in gesprek gaan
              </Button>
              <Button 
                href="#approach"
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800/5"
                size="lg"
              >
                Ontdek onze aanpak
              </Button>
            </div>
          </div>

          {/* Search Results Visualization */}
          <div className="hidden lg:block relative">
            <SearchResultsVisualization 
              title="Organische groei gevisualiseerd"
              subtitle="Zoekmachine optimalisatie als duurzame investering"
              searchTerm="seo specialist gelderse vallei"
              beforeAfterResults={{
                before: {
                  yourResult: {
                    position: 8,
                    title: "Next Win | SEO en zoekmachine optimalisatie",
                    description: "Professionele zoekmachine optimalisatie (SEO) diensten van Next Win uit Otterlo. Verbeter je online zichtbaarheid en krijg meer klanten.",
                    url: "www.nextwin.nl"
                  },
                  competitors: [
                    {
                      position: 1,
                      title: "SEO Specialist Gelderse Vallei | Competitor 1",
                      description: "Verbeter uw vindbaarheid in Google met onze SEO expertise. Wij zijn de beste SEO specialist in de Gelderse Vallei.",
                      url: "www.competitor1.nl"
                    },
                    {
                      position: 2,
                      title: "Zoekmachine Optimalisatie Gelderse Vallei | Competitor 2",
                      description: "SEO diensten voor MKB bedrijven in de Gelderse Vallei. Betere rankings en meer bezoekers. Neem vandaag nog contact op.",
                      url: "www.competitor2.nl"
                    }
                  ]
                },
                after: {
                  yourResult: {
                    position: 1,
                    title: "Next Win | Zoekmachine Optimalisatie Specialist",
                    description: "SEO die écht resultaat levert. Wij zorgen voor meer zichtbaarheid, meer organische bezoekers en meer conversies. Bekijk onze SEO cases.",
                    url: "www.nextwin.nl"
                  },
                  competitors: [
                    {
                      position: 2,
                      title: "SEO Specialist Gelderse Vallei | Competitor 1",
                      description: "Verbeter uw vindbaarheid in Google met onze SEO expertise. Wij zijn de beste SEO specialist in de Gelderse Vallei.",
                      url: "www.competitor1.nl"
                    },
                    {
                      position: 3,
                      title: "Zoekmachine Optimalisatie Gelderse Vallei | Competitor 2",
                      description: "SEO diensten voor MKB bedrijven in de Gelderse Vallei. Betere rankings en meer bezoekers. Neem vandaag nog contact op.",
                      url: "www.competitor2.nl"
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section className="py-24 bg-gray-50" id="approach">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Resultaatgericht"
              title="Onze SEO aanpak"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Wij geloven in een pragmatische en duurzame aanpak voor SEO. Geen valse beloftes of korte-termijn trucs, maar een strategische en transparante werkwijze.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Praktisch en actiegericht</h3>
              <p className="text-gray-600 mb-8">
                Geen eindeloze rapporten of analyses zonder vervolg. In het begin ligt de focus op technische optimalisatie en een sterke basis. Daarna kijken we naar content, zoekwoorden, concurrentie en backlinks.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Technische basis eerst</h4>
                    <p className="text-gray-600">
                      We beginnen altijd met het optimaliseren van de technische aspecten van je website. Een sterke basis is cruciaal voor verdere SEO-groei.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Content die aanspreekt</h4>
                    <p className="text-gray-600">
                      We focussen op content die zowel zoekmachines als gebruikers aanspreekt - relevant, waardevol en gericht op conversie.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Meetbare resultaten</h4>
                    <p className="text-gray-600">
                      We meten en rapporteren duidelijk de voortgang en impact van onze SEO-werkzaamheden, zodat je precies weet wat je investering oplevert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Persoonlijk en eerlijk</h3>
              <p className="text-gray-600 mb-8">
                Geen valse beloftes over 'plek 1 in Google'. We zijn transparant over het proces en realistisch in verwachtingen. SEO is een duurzaam traject.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Strategisch denken vanuit de klant</h4>
                    <p className="text-gray-600">
                      We denken vanuit de zoekintentie en behoeften van jouw potentiële klanten, niet vanuit wat Google wil zien.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Duurzame langetermijnstrategie</h4>
                    <p className="text-gray-600">
                      SEO is geen snelle oplossing. We bouwen aan iets dat blijft werken, ook als je op termijn stopt met advertenties.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-5">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Eerlijke verwachtingen</h4>
                    <p className="text-gray-600">
                      We zijn realistisch over wat mogelijk is en wanneer je resultaten kunt verwachten. Geen loze beloftes, maar eerlijke communicatie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">SEO vs. SEA: Het grote verschil</h3>
                  <p className="text-gray-600 mb-4">
                    Terwijl SEA (Google Ads) direct verkeer kan genereren maar stopt zodra je stopt met betalen, blijft SEO doorwerken op de lange termijn.
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Duurzaam</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Kostenefficiënt</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">Betrouwbaar</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-2">SEA (Google Ads)</span>
                      <h4 className="text-lg font-semibold text-gray-800">Betaald per klik</h4>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Stopt direct als je budget op is</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Steeds duurdere cost-per-click</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Geen opbouw van eigen digitaal bezit</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Direct resultaat mogelijk</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-2">SEO (Organisch)</span>
                      <h4 className="text-lg font-semibold text-gray-800">Langetermijninvestering</h4>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Blijft doorwerken, ook zonder budget</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Kostenefficiënt op langere termijn</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Bouwt aan autoriteit en vertrouwen</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Resultaten komen geleidelijk, niet direct</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-24 bg-white" id="services">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Onze diensten"
              title="Wat wij kunnen doen voor jouw vindbaarheid"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              We bieden verschillende SEO-diensten aan, die we altijd afstemmen op jouw specifieke behoeften en doelstellingen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technische SEO</h3>
              <p className="text-gray-600 mb-6">
                We optimaliseren de technische aspecten van je website zodat zoekmachines je content goed kunnen crawlen, indexeren en begrijpen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Website snelheid optimalisatie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Mobile-friendly optimalisatie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Schema markup implementatie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">URL-structuur optimalisatie</span>
                </li>
              </ul>
              <Button 
                href="#conversation" 
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                Lees meer
              </Button>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Content optimalisatie</h3>
              <p className="text-gray-600 mb-6">
                We ontwikkelen en optimaliseren content die zowel zoekmachines als bezoekers aanspreekt en converteert.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Zoekwoordenonderzoek</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">SEO-teksten schrijven</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Meta titels en descriptions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Contentkalender en -strategie</span>
                </li>
              </ul>
              <Button 
                href="#conversation" 
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                Lees meer
              </Button>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Linkbuilding</h3>
              <p className="text-gray-600 mb-6">
                We helpen je aan kwalitatieve backlinks die jouw autoriteit versterken en posities verbeteren.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Content outreach</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Branchespecifieke linkbuilding</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Analyse van linkprofiel</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Concurrentie-analyse</span>
                </li>
              </ul>
              <Button 
                href="#conversation" 
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                Lees meer
              </Button>
            </div>
            
            {/* Service Card 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Lokale SEO</h3>
              <p className="text-gray-600 mb-6">
                Voor lokale bedrijven optimaliseren we je vindbaarheid in je regio voor relevante zoekopdrachten.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Google Business Profile optimalisatie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Lokale citation building</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Lokale zoekwoord strategie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Review-strategie</span>
                </li>
              </ul>
              <Button 
                href="#conversation" 
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                Lees meer
              </Button>
            </div>
            
            {/* Service Card 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">SEO monitoring & rapportage</h3>
              <p className="text-gray-600 mb-6">
                We monitoren je rankings en prestaties en stellen regelmatig rapportages op zodat je weet wat je SEO oplevert.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Dashboard setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Positiemonitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Maandelijkse rapportages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Persoonlijke toelichting</span>
                </li>
              </ul>
              <Button 
                href="#conversation" 
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                Lees meer
              </Button>
            </div>
            
            {/* Service Card 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">SEO training & advies</h3>
              <p className="text-gray-600 mb-6">
                We delen onze kennis en helpen jouw team de basisprincipes van SEO te begrijpen en toe te passen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Op maat gemaakte workshops</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">SEO-advies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Kennisoverdracht</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Contentrichtlijnen</span>
                </li>
              </ul>
              <Button 
                href="#conversation" 
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                Lees meer
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Benieuwd naar wat SEO voor jouw bedrijf kan betekenen? Vraag vrijblijvend een strategiegesprek aan.
            </p>
            <Button 
              href="#conversation"
              className="bg-primary-500 hover:bg-primary-600 text-white"
              size="lg"
            >
              Plan een strategiegesprek
            </Button>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="py-24 bg-gray-50" id="timeline">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Zo werken we"
              title="Jouw SEO-traject in stappen"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Wij geloven in een gestructureerd proces. Zo weet je precies wat je kunt verwachten en wanneer. Hieronder zie je onze beproefde aanpak voor SEO.
            </p>
          </div>

          <CalendarTimeline phases={seoTimelineData.phases} footer={seoTimelineData.footer} />
          
        </div>
      </Section>

      {/* Our Guarantees */}
      <Section className="py-24 bg-white" id="guarantees">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Zonder zorgen"
              title="Onze beloftes aan jou"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Wij geloven in onze aanpak en staan achter de kwaliteit van ons werk. Daarom durven we deze garanties te geven.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Vrijblijvende SEO-audit</h3>
              <p className="text-gray-600 mb-4">
                We beginnen met een vrijblijvende SEO-audit van je website. Je krijgt direct inzicht in de verbeterpunten en kansen, zonder verplichtingen.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professionele analyse zonder kosten</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Concrete verbeterpunten voor je website</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Geen verplichtingen, geen verkooppraatjes</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "De gratis audit gaf me al zoveel waardevolle inzichten dat ik meteen wist dat ik met de juiste partner in gesprek was." 
                  <span className="block mt-1 font-medium">— Erik, webshop-eigenaar</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Volledige transparantie</h3>
              <p className="text-gray-600 mb-4">
                We bieden volledige inzichtelijkheid in onze werkzaamheden en resultaten. Je ontvangt heldere rapportages en duidelijke uitleg, zodat je precies weet wat je investering oplevert.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gedetailleerde maandelijkse rapportages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Persoonlijke toelichting van resultaten</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Geen verborgen kosten of verrassingen</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Voor het eerst had ik écht inzicht in waar mijn SEO-budget naartoe ging en welke resultaten het opleverde. Die duidelijkheid is goud waard." 
                  <span className="block mt-1 font-medium">— Lisa, ondernemer</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Geen lange contracten</h3>
              <p className="text-gray-600 mb-4">
                We werken op basis van maandelijkse overeenkomsten zonder lange contracten. Zo blijven wij gemotiveerd om elke maand de beste resultaten te leveren.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maandelijks opzegbaar zonder boetes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We verdienen je vertrouwen elke maand opnieuw</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexibel inspelen op veranderende behoeften</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Geen lange contracten betekent dat ze constant hun toegevoegde waarde moeten bewijzen. Dat doen ze elke maand opnieuw!" 
                  <span className="block mt-1 font-medium">— Thomas, MKB-ondernemer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Section - Using FeaturedCases component */}
      <FeaturedCases 
        title="SEO-resultaten die spreken"
        subtitle="Succesverhalen"
        description="Bekijk enkele van onze recente SEO-projecten en ontdek hoe we ondernemers zoals jij hebben geholpen."
        bgColor="bg-gray-50"
        maxCases={3}
        showHeader={true}
      />

      {/* FAQ Section */}
      <Section className="py-24 bg-white" id="faq">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              subtitle="Veelgestelde vragen"
              title="Alles wat je wilt weten over SEO"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              We begrijpen dat je vragen hebt. Hier zijn enkele antwoorden op de meest gestelde vragen. 
              Mis je iets? We horen graag van je!
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} />
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Nog andere vragen? We horen graag van je!</p>
              <Button href="#conversation" className="bg-primary-500 hover:bg-primary-600 text-white">
                Stel je vraag
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Values Section */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Hoe we werken"
              title="Onze SEO benadering"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Effectieve SEO is meer dan alleen zoekwoorden en techniek. Dit zijn de principes die ons leiden bij elk SEO-project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse"></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Data-gedreven</h3>
              <p className="text-gray-600 mb-4">
                We baseren alle beslissingen op data en metingen, niet op aannames. Zo weten we exact wat werkt en wat niet, en kunnen we je SEO-strategie continu verbeteren.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Conversiegericht</h3>
              <p className="text-gray-600 mb-4">
                Meer verkeer is mooi, maar uiteindelijk gaat het om conversies en verkoop. We optimaliseren niet alleen voor zoekmachines, maar vooral voor resultaten.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Duurzaam</h3>
              <p className="text-gray-600 mb-4">
                We focussen op duurzame, ethische SEO-praktijken die op de lange termijn blijven werken, ook als algoritmes veranderen. Geen trucs, maar echte waarde.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white" id="conversation">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              subtitle="Klaar om te beginnen?"
              title="Laten we samen bouwen aan duurzame vindbaarheid"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600 mb-8">
              Plan een vrijblijvend strategiegesprek in waarin we je huidige situatie bespreken en je inzicht geven in de mogelijkheden voor jouw website.
            </p>
            
            <Button 
              href="https://calendly.com/nextwin/kennismaking"
              className="bg-primary-500 hover:bg-primary-600 text-white"
              size="lg"
              isExternal={true}
            >
              Plan direct een gesprek in
            </Button>
            
            <p className="mt-6 text-sm text-gray-500">
              Of stuur een e-mail naar <a href="mailto:info@nextwin.nl" className="text-primary-600 hover:underline">info@nextwin.nl</a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
} 