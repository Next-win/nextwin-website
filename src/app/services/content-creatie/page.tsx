"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SectionTitle } from '@/components/ui/Typography';
import FaqAccordion, { FaqItem } from '@/components/ui/FaqAccordion';
import ScrollAnimationWrapper from '@/components/ui/ScrollAnimationWrapper';
import FeaturedCases from '@/components/ui/FeaturedCases';

export default function ContentCreationServicePage() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    
    // Only run DOM manipulation in the browser
    if (typeof window !== 'undefined') {
      // Initialize toggle state
      const beforeToggle = document.getElementById('content-toggle-before');
      const afterToggle = document.getElementById('content-toggle-after');
      const indicator = document.getElementById('content-toggle-indicator');
      
      if (beforeToggle && afterToggle && indicator) {
        // Set initial state - "Before" selected
        indicator.style.transform = 'translateX(0%)';
        beforeToggle.classList.add('text-primary-700');
        afterToggle.classList.remove('text-primary-700');
        
        // Set display properties for metrics
        document.querySelectorAll('.before-metric').forEach(el => {
          (el as HTMLElement).style.display = 'flex';
        });
        document.querySelectorAll('.after-metric').forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
      }
      
      // Setup toggle handlers
      if (beforeToggle && afterToggle && indicator) {
        beforeToggle.addEventListener('click', () => {
          indicator.style.transform = 'translateX(0%)';
          beforeToggle.classList.add('text-primary-700');
          afterToggle.classList.remove('text-primary-700');
          
          // Hide "After" metrics, show "Before" metrics
          document.querySelectorAll('.before-metric').forEach(el => {
            (el as HTMLElement).style.display = 'flex';
          });
          document.querySelectorAll('.after-metric').forEach(el => {
            (el as HTMLElement).style.display = 'none';
          });
        });
        
        afterToggle.addEventListener('click', () => {
          indicator.style.transform = 'translateX(100%)';
          afterToggle.classList.add('text-primary-700');
          beforeToggle.classList.remove('text-primary-700');
          
          // Hide "Before" metrics, show "After" metrics
          document.querySelectorAll('.before-metric').forEach(el => {
            (el as HTMLElement).style.display = 'none';
          });
          document.querySelectorAll('.after-metric').forEach(el => {
            (el as HTMLElement).style.display = 'flex';
          });
        });
      }
      
      return () => {
        // Clean up event listeners
        if (beforeToggle && afterToggle) {
          beforeToggle.removeEventListener('click', () => {});
          afterToggle.removeEventListener('click', () => {});
        }
      };
    }
  }, []);

  // Define FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Wat kost het laten maken van een professionele bedrijfsvideo?",
      answer: (
        <div className="space-y-4">
          <p>
            De kosten voor een professionele bedrijfsvideo variëren afhankelijk van verschillende factoren:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lengte van de video</li>
            <li>Complexiteit van het script en scenario</li>
            <li>Aantal opnamedagen en locaties</li>
            <li>Benodigde apparatuur (drone, stabilisatoren, etc.)</li>
            <li>Montage en nabewerking</li>
          </ul>
          <p>Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken die bij jouw budget past.</p>
        </div>
      ),
      plainTextAnswer: "De kosten voor een professionele bedrijfsvideo variëren afhankelijk van verschillende factoren: Lengte van de video, Complexiteit van het script en scenario, Aantal opnamedagen en locaties, Benodigde apparatuur (drone, stabilisatoren, etc.), Montage en nabewerking. Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken die bij jouw budget past."
    },
    {
      question: "Hoe lang duurt het productieproces van een video of fotoshoot?",
      answer: 
        "De doorlooptijd hangt af van de complexiteit van het project. Een eenvoudige fotoshoot kan al binnen een week afgerond zijn, terwijl een complexe bedrijfsvideo 4-8 weken in beslag kan nemen. We werken met een duidelijke planning waarbij pre-productie (voorbereiding), productie (de opnamedag) en post-productie (montage en nabewerking) zorgvuldig worden ingepland."
    },
    {
      question: "Hebben jullie ervaring in onze branche?",
      answer: 
        "We hebben ervaring met een breed scala aan sectoren, waaronder retail, B2B dienstverlening, zorg, onderwijs, bouw, techniek en meer. Door onze diverse ervaring zijn we in staat om snel de essentie van je branche te begrijpen en dit te vertalen naar overtuigende content. We delen graag relevante cases uit jouw of verwante branches."
    },
    {
      question: "Wat is het verschil tussen standaard video en een dronevideo?",
      answer: 
        "Dronevideo's bieden unieke luchtperspectieven die met gewone camera's niet mogelijk zijn. Ze zijn ideaal voor het tonen van locaties, gebouwen, terreinen of evenementen vanuit vogelperspectief. Standaard video's zijn meer geschikt voor storytelling, interviews, productvideo's en situaties die close-up details vereisen. Vaak combineren we beide voor het beste resultaat."
    },
    {
      question: "Kan ik de rechten van de content krijgen?",
      answer: 
        "Ja, we leveren alle content met gebruiksrechten voor je eigen marketing- en communicatiedoeleinden. De specifieke rechten worden vooraf duidelijk vastgelegd in de overeenkomst. Voor specifieke toepassingen zoals commercials op TV of gebruik door derden kunnen aanvullende afspraken worden gemaakt."
    },
    {
      question: "Hoe zorgen jullie voor een consistente merkuitstraling?",
      answer: 
        "We beginnen altijd met een grondige analyse van je huisstijl, merkwaarden en bestaande communicatie. Op basis daarvan maken we een contentstijlgids die als basis dient voor alle producties. Deze zorgt voor consistentie in kleurgebruik, compositie, toon en stijl over alle verschillende contentformats heen."
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
              <span className="text-primary-600">Content Creatie</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Content Creatie voor jouw merk
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Van adembenemende dronevideo&apos;s tot professionele productfotografie - wij zorgen samen met onze partner <a href="https://visulions.nl/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Visulions</a> voor visuele content die je merk laat opvallen en je doelgroep aanspreekt.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Drone videografie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Productfotografie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Video productie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Grafisch ontwerp</span>
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
                href="#portfolio"
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800/5"
                size="lg"
              >
                Bekijk ons portfolio
              </Button>
            </div>
          </div>

          {/* Right column - Visual Storytelling */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[580px] w-full overflow-visible rounded-3xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-80">
                <div className="absolute inset-0 overflow-visible">
                  {/* Animated gradient blobs */}
                  <div className="absolute top-[-25%] left-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-300/30 blur-3xl animate-blob"></div>
                  <div className="absolute bottom-[-25%] right-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-green-200/30 to-blue-200/30 blur-3xl animate-blob animation-delay-2000"></div>
                  <div className="absolute top-[35%] right-[-15%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-purple-200/30 to-indigo-200/30 blur-3xl animate-blob animation-delay-4000"></div>
                  <div className="absolute bottom-[25%] left-[-15%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-blue-200/30 to-green-300/30 blur-3xl animate-blob animation-delay-3000"></div>
                  
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                </div>
              </div>
              
              {/* Content Creation Visual Storytelling */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-8 relative">
                  {/* Main Content Container */}
                  <div className="w-full h-full relative perspective-1000">
                    {/* Main video frame - represents video production */}
                    <div className="absolute inset-5 rounded-xl shadow-2xl overflow-hidden transform rotate-[-2deg] z-20 animate-float-main">
                      <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image 
                            src="/images/content-creatie/bedrijfsfilm-mogelijkheden-visulions.jpg.webp"
                            alt="Bedrijfsvideo productie"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                          />
                          {/* Video overlay with play button */}
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center pulse-animation">
                              <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          {/* Video production label */}
                          <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm">
                            Video Productie
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Drone photography frame - tilted at the top right */}
                    <div className="absolute top-0 right-8 w-44 h-44 rounded-md shadow-lg overflow-hidden transform rotate-6 z-30 animate-float-slow-alt">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/content-creatie/drone-visulions.jpg.webp"
                          alt="Drone videografie"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="absolute bottom-2 left-2 right-2">
                            <span className="text-white text-xs font-medium bg-primary-600/90 py-0.5 px-2 rounded-full">
                              Drone Video
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product photography element - bottom left */}
                    <div className="absolute bottom-12 left-0 w-40 h-52 rounded-md shadow-lg overflow-hidden transform -rotate-6 z-30 animate-float-slow">
                      <div className="relative w-full h-full bg-black rounded overflow-hidden">
                        <Image 
                          src="/images/content-creatie/la-odeur-promotiefilms-visulions-scaled.jpg.webp" 
                          alt="Productfotografie voorbeeld"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-2 w-full">
                            <span className="text-white text-xs font-medium bg-primary-600/90 py-0.5 px-2 rounded-full">
                              Productfoto's
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Graphic design element - placed to the bottom right */}
                    <div className="absolute bottom-4 right-4 w-36 h-36 rounded-md shadow-lg overflow-hidden transform rotate-[-8deg] z-30 animate-float-slow-reverse">
                      <div className="w-full h-full relative overflow-hidden rounded">
                        <Image 
                          src="/images/content-creatie/aftermovie-relatiedag-2024-4ps-Visulions-2048x1152.jpg.webp" 
                          alt="Grafisch ontwerp voorbeeld"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-2 w-full">
                            <span className="text-white text-xs font-medium bg-primary-600/90 py-0.5 px-2 rounded-full">
                              Grafisch Ontwerp
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Moving elements for visual interest */}
                    <div className="absolute animate-bounce-slow delay-300 top-20 left-4 w-8 h-8 rounded-full bg-primary-100 z-10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div className="absolute animate-bounce-slow delay-700 bottom-24 right-4 w-6 h-6 rounded-full bg-yellow-100 z-10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle branded watermark at bottom right */}
                  <div className="absolute bottom-3 right-3 flex items-center text-xs text-gray-500">
                    <span className="mr-1 font-light">in samenwerking met</span>
                    <span className="font-semibold text-primary-700">Visulions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile visualization - visible only on small screens */}
          <div className="lg:hidden relative mt-8 mb-4">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-80">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Animated gradient blobs - smaller and fewer for mobile */}
                  <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-300/30 blur-2xl animate-blob"></div>
                  <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-green-200/30 to-blue-200/30 blur-2xl animate-blob animation-delay-2000"></div>
                  <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-purple-200/30 to-indigo-200/30 blur-2xl animate-blob animation-delay-4000"></div>
                  
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                </div>
              </div>
              
              {/* Mobile Visual Storytelling - similar to desktop */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-4 relative">
                  {/* Main Content Container */}
                  <div className="w-full h-full relative perspective-1000 overflow-visible">
                    {/* Main video frame - represents video production */}
                    <div className="absolute inset-4 rounded-xl shadow-xl overflow-hidden transform rotate-[-2deg] z-20 animate-float-main">
                      <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image 
                            src="/images/content-creatie/bedrijfsfilm-mogelijkheden-visulions.jpg.webp"
                            alt="Bedrijfsvideo productie"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                          />
                          {/* Video overlay with play button */}
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center pulse-animation">
                              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          {/* Video production label */}
                          <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm">
                            Video Productie
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Drone photography frame - tilted at the top right */}
                    <div className="absolute top-0 right-4 w-28 h-28 rounded-md shadow-lg overflow-hidden transform rotate-6 z-30 animate-float-slow-alt">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/content-creatie/drone-visulions.jpg.webp"
                          alt="Drone videografie"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="absolute bottom-1 left-1 right-1">
                            <span className="text-white text-[10px] font-medium bg-primary-600/90 py-0.5 px-1 rounded-full">
                              Drone Video
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product photography element - bottom left */}
                    <div className="absolute bottom-8 left-0 w-28 h-36 rounded-md shadow-lg overflow-hidden transform -rotate-6 z-30 animate-float-slow">
                      <div className="relative w-full h-full bg-black rounded overflow-hidden">
                        <Image 
                          src="/images/content-creatie/la-odeur-promotiefilms-visulions-scaled.jpg.webp" 
                          alt="Productfotografie voorbeeld"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-1 w-full">
                            <span className="text-white text-[10px] font-medium bg-primary-600/90 py-0.5 px-1 rounded-full">
                              Productfoto's
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Graphic design element - placed to the bottom right */}
                    <div className="absolute bottom-4 right-2 w-24 h-24 rounded-md shadow-lg overflow-hidden transform rotate-[-8deg] z-30 animate-float-slow-reverse">
                      <div className="w-full h-full relative overflow-hidden rounded">
                        <Image 
                          src="/images/content-creatie/aftermovie-relatiedag-2024-4ps-Visulions-2048x1152.jpg.webp" 
                          alt="Grafisch ontwerp voorbeeld"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-1 w-full">
                            <span className="text-white text-[10px] font-medium bg-primary-600/90 py-0.5 px-1 rounded-full">
                              Grafisch Ontw.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Moving elements for visual interest */}
                    <div className="absolute animate-bounce-slow delay-300 top-16 left-2 w-5 h-5 rounded-full bg-primary-100 z-10 flex items-center justify-center">
                      <svg className="w-2 h-2 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div className="absolute animate-bounce-slow delay-700 bottom-16 right-2 w-4 h-4 rounded-full bg-yellow-100 z-10 flex items-center justify-center">
                      <svg className="w-2 h-2 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle branded watermark at bottom right */}
                  <div className="absolute bottom-1 right-1 flex items-center text-[8px] text-gray-500">
                    <span className="mr-1 font-light">in samenwerking met</span>
                    <span className="font-semibold text-primary-700">Visulions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partnership Section - New */}
      <Section className="py-20 bg-white" id="partnership">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              subtitle="Onze samenwerking"
              title="Professionele content in samenwerking met Visulions"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Voor al onze content creatie diensten werken we samen met onze vertrouwde partner 
              <a href="https://visulions.nl/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium"> Visulions</a>. 
              Dit creatieve duo specialiseert zich in het vertellen van visuele verhalen en zorgt ervoor dat 
              jouw merk op de best mogelijke manier wordt gepresenteerd.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl animate-card-float">
              <div className="aspect-video w-full relative">
                <Image
                  src="/images/content-creatie/bedrijfsfilm-mogelijkheden-visulions.jpg.webp"
                  alt="Professionele bedrijfsvideo's door Visulions"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Professionele bedrijfsvideo's</h3>
                    <p className="text-white/80">
                      Breng jouw verhaal tot leven met hoogwaardige bedrijfsvideo's
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Onze partner Visulions creëert hoogwaardige bedrijfsvideo's die jouw verhaal vertellen en je merk tot leven brengen.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=U5FoKqEl2Fs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-primary-600 font-medium"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.4 7.5c-.2-.7-.8-1.3-1.5-1.5-1.3-.4-6.9-.4-6.9-.4s-5.6 0-6.9.4c-.7.2-1.3.8-1.5 1.5C4.2 8.9 4.2 12 4.2 12s0 3.1.4 4.5c.2.7.8 1.3 1.5 1.5 1.3.4 6.9.4 6.9.4s5.6 0 6.9-.4c.7-.2 1.3-.8 1.5-1.5.4-1.4.4-4.5.4-4.5s0-3.1-.4-4.5zM10.2 15.3V8.7l5.7 3.3-5.7 3.3z"/>
                  </svg>
                  Bekijk video-voorbeeld
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl animate-card-float animation-delay-400">
              <div className="aspect-video w-full relative">
                <Image
                  src="/images/content-creatie/drone-visulions.jpg.webp"
                  alt="Drone videografie door Visulions"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Spectaculaire dronevideo's</h3>
                    <p className="text-white/80">
                      Unieke luchtperspectieven voor jouw projecten
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">
                  Met unieke perspectieven vanuit de lucht creëren we adembenemende beelden die jouw locatie of project van zijn beste kant laten zien.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=wyYu-JSjmrI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-primary-600 font-medium"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.4 7.5c-.2-.7-.8-1.3-1.5-1.5-1.3-.4-6.9-.4-6.9-.4s-5.6 0-6.9.4c-.7.2-1.3.8-1.5 1.5C4.2 8.9 4.2 12 4.2 12s0 3.1.4 4.5c.2.7.8 1.3 1.5 1.5 1.3.4 6.9.4 6.9.4s5.6 0 6.9-.4c.7-.2 1.3-.8 1.5-1.5.4-1.4.4-4.5.4-4.5s0-3.1-.4-4.5zM10.2 15.3V8.7l5.7 3.3-5.7 3.3z"/>
                  </svg>
                  Bekijk video-voorbeeld
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100 animate-card-float animation-delay-200">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Waarom we samenwerken met Visulions</h3>
                <p className="text-gray-600 mb-4">
                  Door onze krachten te bundelen met Visulions kunnen we de technische expertise van Next Win combineren met de creatieve visie van een gespecialiseerd content team. Deze samenwerking stelt ons in staat om een volledig pakket aan digitale diensten aan te bieden - van strategie en techniek tot aan de visuele uitvoering.
                </p>
                <div className="flex gap-4">
                  <a href="https://visulions.nl/" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
                    Bezoek de Visulions website
                    <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
                    <h4 className="text-lg font-semibold mb-1">Gebrek aan professionele uitstraling</h4>
                    <p className="text-gray-600">Je huidige foto's en video's stralen niet de kwaliteit uit die je merk verdient, waardoor potentiële klanten minder snel overtuigd raken.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Inconsistente visuele identiteit</h4>
                    <p className="text-gray-600">Je content mist een samenhangende stijl, waardoor je merk verwarrend of onprofessioneel kan overkomen bij je doelgroep.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Tijdgebrek voor contentcreatie</h4>
                    <p className="text-gray-600">Je hebt geen tijd of interne capaciteit om regelmatig hoogwaardige content te maken voor je marketing- en communicatiekanalen.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Moeite met storytelling</h4>
                    <p className="text-gray-600">Je vindt het lastig om het verhaal van je merk op een visueel aantrekkelijke en overtuigende manier te vertellen die resoneert met je doelgroep.</p>
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
            <div className="relative">
              <img 
                src="/content-creatie-lastig.png" 
                alt="Content creatie problemen en uitdagingen" 
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </Section>



      {/* Content Creation Solutions Section */}
      <Section className="py-24 bg-gradient-to-b from-white to-primary-50" id="solution">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              subtitle="Onze content diensten"
              title="Content creatie die jouw merk versterkt"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              In een digitale wereld waar de aandachtsspanne steeds korter wordt, is opvallende content essentieel. 
              Samen met Visulions helpen we je om visuele content te creëren die niet alleen aandacht trekt, maar ook je verhaal vertelt, 
              je merk versterkt en conversies oplevert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drone Video Service */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-lg animate-card-float">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Drone videografie</h3>
              <p className="text-gray-600">
                Spectaculaire luchtopnames die jouw locatie, project of evenement vanuit een uniek perspectief laten zien. Perfect voor vastgoed, bouwprojecten, evenementen en bedrijfsterreinen.
              </p>
            </div>
            
            {/* Product Photography Service */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-lg animate-card-float animation-delay-300">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Productfotografie</h3>
              <p className="text-gray-600">
                Hoogwaardige productfoto's die details benadrukken en klanten overtuigen. Met professionele belichting, styling en retouche maken we je producten onweerstaanbaar voor webshops en catalogi.
              </p>
            </div>
            
            {/* Video Production Service */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-lg animate-card-float animation-delay-600">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Video productie</h3>
              <p className="text-gray-600">
                Van bedrijfsfilms tot productvideo's en testimonials - wij vertellen jouw verhaal in bewegend beeld. Met een volledige productieteam maken we professionele video's die blijven hangen.
              </p>
            </div>
            
            {/* Graphic Design Service */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-lg animate-card-float animation-delay-150">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Grafisch ontwerp</h3>
              <p className="text-gray-600">
                Laat je boodschap opvallen met krachtig grafisch ontwerp. Van logo's en huisstijlen tot social media visuals, advertenties en brochures - wij geven je merk visuele kracht.
              </p>
            </div>
            
            {/* Content Strategy Service */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-lg animate-card-float animation-delay-450">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content strategie</h3>
              <p className="text-gray-600">
                Wij helpen je bij het ontwikkelen van een effectieve contentstrategie die aansluit bij je doelgroep en marketingdoelen. Zo creëren we niet alleen losse content, maar een samenhangend verhaal.
              </p>
            </div>
            
            {/* Custom Approach Box */}
            <div className="bg-primary-600 rounded-xl shadow-md p-6 text-white animate-card-float animation-delay-750">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Onze aanpak</h3>
              <p className="text-white/90 mb-4">
                We starten altijd met een grondige analyse van jouw merk, doelgroep en doelstellingen. Zo creëren we content die niet alleen mooi is, maar ook meetbaar resultaat oplevert.
              </p>
              <Link href="#conversation" className="inline-flex items-center text-white font-medium group">
                Leer meer over onze werkwijze
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              href="#conversation"
              className="bg-primary-600 hover:bg-primary-700 text-white"
              size="lg"
            >
              Vrijblijvend kennismakingsgesprek
            </Button>
          </div>
        </div>
      </Section>

      {/* Portfolio Section - Using FeaturedCases component */}
      <FeaturedCases 
        title="Content met impact"
        subtitle="Succesverhalen"
        description="Bekijk enkele van onze recente projecten en ontdek hoe we ondernemers zoals jij hebben geholpen."
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
              title="Alles wat je wilt weten over content creatie"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              We begrijpen dat je vragen hebt over het creëren van professionele content voor je merk. 
              Hier zijn enkele antwoorden op de meest gestelde vragen. Mis je iets? We horen graag van je!
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

      {/* Call to Action */}
      <Section className="py-20 sm:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden" id="conversation">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Klaar om jouw merk te laten schitteren met professionele content?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Laat ons samen met Visulions je helpen om je merk tot leven te brengen met high-impact visuele content die resultaten oplevert.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-8 mb-8 sm:mb-12 border border-white/20">
              <p className="text-white mb-4 sm:mb-6">Kies de manier die voor jou het beste werkt:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link href="/contact?form=content-creatie" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg shadow-primary-900/30">
                  <svg className="w-5 h-5 mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Maak een vrijblijvende afspraak</span>
                </Link>
                <Link href="tel:+31638146310" className="bg-white hover:bg-gray-100 text-primary-700 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg">
                  <svg className="w-5 h-5 mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Bel direct: 06-3814 6310</span>
                </Link>
              </div>
            </div>
            
            <p className="text-white/80 text-sm">Geen verplichtingen, geen verkooppraatjes, gewoon een eerlijk gesprek over je content behoeften.</p>
          </div>
        </div>
      </Section>
    </div>
  );
} 