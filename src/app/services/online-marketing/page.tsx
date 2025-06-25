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
import { marketingTimelineData } from '@/data/marketingTimelineData';
import FaqAccordion, { FaqItem } from '@/components/ui/FaqAccordion';
import SearchResultsVisualization from '@/components/ui/SearchResultsVisualization';

export default function OnlineMarketingServicePage() {
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

  // Add useEffect at the top of the component
  React.useEffect(() => {
    // Function to trigger "Na" animation after longer delay
    const triggerAnimation = () => {
      // First make the intro message visible with a nice entrance animation
      const introMessage = document.getElementById('animation-intro-message');
      const introContent = document.getElementById('animation-intro-content');
      
      if (introMessage && introContent) {
        // Fade in the background
        introMessage.style.opacity = '1';
        
        // After a slight delay, animate in the content
        setTimeout(() => {
          introContent.style.opacity = '1';
          introContent.style.transform = 'translateY(0)';
          
          // Then animate the position indicators after the content appears
          setTimeout(() => {
            const positionBefore = document.getElementById('position-before');
            const positionAfter = document.getElementById('position-after');
            
            if (positionBefore && positionAfter) {
              // Highlight the "before" position first
              positionBefore.style.transform = 'scale(1.2)';
              positionBefore.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.3)';
              
              // Then after a delay, highlight the "after" position
              setTimeout(() => {
                positionBefore.style.transform = 'scale(1)';
                positionBefore.style.boxShadow = 'none';
                
                positionAfter.style.transform = 'scale(1.2)';
                positionAfter.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.3)';
                
                // Reset after animation
                setTimeout(() => {
                  positionAfter.style.transform = 'scale(1)';
                  positionAfter.style.boxShadow = 'none';
                }, 1000);
              }, 1000);
            }
          }, 800);
        }, 300);
      }
      
      // Then fade out the intro message after giving users time to read it
      setTimeout(() => {
        if (introMessage) {
          introMessage.style.opacity = '0';
        }
        
        // Then trigger the animation after message fades out
        setTimeout(() => {
          const toggleAfterButton = document.getElementById('toggle-after');
          if (toggleAfterButton) {
            toggleAfterButton.click();
          }
        }, 1000); // Delay after fade-out begins
      }, 4000); // Show intro message for 4 seconds before starting the fade-out
    };

    // Set up Intersection Observer to detect when results container is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.unobserve(entry.target); // Only trigger once
          }
        });
      },
      {
        root: null, // Use viewport as root
        threshold: 0.3, // Trigger when 30% of element is visible
      }
    );

    // Start observing the results container
    const resultsContainer = document.getElementById('results-container');
    if (resultsContainer) {
      observer.observe(resultsContainer);
    }

    // Clean up observer on component unmount
    return () => {
      if (resultsContainer) {
        observer.unobserve(resultsContainer);
      }
    };
  }, []); // Empty dependency array means this runs once after component mounts

  // Define FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Wat kost online marketing?",
      answer: (
        <div className="space-y-4">
          <p>
            Online marketing is maatwerk, en de kosten hangen af van jouw specifieke doelen en de gekozen strategie. We kijken naar factoren zoals:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gekozen kanalen (SEO, SEA, Social Media)</li>
            <li>Concurrentie in jouw markt</li>
            <li>Gewenste resultaten en tijdspad</li>
            <li>Budget voor advertenties</li>
          </ul>
          <p>Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken.</p>
        </div>
      ),
      plainTextAnswer: "Online marketing is maatwerk, en de kosten hangen af van jouw specifieke doelen en de gekozen strategie. We kijken naar factoren zoals: Gekozen kanalen (SEO, SEA, Social Media), Concurrentie in jouw markt, Gewenste resultaten en tijdspad, Budget voor advertenties. Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken."
    },
    {
      question: "Hoe lang duurt het voordat ik resultaat zie?",
      answer: 
        "Dit verschilt per kanaal. SEA (Google Ads) kan binnen enkele dagen resultaat opleveren, terwijl SEO vaak 3-6 maanden nodig heeft voor significante verbetering. Social media marketing zit daar tussenin. We stellen realistische verwachtingen en maken duidelijke afspraken over tijdslijnen."
    },
    {
      question: "Welke online marketing kanalen zijn het beste voor mijn bedrijf?",
      answer: 
        "Dit hangt af van je doelgroep, product/dienst en doelstellingen. We analyseren jouw situatie zorgvuldig en adviseren kanalen die het beste passen bij jouw specifieke behoeften. Vaak is een combinatie van kanalen het meest effectief voor duurzame groei."
    },
    {
      question: "Kan ik ook alleen SEO of alleen Google Ads doen?",
      answer: 
        "Zeker! Je kunt kiezen voor specifieke diensten die passen bij jouw behoeften en budget. We bieden losse diensten aan, maar adviseren wel altijd over de optimale mix van kanalen voor jouw specifieke situatie."
    },
    {
      question: "Hoe meet je de resultaten van online marketing?",
      answer: 
        "We meten resultaten via verschillende KPI's zoals websiteverkeer, conversies, telefoontjes, aanvragen en uiteindelijk omzet. We stellen een Google Analytics dashboard in en voorzien je van regelmatige rapportages met alle belangrijke metrics, zodat je precies weet wat je investering oplevert."
    },
    {
      question: "Bieden jullie ook contentcreatie aan?",
      answer: 
        "Ja, we bieden contentcreatie als onderdeel van onze online marketingdiensten. Dit omvat blogartikelen, social media posts, advertentieteksten en meer. Kwalitatieve content is cruciaal voor succesvolle online marketingcampagnes."
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
              <span className="text-primary-600">Online Marketing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Online marketing die écht resultaat levert
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Wij zorgen voor meer zichtbaarheid, meer bezoekers en meer klanten met doelgerichte online marketing strategieën.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Zoekmachineoptimalisatie (SEO)</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Google Ads (SEA)</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Social Media Marketing</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Content Marketing</span>
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

          {/* Right column - Featured Image (Desktop) */}
          <div className="hidden lg:block relative">
            <SearchResultsVisualization 
              title="Zoekresultaten verbeterd"
              subtitle="Positie over tijd met actieve strategie"
              searchTerm="digitaal bureau online marketing"
              beforeAfterResults={{
                before: {
                  yourResult: {
                    position: 8,
                    title: "Next Win | Digitaal bureau en online marketing",
                    description: "Professionele online marketing diensten van Next Win uit Otterlo. Verbeter je online zichtbaarheid en krijg meer klanten.",
                    url: "www.next-win.nl"
                  },
                  competitors: [
                    {
                      position: 1,
                      title: "Digitaal Marketing Bureau | Competitor 1",
                      description: "Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.",
                      url: "www.competitor1.nl"
                    },
                    {
                      position: 2,
                      title: "Digitale Marketing Services | Competitor 2",
                      description: "SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.",
                      url: "www.competitor2.nl"
                    }
                  ]
                },
                after: {
                  yourResult: {
                    position: 1,
                    title: "Next Win | Resultaatgericht Digitaal Bureau Otterlo",
                    description: "Online marketing die écht resultaat levert. Wij zorgen voor meer zichtbaarheid, meer bezoekers en meer klanten. Bekijk onze cases.",
                    url: "www.next-win.nl"
                  },
                  competitors: [
                    {
                      position: 2,
                      title: "Digitaal Marketing Bureau | Competitor 1",
                      description: "Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.",
                      url: "www.competitor1.nl"
                    },
                    {
                      position: 3,
                      title: "Digitale Marketing Services | Competitor 2",
                      description: "SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.",
                      url: "www.competitor2.nl"
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      </Section>

      {/* Our Approach (Solution) Section */}
      <Section className="py-24 bg-white" id="solution">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Onze aanpak"
              title="Hoe wij het verschil maken"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              We werken niet met one-size-fits-all oplossingen. Jouw bedrijf is uniek, en dat verdient een aanpak die daar perfect bij past.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <div className="w-full h-full aspect-video rounded-xl shadow-lg overflow-hidden relative bg-white p-4">
                {/* Marketing Funnel Visualization */}
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  {/* Funnel SVG */}
                  <svg className="w-full h-full sm:w-3/4 sm:h-3/4" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="funnelGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient id="funnelGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient id="funnelGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient id="funnelGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
                      </linearGradient>
                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.2" />
                      </filter>
                    </defs>

                    {/* Funnel Sections with Animation */}
                    <g className="funnel-group">
                      {/* Awareness */}
                      <path 
                        d="M20,20 L280,20 L250,80 L50,80 Z" 
                        fill="url(#funnelGradient1)" 
                        filter="url(#shadow)"
                        opacity="0"
                      >
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.8s" 
                          begin="0s" 
                          fill="freeze" 
                        />
                      </path>
                      <text x="150" y="60" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" opacity="0" className="funnel-text-lg">
                        Bewustwording
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.5s" 
                          begin="0.8s" 
                          fill="freeze" 
                        />
                      </text>
                      
                      {/* Interest */}
                      <path 
                        d="M50,90 L250,90 L230,150 L70,150 Z" 
                        fill="url(#funnelGradient2)" 
                        filter="url(#shadow)"
                        opacity="0"
                      >
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.8s" 
                          begin="0.4s" 
                          fill="freeze" 
                        />
                      </path>
                      <text x="150" y="130" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" opacity="0" className="funnel-text-md">
                        Interesse
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.5s" 
                          begin="1.2s" 
                          fill="freeze" 
                        />
                      </text>
                      
                      {/* Consideration */}
                      <path 
                        d="M70,160 L230,160 L210,220 L90,220 Z" 
                        fill="url(#funnelGradient3)" 
                        filter="url(#shadow)"
                        opacity="0"
                      >
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.8s" 
                          begin="0.8s" 
                          fill="freeze" 
                        />
                      </path>
                      <text x="150" y="200" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" opacity="0" className="funnel-text-sm">
                        Overweging
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.5s" 
                          begin="1.6s" 
                          fill="freeze" 
                        />
                      </text>
                      
                      {/* Conversion */}
                      <path 
                        d="M90,230 L210,230 L190,290 L110,290 Z" 
                        fill="url(#funnelGradient4)" 
                        filter="url(#shadow)"
                        opacity="0"
                      >
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.8s" 
                          begin="1.2s" 
                          fill="freeze" 
                        />
                      </path>
                      <text x="150" y="270" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" opacity="0" className="funnel-text-xs">
                        Conversie
                        <animate 
                          attributeName="opacity" 
                          from="0" 
                          to="1" 
                          dur="0.5s" 
                          begin="2s" 
                          fill="freeze" 
                        />
                      </text>

                      {/* Animated Dots */}
                      <circle cx="150" cy="20" r="3" fill="white">
                        <animate attributeName="cy" values="20;290;20" dur="6s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.8;0.6;0.4;0.2;0" dur="6s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="180" cy="20" r="3" fill="white">
                        <animate attributeName="cy" values="20;150;20" dur="5s" begin="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.8;0.6;0" dur="5s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="120" cy="20" r="3" fill="white">
                        <animate attributeName="cy" values="20;220;20" dur="7s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.8;0.4;0" dur="7s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="200" cy="20" r="3" fill="white">
                        <animate attributeName="cy" values="20;230;20" dur="8s" begin="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.8;0.6;0.2;0" dur="8s" begin="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  </svg>

                  {/* Stats */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gray-100 px-2 py-1 sm:px-3 sm:py-2 rounded-lg opacity-0 animate-fade-in text-xs sm:text-sm text-gray-700" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full"></span>
                      <span>Conversieratio: +42%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Jouw groei is onze prioriteit</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Data-gedreven marketing</h4>
                    <p className="text-gray-600">We baseren onze strategie op data, niet op aannames. Zo weten we precies wat werkt voor jouw doelgroep.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Doelgerichte kanalen</h4>
                    <p className="text-gray-600">We kiezen de kanalen waar jouw ideale klanten zich bevinden en optimaliseren specifiek voor deze platforms.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Conversie-optimalisatie</h4>
                    <p className="text-gray-600">Niet alleen meer bezoekers, maar ook een hogere conversieratio door continu te testen en te verbeteren.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Volledige transparantie</h4>
                    <p className="text-gray-600">Duidelijke rapportage zodat je precies weet wat we doen en welke resultaten het oplevert.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section className="py-24 bg-gray-50" id="approach">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                subtitle="Herkenbaar?"
                title="Waar loop je tegenaan?"
                align="left"
              />
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Onvindbaar in Google</h4>
                    <p className="text-gray-600">Je website staat niet op de eerste pagina van Google, waardoor potentiële klanten bij je concurrenten terechtkomen.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Weinig kwalitatieve leads</h4>
                    <p className="text-gray-600">Je krijgt wel wat verkeer, maar deze bezoekers converteren niet naar daadwerkelijke klanten of aanvragen.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Geld verspild aan advertenties</h4>
                    <p className="text-gray-600">Je hebt al geïnvesteerd in Google Ads of social media, maar ziet nauwelijks resultaat en weet niet waar het misgaat.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Gebrek aan strategie</h4>
                    <p className="text-gray-600">Je doet wat aan online marketing, maar zonder duidelijk plan of inzicht in welke kanalen het beste werken voor jouw bedrijf.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="#solution" className="text-primary-600 font-medium text-lg hover:text-primary-700 transition-colors group inline-flex items-center">
                    Herkenbaar? Laat ons je helpen
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-visible bg-white shadow-lg p-6">
              {/* Search Rankings Visualization */}
              <div className="w-full h-full flex flex-col overflow-hidden" >
                <div className="mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Zoekresultaten verbeterd</h4>
                    <p className="text-sm text-gray-500">Positie over tijd met actieve strategie</p>
                  </div>
                </div>

                {/* Search Results Visualization */}
                <div className="min-h-[550px] bg-gray-50 rounded-xl p-5 relative overflow-visible">
                  {/* Search Bar */}
                  <div className="w-full h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center px-5 mb-6">
                    <svg className="w-5 h-5 text-gray-400 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-gray-800 font-medium">digitaal bureau online marketing</span>
                  </div>

                  {/* Before/After Toggle */}
                  <div className="absolute right-5 top-5 flex items-center text-sm bg-white rounded-full shadow-sm border border-gray-200 p-1 sm:p-1" style={{ marginRight: '5px', marginTop: '5px' }}>
                    <div className="relative">
                      <div id="toggle-indicator" className="absolute inset-y-0 left-0 w-1/2 bg-primary-100 rounded-full transition-all duration-500"></div>
                      <button 
                        id="toggle-before" 
                        className="z-10 relative px-2 sm:px-3 py-1 rounded-full text-primary-700 font-medium text-xs sm:text-sm"
                        onClick={() => { 
                          document.getElementById('toggle-indicator')?.style.setProperty('transform', 'translateX(0%)');
                          document.getElementById('toggle-before')?.classList.add('text-primary-700');
                          document.getElementById('toggle-after')?.classList.remove('text-primary-700');
                          
                          // Get all the result cards
                          const cards = document.querySelectorAll('.result-card');
                          if (cards.length === 3) {
                            // Set transition for all cards
                            cards.forEach(card => {
                              const element = card as HTMLElement;
                              element.style.transition = 'all 1s ease-in-out';
                            });
                            
                            // Get the current state
                            const currentState = document.querySelector('.results-container')?.getAttribute('data-state') || 'after';
                            
                            if (currentState === 'after') {
                              // We're changing from "after" to "before"
                              document.querySelector('.results-container')?.setAttribute('data-state', 'before');
                              
                              // In "before" view:
                              // - Competitor1 should be position 1
                              // - Competitor2 should be position 2
                              // - NextWin should be position 8 (at the bottom)
                              
                              // Card 1 (NextWin) needs to move to the bottom (position 3 visually, position 8 in ranking)
                              const card1 = cards[0] as HTMLElement;
                              card1.style.transform = 'translateY(260px) scale(1)';
                              card1.style.opacity = '1';
                              card1.style.zIndex = '1';
                              
                              // Card 2 (Competitor1) needs to move to the top (position 1)
                              const card2 = cards[1] as HTMLElement;
                              card2.style.transform = 'translateY(0) scale(1)';
                              card2.style.opacity = '1';
                              card2.style.zIndex = '3';
                              
                              // Card 3 (Competitor2) stays in position 2
                              const card3 = cards[2] as HTMLElement;
                              card3.style.transform = 'translateY(130px) scale(1)';
                              card3.style.opacity = '1';
                              card3.style.zIndex = '2';
                              
                              // After animation completes, update content
                              setTimeout(() => {
                                // Update card content for "before" state
                                
                                // Card 1 (now position 3/8): Update to NextWin position 8
                                const title1 = card1.querySelector('.card-title');
                                const description1 = card1.querySelector('.card-description');
                                const position1 = card1.querySelector('.card-position');
                                const url1 = card1.querySelector('.card-url');
                                
                                if (title1) title1.textContent = 'Next Win | Digitaal bureau en online marketing';
                                if (description1) description1.textContent = 'Professionele online marketing diensten van Next Win uit Otterlo. Verbeter je online zichtbaarheid en krijg meer klanten.';
                                if (position1) {
                                  position1.textContent = 'Positie 8';
                                  position1.className = 'card-position inline-block px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium';
                                }
                                if (url1) url1.textContent = 'www.next-win.nl';
                                
                                // Card 2 (now position 1): Update to Competitor1
                                const title2 = card2.querySelector('.card-title');
                                const description2 = card2.querySelector('.card-description');
                                const position2 = card2.querySelector('.card-position');
                                const url2 = card2.querySelector('.card-url');
                                
                                if (title2) title2.textContent = 'Digitaal Marketing Bureau | Competitor 1';
                                if (description2) description2.textContent = 'Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.';
                                if (position2) {
                                  position2.textContent = 'Positie 1';
                                  position2.className = 'card-position inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium';
                                }
                                if (url2) url2.textContent = 'www.competitor1.nl';
                                
                                // Card 3 (position 2): Update to Competitor2
                                const title3 = card3.querySelector('.card-title');
                                const description3 = card3.querySelector('.card-description');
                                const position3 = card3.querySelector('.card-position');
                                const url3 = card3.querySelector('.card-url');
                                
                                if (title3) title3.textContent = 'Digitale Marketing Services | Competitor 2';
                                if (description3) description3.textContent = 'SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.';
                                if (position3) {
                                  position3.textContent = 'Positie 2';
                                  position3.className = 'card-position inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium';
                                }
                                if (url3) url3.textContent = 'www.competitor2.nl';
                                
                                // We don't reset positions after animation in "before" state
                              }, 500);
                            }
                          }
                        }}
                      >Voor</button>
                      <button 
                        id="toggle-after" 
                        className="z-10 relative px-2 sm:px-3 py-1 rounded-full font-medium text-xs sm:text-sm"
                        onClick={() => {
                          document.getElementById('toggle-indicator')?.style.setProperty('transform', 'translateX(100%)');
                          document.getElementById('toggle-after')?.classList.add('text-primary-700');
                          document.getElementById('toggle-before')?.classList.remove('text-primary-700');
                          
                          // Get all the result cards
                          const cards = document.querySelectorAll('.result-card');
                          if (cards.length === 3) {
                            // Set transition for all cards
                            cards.forEach(card => {
                              const element = card as HTMLElement;
                              element.style.transition = 'all 1s ease-in-out';
                            });
                            
                            // Get the current state
                            const currentState = document.querySelector('.results-container')?.getAttribute('data-state') || 'before';
                            
                            if (currentState === 'before') {
                              // We're changing from "before" to "after"
                              document.querySelector('.results-container')?.setAttribute('data-state', 'after');
                              
                              // In "after" view:
                              // - NextWin should be position 1 (at the top)
                              // - Competitor1 should be position 2
                              // - Competitor2 should be position 3
                              
                              // Card 3 (NextWin at position 3/8) moves to the top (position 1)
                              const card3 = cards[2] as HTMLElement;
                              card3.style.transform = 'translateY(0) scale(1)';
                              card3.style.opacity = '1';
                              card3.style.zIndex = '3';
                              
                              // Card 1 (Competitor1 at position 1) moves to position 2
                              const card1 = cards[0] as HTMLElement;
                              card1.style.transform = 'translateY(130px) scale(1)';
                              card1.style.opacity = '1';
                              card1.style.zIndex = '2';
                              
                              // Card 2 (Competitor2 at position 2) moves to position 3
                              const card2 = cards[1] as HTMLElement;
                              card2.style.transform = 'translateY(260px) scale(1)';
                              card2.style.opacity = '1';
                              card2.style.zIndex = '1';
                              
                              // After animation completes, update content
                              setTimeout(() => {
                                // Update card content for "after" state
                                
                                // Card 3 (now position 1): Update to NextWin at position 1
                                const title3 = card3.querySelector('.card-title');
                                const description3 = card3.querySelector('.card-description');
                                const position3 = card3.querySelector('.card-position');
                                const url3 = card3.querySelector('.card-url');
                                
                                if (title3) title3.textContent = 'Next Win | Resultaatgericht Digitaal Bureau Otterlo';
                                if (description3) description3.textContent = 'Online marketing die écht resultaat levert. Wij zorgen voor meer zichtbaarheid, meer bezoekers en meer klanten. Bekijk onze cases.';
                                if (position3) {
                                  position3.innerHTML = '<span class="inline-block mr-1">↑</span>Positie 1';
                                  position3.className = 'card-position inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium';
                                }
                                if (url3) url3.textContent = 'www.next-win.nl';
                                
                                // Add animate pulse indicator to top result
                                let pulseDot = card3.querySelector('.pulse-dot');
                                if (!pulseDot) {
                                  pulseDot = document.createElement('div');
                                  pulseDot.className = 'mt-2 flex pulse-dot';
                                  pulseDot.innerHTML = `
                                    <div class="animate-pulse flex space-x-1">
                                      <div class="h-2 w-10 bg-primary-100 rounded"></div>
                                      <div class="h-2 w-16 bg-primary-100 rounded"></div>
                                      <div class="h-2 w-12 bg-primary-100 rounded"></div>
                                    </div>
                                  `;
                                  card3.appendChild(pulseDot);
                                }
                                
                                // Card 1 (now position 2): Update to Competitor1 at position 2
                                const title1 = card1.querySelector('.card-title');
                                const description1 = card1.querySelector('.card-description');
                                const position1 = card1.querySelector('.card-position');
                                const url1 = card1.querySelector('.card-url');
                                
                                if (title1) title1.textContent = 'Digitaal Marketing Bureau | Competitor 1';
                                if (description1) description1.textContent = 'Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.';
                                if (position1) {
                                  position1.innerHTML = '<span class="inline-block mr-1">↓</span>Positie 2';
                                  position1.className = 'card-position inline-block px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium';
                                }
                                if (url1) url1.textContent = 'www.competitor1.nl';
                                
                                // Remove pulse dot from other cards
                                let otherPulseDot = card1.querySelector('.pulse-dot');
                                if (otherPulseDot) {
                                  card1.removeChild(otherPulseDot);
                                }
                                
                                // Card 2 (now position 3): Update to Competitor2 at position 3
                                const title2 = card2.querySelector('.card-title');
                                const description2 = card2.querySelector('.card-description');
                                const position2 = card2.querySelector('.card-position');
                                const url2 = card2.querySelector('.card-url');
                                
                                if (title2) title2.textContent = 'Digitale Marketing Services | Competitor 2';
                                if (description2) description2.textContent = 'SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.';
                                if (position2) {
                                  position2.innerHTML = '<span class="inline-block mr-1">↓</span>Positie 3';
                                  position2.className = 'card-position inline-block px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium';
                                }
                                if (url2) url2.textContent = 'www.competitor2.nl';
                                
                                // Remove pulse dot from other cards
                                otherPulseDot = card2.querySelector('.pulse-dot');
                                if (otherPulseDot) {
                                  card2.removeChild(otherPulseDot);
                                }
                                
                                // We don't reset positions after animation in "after" state
                              }, 500);
                            }
                          }
                        }}
                      >Na</button>
                    </div>
                  </div>

                  {/* Results Container with Animation */}
                  <div id="results-container" className="results-container relative h-[550px] sm:h-[550px] flex flex-col items-center justify-start overflow-visible" data-state="before">
                    {/* Animated message that shows before positions animate */}
                    <div id="animation-intro-message" className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-1000 opacity-0">
                      <div className="text-center transform transition-all duration-700 translate-y-4 opacity-0" id="animation-intro-content">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">Laten we samenwerken</h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">En jouw positie verbeteren</p>
                        <div className="flex flex-col items-center justify-center gap-1">
                          <div className="flex items-center justify-center">
                            <span id="position-before" className="px-2 sm:px-3 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium mr-2 transition-all duration-500">Positie 8</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            <span id="position-after" className="px-2 sm:px-3 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium ml-2 transition-all duration-500">Positie 1</span>
                          </div>
                          <p className="text-primary-600 text-xs sm:text-sm font-medium mt-2 animate-pulse">Bekijk wat er gebeurt...</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-container relative w-full h-[450px] overflow-visible">
                      {/* Card 1 - Initially Competitor1 at position 1 */}
                      <div className="result-card bg-white rounded-lg p-2 sm:p-3 border border-gray-100 shadow-md transform transition-all duration-300 hover:shadow-lg absolute w-full h-[110px] sm:h-[120px] z-3" style={{ transform: 'translateY(0) scale(1)', opacity: '1' }}>
                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                          <span className="card-url text-green-600 text-xs">www.competitor1.nl</span>
                          <div className="flex items-center text-sm">
                            <span className="card-position inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium">
                              Positie 1
                            </span>
                          </div>
                        </div>
                        <h3 className="card-title text-blue-600 text-xs sm:text-sm font-medium mb-1">Digitaal Marketing Bureau | Competitor 1</h3>
                        <p className="card-description text-xs text-gray-600 hidden sm:block">Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.</p>
                        <p className="card-description text-xs text-gray-600 sm:hidden">Breng uw bedrijf online naar een hoger niveau met onze marketing expertise.</p>
                      </div>

                      {/* Card 2 - Initially Competitor2 at position 2 */}
                      <div className="result-card bg-white rounded-lg p-2 sm:p-3 border border-gray-100 shadow-sm transform transition-all duration-300 absolute w-full h-[110px] sm:h-[120px] z-2" style={{ transform: 'translateY(130px) scale(1)', opacity: '1' }}>
                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                          <span className="card-url text-green-600 text-xs">www.competitor2.nl</span>
                          <div className="flex items-center text-sm">
                            <span className="card-position inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium">
                              Positie 2
                            </span>
                          </div>
                        </div>
                        <h3 className="card-title text-blue-600 text-xs sm:text-sm font-medium mb-1">Digitale Marketing Services | Competitor 2</h3>
                        <p className="card-description text-xs text-gray-600 hidden sm:block">SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.</p>
                        <p className="card-description text-xs text-gray-600 sm:hidden">SEO, SEA en Social Media Marketing voor MKB bedrijven in Nederland.</p>
                      </div>

                      {/* Card 3 - Initially NextWin at position 8 */}
                      <div className="result-card bg-white rounded-lg p-2 sm:p-3 border border-gray-100 shadow-sm transform transition-all duration-300 absolute w-full h-[110px] sm:h-[120px] z-1" style={{ transform: 'translateY(260px) scale(1)', opacity: '1' }}>
                        <div className="flex justify-between items-center mb-1 sm:mb-2">
                          <span className="card-url text-green-600 text-xs">www.next-win.nl</span>
                          <div className="flex items-center text-sm">
                            <span className="card-position inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                              Positie 8
                            </span>
                          </div>
                        </div>
                        <h3 className="card-title text-blue-600 text-xs sm:text-sm font-medium mb-1">Next Win | Digitaal bureau en online marketing</h3>
                        <p className="card-description text-xs text-gray-600 hidden sm:block">Professionele online marketing diensten van Next Win uit Otterlo. Verbeter je online zichtbaarheid en krijg meer klanten.</p>
                        <p className="card-description text-xs text-gray-600 sm:hidden">Professionele online marketing diensten van Next Win uit Otterlo.</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Calendar/Timeline Section */}
      <Section className="py-24 bg-gray-50" id="timeline">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Zo werken we"
              title="Jouw online marketing in stappen"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Wij geloven in een gestructureerd proces. Zo weet je precies wat je kunt verwachten en wanneer. Hieronder zie je onze beproefde aanpak voor online marketing.
            </p>
          </div>

          <CalendarTimeline phases={marketingTimelineData.phases} footer={marketingTimelineData.footer} />
          
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
              <h3 className="text-xl font-bold mb-4">Vrijblijvende Strategie</h3>
              <p className="text-gray-600 mb-4">
                We beginnen met een vrijblijvend strategiegesprek. Je krijgt direct inzicht in onze visie en aanpak voor jouw specifieke situatie, zonder verplichtingen.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professioneel advies zonder kosten</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategische inzichten voor jouw business</span>
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
                  "Ze gaven me direct inzicht in de mogelijkheden voor mijn branche en wat voor resultaten ik kon verwachten. Dat schepte vertrouwen." 
                  <span className="block mt-1 font-medium">— Johan, consultant</span>
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
                  "Voor het eerst had ik écht inzicht in waar mijn marketingbudget naartoe ging en welke resultaten het opleverde. Die duidelijkheid is goud waard." 
                  <span className="block mt-1 font-medium">— Esther, webshop-eigenaar</span>
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
                  <span className="block mt-1 font-medium">— Martijn, MKB-ondernemer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Section - Using FeaturedCases component */}
      <FeaturedCases 
        title="Marketing die écht werkt"
        subtitle="Succesverhalen"
        description="Bekijk enkele van onze recente projecten en ontdek hoe we ondernemers zoals jij hebben geholpen."
        bgColor="bg-gray-50"
        maxCases={3}
        showHeader={true}
      />

      {/* Key Values Section */}
      <Section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Hoe we werken"
              title="Onze marketing benadering"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Effectieve online marketing is meer dan alleen ads en keywords. Dit zijn de principes die ons leiden bij elk marketingproject.
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
              <h3 className="text-xl font-bold mb-4">Meetbaar</h3>
              <p className="text-gray-600 mb-4">
                We meten alles en baseren beslissingen op data. Zo weten we exact wat werkt en wat niet, en kunnen we je marketing continu verbeteren.
              </p>

            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
              <h3 className="text-xl font-bold mb-4">ROI-gedreven</h3>
              <p className="text-gray-600 mb-4">
                We focussen op rendement op investering. Jouw marketing moet meer opleveren dan het kost - anders doen we het niet.
              </p>

            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Schaalbaar</h3>
              <p className="text-gray-600 mb-4">
                We bouwen marketingkanalen die kunnen meegroeien met je bedrijf. Van startup tot marktleider, onze aanpak schaalt mee.
              </p>

            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-24 bg-white" id="faq">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              subtitle="Veelgestelde vragen"
              title="Alles wat je wilt weten over online marketing"
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
              <Button href="#start-conversation" className="bg-primary-500 hover:bg-primary-600 text-white">
                Stel je vraag
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Expertise (For the Tech-Savvy) */}
      <Section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-10 h-full">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-r border-primary-900/10 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-10 w-full absolute top-0">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-b border-primary-900/10 w-full"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Voor de techneuten"
              title="Onze technische marketing stack"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Geen zorgen als je dit deel niet begrijpt! Maar voor de technisch geïnteresseerden, zo bouwen we onze campagnes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="animate-on-scroll">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">Google Ads Expertise</h4>
                    <span className="text-primary-600 font-semibold">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '94%' }}></div>
                  </div>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">SEO Optimalisatie</h4>
                    <span className="text-primary-600 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">Google Analytics 4</h4>
                    <span className="text-primary-600 font-semibold">97%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '97%' }}></div>
                  </div>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.6s' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">Marketing Automation</h4>
                    <span className="text-primary-600 font-semibold">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '89%' }}></div>
                  </div>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.8s' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">A/B Testing</h4>
                    <span className="text-primary-600 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <p className="text-gray-700">
                  <strong className="text-primary-700">Maar het belangrijkste:</strong> we zorgen ervoor dat de techniek in dienst staat van jouw business doelen, niet andersom.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">Geavanceerde tracking</h4>
                <p className="text-gray-600">Van klik tot conversie weten we precies wat werkt voor jouw business.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">Cross-device</h4>
                <p className="text-gray-600">Optimale ervaring op elk apparaat en platform voor maximale conversie.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">GDPR compliant</h4>
                <p className="text-gray-600">Privacy-vriendelijk en volgens alle regels voor veilige gegevensverwerking.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">AI-powered</h4>
                <p className="text-gray-600">Slimme algoritmes voor optimale targeting en resultaten voor uw ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 sm:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden" id="conversation">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Klaar om je online zichtbaarheid te verbeteren?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Laten we samen werken aan een online marketingstrategie die écht resultaat oplevert en jouw business laat groeien.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-8 mb-8 sm:mb-12 border border-white/20">
              <p className="text-white mb-4 sm:mb-6">Kies de manier die voor jou het beste werkt:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link href="/contact?form=marketing" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg shadow-primary-900/30">
                  <svg className="w-5 h-5 mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Vrijblijvende strategiesessie</span>
                </Link>
                <Link href="tel:+31638146310" className="bg-white hover:bg-gray-100 text-primary-700 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg">
                  <svg className="w-5 h-5 mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Bel direct: 06-3814 6310</span>
                </Link>
              </div>
            </div>
            
            <p className="text-white/80 text-sm">Geen verplichtingen, geen verkooppraatjes, gewoon een eerlijk gesprek over je online marketing ambities.</p>
          </div>
        </div>
      </Section>
      
      {/* Animation styles */}
      <style jsx global>{`
        .animate-shuffle {
          animation: shuffle 0.3s ease-in-out;
          transform-style: preserve-3d;
        }
        
        @keyframes shuffle {
          0% {
            transform: translateY(0) rotateX(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotateX(10deg);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) rotateX(0);
            opacity: 1;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .pulse-animation {
          animation: pulse 3s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }

        .animate-slow-spin {
          animation: slow-spin 30s linear infinite;
        }

        .animate-reverse-slow-spin {
          animation: slow-spin 25s linear infinite reverse;
        }

        .animate-slow-spin-medium {
          animation: slow-spin 20s linear infinite;
        }

        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-orbit {
          animation: orbit 15s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit 18s linear infinite reverse;
        }

        .animate-orbit-slow {
          animation: orbit 20s linear infinite;
        }

        .animate-orbit-medium {
          animation: orbit 17s linear infinite reverse;
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float 7s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float-mini {
          animation: float-mini 4s ease-in-out infinite;
        }

        @keyframes float-mini {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        @keyframes pulse-slow {
          0% { opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { opacity: 0.2; }
        }

        .search-result-card {
          background-color: white;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1rem;
          border: 1px solid rgba(229, 231, 235, 0.5);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease-in-out;
        }

        .search-result-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .search-results-container {
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          overflow-y: auto;
          max-height: 100%;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-grow-width {
          animation: growWidth 1.5s ease-out 0.5s forwards;
        }

        @keyframes growWidth {
          from { width: 0%; }
          to { width: 75%; }
        }
      `}</style>
    </div>
  );
} 