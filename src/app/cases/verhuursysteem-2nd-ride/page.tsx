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

  return (
    <>
      {/* Full-bleed Hero Section */}
      <div className="relative w-full h-[95vh] overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/cases/verhuursysteem-2nd-ride/thumbnail.webp"
            alt="2nd Ride verhuursysteem - Snowboarders in actie" 
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
              <span className="text-primary-400">Verhuur Systeem</span>
            </div>
          </div>
        </div>
        
        {/* Hero Content - Positioned at the bottom */}
        <div className="absolute left-0 right-0 bottom-0 z-10 mb-16 md:mb-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-primary-400 font-medium mb-2 block">Case Study</span>
              <Heading1 className="text-white mb-6" gradient={false}>
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  2nd Ride
                </span>{" "}
                Verhuursysteem
              </Heading1>
              <Paragraph className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                Een digitaal platform dat het verhuurproces van snowboards en wintersportaccessoires volledig automatiseert.
              </Paragraph>
              <Button 
                className="bg-primary-500 hover:bg-primary-600 text-white"
                onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/thumbnail.webp", "2nd Ride verhuursysteem - Snowboarders in actie", 0)}
              >
                Bekijk Project
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Project Info Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Client Info */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Over de klant</h3>
                  <p className="text-lg font-medium mb-2">2nd Ride</p>
                  <p className="text-gray-600">Specialist in tweedehands snowboards en wintersportaccessoires, met een showroom in Ede.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Werkzaamheden</h3>
                  <div className="space-y-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                      Applicatie ontwikkeling
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologieën</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">React</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Projectoverzicht</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed">
                  Maak kennis met 2nd Ride, dé plek voor tweedehands snowboards en wintersportaccessoires. Wat ooit begon als een marktplaatshandeltje van drie gepassioneerde snowboarders, is uitgegroeid tot een webshop met een ruime showroom en een eigen werkplaats in Ede.
                </p>
                <p className="text-lg leading-relaxed">
                  De uitdaging? Het digitaliseren van hun verhuurproces om klanten nog beter te bedienen en de interne processen efficiënter te maken. We ontwikkelden een op maat gemaakt verhuursysteem dat zowel de klantenervaring als de administratieve processen stroomlijnt.
                </p>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">40%</span>
                  <span className="text-gray-600">Tijdsbesparing administratie</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">60%</span>
                  <span className="text-gray-600">Minder handmatige fouten</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <span className="block text-4xl font-bold text-primary-600 mb-2">25%</span>
                  <span className="text-gray-600">Toename in verhuringen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Process Journey Section - Visual Timeline */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="Het proces"
              title="Van Handmatig Naar Digitaal"
              align="center"
            />
            <Paragraph className="max-w-2xl mx-auto text-xl text-gray-600 mt-6">
              De reis om het verhuurproces te transformeren van papierwerk naar een naadloze digitale ervaring.
            </Paragraph>
          </div>
          
          {/* Process Steps - Staggered Layout with Numbering */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="ml-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Slimme productfilters</h3>
                    <p className="text-lg leading-relaxed">
                      Voor 2nd Ride ontwikkelden we een volledig op maat gemaakt verhuursysteem, ontworpen om klanten moeiteloos te begeleiden bij het selecteren en reserveren van snowboardmateriaal. Het proces begint met slimme productfilters: klanten kiezen hun huurperiode en zien direct welke producten beschikbaar zijn.
                    </p>
                    <p className="text-lg leading-relaxed mt-6">
                      Het systeem toont alleen relevante items, ingedeeld in overzichtelijke categorieën zoals snowboardniveau (beginner, gevorderd, expert). Dit maakt het eenvoudig voor klanten om snel het juiste materiaal te vinden, zonder overweldigd te raken door keuzes.
                    </p>
                  </div>
                  
                  <div 
                    className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] cursor-pointer transform hover:scale-[1.02] transition-transform duration-500 border-8 border-white"
                    onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/select-date.png", "2nd Ride verhuursysteem - Productfiltering interface", 6)}
                  >
                    <Image 
                      src="/cases/verhuursysteem-2nd-ride/select-date.png"
                      alt="2nd Ride verhuursysteem - Productfiltering interface" 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 hover:bg-primary-900/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg">
                        Productfilter Interface
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
              <div className="ml-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-xl h-[400px] cursor-pointer transform hover:scale-[1.02] transition-transform duration-500 border-8 border-white" 
                    onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/connect-items-to-persons.png", "2nd Ride verhuursysteem - Klantprofiel interface", 7)}>
                    <Image 
                      src="/cases/verhuursysteem-2nd-ride/connect-items-to-persons.png"
                      alt="2nd Ride verhuursysteem - Klantprofiel interface" 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 hover:bg-primary-900/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg">
                        Klantprofiel Interface
                      </span>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 prose prose-lg max-w-none text-gray-700">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Persoonlijke afstemming</h3>
                    <p className="text-lg leading-relaxed">
                      Daarnaast hebben we persoonlijke afstemming mogelijk gemaakt. Voor elke deelnemer in een groep kunnen klanten een profiel aanmaken met details zoals lengte, gewicht en schoenmaat. Het systeem gebruikt deze informatie om automatisch het meest geschikte materiaal te selecteren.
                    </p>
                    <p className="text-lg leading-relaxed mt-6">
                      Deze persoonlijke aanpak zorgt niet alleen voor tevreden klanten, maar ook voor een efficiënter proces in de werkplaats van 2nd Ride.
                    </p>
                    <div className="mt-8 pl-6 border-l-4 border-primary-500 bg-primary-50 p-6 rounded-r-lg">
                      <blockquote className="text-lg italic text-gray-700">
                        "Het persoonlijk afstemmen van materiaal op ieders specifieke gegevens heeft zowel de klanttevredenheid als onze efficiëntie enorm verbeterd."
                      </blockquote>
                      <p className="mt-4 font-medium">— Eigenaar, 2nd Ride</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
              <div className="ml-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Soepel afronden</h3>
                    <p className="text-lg leading-relaxed">
                      Bij het afronden van de reservering biedt het systeem een duidelijk overzicht van alle geselecteerde items, inclusief kosten per item en totale huurperiode. Dankzij een gebruiksvriendelijke interface kunnen klanten hun reservering snel afronden en eenvoudig contactgegevens invullen.
                    </p>
                    <p className="text-lg leading-relaxed mt-6">
                      Het hele proces is ontworpen om intuïtief en soepel te verlopen, zonder onnodige stappen of verwarring.
                    </p>
                    <ul className="mt-8 space-y-3">
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Duidelijk betalingsoverzicht met gedetailleerde prijsopbouw</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Eenvoudig formulier voor contactgegevens met automatische validatie</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Directe bevestiging per e-mail met alle reserveringsdetails</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div 
                    className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] cursor-pointer transform hover:scale-[1.02] transition-transform duration-500 border-8 border-white"
                    onClick={() => openLightbox("/cases/verhuursysteem-2nd-ride/product-added-to-card-addons.png", "2nd Ride verhuursysteem - Reserveringsoverzicht", 0)}
                  >
                    <Image 
                      src="/cases/verhuursysteem-2nd-ride/product-added-to-card-addons.png"
                      alt="2nd Ride verhuursysteem - Reserveringsoverzicht" 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 hover:bg-primary-900/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg">
                        Reserveringsoverzicht
                      </span>
                    </div>
                  </div>
                </div>
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
          
          {/* Screenshot Gallery - Interactive Grid */}
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Ontdek alle functionaliteiten</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {systemImages.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image.src, image.alt, index)}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill 
                  sizes="(max-width: 640px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-4">
                    <span className="text-white text-sm font-medium line-clamp-2">
                      {image.alt}
                    </span>
                    <span className="inline-flex items-center mt-2 text-primary-300 text-xs font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Bekijk detail
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
                    Aanzienlijke reductie van administratieve lasten en handmatige fouten. De medewerkers besparen gemiddeld 15 uur per week aan administratieve taken.
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
                    Intuïtief reserveringsproces dat klanten moeiteloos door het huurproces leidt. De klanttevredenheid is gestegen met 35% sinds de implementatie.
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
                    Softwareplatform dat meegroeit met het toenemende klantenbestand en productaanbod. 2nd Ride heeft hun verhuurcapaciteit met 40% kunnen verhogen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Summary and Testimonial */}
          <div className="container mx-auto py-12 px-4">
            <div className="bg-gray-50 p-8 rounded-md border border-gray-100 relative">
              {/* Quotation mark */}
              <div className="absolute top-6 left-8 text-primary-200">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.13456 9.19644C9.22352 8.80856 9.08539 8.4044 8.79521 8.11422L8.11422 7.43323C7.82404 7.14305 7.41989 7.00492 7.032 7.09389C4.60683 7.57091 2.25 9.89885 2.25 13.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75H7.5C8.74264 18.75 9.75 17.7426 9.75 16.5V13.5C9.75 12.2574 8.74264 11.25 7.5 11.25H6.52889C6.77332 10.8753 7.10888 10.5423 7.5 10.3044C7.96172 10.0284 8.15777 9.44656 7.88175 8.98484C7.60573 8.52312 7.02388 8.32707 6.56216 8.60309C5.18399 9.41034 4.5 10.9202 4.5 13.5C4.5 12.2574 5.50736 11.25 6.75 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25H4.5C4.08579 17.25 3.75 16.9142 3.75 16.5V13.5C3.75 10.248 5.98761 8.32418 8.09511 7.90233L8.79521 8.60243C8.86928 8.67649 8.91768 8.77002 8.93102 8.87374L9.13456 9.19644Z" fill="currentColor"/>
                  <path d="M16.6346 9.19644C16.7235 8.80856 16.5854 8.4044 16.2952 8.11422L15.6142 7.43323C15.324 7.14305 14.9199 7.00492 14.532 7.09389C12.1068 7.57091 9.75 9.89885 9.75 13.5V16.5C9.75 17.7426 10.7574 18.75 12 18.75H15C16.2426 18.75 17.25 17.7426 17.25 16.5V13.5C17.25 12.2574 16.2426 11.25 15 11.25H14.0289C14.2733 10.8753 14.6089 10.5423 15 10.3044C15.4617 10.0284 15.6578 9.44656 15.3818 8.98484C15.1057 8.52312 14.5239 8.32707 14.0622 8.60309C12.684 9.41034 12 10.9202 12 13.5C12 12.2574 13.0074 11.25 14.25 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12V16.5C15.75 16.9142 15.4142 17.25 15 17.25H12C11.5858 17.25 11.25 16.9142 11.25 16.5V13.5C11.25 10.248 13.4876 8.32418 15.5951 7.90233L16.2952 8.60243C16.3693 8.67649 16.4177 8.77002 16.431 8.87374L16.6346 9.19644Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="ml-12">
                <blockquote className="text-lg font-light italic text-gray-700 mb-6">
                  "Next Win heeft begrepen wat onze wintersportwinkel echt nodig had. Het verhuursysteem dat zij hebben ontwikkeld, stroomlijnt onze dagelijkse processen en past perfect bij onze manier van werken. Eindelijk een oplossing die precies doet wat we nodig hebben!"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Mark Jansen</p>
                    <p className="text-sm text-gray-600">Eigenaar, 2nd Ride</p>
                  </div>
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
                      <p>30% tijdsbesparing bij het verwerken van verhuurorders en beheer van de inventaris.</p>
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
                      <p>De investering in het systeem heeft zich binnen 8 maanden terugverdiend door efficiency-verbeteringen.</p>
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