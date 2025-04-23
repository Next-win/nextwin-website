'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

const values = [
  {
    title: 'Multidisciplinair',
    description: 'Wij geloven in de kracht van samenwerking en diversiteit. Ons team bestaat uit experts op het gebied van branding, campagnes, websites, online marketing, e-commerce en digital development. Door onze krachten te bundelen, kunnen we innovatieve oplossingen bieden die aan de unieke behoeften van onze klanten voldoen.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3 16.8993 16.6275 16.6438 16.1429M16.6438 16.1429C15.6702 14.5743 13.7983 13.5 11.5 13.5C9.2017 13.5 7.32982 14.5743 6.35625 16.1429M7 20V18C7 17.3 7.10074 16.6275 7.35625 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM21 10C21 11.6569 19.6569 13 18 13C16.3431 13 15 11.6569 15 10C15 8.34315 16.3431 7 18 7C19.6569 7 21 8.34315 21 10ZM7 10C7 11.6569 5.65685 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.65685 7 7 8.34315 7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Eerlijk',
    description: 'We zijn eerlijk in onze aanpak en geven oprechte adviezen en feedback. Ons doel is om langdurige relaties op te bouwen met onze klanten, en daarvoor zetten we ons in voor eerlijkheid en integriteit in al onze interacties.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 10L13 13.2L11 11.5L8 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Transparant',
    description: 'Bij Next Win streven we naar transparantie in alles wat we doen. We communiceren open en eerlijk met onze klanten en betrekken hen bij elke stap van het proces. We geloven dat vertrouwen de basis is van succesvolle samenwerkingen.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9H16M8 13H14M8 17H11M21 13V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V13M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13M21 13H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Daadkrachtig',
    description: 'We zijn vastberaden om resultaten te boeken voor onze klanten en zijn niet bang om beslissingen te nemen en actie te ondernemen. Ons team werkt met focus en vastberadenheid om elk project tot een succes te maken.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15L11 9L13 13L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 7H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 20.5L3 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

const AboutSection = () => {
  return (
    <>
      <Section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Creativiteit en strategie
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Next Win is een creatief digitaal bureau met een passie voor het helpen van ambitieuze opdrachtgevers bij het bereiken van hun online doelen. Ons toegewijde team van professionals streeft ernaar om elke dag opnieuw te bewijzen dat we aan de top staan van de snel veranderende digitale wereld.
              </p>
              <p className="text-lg text-gray-600">
                Wij geloven dat een slimme combinatie van creativiteit, strategie en techniek het verschil maakt in het behalen van online succes. 🚀
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper
              className="order-1 lg:order-2 relative"
              delay={0.2}
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/team/ourteam.avif"
                  alt="Next Win Team at Work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="brightness-95"
                />
                <div className="absolute inset-0 bg-primary-600/10"></div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400 opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-600 opacity-10 rounded-full blur-3xl -ml-48 -mb-24"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block text-primary-600 font-semibold mb-2">Waar we voor staan</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Onze waarden
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Deze kernwaarden vormen de basis van hoe wij werken en met onze klanten omgaan
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollAnimationWrapper 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-500 relative overflow-hidden group cursor-pointer"
                delay={index * 0.1}
              >
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-50/30 group-hover:to-primary-100/40 transition-colors duration-500"></div>
                
                {/* Accent bar on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      {/* Icon container with shadow and gradient */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">{value.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  
                  {/* Bottom interactive element */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-px w-1/3 bg-gray-100 group-hover:bg-primary-100 transition-colors duration-300"></div>
                    <div className="text-primary-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="inline-flex items-center text-sm font-medium">
                        <span className="mr-1">Meer weten</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
          
          <ScrollAnimationWrapper 
            className="mt-20 text-center"
            delay={0.3}
          >
            <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Benieuwd hoe we samen kunnen werken?
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </ScrollAnimationWrapper>
        </div>
      </Section>
    </>
  );
};

export default AboutSection; 