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
import CaseStudyGrid from '@/components/ui/CaseStudyGrid';
import FaqAccordion, { FaqItem } from '@/components/ui/FaqAccordion';

export default function CRMSalesforceServicePage() {
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
      question: "Wat kost een Salesforce implementatie?",
      answer: (
        <div className="space-y-4">
          <p>
            Een Salesforce implementatie is maatwerk, en de kosten hangen af van jouw specifieke behoeften. We kijken naar factoren zoals:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Gewenste Salesforce producten (Sales Cloud, Service Cloud, etc.)</li>
            <li>Complexiteit van bedrijfsprocessen</li>
            <li>Benodigde integraties met andere systemen</li>
            <li>Data migratie vereisten</li>
          </ul>
          <p>Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken.</p>
        </div>
      ),
      plainTextAnswer: "Een Salesforce implementatie is maatwerk, en de kosten hangen af van jouw specifieke behoeften. We kijken naar factoren zoals: Gewenste Salesforce producten (Sales Cloud, Service Cloud, etc.), Complexiteit van bedrijfsprocessen, Benodigde integraties met andere systemen, Data migratie vereisten. Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken."
    },
    {
      question: "Hoe lang duurt een Salesforce implementatie?",
      answer: 
        "De doorlooptijd varieert afhankelijk van de complexiteit. Een basisimplementatie kan binnen 4-6 weken live gaan, terwijl complexere projecten met veel maatwerk en integraties 3-6 maanden kunnen duren. We werken met een gefaseerde aanpak waardoor je snel eerste resultaten ziet."
    },
    {
      question: "Kan ik mijn bestaande systemen integreren met Salesforce?",
      answer: 
        "Absoluut! Salesforce beschikt over krachtige API's en integratiemogelijkheden. We kunnen verbindingen maken met vrijwel elk systeem, zoals je ERP, boekhoudsoftware, marketing automation tools, en meer. Deze integraties zorgen voor een naadloze dataflow tussen systemen."
    },
    {
      question: "Welke Salesforce producten heb ik nodig?",
      answer: 
        "Dit is volledig afhankelijk van jouw bedrijfsprocessen en doelstellingen. We kunnen helpen bij het selecteren van de juiste combinatie uit Sales Cloud (voor verkoop), Service Cloud (voor klantenservice), Marketing Cloud (voor marketing), en meer. Tijdens de discovery fase bepalen we samen wat het beste bij je past."
    },
    {
      question: "Wat als mijn team geen ervaring heeft met Salesforce?",
      answer: 
        "Geen zorgen! Bij elke implementatie verzorgen we uitgebreide training voor je team. We zorgen ervoor dat alle gebruikers comfortabel zijn met het systeem en bieden ondersteuning in de eerste maanden na livegang. We creëren ook aangepaste documentatie specifiek voor jouw Salesforce-setup."
    },
    {
      question: "Bieden jullie ondersteuning na de implementatie?",
      answer: 
        "Ja, we bieden verschillende ondersteuningspakketten aan. Van technische support op afroep tot volledig beheer van je Salesforce-omgeving. We zien onze klantrelaties als langetermijnpartnerschappen waarbij we je blijven helpen om maximaal rendement uit je CRM-investering te halen."
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
          <div className="text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-wrap items-center mb-6 text-sm">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-primary-600">CRM & Salesforce</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Stroomlijn jouw bedrijfsprocessen met CRM & Salesforce
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Wij helpen jouw organisatie groeien met op maat gemaakte Salesforce oplossingen die de klantervaring verbeteren en uw verkoop- en serviceprocessen optimaliseren.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Salesforce implementatie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Salesforce consultancy</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">App ontwikkeling</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Salesforce integraties</span>
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

          {/* Right column - Featured Image (Visible on all devices) */}
          <div className="relative max-w-2xl mx-auto mt-8 lg:mt-0">
            <img 
              src="/crm-oplossingen.png" 
              alt="CRM & Salesforce oplossingen" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section className="py-24 bg-gray-50" id="approach">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
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
                    <h4 className="text-lg font-semibold mb-1">Versnipperde klantinformatie</h4>
                    <p className="text-gray-600">Klantgegevens zitten verspreid over verschillende systemen, waardoor je nooit een volledig beeld hebt en kansen mist.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Handmatige processen</h4>
                    <p className="text-gray-600">Terugkerende taken zoals follow-ups, offertes en rapportages kosten je team onnodig veel tijd omdat ze handmatig worden uitgevoerd.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Gebrek aan inzicht</h4>
                    <p className="text-gray-600">Je hebt geen real-time inzicht in je sales pipeline, klantenservice prestaties of waar je team tijd aan besteedt.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Mislukte CRM-implementaties</h4>
                    <p className="text-gray-600">Eerdere pogingen om een CRM-systeem te implementeren zijn mislukt doordat het niet goed werd aangepast aan jouw bedrijfsprocessen.</p>
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
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <img 
                src="/crm-hero-new.png" 
                alt="CRM Salesforce resultaten" 
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CRM Solutions CTA Section */}
      <Section className="py-24 bg-gradient-to-b from-white to-primary-50" id="solution">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              subtitle="Onze CRM diensten"
              title="CRM-oplossingen die wérken"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Een goed ingericht CRM-systeem is het kloppend hart van een moderne organisatie. Of je nu klantrelaties wilt versterken, 
              salesprocessen efficiënter wilt maken of marketinginspanningen beter wilt afstemmen – een krachtig CRM is onmisbaar. 
              Bij Next Win helpen we organisaties om het maximale uit hun CRM te halen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementatie & inrichting</h3>
              <p className="text-gray-600">
                Wij begeleiden de volledige implementatie van je CRM-systeem, van strategie tot inrichting. Of het nu gaat om Salesforce, HubSpot of een ander platform.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimalisatie & uitbreiding</h3>
              <p className="text-gray-600">
                Heb je al een CRM, maar voelt het als een gemiste kans? Wij analyseren je huidige setup en verbeteren waar nodig – denk aan workflows, automatiseringen, koppelingen en dashboards.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Training & adoptie</h3>
              <p className="text-gray-600">
                Een CRM is pas effectief als je team er écht mee aan de slag gaat. Wij zorgen voor praktische training en slimme inrichting die aansluit op jullie dagelijkse werk.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integraties met andere systemen</h3>
              <p className="text-gray-600">
                Laat je CRM naadloos samenwerken met andere tools, zoals je website, e-mailmarketing, ERP of klantportaal. Wij bouwen de koppelingen en houden het overzicht.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Functioneel beheer</h3>
              <p className="text-gray-600">
                Wij nemen het dagelijkse beheer van je CRM uit handen of ondersteunen je interne beheerder waar nodig. Zo blijft je CRM altijd up-to-date en goed onderhouden.
              </p>
            </div>
            
            <div className="bg-primary-600 rounded-xl shadow-md p-6 text-white">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Onze aanpak</h3>
              <p className="text-white/90 mb-4">
                Geen wollige consultancy, maar concrete oplossingen die werken in de praktijk. We denken met je mee, stellen kritische vragen en vertalen jouw wensen naar slimme CRM-oplossingen.
              </p>
              <Link href="#conversation" className="inline-flex items-center text-white font-medium group">
                Start een gesprek
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
              Vrijblijvende CRM-strategie sessie
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-24 bg-white" id="faq">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              subtitle="Veelgestelde vragen"
              title="Alles wat je wilt weten over Salesforce"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              We begrijpen dat je vragen hebt over Salesforce implementatie. Hier zijn enkele antwoorden op de meest gestelde vragen. 
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

      {/* Call to Action */}
      <Section className="py-20 sm:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden" id="conversation">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Klaar om jouw bedrijfsprocessen te optimaliseren?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Laten we samen werken aan een Salesforce oplossing die jouw organisatie naar het volgende niveau tilt.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-8 mb-8 sm:mb-12 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white mb-4 sm:mb-6">Kies de manier die voor jou het beste werkt:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link href="/contact?form=salesforce" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg shadow-primary-900/30">
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
            
            <p className="text-white/80 text-sm">Geen verplichtingen, geen verkooppraatjes, gewoon een eerlijk gesprek over je CRM-behoeften.</p>
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
      `}</style>
    </div>
  );
}