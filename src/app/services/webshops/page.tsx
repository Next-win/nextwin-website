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
import { webshopTimelineData } from '@/data/webshopTimelineData';
import FaqAccordion, { FaqItem } from '@/components/ui/FaqAccordion';

export default function WebshopsServicePage() {
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
      question: "Wat kost een webshop?",
      answer: (
        <div className="space-y-4">
          <p>
            Elke webshop is maatwerk, en de kosten hangen af van jouw specifieke wensen en eisen. We kijken naar factoren zoals:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aantal producten en productcategorieën</li>
            <li>Betaal- en verzendmethodes</li>
            <li>Eventuele integraties met voorraadsystemen</li>
            <li>Content creatie en productfotografie</li>
          </ul>
          <p>Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken.</p>
        </div>
      ),
      plainTextAnswer: "Elke webshop is maatwerk, en de kosten hangen af van jouw specifieke wensen en eisen. We kijken naar factoren zoals: Aantal producten en productcategorieën, Betaal- en verzendmethodes, Eventuele integraties met voorraadsystemen, Content creatie en productfotografie. Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken."
    },
    {
      question: "Hoe lang duurt het om een webshop te maken?",
      answer: 
        "Gemiddeld duurt het ontwikkelen van een professionele webshop 6-10 weken. Eenvoudige webshops kunnen sneller klaar zijn, terwijl complexere e-commerce platforms meer tijd nodig hebben. We maken altijd een realistische planning die past bij jouw deadlines."
    },
    {
      question: "Kan ik zelf mijn webshop beheren?",
      answer: 
        "Absoluut! We bouwen webshops met WooCommerce, een gebruiksvriendelijk e-commerce platform waarmee je eenvoudig producten, bestellingen, voorraad en verzendingen kunt beheren. We geven je ook een persoonlijke instructie zodat je direct aan de slag kunt."
    },
    {
      question: "Hoe zit het met betalingen en verzendingen?",
      answer: 
        "We integreren alle gangbare betaalmethoden zoals iDEAL, creditcards, Bancontact en AfterPay. Ook richten we verzendopties in zoals PostNL, DHL en afhaallocaties. Alles wordt geconfigureerd volgens de nieuwste veiligheidsstandaarden."
    },
    {
      question: "Wat als ik al een webshop heb die verbeterd moet worden?",
      answer: 
        "We kunnen bestaande webshops optimaliseren, migreren of volledig opnieuw opbouwen, afhankelijk van de staat en structuur. We behouden waardevolle data zoals producten, klanten en bestellingen tijdens de overstap."
    },
    {
      question: "Bieden jullie ook onderhoud en ondersteuning na de lancering?",
      answer: 
        "Ja, we bieden verschillende onderhoudscontracten aan speciaal voor webshops. Hiermee verzekeren we dat je webshop altijd up-to-date, veilig en optimaal performant blijft, zodat jij je kunt focussen op het verkopen van je producten."
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
              <span className="text-primary-600">Webshops</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Webshops die verkopen
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Wij bouwen webshops die niet alleen mooi zijn, maar ook conversiegericht, gebruiksvriendelijk en klaar om jouw online verkoop te laten groeien.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">WooCommerce specialist</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Conversie-optimalisatie</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Veilige betalingen</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">Voorraad integratie</span>
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

          {/* Right column - Featured Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[580px] w-full overflow-visible rounded-3xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-80"></div>
              
              {/* Website mockups - iPad and iPhone */}
              <div className="absolute inset-0 p-10 overflow-visible">
                {/* iPad mockup with desktop screenshot */}
                <DeviceMockup
                  imageSrc="/images/hdd-desktop.png"
                  alt="Webshop ontwikkeling"
                  scrollMode="css"
                />
                
                {/* iPhone mockup with mobile screenshot */}
                <div className="absolute -bottom-16 right-0 w-[180px] h-[380px] z-20">
                  <MobileDeviceMockup
                    imageSrc="/images/hdd-mobile.png"
                    alt="Responsieve webshop op mobiel"
                    scrollMode="js"
                    scrollHeight={65}
                  />
                </div>
              </div>
            </div>
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
              <div className="w-full h-full aspect-video  overflow-visible">
                <DeviceMockup
                  imageSrc="/images/fire-safety-shop-deskop.png"
                  alt="Webshop Strategy Session"
                  className="p-4"
                  scrollMode="css"
                />
                
 
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Jouw omzet is onze prioriteit</h3>
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
                    <h4 className="text-lg font-semibold mb-1">E-commerce strategie</h4>
                    <p className="text-gray-600">We beginnen met begrijpen wie je klanten zijn en hoe je webshop hen tot aankoop kan verleiden.</p>
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
                    <p className="text-gray-600">Een goed konverterende checkout is essentieel. Wij zorgen voor een soepel aankoopproces zonder obstakels.</p>
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
                    <h4 className="text-lg font-semibold mb-1">WooCommerce expertise</h4>
                    <p className="text-gray-600">Met WooCommerce als basis bouwen we een schaalbare en uitbreidbare webshop met alle mogelijkheden die je nodig hebt.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Doorlopende optimalisatie</h4>
                    <p className="text-gray-600">Na lancering blijven we monitoren en verbeteren. Een succesvolle webshop is een continu proces.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Te weinig online verkoop</h4>
                    <p className="text-gray-600">Je hebt een webshop, maar de verkopen blijven achter bij de verwachtingen. Bezoekers komen wel, maar kopen niet.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Tijdrovend beheer</h4>
                    <p className="text-gray-600">Het bijhouden van producten, bestellingen en voorraad kost teveel tijd. Handmatige processen vreten je efficiëntie.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Slechte vindbaarheid</h4>
                    <p className="text-gray-600">Ondanks je investeringen in SEO vinden potentiële klanten je webshop niet in Google als ze zoeken naar jouw producten.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Technische beperkingen</h4>
                    <p className="text-gray-600">Je huidige platform is niet flexibel genoeg om mee te groeien met je bedrijf of biedt niet de functies die jouw klanten nodig hebben.</p>
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
            <div className="relative aspect-square rounded-2xl overflow-visible ">
              <div className="w-full h-full overflow-visible">
                <DeviceMockup
                  imageSrc="/images/fire-safety-shop-deskop.png"
                  alt="Webshop Development Process"
                  className="p-6"
                  scrollMode="js"
                  scrollHeight={65}
                />
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
              title="Jouw webshop in 10 weken"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Wij geloven in een gestructureerd proces. Zo weet je precies wat je kunt verwachten en wanneer. Hieronder zie je onze beproefde aanpak voor e-commerce.
            </p>
          </div>

          <CalendarTimeline phases={webshopTimelineData.phases} footer={webshopTimelineData.footer} />
          
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
              <h3 className="text-xl font-bold mb-4">Vrijblijvend Productpagina Ontwerp</h3>
              <p className="text-gray-600 mb-4">
                We maken eerst een concreet ontwerp van een productpagina zodat je precies ziet wat we kunnen. Geen klik? Dan betaal je niets en kun je zonder verplichtingen stoppen.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct inzicht in je toekomstige webshop</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Geen match? Geen betaling!</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Je zit nergens aan vast. Beloofd.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Ze toonden eerst hun visie op mijn productpresentatie. Zo kon ik meteen zien of hun stijl bij mijn merk paste." 
                  <span className="block mt-1 font-medium">— Sabine, webshop eigenaar</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">12 Maanden E-commerce Support</h3>
              <p className="text-gray-600 mb-4">
                Een jaar lang technische ondersteuning voor je webshop. Bij problemen lossen wij het op, zodat je verkopen nooit in gevaar komen. Updates en kleine aanpassingen kun je zelf doen via WooCommerce.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prioritaire hulp bij technische problemen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Beveiligings- en WooCommerce updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maandelijkse performance check</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Tijdens Black Friday hadden we een technisch probleem. Ze reageerden binnen 20 minuten en losten het direct op. Onbetaalbaar!" 
                  <span className="block mt-1 font-medium">— Thomas, e-commerce ondernemer</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Schaalbare groei</h3>
              <p className="text-gray-600 mb-4">
                We bouwen met WooCommerce zodat je webshop kan groeien met je bedrijf. Van 10 naar 10.000 producten, van lokale naar internationale verkoop.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Onbeperkte producten en categorieën</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Uitbreidbaar met duizenden plugins</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Klaar voor internationalisatie</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "We zijn begonnen met 50 producten, nu zitten we op 1200. De webshop blijft snel en gebruiksvriendelijk." 
                  <span className="block mt-1 font-medium">— Michael, groothandel</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Section - Using FeaturedCases component */}
      <FeaturedCases 
        title="Webshops die resultaat opleveren"
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
              title="Onze e-commerce benadering"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Een succesvolle webshop draait om meer dan alleen techniek. Dit zijn de principes die ons leiden bij elk webshop project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse"></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Conversiegericht</h3>
              <p className="text-gray-600 mb-4">
                Elk element in je webshop is ontworpen om bezoekers naar de checkout te leiden en de conversieratio te maximaliseren.
              </p>

            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 relative">
                <svg className="w-7 h-7 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="absolute w-full h-full bg-primary-200 rounded-xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
              </div>
              <h3 className="text-xl font-bold mb-4">Gebruiksvriendelijk</h3>
              <p className="text-gray-600 mb-4">
                Zowel voor jou als voor je klanten. Het beheer is eenvoudig en het bestelproces soepel en intuïtief.
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
                We bouwen je webshop zo dat deze kan meegroeien met je bedrijf, van enkele producten tot een uitgebreid assortiment.
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
              title="Alles wat je wilt weten over webshops"
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
              title="Onze technische e-commerce stack"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Geen zorgen als je dit deel niet begrijpt! Maar voor de technisch geïnteresseerden, dit is wat onder de motorkap van jouw webshop zit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="animate-on-scroll">
                  <h4 className="font-bold text-gray-800 mb-2">WooCommerce Expertise</h4>
                  <p className="text-gray-600">Uitgebreide kennis van WooCommerce en alle bijbehorende plugins en integraties.</p>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                  <h4 className="font-bold text-gray-800 mb-2">Performance Optimalisatie</h4>
                  <p className="text-gray-600">Snelle laadtijden en optimale prestaties voor een betere gebruikerservaring en SEO.</p>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                  <h4 className="font-bold text-gray-800 mb-2">Beveiliging & Compliance</h4>
                  <p className="text-gray-600">Veilige betalingen, SSL-certificaten en compliance met alle e-commerce wetgeving.</p>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.6s' }}>
                  <h4 className="font-bold text-gray-800 mb-2">API Integraties</h4>
                  <p className="text-gray-600">Naadloze koppelingen met ERP-systemen, boekhoudsoftware en externe platforms.</p>
                </div>
                
                <div className="animate-on-scroll" style={{ animationDelay: '0.8s' }}>
                  <h4 className="font-bold text-gray-800 mb-2">Custom Development</h4>
                  <p className="text-gray-600">Maatwerk functionaliteiten en plugins specifiek voor jouw bedrijfsprocessen.</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <p className="text-gray-700">
                  <strong className="text-primary-700">Maar het belangrijkste:</strong> we bouwen webshops die niet alleen technisch sterk zijn, maar ook omzet genereren.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">Veilige Betalingen</h4>
                <p className="text-gray-600">Alle gangbare betaalmethoden zoals iDEAL, creditcards en AfterPay volledig beveiligd geïntegreerd.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">Snelheid Optimalisatie</h4>
                <p className="text-gray-600">Supersnelle laadtijden voor een betere gebruikerservaring en conversie.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">Cloud Infrastructuur</h4>
                <p className="text-gray-600">Schaalbare hosting met 99.9% uptime garantie voor betrouwbaarheid.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">Database Optimalisatie</h4>
                <p className="text-gray-600">Geoptimaliseerde database structuur voor snelle productcatalogi.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden" id="conversation">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Klaar om je online verkoop te verbeteren?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Laten we samen werken aan een webshop die jouw producten optimaal presenteert en zorgt voor een omzetgroei waar je trots op kunt zijn.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white/20">
              <p className="text-white mb-6">Kies de manier die voor jou het beste werkt:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact?form=webshop" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg shadow-primary-900/30">
                  <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Vrijblijvende offerte aanvragen</span>
                </Link>
                <Link href="tel:+31638146310" className="bg-white hover:bg-gray-100 text-primary-700 font-medium py-4 px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg">
                  <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Bel direct: 06-3814 6310</span>
                </Link>
              </div>
            </div>
            
            <p className="text-white/80 text-sm">Geen verplichtingen, geen verkooppraatjes, gewoon een eerlijk gesprek over je webshop ambities.</p>
          </div>
        </div>
      </Section>
    </div>
  );
} 