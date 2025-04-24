"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/Dialog';
import { cn } from '@/lib/utils';
import { Heading1, Heading2, Heading3, Heading4, Paragraph, SectionTitle } from '@/components/ui/Typography';
import RelatedCases from '@/components/ui/RelatedCases';

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
  const images = [
    {
      src: "/cases/oudhollandsspel/homepage.png",
      alt: "Homepage van Oudhollandsspel",
      title: "Homepage - Modern en uitnodigend design"
    },
    {
      src: "/cases/oudhollandsspel/spellen-overzicht.png",
      alt: "Overzicht van beschikbare spellen",
      title: "Spellen overzicht - Duidelijk en overzichtelijk"
    },
    {
      src: "/cases/oudhollandsspel/spellen-detail-page.png",
      alt: "Detail pagina van een spel",
      title: "Spel detail - Uitgebreide informatie"
    },
    {
      src: "/cases/oudhollandsspel/offerte-aanvragen.png",
      alt: "Offerte aanvraag pagina",
      title: "Offerte aanvragen - Eenvoudig proces"
    },
    {
      src: "/cases/oudhollandsspel/afrekenen.png",
      alt: "Afrekenpagina",
      title: "Afrekenen - Veilig en gebruiksvriendelijk"
    },
    {
      src: "/cases/oudhollandsspel/extra-addons-products.png",
      alt: "Extra producten en add-ons",
      title: "Extra opties - Flexibele keuzes"
    },
    {
      src: "/cases/oudhollandsspel/tent-verhuur.png",
      alt: "Tent verhuur opties",
      title: "Tent verhuur - Complete oplossing"
    },
    {
      src: "/cases/oudhollandsspel/ready-play-steps.png",
      alt: "Stappen voor Ready to Play",
      title: "Ready to Play - Stapsgewijs proces"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string, index: number } | null>(null);

  const openLightbox = (src: string, alt: string, index: number) => {
    setSelectedImage({ src, alt, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (selectedImage) {
      const nextIndex = (selectedImage.index + 1) % images.length;
      setSelectedImage({
        src: images[nextIndex].src,
        alt: images[nextIndex].alt,
        index: nextIndex
      });
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const prevIndex = (selectedImage.index - 1 + images.length) % images.length;
      setSelectedImage({
        src: images[prevIndex].src,
        alt: images[prevIndex].alt,
        index: prevIndex
      });
    }
  };

  return (
    <>
      {/* Full-bleed Hero Section */}
      <div className="relative w-full h-[95vh] overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/cases/oudhollandsspel/thumbnail.webp"
            alt="Oudhollandsspel - Website redesign" 
            fill 
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        {/* Navigation & Breadcrumbs - Positioned at the top */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-32 md:pt-40">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center mb-6 text-sm">
              <Link href="/" className="text-gray-200 hover:text-primary-400 transition-colors">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/cases" className="text-gray-200 hover:text-primary-400 transition-colors">Succesverhalen</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary-400">Oudhollandsspel</span>
            </div>
          </div>
        </div>
        
        {/* Hero Content - Positioned at the bottom */}
        <div className="absolute left-0 right-0 bottom-0 z-10 mb-16 md:mb-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary-400 font-medium mb-2 block">Case Study</span>
              <Heading1 className="text-white mb-6" gradient={false}>
                <span className="text-white from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Oudhollandsspel
                </span>
              </Heading1>
              <Paragraph className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                Een frisse en vrolijke website redesign voor een (h)echt familiebedrijf met een rijke historie in traditionele Nederlandse spellen.
              </Paragraph>
              <Button 
                className="bg-primary-500 hover:bg-primary-600 text-white"
                onClick={() => openLightbox("/cases/oudhollandsspel/thumbnail.webp", "Oudhollandsspel - Website redesign", 0)}
              >
                Bekijk Project
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Metrics Section */}
      <Section className="py-16 -mt-32 relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-primary-600 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Zichtbaarheid</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-primary-600">157%</span>
                <span className="ml-2 text-gray-600">Groei</span>
              </div>
              <p className="mt-3 text-gray-600">Van 7% naar 18% zichtbaarheid in zoekmachines</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-primary-600 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Bezoekers</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-primary-600">440%</span>
                <span className="ml-2 text-gray-600">Groei</span>
              </div>
              <p className="mt-3 text-gray-600">Van 50 naar 270 bezoekers per dag</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-primary-600 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Featured Snippets</h3>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-primary-600">#1</span>
                <span className="ml-2 text-gray-600">Positie</span>
              </div>
              <p className="mt-3 text-gray-600">Voor belangrijke zoektermen zoals 'sjoelen'</p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Project Info Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Client Info */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Over de klant</h3>
                  <p className="text-lg font-medium mb-2">Oudhollandsspel - De Houtiek</p>
                  <p className="text-gray-600">Specialist in traditionele Nederlandse spellen, een familiebedrijf met passie voor authentiek vermaak.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Werkzaamheden</h3>
                  <div className="space-y-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                      Webdesign
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologieën</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">WordPress</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">Custom Theme</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">PHP</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Projectoverzicht</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed">
                  We hebben Oudhollandsspel.nl geholpen bij het bepalen van de juiste look & feel van de website en hebben het nieuwe design op basis van hun feedback en wensen ontworpen. Er is gekozen voor frisse en vrolijke kleuren en een strakke look & feel die past bij het familiebedrijf.
                </p>
                <p className="text-lg leading-relaxed">
                  Daarnaast hebben we nieuwe teksten geschreven voor de website om bezoekers meer informatie te geven over alle spellen, inclusief historische verhalen over het ontstaan van ieder oud hollands spel.
                </p>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">100%</span>
                  <span className="text-gray-600">Maatwerk design</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">35%</span>
                  <span className="text-gray-600">Meer offerte-aanvragen</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">50%</span>
                  <span className="text-gray-600">Snellere laadtijd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Development Process Section */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="Het proces"
              title="Ontwikkeling van de Website"
              align="center"
            />
            <Paragraph className="max-w-2xl mx-auto text-xl text-gray-600 mt-6">
              Van concept naar een volledig functionele website met focus op gebruiksgemak en automatisering.
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">WordPress Maatwerk</h3>
              <p className="text-lg leading-relaxed">
                Er is gekozen voor een WordPress CMS, waarbij gebruik is gemaakt van maatwerk thema's en plug-ins. Het belangrijkste doel van de nieuwe website was het verbeteren van de gebruikerservaring.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Zelf offertes samenstellen en opvragen</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Automatische berekening van bezorgkosten op basis van afstand</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Historische verhalen bij elk spel</span>
                </li>
              </ul>
            </div>
            
            <div 
              className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer transform hover:scale-[1.02] transition-transform duration-500 border-8 border-white"
              onClick={() => openLightbox("/cases/oudhollandsspel/offerte-aanvragen.png", "Oudhollandsspel - Offerte samenstellen", 3)}
            >
              <Image 
                src="/cases/oudhollandsspel/offerte-aanvragen.png"
                alt="Oudhollandsspel - Offerte samenstellen"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-primary-900/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Gallery Section */}
      <Section>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Website Impressie" 
            subtitle="Visueel Overzicht"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(image.src, image.title, index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="Impact & Voordelen"
              title="Het Resultaat"
              align="center"
            />
            <Paragraph className="max-w-2xl mx-auto text-xl text-gray-600 mt-6">
              Een website die perfect aansluit bij de identiteit van het familiebedrijf en de gebruikerservaring naar een hoger niveau tilt.
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <svg className="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">SEO Prestaties</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Van 7% naar 18% zichtbaarheid en featured snippets voor belangrijke zoekwoorden zoals 'sjoelen' en 'puntentelling sjoelen'.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <svg className="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Bezoekers Groei</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stijging van gemiddeld 50 naar 270 bezoekers per dag dankzij verbeterde content en zichtbaarheid.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                <div className="shrink-0">
                  <svg className="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">Waardevolle Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Content die perfect aansluit bij de zoekintentie, met net dat beetje extra informatie dat de concurrentie niet biedt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <Paragraph className="text-lg text-gray-600">
              Het resultaat van het project is een geheel nieuwe website die niet alleen past bij het (h)echte familiebedrijf Oudhollandsspel.nl, maar ook uitstekend presteert in zoekmachines. De website heeft een frisse en vrolijke uitstraling gekregen en biedt een verbeterde gebruikerservaring. Door content te creëren die perfect aansluit bij wat bezoekers zoeken, en net dat beetje extra te bieden, hebben we featured snippets behaald voor belangrijke zoektermen. Dit heeft geleid tot een indrukwekkende stijging in organisch verkeer, van 50 naar 270 bezoekers per dag. We zijn trots op deze resultaten en hebben genoten van de samenwerking met het familiebedrijf.
            </Paragraph>
          </div>
        </div>
      </Section>

      {/* Related Cases Section */}
      <RelatedCases 
        bgColor="bg-white"
        maxCases={3}
        excludeCaseId="oudhollandsspel"
      />

      {/* Call to Action Section */}
      <Section className="py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Benieuwd naar wat wij voor jou kunnen betekenen?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Laat ons je helpen om jouw online aanwezigheid naar het volgende niveau te tillen.
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

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeLightbox}
          images={images}
          currentIndex={selectedImage.index}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
} 