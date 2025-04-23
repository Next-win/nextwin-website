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
          <div className="text-left max-w-lg">
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

          {/* Right column - Featured Image (Desktop) */}
          <div className="hidden lg:block relative">
            <div className="relative h-[580px] w-full overflow-visible rounded-3xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-80">
                {/* Creative animated background */}
                <div className="absolute inset-0 overflow-visible">
                  {/* Animated gradient blobs */}
                  <div className="absolute top-[-25%] left-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-300/30 blur-3xl animate-blob"></div>
                  <div className="absolute bottom-[-25%] right-[-20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-green-200/30 to-blue-200/30 blur-3xl animate-blob animation-delay-2000"></div>
                  <div className="absolute top-[35%] right-[-15%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-purple-200/30 to-indigo-200/30 blur-3xl animate-blob animation-delay-4000"></div>
                  <div className="absolute bottom-[25%] left-[-15%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-blue-200/30 to-green-300/30 blur-3xl animate-blob animation-delay-3000"></div>
                  
                  {/* Subtle grid pattern overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  
                  {/* Animated accent lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,150 Q100,120 200,150 Q300,180 400,150" fill="none" stroke="rgba(99, 102, 241, 0.07)" strokeWidth="1">
                      <animate attributeName="d" values="M0,150 Q100,120 200,150 Q300,180 400,150; M0,150 Q100,180 200,150 Q300,120 400,150; M0,150 Q100,120 200,150 Q300,180 400,150" dur="20s" repeatCount="indefinite" />
                    </path>
                    <path d="M0,200 Q100,180 200,200 Q300,220 400,200" fill="none" stroke="rgba(79, 70, 229, 0.07)" strokeWidth="1">
                      <animate attributeName="d" values="M0,200 Q100,180 200,200 Q300,220 400,200; M0,200 Q100,220 200,200 Q300,180 400,200; M0,200 Q100,180 200,200 Q300,220 400,200" dur="25s" repeatCount="indefinite" />
                    </path>
                    <path d="M0,250 Q100,230 200,250 Q300,270 400,250" fill="none" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="1">
                      <animate attributeName="d" values="M0,250 Q100,230 200,250 Q300,270 400,250; M0,250 Q100,270 200,250 Q300,230 400,250; M0,250 Q100,230 200,250 Q300,270 400,250" dur="30s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
              </div>
              
              {/* CRM Dashboard Visualization */}
              <div className="absolute inset-0 p-6">
                <div className="bg-white rounded-xl shadow-md w-full h-full p-6 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 13V11C21 7.73081 21 6.09621 20.0481 5.09095C19.0962 4.08569 17.5578 4.03246 14.4812 3.92601C13.2787 3.88821 12.1804 3.86261 11.2433 3.86261C10.3062 3.86261 9.25731 3.88761 8.1179 3.92444C4.98863 4.02981 3.41399 4.08249 2.45951 5.08842C1.50504 6.09434 1.5075 7.72753 1.5024 11.0022V13C1.5 16.2568 1.5 17.8854 2.45193 18.8907C3.40385 19.8959 4.94233 19.9492 8.01928 20.0557C9.22156 20.0935 10.3199 20.1191 11.2571 20.1191C12.1942 20.1191 13.2431 20.0941 14.3825 20.0573C17.5117 19.9519 19.0864 19.8992 20.0408 18.8933C20.9953 17.8874 20.9928 16.2542 20.9979 12.9793" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 15.5L9.5 17.5L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Salesforce Dashboard</h2>
                      <p className="text-sm text-gray-500">Inzicht in klantdata en verkoopprocessen</p>
                    </div>
                  </div>
                  
                  {/* Dashboard Preview */}
                  <div className="relative mb-6 group">
                    <div className="w-full h-14 bg-blue-50 rounded-t-lg border border-gray-200 flex items-center px-5">
                      <div className="flex space-x-3">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="ml-4 flex space-x-4">
                        <span className="text-gray-600 font-medium text-sm">Dashboard</span>
                        <span className="text-gray-400 text-sm">Klanten</span>
                        <span className="text-gray-400 text-sm">Leads</span>
                        <span className="text-gray-400 text-sm">Verkoopkansen</span>
                      </div>
                    </div>
                    <div className="absolute right-3 -bottom-4 bg-blue-50 px-2 py-1 rounded-md text-xs text-blue-700 font-semibold animate-pulse-slow">
                      Gegevens in real-time bijgewerkt
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="flex-grow overflow-hidden relative grid grid-cols-2 gap-4">
                    {/* KPI Cards */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500">Nieuwe leads deze maand</h3>
                          <p className="text-2xl font-bold">127</p>
                        </div>
                        <div className="bg-green-100 rounded-full p-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-green-600 font-medium">↑ 23%</span>
                        <span className="text-gray-500 ml-1">vs vorige periode</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500">Conversieratio</h3>
                          <p className="text-2xl font-bold">32%</p>
                        </div>
                        <div className="bg-green-100 rounded-full p-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="text-green-600 font-medium">↑ 12%</span>
                        <span className="text-gray-500 ml-1">vs vorige periode</span>
                      </div>
                    </div>
                    
                    {/* Pipeline Chart */}
                    <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">Sales Pipeline</h3>
                      <div className="h-24 flex items-end space-x-2">
                        <div className="w-1/6 bg-blue-100 h-1/3 rounded-t-md relative group">
                          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Nieuwe leads: 84
                          </div>
                        </div>
                        <div className="w-1/6 bg-blue-300 h-2/3 rounded-t-md relative group">
                          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Gekwalificeerd: 62
                          </div>
                        </div>
                        <div className="w-1/6 bg-blue-500 h-1/2 rounded-t-md relative group">
                          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Propositie: 45
                          </div>
                        </div>
                        <div className="w-1/6 bg-blue-600 h-2/5 rounded-t-md relative group">
                          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Onderhandeling: 32
                          </div>
                        </div>
                        <div className="w-1/6 bg-blue-700 h-1/4 rounded-t-md relative group">
                          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Voorstel: 24
                          </div>
                        </div>
                        <div className="w-1/6 bg-blue-800 h-1/6 rounded-t-md relative group">
                          <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Gesloten: 18
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Lead</span>
                        <span>Gesloten</span>
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">Recente activiteiten</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-gray-800">Nieuwe klant: Bergo Techniek B.V.</span>
                          <span className="ml-auto text-xs text-gray-500">14 min</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-800">Meeting ingepland: VDL Groep</span>
                          <span className="ml-auto text-xs text-gray-500">1 uur</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                          <span className="text-gray-800">Offerte verzonden: De Jong Kantoren</span>
                          <span className="ml-auto text-xs text-gray-500">3 uur</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile visualization - visible only on small screens */}
          <div className="lg:hidden relative mt-8 mb-4">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-80">
                {/* Creative animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Animated gradient blobs - smaller and fewer for mobile */}
                  <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-blue-200/30 to-indigo-300/30 blur-2xl animate-blob"></div>
                  <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-green-200/30 to-blue-200/30 blur-2xl animate-blob animation-delay-2000"></div>
                  <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-purple-200/30 to-indigo-200/30 blur-2xl animate-blob animation-delay-4000"></div>
                  
                  {/* Subtle grid pattern overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                </div>
              </div>
              
              {/* Mobile CRM Dashboard Visualization - simplified for mobile */}
              <div className="absolute inset-0 p-4">
                <div className="bg-white rounded-xl shadow-md w-full h-full p-4 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 13V11C21 7.73081 21 6.09621 20.0481 5.09095C19.0962 4.08569 17.5578 4.03246 14.4812 3.92601C13.2787 3.88821 12.1804 3.86261 11.2433 3.86261C10.3062 3.86261 9.25731 3.88761 8.1179 3.92444C4.98863 4.02981 3.41399 4.08249 2.45951 5.08842C1.50504 6.09434 1.5075 7.72753 1.5024 11.0022V13C1.5 16.2568 1.5 17.8854 2.45193 18.8907C3.40385 19.8959 4.94233 19.9492 8.01928 20.0557C9.22156 20.0935 10.3199 20.1191 11.2571 20.1191C12.1942 20.1191 13.2431 20.0941 14.3825 20.0573C17.5117 19.9519 19.0864 19.8992 20.0408 18.8933C20.9953 17.8874 20.9928 16.2542 20.9979 12.9793" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 15.5L9.5 17.5L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">Salesforce Dashboard</h2>
                      <p className="text-xs text-gray-500">Klantdata & verkoopprocessen</p>
                    </div>
                  </div>
                  
                  {/* Simplified KPI Cards for mobile */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                      <h3 className="text-xs font-semibold text-gray-500">Nieuwe leads</h3>
                      <p className="text-xl font-bold">127</p>
                      <div className="flex items-center text-xs">
                        <span className="text-green-600 font-medium">↑ 23%</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                      <h3 className="text-xs font-semibold text-gray-500">Conversieratio</h3>
                      <p className="text-xl font-bold">32%</p>
                      <div className="flex items-center text-xs">
                        <span className="text-green-600 font-medium">↑ 12%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simplified Pipeline for mobile */}
                  <div className="flex-grow">
                    <h3 className="text-xs font-semibold text-gray-700 mb-2">Sales Pipeline</h3>
                    <div className="h-8 flex items-end space-x-1 mb-6">
                      <div className="w-1/6 bg-blue-100 h-1/3 rounded-t-md"></div>
                      <div className="w-1/6 bg-blue-300 h-2/3 rounded-t-md"></div>
                      <div className="w-1/6 bg-blue-500 h-1/2 rounded-t-md"></div>
                      <div className="w-1/6 bg-blue-600 h-2/5 rounded-t-md"></div>
                      <div className="w-1/6 bg-blue-700 h-1/4 rounded-t-md"></div>
                      <div className="w-1/6 bg-blue-800 h-1/6 rounded-t-md"></div>
                    </div>
                    
                    {/* Mobile Insight Box */}
                    <div className="bg-blue-50 rounded-lg p-3 text-xs">
                      <p className="font-medium text-blue-800">Impact van Salesforce</p>
                      <div className="flex items-center mt-2 gap-2">
                        <div className="bg-green-100 text-green-700 font-semibold rounded-full px-2 py-0.5 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span>Verkoop +24%</span>
                        </div>
                        <div className="bg-green-100 text-green-700 font-semibold rounded-full px-2 py-0.5 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span>Efficiëntie +36%</span>
                        </div>
                      </div>
                    </div>
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
            <div className="relative aspect-square rounded-2xl overflow-visible bg-white shadow-lg p-6">
              {/* CRM Benefits Visualization */}
              <div className="w-full h-full flex flex-col overflow-hidden" >
                <div className="mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Meetbare resultaten met CRM</h4>
                    <p className="text-sm text-gray-500">Vergelijking voor en na Salesforce implementatie</p>
                  </div>
                </div>

                {/* CRM Benefits Visualization */}
                <div className="min-h-[550px] bg-gray-50 rounded-xl p-5 relative overflow-visible">
                  {/* Toggle Buttons */}
                  <div className="absolute right-5 top-5 flex items-center text-sm bg-white rounded-full shadow-sm border border-gray-200 p-1 sm:p-1" style={{ marginRight: '5px', marginTop: '5px' }}>
                    <div className="relative">
                      <div id="crm-toggle-indicator" className="absolute inset-y-0 left-0 w-1/2 bg-primary-100 rounded-full transition-all duration-500"></div>
                      <button 
                        id="crm-toggle-before" 
                        className="z-10 relative px-2 sm:px-3 py-1 rounded-full text-primary-700 font-medium text-xs sm:text-sm"
                        onClick={() => {
                          document.getElementById('crm-toggle-indicator')?.style.setProperty('transform', 'translateX(0%)');
                          document.getElementById('crm-toggle-before')?.classList.add('text-primary-700');
                          document.getElementById('crm-toggle-after')?.classList.remove('text-primary-700');
                          
                          // Hide "After" metrics, show "Before" metrics
                          document.querySelectorAll('.before-metric').forEach(el => {
                            (el as HTMLElement).style.display = 'flex';
                          });
                          document.querySelectorAll('.after-metric').forEach(el => {
                            (el as HTMLElement).style.display = 'none';
                          });
                        }}
                      >Zonder</button>
                      <button 
                        id="crm-toggle-after" 
                        className="z-10 relative px-2 sm:px-3 py-1 rounded-full font-medium text-xs sm:text-sm"
                        onClick={() => {
                          document.getElementById('crm-toggle-indicator')?.style.setProperty('transform', 'translateX(100%)');
                          document.getElementById('crm-toggle-after')?.classList.add('text-primary-700');
                          document.getElementById('crm-toggle-before')?.classList.remove('text-primary-700');
                          
                          // Hide "Before" metrics, show "After" metrics
                          document.querySelectorAll('.before-metric').forEach(el => {
                            (el as HTMLElement).style.display = 'none';
                          });
                          document.querySelectorAll('.after-metric').forEach(el => {
                            (el as HTMLElement).style.display = 'flex';
                          });
                        }}
                      >Met Salesforce</button>
                    </div>
                  </div>

                  {/* Metrics Display */}
                  <div className="pt-16 space-y-8">
                    {/* Lead Conversion Rate */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <h5 className="text-sm font-medium text-gray-700 mb-3">Lead Conversieratio</h5>
                      <div className="before-metric flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-400 h-2 rounded-full" style={{ width: '18%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-gray-500">18%</span>
                      </div>
                      <div className="after-metric hidden items-center">
                        <div className="w-full bg-primary-100 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-primary-600">32%</span>
                      </div>
                      <div className="after-metric hidden mt-2 text-xs text-green-600 font-medium">
                        <svg className="inline-block w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +77% verbetering
                      </div>
                    </div>
                    
                    {/* Average Deal Size */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <h5 className="text-sm font-medium text-gray-700 mb-3">Gemiddelde Deal Grootte</h5>
                      <div className="before-metric flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-gray-500">€5.200</span>
                      </div>
                      <div className="after-metric hidden items-center">
                        <div className="w-full bg-primary-100 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-primary-600">€8.450</span>
                      </div>
                      <div className="after-metric hidden mt-2 text-xs text-green-600 font-medium">
                        <svg className="inline-block w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +62% verbetering
                      </div>
                    </div>
                    
                    {/* Sales Cycle Length */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <h5 className="text-sm font-medium text-gray-700 mb-3">Lengte Sales Cyclus</h5>
                      <div className="before-metric flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-gray-500">68 dagen</span>
                      </div>
                      <div className="after-metric hidden items-center">
                        <div className="w-full bg-primary-100 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-primary-600">38 dagen</span>
                      </div>
                      <div className="after-metric hidden mt-2 text-xs text-green-600 font-medium">
                        <svg className="inline-block w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        -44% verbetering
                      </div>
                    </div>
                    
                    {/* Customer Satisfaction */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <h5 className="text-sm font-medium text-gray-700 mb-3">Klanttevredenheid</h5>
                      <div className="before-metric flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-400 h-2 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-gray-500">7.2/10</span>
                      </div>
                      <div className="after-metric hidden items-center">
                        <div className="w-full bg-primary-100 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="ml-3 text-lg font-bold text-primary-600">9.1/10</span>
                      </div>
                      <div className="after-metric hidden mt-2 text-xs text-green-600 font-medium">
                        <svg className="inline-block w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +26% verbetering
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Klaar om jouw bedrijfsprocessen te optimaliseren?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Laten we samen werken aan een Salesforce oplossing die jouw organisatie naar het volgende niveau tilt.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-8 mb-8 sm:mb-12 border border-white/20">
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