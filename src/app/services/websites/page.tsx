"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Heading1, Heading2, Paragraph, SectionTitle } from '@/components/ui/Typography';
import DeviceMockup from '@/components/ui/DeviceMockup';
import MobileDeviceMockup from '@/components/ui/MobileDeviceMockup';
import CalendarTimeline from '@/components/ui/CalendarTimeline';
import FeaturedCases from '@/components/ui/FeaturedCases';
import { websiteTimelineData } from '@/data/websiteTimelineData';
import FaqAccordion, { FaqItem } from '@/components/ui/FaqAccordion';

export default function WebsitesServicePage() {
  // Define FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Wat kost een website?",
      answer: (
        <div className="space-y-4">
          <p>
            Elke website is maatwerk, en de kosten hangen af van jouw specifieke wensen en eisen. We kijken naar factoren zoals:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Complexiteit van het design</li>
            <li>Aantal pagina's en functionaliteiten</li>
            <li>Eventuele integraties met andere systemen</li>
            <li>Content creatie en migratie</li>
          </ul>
          <p>Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken.</p>
        </div>
      ),
      plainTextAnswer: "Elke website is maatwerk, en de kosten hangen af van jouw specifieke wensen en eisen. We kijken naar factoren zoals: Complexiteit van het design, Aantal pagina's en functionaliteiten, Eventuele integraties met andere systemen, Content creatie en migratie. Na een eerste gesprek kunnen we een gedetailleerde, vrijblijvende offerte maken."
    },
    {
      question: "Hoe lang duurt het om een website te maken?",
      answer: 
        "Gemiddeld duurt het ontwikkelen van een professionele website 4-8 weken. Eenvoudige websites kunnen sneller klaar zijn, terwijl complexere projecten zoals webshops of platforms meer tijd nodig hebben. We maken altijd een realistische planning die past bij jouw deadlines."
    },
    {
      question: "Kan ik zelf mijn website beheren?",
      answer: 
        "Absoluut! We bouwen websites met een gebruiksvriendelijk content management systeem (CMS) waarmee je eenvoudig teksten, afbeeldingen en andere content kunt aanpassen. We geven je ook een persoonlijke instructie zodat je direct aan de slag kunt."
    },
    {
      question: "Wat als ik al een website heb die geüpdatet moet worden?",
      answer: 
        "We kunnen bestaande websites moderniseren, verbeteren of volledig opnieuw opbouwen, afhankelijk van de staat en structuur. Vaak kun je het beste resultaat behalen met een frisse start, maar we kijken graag naar wat in jouw situatie het meest zinvol is."
    },
    {
      question: "Hoe zit het met SEO en vindbaarheid?",
      answer: 
        "Elke website die we bouwen is geoptimaliseerd voor zoekmachines. We zorgen voor een technisch correcte basis, snelle laadtijden, mobiel-vriendelijke weergave en een duidelijke structuur. Daarnaast geven we advies over content strategie om je vindbaarheid te maximaliseren."
    },
    {
      question: "Bieden jullie ook hosting en domeinregistratie aan?",
      answer: 
        "Ja, we kunnen de complete setup van je website verzorgen, inclusief hosting, domeinregistratie en e-mailadressen. We werken met betrouwbare hostingpartners die een uitstekende service bieden tegen een scherpe prijs."
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
              <span className="text-primary-600">Websites</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Professionele websites die resultaat leveren
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Wij bouwen websites die niet alleen mooi zijn, maar ook doelgericht leads genereren en jouw bedrijf laten groeien.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">WordPress & WooCommerce</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">SEO-geoptimaliseerd</span>
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
                <span className="text-gray-700 text-sm">Responsive maatwerk</span>
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
          <div className="hidden lg:block relative">
            <div className="relative h-[580px] w-full overflow-visible rounded-3xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-80"></div>
              
              {/* Website mockups - iPad and iPhone */}
              <div className="absolute inset-0 p-10 overflow-visible">
                {/* iPad mockup with desktop screenshot */}
                <DeviceMockup
                  imageSrc="/images/natuurcentrum-desktop.png"
                  alt="Website ontwikkeling"
                  scrollMode="css"
                />
                
                {/* iPhone mockup with mobile screenshot */}
                <div className="absolute -bottom-16 right-0 w-[180px] h-[380px] z-20">
                  <MobileDeviceMockup
                    imageSrc="/images/natuurcentrum-mobile.png"
                    alt="Responsieve website op mobiel"
                    scrollMode="js"
                    scrollHeight={65}
                  />
                </div>
              </div>
              

              
              {/* Results card */}
              
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
              <div className="w-full h-full aspect-video rounded-xl shadow-lg overflow-visible">
                <DeviceMockup
                  imageSrc="/images/access-safety-dekstop.png"
                  alt="Website Strategy Session"
                  className="p-4"
                  scrollMode="css"
                />
                
 
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Jouw succes is onze prioriteit</h3>
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
                    <h4 className="text-lg font-semibold mb-1">Strategisch denken</h4>
                    <p className="text-gray-600">We beginnen met begrijpen wat je wilt bereiken. Pas dan gaan we nadenken over design en techniek.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Focus op conversie</h4>
                    <p className="text-gray-600">Een mooie website is leuk, maar uiteindelijk gaat het om het omzetten van bezoekers in klanten.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Technische excellentie</h4>
                    <p className="text-gray-600">Onder de motorkap bouwen we met de beste technologieën voor optimale performance en veiligheid.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Blijvende ondersteuning</h4>
                    <p className="text-gray-600">Na de lancering stopt het niet. We blijven er voor je om ervoor te zorgen dat je website blijft presteren.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Te weinig nieuwe klanten</h4>
                    <p className="text-gray-600">Je website zou je hardst werkende verkoper moeten zijn, maar levert nauwelijks nieuwe leads op.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Lastig te beheren</h4>
                    <p className="text-gray-600">Voor elke kleine wijziging moet je iemand inhuren, waardoor je website niet meegroeit met je bedrijf.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Onvindbaar in Google</h4>
                    <p className="text-gray-600">Als potentiële klanten zoeken naar wat jij biedt, vinden ze je concurrenten, maar niet jou.</p>
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
                    <h4 className="text-lg font-semibold mb-1">Verouderde uitstraling</h4>
                    <p className="text-gray-600">Je huidige website representeert niet meer wie je nu bent en waar je bedrijf voor staat.</p>
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
                  alt="Website Development Process"
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
              title="Jouw website in 10-12 weken"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Wij geloven in een gestructureerd proces. Zo weet je precies wat je kunt verwachten en wanneer. Hieronder zie je onze beproefde aanpak.
            </p>
          </div>

          <CalendarTimeline phases={websiteTimelineData.phases} footer={websiteTimelineData.footer} />
          
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
              <h3 className="text-xl font-bold mb-4">Vrijblijvend Homepage Ontwerp</h3>
              <p className="text-gray-600 mb-4">
                Beelden zeggen meer dan duizend woorden. Na het eerste gesprek maken we een vrijblijvend ontwerp van je homepage. Geen klik? Dan betaal je niets en kun je zonder verplichtingen stoppen.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct inzicht in onze stijl en aanpak</span>
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
                  "Ze maken eerst een concept om te laten zien wat ze kunnen. Zo kon ik zien of het klikte voordat ik iets hoefde te betalen." 
                  <span className="block mt-1 font-medium">— Mark, ondernemer</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">12 Maanden Garantie</h3>
              <p className="text-gray-600 mb-4">
                Een jaar lang garantie op je website. Bij problemen lossen wij het op, zodat jouw website altijd optimaal functioneert. Updates en kleine aanpassingen kun je zelf doen via ons gebruiksvriendelijke CMS.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Snelle oplossing bij technische problemen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Veiligheidsupdates inbegrepen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gebruiksvriendelijk CMS</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Als er iets mis ging, losten ze het meteen op. Die zekerheid is goud waard voor mijn bedrijf!" 
                  <span className="block mt-1 font-medium">— Laura, ZZP'er</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Toekomstbestendig</h3>
              <p className="text-gray-600 mb-4">
                We bouwen met de nieuwste technologieën en houden rekening met toekomstige ontwikkelingen. Jouw website groeit mee met je bedrijf.
              </p>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Moderne, schaalbare technologie</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Groeit mee met je bedrijf</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Klaar voor toekomstige standaarden</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  "Drie jaar later en mijn website presteert nog steeds uitstekend. Beste investering ooit." 
                  <span className="block mt-1 font-medium">— Jan, Horeca-ondernemer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Section - Using FeaturedCases component */}
      <FeaturedCases 
        title="Websites die impact maken"
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
              title="Onze kernwaarden"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Meer dan een leverancier willen we een partner zijn. Iemand die écht begrijpt wat jij nodig hebt en meedenkt over de beste oplossing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Persoonlijk</h3>
              <p className="text-gray-600 mb-4">
                We geloven in een persoonlijke aanpak. Jouw verhaal en visie staan centraal in alles wat we doen.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Transparant</h3>
              <p className="text-gray-600 mb-4">
                Geen verrassingen achteraf. We communiceren helder over proces, planning en kosten - van begin tot eind.
              </p>

            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Resultaatgericht</h3>
              <p className="text-gray-600 mb-4">
                Een mooie website is fijn, maar wij focussen op wat echt telt: meer klanten en een groeiend bedrijf.
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
              title="Alles wat je wilt weten"
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
      <Section className="py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle
              subtitle="Voor de techneuten"
              title="Onze technische benadering"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              Geen zorgen als je dit deel niet begrijpt! Maar voor de technisch geïnteresseerden, zo bouwen we onze websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="prose prose-lg">
                <p>
                  We ontwikkelen je website met moderne technologieën die zorgen voor een snelle, veilige en duurzame oplossing. Onze technische benadering in het kort:
                </p>
                <ul>
                  <li>WordPress met custom themes voor optimale performance</li>
                  <li>Advanced Custom Fields voor een intuïtief CMS</li>
                  <li>Responsive design met mobile-first benadering</li>
                  <li>Geoptimaliseerde laadtijd en UX</li>
                  <li>SEO-technieken volgens de nieuwste standaarden</li>
                </ul>
                <p>
                  <strong>Maar het belangrijkste:</strong> we zorgen ervoor dat je website perfect werkt voor jou en je bezoekers, ook als deze technische termen je niets zeggen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Snelle Laadtijd</h4>
                <p className="text-gray-600">Google beloont snelle websites met hogere rankings.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Mobiel Vriendelijk</h4>
                <p className="text-gray-600">Perfect responsive op alle schermformaten.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Veilig & Stabiel</h4>
                <p className="text-gray-600">Beschermd tegen de meeste security risico's.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">SEO Ready</h4>
                <p className="text-gray-600">Geoptimaliseerd voor betere vindbaarheid.</p>
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
              Samen bouwen aan jouw online succes
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Elke online reis begint met een gesprek. We zijn benieuwd naar jouw verhaal en hoe we je kunnen helpen groeien.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white/20">
              <p className="text-white mb-6">Kies de manier die voor jou het beste werkt:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact?form=questions" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg shadow-primary-900/30">
                  <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Stel je vraag via e-mail</span>
                </Link>
                <Link href="tel:+31638146310" className="bg-white hover:bg-gray-100 text-primary-700 font-medium py-4 px-8 rounded-lg transition-colors flex items-center justify-center group shadow-lg">
                  <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform">Bel direct: 06-3814 6310</span>
                </Link>
              </div>
            </div>
            
            <p className="text-white/80 text-sm">Geen verplichtingen, geen verkooppraatjes, gewoon een eerlijk gesprek.</p>
          </div>
        </div>
      </Section>
    </div>
  );
} 