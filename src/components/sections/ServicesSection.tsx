'use client';

import Link from 'next/link';
import Image from 'next/image';
import Section from '../ui/Section';
import { Button } from '../ui/Button';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

// Services array with correct links to existing pages
const services = [
  {
    id: 'websites',
    title: 'Websites',
    description: 'Op maat gemaakte websites met optimale gebruikerservaring',
    image: '/images/websites.jpg',
    icon: '/images/icons/website-icon.svg',
    hasPage: true,
  },
  {
    id: 'online-marketing',
    title: 'Online Marketing',
    description: 'Complete online marketing strategie voor meer klanten',
    image: '/images/marketing.png',
    icon: '/images/icons/marketing-icon.svg',
    hasPage: true,
  },
  {
    id: 'google-ads',
    title: 'Google Ads (SEA)',
    description: 'Doelgerichte advertenties met directe resultaten',
    image: '/images/marketing.png',
    icon: '/images/icons/marketing-icon.svg',
    hasPage: true,
  },
  {
    id: 'zoekmachine-optimalisatie',
    title: 'SEO',
    description: 'Snel resultaat met organische zoekmachine optimalisatie',
    image: '/images/content-creatie-drone.png',
    icon: '/images/icons/seo-icon.svg',
    hasPage: true,
  },
  {
    id: 'webshops',
    title: 'Webshops',
    description: 'Professionele e-commerce oplossingen die verkopen',
    image: '/images/websites.jpg', 
    icon: '/images/icons/webshop-icon.svg',
    hasPage: true,
  },
  {
    id: 'content-creatie',
    title: 'Content Creatie',
    description: 'Professionele foto- en videografie voor jouw online presentatie',
    image: '/images/content-creatie-drone.png',
    icon: '/images/icons/content-icon.svg',
    hasPage: true,
  },
];

const ServicesSection = () => {
  return (
    <>
      {/* About Us intro section */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollAnimationWrapper>
                <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">Over ons</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                    Wie zijn wij?
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Next Win is een creatief digitaal bureau dat zichzelf elke dag opnieuw wil bewijzen in de snel veranderende digitale wereld. Met onze slimme combinatie van creativiteit, strategie en techniek helpen wij ambitieuze opdrachtgevers te groeien 🚀.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ons team bestaat uit top online professionals op het gebied van branding, campagnes, websites, online marketing, e-commerce en digital development.
                </p>
                
                <div className="mt-8">
                  <Button
                    href="/about-us"
                    variant="outline"
                    size="lg"
                    className="border-primary-600 text-primary-600 hover:bg-primary-50"
                  >
                    Meer over ons
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            </div>
            
            <div className="relative">
              <ScrollAnimationWrapper delay={0.2}>
                <div className="relative h-[360px] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/team/ourteam.avif"
                    alt="Next Win Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 text-white">
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-xs">Jaren ervaring</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-xs">Tevreden klanten</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-xs">Succesratio</div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Services section */}
      <Section id="services" className="py-20 md:py-32 relative overflow-hidden bg-gray-50">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-400 opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-400 opacity-10 rounded-full blur-3xl -ml-48 -mb-24"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">Wat wij doen</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                  Onze Services
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Wij bieden verschillende diensten aan om jouw bedrijf online te laten groeien.
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <ScrollAnimationWrapper 
                key={service.id}
                delay={index * 0.1}
              >
                <Link
                  href={service.hasPage ? `/services/${service.id}` : `/services#${service.id}`}
                  className="flex bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all p-5 group h-full border border-gray-100"
                >
                  <div className="flex-shrink-0 w-16 h-16 mr-4 relative rounded-full overflow-hidden bg-primary-50 flex items-center justify-center">
                    <Image 
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-center flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-2 text-primary-600 text-xs font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Meer info
                      <svg className="w-3 h-3 ml-1" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
          
          <ScrollAnimationWrapper delay={0.3}>
            <div className="text-center">
              <Button 
                href="/services" 
                size="lg" 
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 shadow-md hover:shadow-lg transition-all"
              >
                Alle services bekijken
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </Section>
    </>
  );
};

export default ServicesSection;