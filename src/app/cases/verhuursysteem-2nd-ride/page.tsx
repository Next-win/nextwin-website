"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import RelatedCases from '@/components/ui/RelatedCases';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/Dialog';
import { cn } from '@/lib/utils';
import { Heading1, Heading2, Heading3, Heading4, Paragraph, SectionTitle } from '@/components/ui/Typography';
import BlueDot from '@/components/ui/BlueDot';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  images: {src: string; alt: string}[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal = ({ 
  src, 
  alt, 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev 
}: ImageModalProps) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-7xl p-0 bg-transparent border-none">
      <DialogTitle className="sr-only">Afbeelding Detail</DialogTitle>
      <div className="relative w-full aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        
        {/* Navigation controls */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 focus:outline-none"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 focus:outline-none"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default function CaseStudyPage() {
  const systemImages = [
    {
      src: "/cases/verhuursysteem-2nd-ride/admin-dashboard.png",
      alt: "2nd Ride verhuursysteem - Dashboard"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/admin-product-overview.png",
      alt: "2nd Ride verhuursysteem - Productoverzicht"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/group-size.png",
      alt: "2nd Ride verhuursysteem - Categorie-instellingen"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/product-overview.png",
      alt: "2nd Ride verhuursysteem - Productselectie"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/admin-dashboard-calendar.png",
      alt: "2nd Ride verhuursysteem - Beheerderskalender"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/admin-reservation-details.png",
      alt: "2nd Ride verhuursysteem - Reserveringsdetails"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/select-date.png",
      alt: "2nd Ride verhuursysteem - Datumkeuze"
    },
    {
      src: "/cases/verhuursysteem-2nd-ride/connect-items-to-persons.png",
      alt: "2nd Ride verhuursysteem - Items koppelen aan personen"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string, index: number } | null>(null);
  const [featuredImageIndex, setFeaturedImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const THUMBNAILS_PER_VIEW = 4;

  const openLightbox = (src: string, alt: string, index: number) => {
    setSelectedImage({ src, alt, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (selectedImage) {
      const nextIndex = (selectedImage.index + 1) % systemImages.length;
      setSelectedImage({
        src: systemImages[nextIndex].src,
        alt: systemImages[nextIndex].alt,
        index: nextIndex
      });
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const prevIndex = (selectedImage.index - 1 + systemImages.length) % systemImages.length;
      setSelectedImage({
        src: systemImages[prevIndex].src,
        alt: systemImages[prevIndex].alt,
        index: prevIndex
      });
    }
  };

  const smoothScrollThumbnails = (newStartIndex: number) => {
    if (newStartIndex === thumbnailStartIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setThumbnailStartIndex(newStartIndex);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const handleThumbnailClick = (index: number) => {
    setFeaturedImageIndex(index);
    
    // Auto-scroll thumbnails with smooth behavior
    const currentViewEnd = thumbnailStartIndex + THUMBNAILS_PER_VIEW - 1;
    const isLastVisibleItem = index === currentViewEnd;
    
    if (index < thumbnailStartIndex) {
      // If selected image is before current view, scroll to show it at the top
      smoothScrollThumbnails(Math.max(0, index));
    } else if (index > currentViewEnd) {
      // If selected image is after current view, scroll to show it at the top
      smoothScrollThumbnails(Math.max(0, index));
    } else if (isLastVisibleItem && index < systemImages.length - 1) {
      // If clicking the last visible item and there are more items below, scroll to make it first
      smoothScrollThumbnails(Math.max(0, Math.min(index, systemImages.length - THUMBNAILS_PER_VIEW)));
    }
  };

  const canScrollUp = thumbnailStartIndex > 0;
  const canScrollDown = thumbnailStartIndex + THUMBNAILS_PER_VIEW < systemImages.length;
  
  const scrollThumbnailsUp = () => {
    if (canScrollUp) {
      smoothScrollThumbnails(Math.max(0, thumbnailStartIndex - 1));
    }
  };
  
  const scrollThumbnailsDown = () => {
    if (canScrollDown) {
      smoothScrollThumbnails(Math.min(systemImages.length - THUMBNAILS_PER_VIEW, thumbnailStartIndex + 1));
    }
  };

  const visibleThumbnails = systemImages.slice(thumbnailStartIndex, thumbnailStartIndex + THUMBNAILS_PER_VIEW);

  // Enhanced image data with titles and descriptions
  const enhancedSystemImages = [
    {
      ...systemImages[0],
      title: "Dashboard - Overzicht en controle",
      description: "Het centrale dashboard biedt een compleet overzicht van alle reserveringen, inventaris en belangrijke statistieken voor effectief beheer."
    },
    {
      ...systemImages[1], 
      title: "Productbeheer - Inventaris controle",
      description: "Uitgebreid productbeheer systeem voor het toevoegen, bewerken en monitoren van alle verhuurartikelen met real-time beschikbaarheid."
    },
    {
      ...systemImages[2],
      title: "Groepsindeling - Personen koppelen", 
      description: "Intelligente groepsindeling waarbij verschillende personen met hun specifieke maten en voorkeuren aan één reservering kunnen worden gekoppeld."
    },
    {
      ...systemImages[3],
      title: "Productselectie - Klant interface",
      description: "Gebruiksvriendelijke interface voor klanten om eenvoudig door het productaanbod te browsen en items te selecteren op basis van hun behoeften."
    },
    {
      ...systemImages[4],
      title: "Kalenderweergave - Planning beheer",
      description: "Overzichtelijke kalenderweergave voor het plannen en beheren van reserveringen met drag-and-drop functionaliteit."
    },
    {
      ...systemImages[5],
      title: "Reserveringsdetails - Complete informatie",
      description: "Gedetailleerde weergave van reserveringen met alle klantgegevens, productinformatie en status updates in één overzicht."
    },
    {
      ...systemImages[6],
      title: "Datumkeuze - Beschikbaarheid check",
      description: "Interactieve datumkiezer die real-time de beschikbaarheid van producten toont en conflicten voorkomt."
    },
    {
      ...systemImages[7],
      title: "Item koppeling - Persoonlijke toewijzing",
      description: "Geavanceerde functie voor het toewijzen van specifieke items aan individuele personen binnen een groepsreservering."
    }
  ];

  return (
    <>
      {/* Enhanced Full-bleed Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/cases/verhuursysteem-2nd-ride/thumbnail.webp"
            alt="2nd Ride verhuursysteem - Snowboarders in actie" 
            fill 
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="brightness-75 scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>
        

        
        {/* Navigation & Breadcrumbs - Enhanced styling */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-32 md:pt-40">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center mb-6 text-sm bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
              <Link href="/" className="text-gray-200 hover:text-primary-400 transition-colors">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/cases" className="text-gray-200 hover:text-primary-400 transition-colors">Succesverhalen</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary-400 font-medium">Verhuur Systeem</span>
            </div>
          </div>
        </div>
        
        {/* Hero Content - Enhanced with animations */}
        <div className="absolute left-0 right-0 bottom-0 z-10 mb-20 md:mb-32">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-4 flex items-center space-x-4">
                <span className="text-primary-400 font-semibold bg-primary-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-400/20">
                  Case Study
                </span>
                <span className="text-gray-300 text-sm">
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  1 maand ontwikkeling
                </span>
              </div>
              
              <Heading1 className="text-white mb-8" gradient={false}>
                <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                  2nd Ride
                </span>{" "}
                <span className="block md:inline">Verhuursysteem</span>
              </Heading1>
              
              <Paragraph className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10">
                Van handmatige papierwinkel naar een volledig geautomatiseerd digitaal platform dat het verhuurproces van snowboards revolutioneert.
              </Paragraph>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-900/30 transform hover:scale-105 transition-all duration-300"
                  href="https://verhuur.tweedehandssnowboards.nl/products"
                  isExternal={true}
                  size="lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Bekijk Live Systeem
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  href="#process"
                  size="lg"
                >
                  Ontdek de aanpak
                </Button>
              </div>
              
              {/* Technology Stack */}
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL'].map((tech, idx) => (
                  <span key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-sm text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center animate-bounce">
            <div className="text-white/80 text-sm mb-2 font-medium">Ontdek het verhaal</div>
            <div className="w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Project Info Section */}
      <Section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Professional Project Stats */}
          <div className="mb-20">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-3">1</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Maand ontwikkeling</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-3">60%</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Tijdsbesparing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-3">85%</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Klant tevredenheid</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-3">90%</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Duidelijke aanvragen</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Clean Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sticky top-8">
                <div className="space-y-10">
                  {/* Client Info */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Over de klant</h3>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900">2nd Ride</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Specialist in tweedehands snowboards en wintersportaccessoires, met een showroom in Ede. Van marktplaatshandeltje tot professionele wintersportwinkel.
                    </p>
                  </div>
                  
                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Werkzaamheden</h3>
                    <div className="space-y-3">
                      <div className="inline-block px-4 py-2 rounded-lg bg-primary-50 text-primary-700 text-sm font-medium border border-primary-100">
                        Custom applicatie ontwikkeling
                      </div>
                      <div className="inline-block px-4 py-2 rounded-lg bg-green-50 text-green-700 text-sm font-medium border border-green-100">
                        UX/UI Design
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL'].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-gray-900">
                  Het Verhaal achter de
                  <span className="block text-primary-600">Digitale Transformatie</span>
                </h2>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">De uitdaging</h3>
                    <p className="text-lg leading-relaxed text-gray-600 mb-6">
                      2nd Ride werkte volledig met papiertjes en handmatige processen. Klanten moesten ter plekke alles passen en meten, wat resulteerde in lange wachttijden en een inefficiënt proces. Zonder vooraf te weten welke maten nodig waren, kon het team niets voorbereiden, waardoor elke klant opnieuw het hele pas- en meetproces moest doorlopen.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">De oplossing</h3>
                    <p className="text-lg leading-relaxed text-gray-600 mb-12">
                      Het nieuwe verhuursysteem stelt klanten in staat om direct online spullen te boeken en per artikel hun exacte maten door te geven. Hierdoor kan 2nd Ride alles vooraf klaarhebben liggen, wat zorgt voor een veel sneller proces. Zowel de winkel als de klant profiteert: het team kan zich voorbereiden en klanten worden sneller en efficiënter op maat geholpen.
                    </p>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Process Journey Section - Modern Clean Design */}
      <Section className="py-24 bg-white" id="process">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <SectionTitle
              subtitle="Het proces"
              title="Van Handmatig Naar Digitaal"
              align="center"
            />
            <Paragraph className="max-w-2xl mx-auto text-lg text-gray-600 mt-6">
              De reis om het verhuurproces te transformeren van papierwerk naar een naadloze digitale ervaring.
            </Paragraph>
          </div>
          
          {/* Process Steps */}
          <div className="space-y-24">
            {/* Step 1: Slimme productfilters */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-semibold text-sm mb-8">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Slimme productfilters
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Voor 2nd Ride ontwikkelden we een volledig op maat gemaakt verhuursysteem, ontworpen om klanten moeiteloos te begeleiden bij het selecteren en reserveren van snowboardmateriaal. Het proces begint met slimme productfilters: klanten kiezen hun huurperiode en zien direct welke producten beschikbaar zijn.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Het systeem toont alleen relevante items, ingedeeld in overzichtelijke categorieën zoals snowboardniveau (beginner, gevorderd, expert). Dit maakt het eenvoudig voor klanten om snel het juiste materiaal te vinden, zonder overweldigd te raken door keuzes.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer group border border-gray-100"
                  onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/select-date.png", "2nd Ride verhuursysteem - Productfiltering interface", 6)}
                >
                  <Image 
                    src="/cases/verhuursysteem-2nd-ride/select-date.png"
                    alt="2nd Ride verhuursysteem - Productfiltering interface" 
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">Productfilter Interface</p>
              </div>
            </div>

            {/* Step 2: Persoonlijke afstemming */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer group border border-gray-100"
                  onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/connect-items-to-persons.png", "2nd Ride verhuursysteem - Klantprofiel interface", 7)}
                >
                  <Image 
                    src="/cases/verhuursysteem-2nd-ride/connect-items-to-persons.png"
                    alt="2nd Ride verhuursysteem - Klantprofiel interface" 
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">Klantprofiel Interface</p>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-semibold text-sm mb-8">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Persoonlijke afstemming
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Daarnaast hebben we persoonlijke afstemming mogelijk gemaakt. Voor elke deelnemer in een groep kunnen klanten een profiel aanmaken met details zoals lengte, gewicht en schoenmaat. Het systeem gebruikt deze informatie om automatisch het meest geschikte materiaal te selecteren.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Deze persoonlijke aanpak zorgt niet alleen voor tevreden klanten, maar ook voor een efficiënter proces in de werkplaats van 2nd Ride.
                  </p>
                  
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="absolute top-4 left-4 text-gray-200">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                      </svg>
                    </div>
                    <blockquote className="text-lg text-gray-800 leading-relaxed font-medium pt-6 pl-4 pr-4">
                      Het persoonlijk afstemmen van materiaal op ieders specifieke gegevens heeft zowel de klanttevredenheid als onze efficiëntie enorm verbeterd.
                    </blockquote>
                    <div className="flex items-center mt-8 pl-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                        2R
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Eigenaar</p>
                        <p className="text-sm text-gray-600">2nd Ride</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Soepel afronden */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-semibold text-sm mb-8">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Soepel afronden
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Bij het afronden van de reservering biedt het systeem een duidelijk overzicht van alle geselecteerde items, inclusief kosten per item en totale huurperiode. Dankzij een gebruiksvriendelijke interface kunnen klanten hun reservering snel afronden en eenvoudig contactgegevens invullen.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Het hele proces is ontworpen om intuïtief en soepel te verlopen, zonder onnodige stappen of verwarring.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <BlueDot />
                      <p className="text-gray-700 leading-relaxed">Duidelijk betalingsoverzicht met gedetailleerde prijsopbouw</p>
                    </div>
                    <div className="flex items-start">
                      <BlueDot />
                      <p className="text-gray-700 leading-relaxed">Eenvoudig formulier voor contactgegevens met automatische validatie</p>
                    </div>
                    <div className="flex items-start">
                      <BlueDot />
                      <p className="text-gray-700 leading-relaxed">Directe bevestiging per e-mail met alle reserveringsdetails</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer group border border-gray-100"
                  onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/reservation-review.png", "2nd Ride verhuursysteem - Reserveringsoverzicht", 0)}
                >
                  <Image 
                    src="/cases/verhuursysteem-2nd-ride/reservation-review.png"
                    alt="2nd Ride verhuursysteem - Reserveringsoverzicht" 
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">Reserveringsoverzicht</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* System Functionalities Section - Gallery Showcase */}
      <Section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="Platform Features"
              title="Systeemfunctionaliteiten"
              align="center"
            />
            <Paragraph className="max-w-2xl mx-auto text-xl text-gray-600 mt-6">
              Een volledig geïntegreerd platform dat elk aspect van het verhuurproces beheert, van inventarisbeheer tot klantcommunicatie.
            </Paragraph>
          </div>
          
          {/* Feature highlight bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { 
                icon: (
                  <svg className="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
                title: "Kalenderweergave", 
                desc: "Real-time beschikbaarheid" 
              },
              { 
                icon: (
                  <svg className="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Klantprofielen", 
                desc: "Persoonlijke voorkeuren" 
              },
              { 
                icon: (
                  <svg className="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Dashboards", 
                desc: "Uitgebreide rapportages" 
              },
              { 
                icon: (
                  <svg className="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
                title: "Inventarisbeheer", 
                desc: "Automatische updates" 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-md border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
                <div className="mb-4 inline-flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Main Feature - Interactive Gallery */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden p-8 md:p-12 mb-20 shadow-xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Alles-in-één beheerplatform</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Het verhuursysteem biedt niet alleen een naadloze ervaring voor klanten, maar heeft ook een krachtig beheerderspaneel voor het team van 2nd Ride. Van productbeheer tot reserveringenoverzicht - alles wat nodig is om de verhuurprocessen efficiënt te beheren is verenigd in één toegankelijk platform.
                </p>
                <ul className="space-y-4">
                  {[
                    "Uitgebreid dashboard met belangrijke KPIs",
                    "Eenvoudig reserveringsbeheer met drag-and-drop functionaliteit",
                    "Gedetailleerd klantbeheer",
                    "Inventarisoverzicht met real-time updates"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg group">
                <div 
                  className="relative h-full w-full cursor-pointer"
                  onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/admin-dashboard.png", "2nd Ride verhuursysteem - Dashboard", 0)}
                >
                  <Image
                    src="/cases/verhuursysteem-2nd-ride/admin-dashboard.png"
                    alt="2nd Ride verhuursysteem - Dashboard"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white px-6 py-3 rounded-full font-medium shadow-xl">
                      Bekijk scherm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Screenshot Gallery - Sliding Thumbnail Navigation */}
          <SectionTitle 
            title="Ontdek alle functionaliteiten" 
            subtitle="Systeemoverzicht"
            align="center"
          />
          
          {/* Main Layout: Large image on left, thumbnails on right */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Featured Image - Left Side */}
            <div className="lg:col-span-2">
              <div 
                className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 group"
                onClick={() => openLightbox(enhancedSystemImages[featuredImageIndex].src, enhancedSystemImages[featuredImageIndex].title, featuredImageIndex)}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={enhancedSystemImages[featuredImageIndex].src}
                    alt={enhancedSystemImages[featuredImageIndex].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/90 text-sm font-medium">Klik om te vergroten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation & Info - Right Side */}
            <div className="lg:col-span-1 flex flex-col">
              
              {/* Compact Vertical Thumbnail Navigation with Scroll */}
              <div className="flex flex-col h-fit mb-8">
                {/* Scroll Up Button */}
                <button
                  onClick={scrollThumbnailsUp}
                  disabled={!canScrollUp || isTransitioning}
                  className={cn(
                    "flex items-center justify-center py-2 mb-2 rounded-lg transition-all duration-200",
                    canScrollUp && !isTransitioning
                      ? "text-gray-600 hover:text-primary-600 hover:bg-gray-50" 
                      : "text-gray-300 cursor-not-allowed"
                  )}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>

                {/* Thumbnail List */}
                <div className="relative h-fit mb-2">
                  <div 
                    className={cn(
                      "flex flex-col space-y-2 transition-all duration-300 ease-out px-1",
                      isTransitioning && "opacity-70"
                    )}
                  >
                    {visibleThumbnails.map((image, relativeIndex) => {
                      const actualIndex = thumbnailStartIndex + relativeIndex;
                      const isActive = featuredImageIndex === actualIndex;
                      
                      return (
                        <div
                          key={actualIndex}
                          className={cn(
                            "relative cursor-pointer group flex items-center rounded-lg transition-all duration-300 ease-out",
                            // Fixed sizing to prevent layout shifts
                            "px-3 py-2 min-h-[56px]",
                            // Active state with subtle background
                            isActive && "bg-primary-50",
                            // Hover states
                            !isActive && "hover:bg-gray-50"
                          )}
                          onClick={() => handleThumbnailClick(actualIndex)}
                        >
                          <div className="w-16 h-10 rounded-md overflow-hidden shadow-sm bg-white flex-shrink-0">
                            <div className="w-full h-full overflow-hidden">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                width={64}
                                height={40}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          
                          <div className="ml-3 flex-1 min-w-0">
                            <p className={cn(
                              "text-xs font-medium truncate transition-colors duration-200",
                              isActive ? "text-primary-700" : "text-gray-600"
                            )}>
                              {enhancedSystemImages[actualIndex].title.split(' - ')[0]}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {actualIndex + 1}/{systemImages.length}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Scroll Down Button */}
                <button
                  onClick={scrollThumbnailsDown}
                  disabled={!canScrollDown || isTransitioning}
                  className={cn(
                    "flex items-center justify-center py-2 rounded-lg transition-all duration-200",
                    canScrollDown && !isTransitioning
                      ? "text-gray-600 hover:text-primary-600 hover:bg-gray-50" 
                      : "text-gray-300 cursor-not-allowed"
                  )}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Scroll Indicator */}
                {systemImages.length > THUMBNAILS_PER_VIEW && (
                  <div className="text-center mt-2">
                    <div className="flex justify-center space-x-1">
                      {Array.from({ length: Math.ceil(systemImages.length / THUMBNAILS_PER_VIEW) }).map((_, pageIndex) => {
                        const isActive = Math.floor(thumbnailStartIndex / THUMBNAILS_PER_VIEW) === pageIndex;
                        return (
                          <div
                            key={pageIndex}
                            className={cn(
                              "w-1.5 h-1.5 rounded-full transition-colors duration-200",
                              isActive ? "bg-primary-500" : "bg-gray-300"
                            )}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Current Image Info */}
              <div className="mt-4">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600">
                      {featuredImageIndex + 1} / {systemImages.length}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      Functionaliteit
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {enhancedSystemImages[featuredImageIndex].title}
                  </h3>
                </div>
                
                {/* Dynamic descriptions for each image */}
                <div className="text-sm text-gray-600 leading-relaxed mb-6">
                  <p>{enhancedSystemImages[featuredImageIndex].description}</p>
                </div>

                {/* Navigation arrows */}
                <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleThumbnailClick(Math.max(0, featuredImageIndex - 1))}
                    disabled={featuredImageIndex === 0}
                    className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Vorige
                  </button>
                  <button
                    onClick={() => handleThumbnailClick(Math.min(systemImages.length - 1, featuredImageIndex + 1))}
                    disabled={featuredImageIndex === systemImages.length - 1}
                    className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Volgende
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Grid Fallback */}
          <div className="mt-12 lg:hidden">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Alle functionaliteiten</h3>
            <div className="grid grid-cols-2 gap-3">
              {systemImages.map((image, index) => (
                <div
                  key={`mobile-${index}`}
                  className="relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => openLightbox(image.src, enhancedSystemImages[index].title, index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Results Section - Impact Showcase */}
      <Section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="Impact & Voordelen"
              title="Meetbare Resultaten"
              align="center"
            />
            <Paragraph className="max-w-2xl mx-auto text-xl text-gray-600 mt-6">
              Het verhuursysteem heeft een significante impact gehad op zowel de operationele efficiëntie als de klanttevredenheid.
            </Paragraph>
          </div>
          
          {/* Results Cards - Style matched with About Us page */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <svg className="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Geoptimaliseerde Processen</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aanzienlijke reductie van administratieve lasten en handmatige fouten. Het systeem heeft de werkdruk merkbaar verminderd.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <svg className="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Verbeterde Klantervaring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Intuïtief reserveringsproces dat klanten moeiteloos door het huurproces leidt. Klanten waarderen de duidelijke stappen en snelle afhandeling.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <svg className="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Schaalbare Oplossing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Softwareplatform dat meegroeit met het toenemende klantenbestand en productaanbod. Het systeem is voorbereid op toekomstige uitbreidingen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          

          
          {/* Conclusion Section */}
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Resultaten & Conclusie</h2>
                
                <div className="space-y-6 text-gray-700">
                  <p>
                    Met dit nieuwe verhuursysteem heeft 2nd Ride niet alleen hun processen geoptimaliseerd, maar ook een professionele indruk achtergelaten bij hun klanten. De digitale transformatie heeft geleid tot meerdere tastbare voordelen:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-primary-600 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h3 className="font-semibold text-lg">Efficiëntere processen</h3>
                      </div>
                      <p>Merkbare tijdsbesparing bij het verwerken van verhuurorders en beheer van de inventaris.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-primary-600 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 className="font-semibold text-lg">Klanttevredenheid</h3>
                      </div>
                      <p>Significante verbetering van de klanttevredenheid door gestroomlijnde verhuurprocessen.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-primary-600 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="font-semibold text-lg">Groei</h3>
                      </div>
                      <p>Het systeem is gemakkelijk schaalbaar en groeit mee met de toenemende vraag naar wintersportmateriaal.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-primary-600 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="font-semibold text-lg">ROI</h3>
                      </div>
                      <p>Het systeem levert een positieve return on investment door verbeterde efficiency en klanttevredenheid.</p>
                    </div>
                  </div>
                  
                  <p>
                    Dankzij deze digitale transformatie kan 2nd Ride nu nog meer wintersportliefhebbers helpen met het juiste materiaal, terwijl ze zich voorbereiden op verdere groei. Het verhuursysteem vormt een solide basis voor toekomstige uitbreidingen en nieuwe functionaliteiten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Related Cases Section */}
      <RelatedCases 
        bgColor="bg-white"
        maxCases={3}
        excludeCaseId="verhuursysteem-2nd-ride"
      />
      
      {/* Enhanced Call to Action Section */}
      <Section className="py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Klaar voor jouw digitale transformatie?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Laat ons helpen jouw handmatige processen om te zetten naar efficiënte digitale oplossingen die je bedrijf laten groeien.
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
            
            {/* Scroll to Top Button */}
            <div className="mt-16 inline-block">
              <Button 
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-transparent flex items-center gap-2 group"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>Terug naar boven</span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Image Modal with navigation */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeLightbox}
          images={systemImages}
          currentIndex={selectedImage.index}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
} 