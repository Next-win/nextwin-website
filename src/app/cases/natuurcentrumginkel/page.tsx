"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/Dialog';
import { cn } from '@/lib/utils';
import { Heading1, Heading2, Heading3, Heading4, Paragraph, SectionTitle, Subtitle } from '@/components/ui/Typography';
import RelatedCases from '@/components/ui/RelatedCases';
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

export default function NatuurcentrumGinkelCaseStudy() {
  const images = [
    {
      src: "/cases/natuurcentrumginkel/Scherm­afbeelding 2025-08-15 om 13.33.15.png",
      alt: "Welkom bij het vernieuwde Natuurcentrum de Ginkel! Ontdek direct op de homepage alle activiteiten, wandelroutes en educatieve programma's die het centrum te bieden heeft.",
      title: "Homepage - Direct naar de natuur"
    },
    {
      src: "/cases/natuurcentrumginkel/Scherm­afbeelding 2025-08-15 om 13.34.18.png",
      alt: "Vind gemakkelijk de perfecte activiteit voor jouw bezoek. Van wildkijktochten tot educatieve programma's - alles overzichtelijk gepresenteerd met data en beschikbaarheid.",
      title: "Activiteiten - Vind jouw natuurbeleving"
    },
    {
      src: "/cases/natuurcentrumginkel/screencapture-natuurcentrumdeginkel-nl-over-ons-2025-08-15-13_37_01.png",
      alt: "Lees het inspirerende verhaal achter de transformatie van het natuurcentrum en ontdek waarom De Ginkel een unieke plek is op de Zuid-Veluwe.",
      title: "Over ons - Het verhaal achter de transformatie"
    },
    {
      src: "/cases/natuurcentrumginkel/screencapture-natuurcentrumdeginkel-nl-product-cadeaubon-2025-08-15-13_37_46.png",
      alt: "Geef het cadeau van natuur! Koop eenvoudig online cadeaubonnen voor activiteiten, workshops of bezoeken. Perfect voor natuurliefhebbers.",
      title: "Cadeaukaarten - Het perfecte natuurcadeau"
    },
    {
      src: "/cases/natuurcentrumginkel/screencapture-natuurcentrumdeginkel-nl-cart-2025-08-15-13_38_33.png",
      alt: "Overzichtelijke winkelwagen waar bezoekers hun geselecteerde activiteiten en producten kunnen bekijken voordat ze verder gaan naar de betaling.",
      title: "Winkelwagen - Overzicht van jouw selectie"
    },
    {
      src: "/cases/natuurcentrumginkel/screencapture-natuurcentrumdeginkel-nl-checkout-2025-08-15-13_38_44.png",
      alt: "Veilig en snel afrekenen met verschillende betaalopties. Het boekingsproces is geoptimaliseerd voor een soepele gebruikerservaring.",
      title: "Afrekenen - Snel en veilig boeken"
    },
    {
      src: "/cases/natuurcentrumginkel/screencapture-natuurcentrumdeginkel-nl-contact-2025-08-15-13_38_08.png",
      alt: "Alle contactgegevens, openingstijden en praktische informatie voor jouw bezoek aan Natuurcentrum de Ginkel op één plek.",
      title: "Contact - Plan jouw bezoek"
    },
    {
      src: "/cases/natuurcentrumginkel/screencapture-natuurcentrumdeginkel-nl-veelgestelde-vragen-2025-08-15-13_37_38.png",
      alt: "Antwoorden op de meest gestelde vragen over activiteiten, toegankelijkheid, groepsbezoeken en praktische zaken rondom jouw bezoek.",
      title: "Veelgestelde vragen - Alle antwoorden op één plek"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string, index: number } | null>(null);
  const [featuredImageIndex, setFeaturedImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const THUMBNAILS_PER_VIEW = 4;

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
    
    // Reset scroll position of the featured image
    const imageElement = document.getElementById('featured-image');
    if (imageElement) {
      imageElement.scrollTop = 0;
    }
    
    // Auto-scroll thumbnails with smooth behavior
    const currentViewEnd = thumbnailStartIndex + THUMBNAILS_PER_VIEW - 1;
    const isLastVisibleItem = index === currentViewEnd;
    
    if (index < thumbnailStartIndex) {
      // If selected image is before current view, scroll to show it at the top
      smoothScrollThumbnails(Math.max(0, index));
    } else if (index > currentViewEnd) {
      // If selected image is after current view, scroll to show it at the top
      smoothScrollThumbnails(Math.max(0, index));
    } else if (isLastVisibleItem && index < images.length - 1) {
      // If clicking the last visible item and there are more items below, scroll to make it first
      smoothScrollThumbnails(Math.max(0, Math.min(index, images.length - THUMBNAILS_PER_VIEW)));
    }
  };

  const canScrollUp = thumbnailStartIndex > 0;
  const canScrollDown = thumbnailStartIndex + THUMBNAILS_PER_VIEW < images.length;
  
  const scrollThumbnailsUp = () => {
    if (canScrollUp) {
      smoothScrollThumbnails(Math.max(0, thumbnailStartIndex - 1));
    }
  };
  
  const scrollThumbnailsDown = () => {
    if (canScrollDown) {
      smoothScrollThumbnails(Math.min(images.length - THUMBNAILS_PER_VIEW, thumbnailStartIndex + 1));
    }
  };

  const visibleThumbnails = images.slice(thumbnailStartIndex, thumbnailStartIndex + THUMBNAILS_PER_VIEW);

  // Auto-detect tall images and start auto-scrolling
  useEffect(() => {
    const checkImageHeight = () => {
      const imageElement = document.getElementById('featured-image');
      if (imageElement) {
        const containerHeight = imageElement.clientHeight;
        const contentHeight = imageElement.scrollHeight;
        const heightRatio = contentHeight / containerHeight;
        
        // Auto-start scrolling if image is significantly taller (more than 150% of container)
        if (heightRatio > 1.5) {
          setIsAutoScrolling(true);
        } else {
          setIsAutoScrolling(false);
        }
      }
    };
    
    // Check after a short delay to ensure image is loaded
    const timer = setTimeout(checkImageHeight, 1000);
    
    return () => clearTimeout(timer);
  }, [featuredImageIndex]);

  // Auto-scroll effect for tall images
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isAutoScrolling) {
      const imageElement = document.getElementById('featured-image');
      if (imageElement) {
        let scrollDirection = 1;
        let scrollPosition = 0;
        
        interval = setInterval(() => {
          const maxScroll = imageElement.scrollHeight - imageElement.clientHeight;
          
          if (maxScroll <= 0) return;
          
          scrollPosition += scrollDirection * 2;
          
          if (scrollPosition >= maxScroll) {
            scrollDirection = -1;
            scrollPosition = maxScroll;
          } else if (scrollPosition <= 0) {
            scrollDirection = 1;
            scrollPosition = 0;
          }
          
          imageElement.scrollTop = scrollPosition;
        }, 50);
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  const handleImageLoad = () => {
    // Check image height after it loads
    setTimeout(() => {
      const imageElement = document.getElementById('featured-image');
      if (imageElement) {
        const containerHeight = imageElement.clientHeight;
        const contentHeight = imageElement.scrollHeight;
        const heightRatio = contentHeight / containerHeight;
        
        // Auto-start scrolling if image is significantly taller (more than 150% of container)
        if (heightRatio > 1.5) {
          setIsAutoScrolling(true);
        } else {
          setIsAutoScrolling(false);
        }
      }
    }, 100);
  };

  return (
    <>
      {/* Enhanced Full-bleed Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/cases/natuurcentrumginkel/hero-natuurcentrumginkel.jpg"
            alt="Natuurcentrum de Ginkel - Website redesign" 
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
              <span className="text-primary-400 font-medium">Natuurcentrum de Ginkel</span>
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
                  3 maanden ontwikkeling
                </span>
              </div>
              
              <Heading1 className="text-white mb-8" gradient={false}>
                <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                  Natuurcentrum de Ginkel
                </span>{" "}
                <span className="block md:inline">Website & Webshop</span>
              </Heading1>
              
              <Paragraph className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10">
                Van verouderd naar toekomstbestendig. Een complete digitale transformatie die 
                perfect aansluit bij hun rebranding, verbouwing en nieuwe identiteit als 
                Natuurcentrum De Ginkel.
              </Paragraph>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="bg-primary-500 hover:bg-primary-600 text-white shadow-xl shadow-primary-900/30 transform hover:scale-105 transition-all duration-300"
                  href="https://natuurcentrumdeginkel.nl"
                  isExternal={true}
                  size="lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Bekijk Live Website
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => {
                    const processSection = document.getElementById('process');
                    processSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                >
                  Ontdek het verhaal
                </Button>
              </div>
              
              {/* Technology Stack */}
              <div className="flex flex-wrap gap-3">
                {['WordPress', 'WooCommerce', 'Custom Development', 'SEO'].map((tech, idx) => (
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
      
      {/* Quick Metrics Section */}
      <Section className="py-12 -mt-32 relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg className="h-6 w-6 text-primary-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Bezoekers</h3>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-primary-600">125%</span>
                <span className="ml-2 text-sm text-gray-600">Groei</span>
              </div>
              <p className="text-sm text-gray-600">Meer websitebezoekers sinds de lancering</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg className="h-6 w-6 text-primary-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Online Verkoop</h3>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-primary-600">200%</span>
                <span className="ml-2 text-sm text-gray-600">Groei</span>
              </div>
              <p className="text-sm text-gray-600">Toename in online ticketverkoop</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg className="h-6 w-6 text-primary-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Laadsnelheid</h3>
              </div>
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-primary-600">90%</span>
                <span className="ml-2 text-sm text-gray-600">Sneller</span>
              </div>
              <p className="text-sm text-gray-600">Verbeterde performance en gebruikerservaring</p>
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
                  <p className="text-lg font-medium mb-2">Natuurcentrum de Ginkel</p>
                  <p className="text-gray-600">Een natuurcentrum dat educatie en natuurbeleving combineert met evenementen en activiteiten voor alle leeftijden.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Werkzaamheden</h3>
                  <div className="space-y-2">
                    <Subtitle className="!mb-0 !px-4 !py-2 !inline-flex items-center">
                      Website Redesign
                    </Subtitle>
                    <Subtitle className="!mb-0 !px-4 !py-2 !inline-flex items-center">
                      E-commerce Ontwikkeling
                    </Subtitle>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologieën</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">WordPress</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">WooCommerce</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">PHP</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Projectoverzicht</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed">
                  Een verhaal van complete transformatie. De oude website van Natuurcentrum de Ginkel was 
                  ontwikkeld in het verre verleden met een zwaar verouderd thema dat bijna onmogelijk te 
                  updaten was. Maar er gebeurde meer dan alleen een website vernieuwing.
                </p>
                <p className="text-lg leading-relaxed">
                  Het natuurcentrum onderging namelijk een prachtige update van hun pand en ging verder 
                  met een nieuwe naam en logo. Van "Natuurcentrum Veluwe" naar "Natuurcentrum De Ginkel" - 
                  een rebranding die paste bij hun uitbreiding en moderne visie. Bij deze nieuwe identiteit 
                  hoorde natuurlijk ook een volledig nieuwe huisstijl en zodoende een complete website redesign 
                  gericht op de toekomst.
                </p>
                <p className="text-lg leading-relaxed">
                  De afgelopen maanden was er hard gewerkt aan de verbouwing en uitbreiding van de oude 
                  boerderij. Door het oorspronkelijke pand uit te breiden met een moderne en duurzame 
                  aanbouw ontstond er meer ruimte voor educatieve activiteiten, tentoonstellingen en 
                  informatieverstrekking - allemaal toegespitst op "het verhaal van De Ginkel".
                </p>
                <p className="text-lg leading-relaxed">
                  Wij ontwikkelden een krachtige WordPress website met geïntegreerde WooCommerce webshop 
                  die perfect aansluit bij hun nieuwe identiteit. Het resultaat? Een toekomstbestendige 
                  digitale ervaring die bezoekers inspireert om het prachtige heidegebied en de uitgestrekte 
                  bossen van de Zuid-Veluwe te ontdekken.
                </p>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">100%</span>
                  <span className="text-gray-600">Maatwerk oplossing</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">8</span>
                  <span className="text-gray-600">Hoofdpagina's</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">4.8/5</span>
                  <span className="text-gray-600">Gebruikerswaardering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Screenshot Gallery - Sliding Thumbnail Navigation */}
      <Section id="process" className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Ontdek alle functionaliteiten" 
            subtitle="Website showcase"
            align="center"
          />
          
          {/* Main Layout: Large image on left, thumbnails on right */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Featured Image - Left Side */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <div 
                    id="featured-image"
                    className="w-full h-full overflow-y-auto scrollbar-hide"
                    style={{ 
                      scrollBehavior: isAutoScrolling ? 'auto' : 'smooth'
                    }}
                  >
                    <Image
                      src={images[featuredImageIndex].src}
                      alt={images[featuredImageIndex].alt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                      style={{ minHeight: '100%' }}
                      onLoad={handleImageLoad}
                    />
                  </div>
                  
                  {/* Auto-scroll toggle button */}
                  <button
                    onClick={toggleAutoScroll}
                    className={cn(
                      "absolute top-4 right-4 p-3 rounded-full transition-all duration-300 shadow-lg z-10",
                      isAutoScrolling 
                        ? "bg-primary-600 text-white" 
                        : "bg-white/90 text-gray-700 hover:bg-white"
                    )}
                    title={isAutoScrolling ? "Stop auto-scroll" : "Start auto-scroll"}
                  >
                    {isAutoScrolling ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    )}
                  </button>

                  {/* Lightbox button */}
                  <button
                    onClick={() => openLightbox(images[featuredImageIndex].src, images[featuredImageIndex].alt, featuredImageIndex)}
                    className="absolute top-4 left-4 p-3 rounded-full bg-white/90 hover:bg-white text-gray-700 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  
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
                              {images[actualIndex].title.split(' - ')[0]}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {actualIndex + 1}/{images.length}
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
                {images.length > THUMBNAILS_PER_VIEW && (
                  <div className="text-center mt-2">
                    <div className="flex justify-center space-x-1">
                      {Array.from({ length: Math.ceil(images.length / THUMBNAILS_PER_VIEW) }).map((_, pageIndex) => {
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
                      {featuredImageIndex + 1} / {images.length}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      Functionaliteit
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {images[featuredImageIndex].title}
                  </h3>
                </div>
                
                {/* Dynamic descriptions for each image */}
                <div className="text-sm text-gray-600 leading-relaxed mb-6">
                  <p>{images[featuredImageIndex].alt}</p>
                </div>

                {/* Auto-scroll indicator */}
                {isAutoScrolling && (
                  <div className="flex items-center text-sm text-primary-600 bg-primary-50 px-3 py-2 rounded-lg mb-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></div>
                    Auto-scrolling actief
                  </div>
                )}

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
                    onClick={() => handleThumbnailClick(Math.min(images.length - 1, featuredImageIndex + 1))}
                    disabled={featuredImageIndex === images.length - 1}
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
        </div>
      </Section>

      {/* Mobile Experience Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Mobiele ervaring"
                title="Perfect op alle apparaten"
                align="left"
              />
              
              <div className="space-y-6">
                <Paragraph className="text-gray-600">
                  De website is volledig geoptimaliseerd voor mobiele apparaten. Met meer dan 70% 
                  van de bezoekers die de website via hun smartphone bezoeken, was een perfecte 
                  mobiele ervaring essentieel.
                </Paragraph>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BlueDot />
                    <Paragraph className="text-gray-600">
                      Responsive design dat zich aanpast aan elk schermformaat
                    </Paragraph>
                  </div>
                  <div className="flex items-start gap-3">
                    <BlueDot />
                    <Paragraph className="text-gray-600">
                      Geoptimaliseerde laadtijden voor mobiele verbindingen
                    </Paragraph>
                  </div>
                  <div className="flex items-start gap-3">
                    <BlueDot />
                    <Paragraph className="text-gray-600">
                      Touch-vriendelijke navigatie en interactie
                    </Paragraph>
                  </div>
                  <div className="flex items-start gap-3">
                    <BlueDot />
                    <Paragraph className="text-gray-600">
                      Mobiel geoptimaliseerd checkout proces
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <div className="relative">
                <Image
                  src="/cases/natuurcentrumginkel/Scherm­afbeelding 2025-08-15 om 13.52.08.png"
                  alt="Mobiele weergave Natuurcentrum de Ginkel"
                  width={200}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="relative mt-8">
                <Image
                  src="/cases/natuurcentrumginkel/Scherm­afbeelding 2025-08-15 om 13.52.16.png"
                  alt="Mobiele navigatie Natuurcentrum de Ginkel"
                  width={200}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="relative mt-4">
                <Image
                  src="/cases/natuurcentrumginkel/Scherm­afbeelding 2025-08-15 om 13.52.50.png"
                  alt="Mobiele checkout Natuurcentrum de Ginkel"
                  width={200}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="py-20 bg-primary-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTitle
              subtitle="Resultaten"
              title="Meetbare impact na de lancering"
              align="center"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">+125%</div>
              <div className="text-gray-600">Meer websitebezoekers</div>
              <div className="text-sm text-gray-500 mt-1">Vergeleken met vorige jaar</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">+200%</div>
              <div className="text-gray-600">Online ticketverkoop</div>
              <div className="text-sm text-gray-500 mt-1">Sinds lancering webshop</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
              <div className="text-gray-600">Snellere laadtijd</div>
              <div className="text-sm text-gray-500 mt-1">Vergeleken met oude website</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Gebruikerswaardering</div>
              <div className="text-sm text-gray-500 mt-1">Gemiddelde score bezoekers</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <Heading3 className="text-2xl font-bold mb-4 text-gray-900">
                "De nieuwe website heeft onze online aanwezigheid compleet getransformeerd"
              </Heading3>
              <Paragraph className="text-gray-600 mb-6">
                De samenwerking met Next Win was uitstekend. Ze hebben niet alleen een prachtige website 
                gebouwd, maar ook ons geholpen om onze digitale strategie te verbeteren. De resultaten 
                spreken voor zich - meer bezoekers, meer online verkopen en veel positieve reacties 
                van onze gasten.
              </Paragraph>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">NG</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Natuurcentrum de Ginkel</div>
                  <div className="text-sm text-gray-600">Management Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Cases */}
      <RelatedCases 
        bgColor="bg-white"
        maxCases={3}
        excludeCaseId="natuurcentrumginkel"
      />

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Benieuwd naar wat wij voor jou kunnen betekenen?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Laat ons je helpen om jouw online aanwezigheid naar het volgende niveau te tillen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact"
                className="bg-white text-primary-700 hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Maak een afspraak
              </Button>
              <Button 
                href="/contact"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                size="lg"
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
      
      {/* Custom CSS for scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}