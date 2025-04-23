'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../ui/Section';
import { Button } from '../ui/Button';

const services = [
  {
    id: 'websites',
    title: 'Websites',
    description: 'Boost je online aanwezigheid met een op maat gemaakte website en een gemakkelijk te beheren CMS systeem.',
    image: '/images/websites.jpg',
    usp: 'Maatwerk design',
    features: [
      'Responsive design',
      'SEO-optimalisatie',
      'Gebruiksvriendelijke interface',
      'Optimale laadtijd',
    ],
  },
  {
    id: 'online-marketing',
    title: 'Online Marketing',
    description: 'Bereik meer klanten door betere vindbaarheid in Google met onze complete zoekmachineoptimalisatie!',
    image: '/images/marketing.png',
    usp: 'Meer traffic',
    features: [
      'SEA (Google Ads)',
      'Social media marketing',
      'E-mail marketing',
      'Conversie optimalisatie',
    ],
  },
  {
    id: 'content-creatie',
    title: 'Content Creatie',
    description: 'Van dronevideo\'s tot productfotografie, alles voor het perfecte plaatje.',
    image: '/images/content-creatie-drone.png',
    usp: 'Professionele kwaliteit',
    features: [
      'Dronevideo\'s',
      'Productfotografie',
      'Video productie',
      'Grafisch ontwerp',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <Section id="services" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
            Onze Services
          </span>
        </h2>
        <p className="text-xl text-gray-600">
          Wij bieden verschillende diensten aan om jouw bedrijf online te laten groeien.
        </p>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all relative z-10"
          >
            <div className="relative h-56 overflow-hidden">
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
              <div className="absolute top-5 left-5">
                <div className="bg-primary-600 text-white text-sm px-4 py-1.5 rounded-full">
                  {service.usp}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-50 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/services#${service.id}`}
                className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 group-hover:translate-x-1 transition-transform duration-300"
              >
                Meer details
                <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center mt-16">
        <Button href="/services" size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8">
          Alle services bekijken
        </Button>
      </div>
    </Section>
  );
};

export default ServicesSection; 