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
import SearchResultsVisualization from '@/components/ui/SearchResultsVisualization';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function GoogleAdsServicePage() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Define FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Hoe snel kan ik resultaat zien van Google Ads?",
      answer: (
        <div className="space-y-4">
          <p>
            Google Ads kunnen binnen 24-48 uur na goedkeuring al traffic genereren. Optimale resultaten zien we meestal binnen 2-4 weken, wanneer we genoeg data hebben om de campagnes te verfijnen.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dag 1-7: Campaign setup en eerste resultaten</li>
            <li>Week 2-4: Optimalisatie op basis van performance data</li>
            <li>Maand 2+: Maximale ROI en schaalbare resultaten</li>
          </ul>
        </div>
      ),
      plainTextAnswer: "Google Ads kunnen binnen 24-48 uur na goedkeuring al traffic genereren. Optimale resultaten zien we meestal binnen 2-4 weken, wanneer we genoeg data hebben om de campagnes te verfijnen."
    },
    {
      question: "Wat kost Google Ads en hoe werkt het budget?",
      answer: 
        "Je bepaalt zelf je dagelijkse budget. Wij adviseren een minimum van €30-50 per dag voor effectieve campagnes. Daarnaast rekenen wij een vast maandelijks managementfee voor het beheer, optimalisatie en rapportage van je campagnes. Je betaalt Google direct voor de advertenties."
    },
         {
       question: "Hoe meten we het succes van de campagnes?",
       answer: 
         "We focussen op de metrics die er écht toe doen: conversies, cost-per-lead, en ROI. Je krijgt toegang tot je eigen real-time dashboard waar je alle resultaten van Google Ads, Meta, LinkedIn en andere platforms kunt bekijken. Geen eindeloze rapporten, maar directe inzichten die je altijd kunt raadplegen."
     },
    {
      question: "Kunnen jullie ook mijn bestaande Google Ads account overnemen?",
      answer: 
        "Absoluut! We doen eerst een gratis audit van je huidige campagnes en identificeren direct verbeterpunten. Vaak kunnen we binnen een week al significante verbeteringen doorvoeren in bestaande accounts."
    },
    {
      question: "Werken jullie in alle branches?",
      answer: 
        "We hebben ervaring met diverse sectoren, van lokale dienstverlening tot e-commerce en B2B. Door onze partnership aanpak kunnen we snel schakelen en de juiste expertise inzetten voor jouw specifieke markt en doelstellingen."
    },
    {
      question: "Wat gebeurt er als de campagnes niet presteren?",
      answer: (
        <div className="space-y-4">
          <p>
            We monitoren performance dagelijks en grijpen snel in bij ondermaatse resultaten. Binnen de eerste maand zouden we concrete verbeteringen moeten zien.
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <h5 className="font-semibold text-primary-800 mb-2">Onze 30-dagen prestatie garantie:</h5>
            <ul className="list-disc pl-5 space-y-1 text-primary-700">
              <li>Geen concrete verbetering binnen 30 dagen? Dan stoppen we het management fee</li>
              <li>We blijven gratis optimaliseren tot we wel resultaat zien</li>
              <li>Of je kunt maandelijks opzeggen zonder kosten</li>
            </ul>
          </div>
          <p>
            Jouw succes is ons succes. We verdienen onze fee alleen als jij resultaat ziet.
          </p>
        </div>
      ),
      plainTextAnswer: "We monitoren performance dagelijks en grijpen snel in bij ondermaatse resultaten. Binnen de eerste maand zouden we concrete verbeteringen moeten zien. Als dat niet het geval is, kijken we samen naar de strategie en passen we direct aan."
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
              <span className="text-primary-600">Google Ads (SEA)</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Google Ads die direct resultaat leveren
              </span>
            </h1>
            
                         <p className="text-lg text-gray-700 mb-8">
               Geen lange wachttijden. Geen eindeloze rapporten. Wel directe zichtbaarheid, kwalitatieve leads en meetbare ROI vanaf dag één. Met je eigen real-time dashboard zie je alle resultaten van Google Ads, Meta, LinkedIn en andere platforms op één plek.
             </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Campagnes live binnen 48 uur</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Focus op directe ROI</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Dagelijkse optimalisatie</span>
              </div>
                             <div className="flex items-start">
                 <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                   <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                 </div>
                 <span className="text-gray-700 text-sm">Real-time dashboard alle platforms</span>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                href="#conversation"
                className="bg-primary-500 hover:bg-primary-600 text-white"
                size="lg"
              >
                Start direct met Google Ads
              </Button>
              <Button 
                href="#approach"
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800/5"
                size="lg"
              >
                Onze aanpak
              </Button>
            </div>
          </div>

          {/* Right column - Google Ads Results Visualization */}
          <div className="hidden lg:block relative">
            <div className="relative h-[600px] w-full overflow-visible">
              {/* Background elements */}
              <div className="absolute inset-0 opacity-80">
                <div className="absolute inset-0 overflow-visible">
                  <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-green-200/30 to-blue-300/30 blur-3xl animate-blob"></div>
                  <div className="absolute bottom-[-20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-blue-200/30 to-green-200/30 blur-3xl animate-blob animation-delay-2000"></div>
                  <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] rounded-full bg-gradient-to-r from-primary-200/30 to-green-200/30 blur-3xl animate-blob animation-delay-4000"></div>
                </div>
              </div>

              {/* Google Ads Dashboard Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-6 relative">
                  
                  {/* Main Dashboard Container */}
                  <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    
                                         {/* Header */}
                     <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-white">
                       <div className="flex items-center justify-between">
                         <div className="flex items-center">
                           <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"/>
                           </svg>
                           <span className="font-semibold">Multi-Platform Dashboard</span>
                         </div>
                         <div className="text-sm opacity-90">Real-time data</div>
                       </div>
                     </div>

                    {/* Stats Cards */}
                    <div className="p-4 grid grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="text-xs text-green-600 font-medium mb-1">Conversies deze maand</div>
                        <div className="text-xl font-bold text-green-700">47</div>
                        <div className="text-xs text-green-600">↗ +23% vs vorige maand</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="text-xs text-blue-600 font-medium mb-1">Cost per Lead</div>
                        <div className="text-xl font-bold text-blue-700">€24,50</div>
                        <div className="text-xs text-blue-600">↘ -18% vs vorige maand</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                        <div className="text-xs text-purple-600 font-medium mb-1">ROI</div>
                        <div className="text-xl font-bold text-purple-700">340%</div>
                        <div className="text-xs text-purple-600">↗ +12% vs vorige maand</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <div className="text-xs text-orange-600 font-medium mb-1">Click-through Rate</div>
                        <div className="text-xl font-bold text-orange-700">4.2%</div>
                        <div className="text-xs text-orange-600">↗ +0.8% vs vorige maand</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="px-4 pb-4">
                      <div className="bg-gray-50 rounded-lg p-3 h-40 relative overflow-hidden">
                        <div className="text-sm font-medium text-gray-700 mb-2">Conversies afgelopen 30 dagen</div>
                        
                        {/* Simple chart representation */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between h-24">
                          <div className="w-3 bg-primary-300 rounded-t-sm" style={{height: '30%'}}></div>
                          <div className="w-3 bg-primary-400 rounded-t-sm" style={{height: '45%'}}></div>
                          <div className="w-3 bg-primary-500 rounded-t-sm" style={{height: '60%'}}></div>
                          <div className="w-3 bg-primary-600 rounded-t-sm" style={{height: '80%'}}></div>
                          <div className="w-3 bg-primary-600 rounded-t-sm" style={{height: '75%'}}></div>
                          <div className="w-3 bg-primary-700 rounded-t-sm" style={{height: '95%'}}></div>
                          <div className="w-3 bg-primary-700 rounded-t-sm" style={{height: '100%'}}></div>
                        </div>
                      </div>
                    </div>

                                         {/* Active Campaigns */}
                     <div className="px-4 pb-4">
                       <div className="text-sm font-medium text-gray-700 mb-2">Actieve campagnes</div>
                       <div className="space-y-2">
                         <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                             <span className="text-sm text-gray-700">Google Ads - Hoofdkeywords</span>
                           </div>
                           <span className="text-xs text-green-600 font-medium">Actief</span>
                         </div>
                         <div className="flex items-center justify-between p-2 bg-blue-50 rounded border border-blue-200">
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                             <span className="text-sm text-gray-700">Meta Ads - Doelgroeptargeting</span>
                           </div>
                           <span className="text-xs text-blue-600 font-medium">Optimaliseren</span>
                         </div>
                         <div className="flex items-center justify-between p-2 bg-purple-50 rounded border border-purple-200">
                           <div className="flex items-center">
                             <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                             <span className="text-sm text-gray-700">LinkedIn - B2B Targeting</span>
                           </div>
                           <span className="text-xs text-purple-600 font-medium">Actief</span>
                         </div>
                       </div>
                     </div>
                  </div>

                  {/* Floating notification */}
                  <div className="absolute top-4 right-4 bg-white shadow-lg rounded-lg p-3 border border-gray-200 animate-bounce-slow">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-gray-700 font-medium">Nieuwe conversie!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

             {/* Hoe wij het verschil maken */}
       <Section className="py-24 bg-white">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
             <SectionTitle
               subtitle="Ons verschil"
               title="Hoe wij het verschil maken"
               align="center"
             />
             <p className="mt-6 text-lg text-gray-600">
               Geen lange wachttijden, geen eindeloze rapporten. Wel directe actie, transparantie en resultaten die je kunt meten.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4">48 uur live</h3>
               <p className="text-gray-600">Jouw campagnes zijn binnen 48 uur actief. We geloven in snel handelen en kansen grijpen.</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4">Real-time dashboard</h3>
               <p className="text-gray-600">Jouw eigen dashboard toont live resultaten van alle platforms. Google Ads, Meta, LinkedIn - alles op één plek.</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               </div>
               <h3 className="text-xl font-bold mb-4">Partnership aanpak</h3>
               <p className="text-gray-600">We werken met vertrouwde Google Ads specialisten. Jij hebt één aanspreekpunt, wij regelen de expertise.</p>
             </div>
           </div>
         </div>
       </Section>

       {/* Waar loop je tegenaan? */}
       <Section className="py-24 bg-gray-50">
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
                     <h4 className="text-lg font-semibold mb-1">Geld verspild aan advertenties</h4>
                     <p className="text-gray-600">Je hebt al geïnvesteerd in Google Ads, maar ziet nauwelijks resultaat en weet niet waar het misgaat.</p>
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
                     <h4 className="text-lg font-semibold mb-1">Geen inzicht in performance</h4>
                     <p className="text-gray-600">Je weet niet welke advertenties werken en hebt geen overzicht van je totale marketinginspanningen.</p>
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
                     <h4 className="text-lg font-semibold mb-1">Teveel tijd kwijt aan campagnes</h4>
                     <p className="text-gray-600">Je wilt je focussen op je bedrijf, maar moet voortdurend advertenties bijstellen en optimaliseren.</p>
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
                     <h4 className="text-lg font-semibold mb-1">Langzame bureaus met stapels rapporten</h4>
                     <p className="text-gray-600">Je krijgt wekelijks dikke rapporten maar hebt geen idee wat er gebeurt en wanneer je resultaat kunt verwachten.</p>
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
             
             <div className="order-first lg:order-last">
               <div className="relative">
                 <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                   <h3 className="text-xl font-bold mb-6 text-center">Zo kan het anders</h3>
                   
                   <div className="space-y-4">
                     <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                       <span className="text-gray-700 font-medium">Campagnes live</span>
                       <span className="text-green-600 font-bold">48 uur</span>
                     </div>
                     
                     <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                       <span className="text-gray-700 font-medium">Dashboard toegang</span>
                       <span className="text-blue-600 font-bold">24/7 real-time</span>
                     </div>
                     
                     <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                       <span className="text-gray-700 font-medium">Communicatie</span>
                       <span className="text-purple-600 font-bold">Direct & duidelijk</span>
                     </div>
                     
                     <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                       <span className="text-gray-700 font-medium">Jouw focus</span>
                       <span className="text-orange-600 font-bold">Op je bedrijf</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Section>

             {/* Ons proces */}
       <Section className="py-24 bg-white" id="solution">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
             <SectionTitle
               subtitle="Ons proces"
               title="Jouw Google Ads campagnes live in 1 week"
               align="center"
             />
             <p className="mt-6 text-lg text-gray-600">
               Geen lange procedures. Van eerste gesprek tot live campagnes in een week tijd, met jouw eigen dashboard voor complete transparantie.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-primary-600 font-bold text-xl">1</span>
               </div>
               <h3 className="text-lg font-bold mb-2">Intake (15 min)</h3>
               <p className="text-gray-600">Kort telefoongesprek om je doelen, doelgroep en budget te bespreken</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-primary-600 font-bold text-xl">2</span>
               </div>
               <h3 className="text-lg font-bold mb-2">Setup (2 dagen)</h3>
               <p className="text-gray-600">We richten je campagnes en dashboard in. Binnen 48 uur ben je live</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-primary-600 font-bold text-xl">3</span>
               </div>
               <h3 className="text-lg font-bold mb-2">Monitoring (dagelijks)</h3>
               <p className="text-gray-600">Dagelijkse controle en optimalisatie. Jij hebt 24/7 inzicht via je dashboard</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="text-primary-600 font-bold text-xl">4</span>
               </div>
               <h3 className="text-lg font-bold mb-2">Resultaten (wekelijks)</h3>
               <p className="text-gray-600">Wekelijkse check-ins over performance en maandelijks strategieoverleg</p>
             </div>
           </div>
         </div>
       </Section>

       {/* Onze belofte aan jou */}
       <Section className="py-24 bg-gray-50">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
             <SectionTitle
               subtitle="Zonder zorgen"
               title="Onze belofte aan jou"
               align="center"
             />
             <p className="mt-6 text-lg text-gray-600">
               Wij geloven in onze aanpak en staan achter de kwaliteit van ons werk. Daarom durven we deze garanties te geven.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4">48 uur live garantie</h3>
               <p className="text-gray-600 mb-4">
                 Jouw campagnes zijn binnen 48 uur actief, of je krijgt de eerste maand gratis. We geloven in snelle actie.
               </p>
             </div>
             
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4">Complete transparantie</h3>
               <p className="text-gray-600 mb-4">
                 Jouw eigen dashboard toont alle data 24/7. Geen verborgen cijfers, geen onduidelijke rapporten. Alles wat we doen zie jij direct.
               </p>
             </div>
             
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4">Directe communicatie</h3>
               <p className="text-gray-600 mb-4">
                 Geen eindeloze mailwisselingen. We bellen wanneer het nodig is en houden afspraken kort en krachtig. Jouw tijd is kostbaar.
               </p>
             </div>
           </div>
         </div>
       </Section>

             {/* Onze kernwaarden */}
       <Section className="py-24 bg-white">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
             <SectionTitle
               subtitle="Onze waarden"
               title="Onze kernwaarden"
               align="center"
             />
             <p className="mt-6 text-lg text-gray-600">
               Deze principes staan centraal in alles wat we doen. Ze bepalen hoe we werken en waarom klanten ons vertrouwen.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-lg font-bold mb-2">Snelheid</h3>
               <p className="text-gray-600">Kansen grijpen we direct. Geen wachttijden, wel directe actie.</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
               </div>
               <h3 className="text-lg font-bold mb-2">Transparantie</h3>
               <p className="text-gray-600">Volledige openheid. Jij weet altijd precies wat er gebeurt.</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                 </svg>
               </div>
               <h3 className="text-lg font-bold mb-2">Resultaat</h3>
               <p className="text-gray-600">Alles wat we doen moet meetbare resultaten opleveren.</p>
             </div>
             
             <div className="text-center">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               </div>
               <h3 className="text-lg font-bold mb-2">Partnership</h3>
               <p className="text-gray-600">We werken samen met jou en betrouwbare specialisten.</p>
             </div>
           </div>
         </div>
       </Section>

       {/* Wat kost het? - Pricing Transparency Section */}
       <Section className="py-24 bg-gray-50">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
             <SectionTitle
               subtitle="Transparante prijzen"
               title="Wat kost Google Ads?"
               align="center"
             />
             <p className="mt-6 text-lg text-gray-600">
               Geen verborgen kosten. Hieronder zie je precies wat je kunt verwachten.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold">Jouw advertentiebudget</h3>
               </div>
               <div className="space-y-4">
                 <div className="flex justify-between items-center py-2">
                   <span className="text-gray-600">Minimum aanbevolen</span>
                   <span className="font-bold text-lg">€30-50/dag</span>
                 </div>
                 <div className="flex justify-between items-center py-2">
                   <span className="text-gray-600">Gemiddelde zakelijke klant</span>
                   <span className="font-bold text-lg">€75-150/dag</span>
                 </div>
                 <div className="flex justify-between items-center py-2">
                   <span className="text-gray-600">Jij bepaalt het budget</span>
                   <span className="font-bold text-primary-600">100% controle</span>
                 </div>
               </div>
               <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                 <p className="text-sm text-blue-700">
                   💡 Je betaalt Google direct voor advertenties. Wij beheren het voor je.
                 </p>
               </div>
             </div>
             
             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
               <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m6 0v-6m0 0a2 2 0 00-2-2H7a2 2 0 00-2 2v6z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold">Ons managementfee</h3>
               </div>
                                <div className="space-y-4">
                   <div className="flex justify-between items-center py-2">
                     <span className="text-gray-600">Setup + dashboard</span>
                     <span className="font-bold text-lg">Eenmalig €297</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <span className="text-gray-600">Maandelijks beheer</span>
                     <span className="font-bold text-lg">15% van ad spend</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <span className="text-gray-600">Minimum managementfee</span>
                     <span className="font-bold text-primary-600">€297/maand</span>
                   </div>
                   <div className="flex justify-between items-center py-2">
                     <span className="text-gray-600">Rapportage & optimalisatie</span>
                     <span className="font-bold text-primary-600">Inbegrepen</span>
                   </div>
                 </div>
                 <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                   <p className="text-xs text-blue-700">
                     💡 <strong>Voorbeeld:</strong> €2000 ad spend = €300 management fee (15%)
                   </p>
                 </div>
               <div className="mt-6 p-4 bg-green-50 rounded-lg">
                 <p className="text-sm text-green-700">
                   ✅ Maandelijks opzegbaar. Geen langlopende contracten.
                 </p>
               </div>
             </div>
           </div>
           
           <div className="max-w-2xl mx-auto mt-12 text-center">
             <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
               <h4 className="text-lg font-bold mb-3">Rekenvoorbeelden verschillende budgetten:</h4>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                 <div className="bg-gray-50 p-4 rounded-lg">
                   <h5 className="font-medium text-gray-800 mb-2">Starter (€1.000/maand ad spend)</h5>
                   <div className="space-y-1 text-sm">
                     <div className="flex justify-between">
                       <span>Google Ads budget:</span>
                       <span>€1.000</span>
                     </div>
                     <div className="flex justify-between">
                       <span>15% management fee:</span>
                       <span>€150</span>
                     </div>
                     <div className="flex justify-between font-medium text-primary-600">
                       <span>Minimum fee geldt:</span>
                       <span>€297</span>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-gray-50 p-4 rounded-lg">
                   <h5 className="font-medium text-gray-800 mb-2">Groei (€3.000/maand ad spend)</h5>
                   <div className="space-y-1 text-sm">
                     <div className="flex justify-between">
                       <span>Google Ads budget:</span>
                       <span>€3.000</span>
                     </div>
                     <div className="flex justify-between font-medium text-primary-600">
                       <span>15% management fee:</span>
                       <span>€450</span>
                     </div>
                     <div className="text-xs text-gray-600 mt-2">
                       Besparing vs. markt: €225-900/maand
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                 <p className="text-sm text-primary-800">
                   <strong>Waarom percentage model?</strong> Het schaalt mee met jouw succes. Grotere budgetten hebben meer beheer nodig, kleinere budgetten blijven betaalbaar.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </Section>

       {/* Social Proof - Testimonials */}
       <TestimonialsSection />

       {/* Waarom Google Ads vaak faalt (en hoe wij dat anders doen) */}
       <Section className="py-24 bg-gray-50">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-20">
             <SectionTitle
               subtitle="Inzichten"
               title="Waarom Google Ads vaak faalt"
               align="center"
             />
             <p className="mt-6 text-lg text-gray-600">
               Uit <a href="https://www.wordstream.com/blog/2025-google-ads-benchmarks" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">WordStream's 2025 onderzoek</a> blijkt dat kosten stijgen (87% van sectoren), maar 65% van sectoren zag ook betere conversierates. Het probleem? Veel accounts missen strategische focus. Hier zie je waar het misgaat en hoe wij dat anders aanpakken.
             </p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
             {/* Problems Section */}
             <div className="space-y-6">
               <div className="text-center lg:text-left mb-8">
                 <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-2xl mb-6 border border-red-100">
                   <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Waar het misgaat</h3>
                 <p className="text-gray-600 text-lg">Typische Google Ads problemen</p>
               </div>
               
               <div className="space-y-4">
                 <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Slechte keyword selectie</h4>
                       <p className="text-gray-600">Advertenties worden getoond aan verkeerd publiek</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Geen negatieve keywords</h4>
                       <p className="text-gray-600">Budget wordt verspild aan irrelevante zoekopdrachten</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Zwakke advertentieteksten</h4>
                       <p className="text-gray-600">Lage click-through rates door saaie advertenties</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Geen landing page optimalisatie</h4>
                       <p className="text-gray-600">Bezoekers vertrekken direct na klik op advertentie</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Onvoldoende tracking</h4>
                       <p className="text-gray-600">Geen inzicht in wat werkt en wat niet</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Solutions Section */}
             <div className="space-y-6">
               <div className="text-center lg:text-left mb-8">
                 <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-2xl mb-6 border border-green-100">
                   <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Onze aanpak</h3>
                 <p className="text-gray-600 text-lg">Hoe wij dit anders doen</p>
               </div>
               
               <div className="space-y-4">
                 <div className="bg-white rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Diepgaande keyword research</h4>
                       <p className="text-gray-600">Specifieke analyse per branche en doelgroep</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Uitgebreide negative keyword lists</h4>
                       <p className="text-gray-600">Voorkomen dat budget wordt verspild aan irrelevante zoektermen</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">A/B testing van advertentieteksten</h4>
                       <p className="text-gray-600">Continue optimalisatie voor hogere click-through rates</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Landing page advies en optimalisatie</h4>
                       <p className="text-gray-600">Zorgen dat bezoekers daadwerkelijk converteren</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300">
                   <div className="flex items-start">
                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                       <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 mb-2">Real-time dashboard</h4>
                       <p className="text-gray-600">Alle belangrijke KPI's live inzichtelijk op één plek</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           {/* Integrated Statistics Section */}
           <div className="bg-white rounded-3xl p-10 border border-primary-100 shadow-lg">
             <div className="text-center mb-10">
               <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 rounded-2xl mb-6 border border-primary-100">
                 <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-3">2025 Google Ads Benchmarks</h3>
               <p className="text-gray-600 text-lg">16.000+ campagnes geanalyseerd</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
               <div className="text-center p-6 bg-primary-25 rounded-xl border border-primary-50 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-bold text-primary-700 mb-2">6.66%</div>
                 <div className="text-gray-600 font-medium">Gemiddelde CTR</div>
               </div>
               <div className="text-center p-6 bg-primary-25 rounded-xl border border-primary-50 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-bold text-primary-700 mb-2">5.65%</div>
                 <div className="text-gray-600 font-medium">Business Services CTR</div>
               </div>
               <div className="text-center p-6 bg-primary-25 rounded-xl border border-primary-50 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-bold text-primary-700 mb-2">65%</div>
                 <div className="text-gray-600 font-medium">Industries met betere conversies</div>
               </div>
               <div className="text-center p-6 bg-primary-25 rounded-xl border border-primary-50 hover:shadow-md transition-all duration-300">
                 <div className="text-3xl font-bold text-primary-700 mb-2">76%</div>
                 <div className="text-gray-600 font-medium">MKB tevreden met Google Ads</div>
               </div>
             </div>
             
             <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
               <div className="flex items-start">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                   <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-primary-800 mb-3 text-lg">Key insight 2025</h4>
                   <p className="text-primary-700 text-lg leading-relaxed">
                     "Kosten stijgen, maar prestaties ook - 65% van sectoren zag betere conversierates. De belangrijkste conclusie: een slimme strategie verslaat goedkope clicks." 
                     <span className="block mt-2 text-primary-600 font-medium">- Cliff Sizemore, LocaliQ/WordStream</span>
                   </p>
                 </div>
               </div>
             </div>
             
             <div className="text-center mt-8">
               <p className="text-gray-500">
                 Bron: <a href="https://www.wordstream.com/blog/2025-google-ads-benchmarks" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-medium">Google Ads benchmarks 2025, WordStream</a>
               </p>
             </div>
           </div>
         </div>
       </Section>

       {/* FAQ Section */}
       <Section className="py-24 bg-gray-50">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center mb-16">
             <SectionTitle
               subtitle="Veelgestelde vragen"
               title="Alles wat je wilt weten over Google Ads"
               align="center"
             />
           </div>
           
           <div className="max-w-3xl mx-auto">
             <FaqAccordion items={faqItems} />
           </div>
         </div>
       </Section>

       {/* Onze technische benadering */}
       <Section className="py-24 bg-white">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <SectionTitle
                 subtitle="Techniek"
                 title="Onze technische benadering"
                 align="left"
               />
               <div className="mt-8 space-y-6">
                 <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                     <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                       <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                       </svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-semibold mb-1">Multi-platform dashboard</h4>
                     <p className="text-gray-600">We integreren alle platforms (Google Ads, Meta, LinkedIn) in één overzichtelijk dashboard dat real-time data toont.</p>
                   </div>
                 </div>
                 
                 <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                     <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                       <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-semibold mb-1">Automatische optimalisatie</h4>
                     <p className="text-gray-600">We gebruiken geavanceerde tools voor bid management, keyword optimalisatie en performance tracking om constant de beste resultaten te behalen.</p>
                   </div>
                 </div>
                 
                 <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                     <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                       <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                       </svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-semibold mb-1">Data-gedreven beslissingen</h4>
                     <p className="text-gray-600">Alle optimalisaties zijn gebaseerd op data-analyse. We testen continu verschillende varianten om de ROI te maximaliseren.</p>
                   </div>
                 </div>
                 
                 <div className="flex">
                   <div className="flex-shrink-0 mt-1">
                     <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                       <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                       </svg>
                     </div>
                   </div>
                   <div className="ml-4">
                     <h4 className="text-lg font-semibold mb-1">Veilige data-integratie</h4>
                     <p className="text-gray-600">Alle koppelingen verlopen via officiële API's. Jouw data blijft veilig en je behoudt altijd volledige controle over je accounts.</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="order-first lg:order-last">
               <div className="relative">
                 <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
                   <h3 className="text-xl font-bold mb-6 text-center">Platform integraties</h3>
                   
                   <div className="space-y-4">
                     <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                       <div className="flex items-center">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                         </div>
                         <span className="font-medium">Google Ads</span>
                       </div>
                       <span className="text-green-600 text-sm font-medium">✓ Geïntegreerd</span>
                     </div>
                     
                     <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                       <div className="flex items-center">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                         </div>
                         <span className="font-medium">Meta Ads</span>
                       </div>
                       <span className="text-green-600 text-sm font-medium">✓ Geïntegreerd</span>
                     </div>
                     
                     <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                       <div className="flex items-center">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                         </div>
                         <span className="font-medium">LinkedIn Ads</span>
                       </div>
                       <span className="text-green-600 text-sm font-medium">✓ Geïntegreerd</span>
                     </div>
                     
                     <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                       <div className="flex items-center">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.177 4.741-1.281 1.278-2.888 2.004-4.748 2.174-.15.014-.302.02-.454.02s-.305-.006-.456-.02c-1.86-.17-3.467-.896-4.748-2.174C3.704 11.622 2.977 10.017 2.808 8.16 2.793 8.01 2.786 7.857 2.786 7.704s.007-.305.022-.456c.169-1.858.896-3.463 2.177-4.741C6.266 1.229 7.873.502 9.733.333c.151-.015.304-.022.456-.022s.304.007.454.022c1.86.169 3.467.896 4.748 2.174 1.281 1.278 2.008 2.883 2.177 4.741.015.151.022.304.022.456s-.007.294-.022.456z"/></svg>
                         </div>
                         <span className="font-medium">Andere platformen</span>
                       </div>
                       <span className="text-blue-600 text-sm font-medium">Op aanvraag</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Section>

             {/* Bronvermelding */}
       <Section className="py-12 bg-gray-50">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-2xl mx-auto text-center">
             <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
               <h3 className="text-lg font-semibold mb-4 text-gray-800">Bronvermelding</h3>
               <div className="text-sm text-gray-600 space-y-2">
                 <p>Data gebaseerd op:</p>
                 <ul className="space-y-1">
                   <li>
                     <a href="https://www.wordstream.com/blog/2025-google-ads-benchmarks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                       WordStream Google Ads Benchmarks 2025
                     </a> - Analyse van 16.000+ campagnes
                   </li>
                   <li>
                     <a href="https://www.mikencube.com/blog/what-does-google-ads-management-cost/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                       Google Ads Management Cost Analysis
                     </a> - Industrie tarieven onderzoek
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </Section>

       {/* CTA Section */}
       <Section className="py-20 sm:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden" id="conversation">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Klaar om direct resultaat te zien?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Binnen 48 uur kunnen je Google Ads campagnes live zijn. Geen lange wachttijden, wel directe actie op kansen.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-8 mb-8 sm:mb-12 border border-white/20">
              <p className="text-white mb-4 sm:mb-6">Start vandaag nog:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link href="/contact?form=google-ads" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg shadow-primary-900/30">
                  <svg className="w-5 h-5 mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Gratis Google Ads audit</span>
                </Link>
                <Link href="tel:+31638146310" className="bg-white hover:bg-gray-100 text-primary-700 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg">
                  <svg className="w-5 h-5 mr-2 sm:mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Bel direct: 06-3814 6310</span>
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
                <p className="text-white text-sm mb-2">
                  🚀 <strong>Beperkte tijd:</strong> Setup fee weggestreept bij start in januari
                </p>
                <p className="text-white/80 text-xs">
                  Bespaar €297 + krijg gratis Google Ads audit ter waarde van €150
                </p>
              </div>
              <p className="text-white/80 text-sm">
                💡 <strong>Tip:</strong> Heb je al Google Ads campagnes die niet presteren? We doen gratis een snelle audit!
              </p>
            </div>
          </div>
        </div>
      </Section>

      
    </div>
      );
  }