'use client';

import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Gerwin Morren',
    role: 'WordPress/SEO specialist',
    bio: 'WordPress expert met oog voor detail en passie voor optimale gebruikerservaring.',
    image: '/images/team/Gerwinmorren.png',
    expertise: ['WordPress Development', 'SEO Optimalisatie', 'UX Design'],
    linkedin: 'https://linkedin.com/',
  },
  {
    name: 'Pascal van de Braak',
    role: 'Online marketeer & Salesforce specialist',
    bio: 'Gedreven online marketeer met expertise in digitale strategieën, campagnes en Salesforce implementaties.',
    image: '/images/team/pascalvdbraak.png',
    expertise: ['Digital Marketing', 'Content Strategie', 'Campagne Management', 'Salesforce'],
    linkedin: 'https://linkedin.com/',
  },
];

const clients = [
  { name: '2nd Ride', logo: '/images/trusted/2nd-Ride-logo.jpg' },
  { name: 'Flexplek', logo: '/images/trusted/Flexplek-Logo-R-3.svg' },
  { name: 'Baderie Barneveld', logo: '/images/trusted/Logo_baderie_barneveld.svg' },
  { name: 'Santos Boats', logo: '/images/trusted/Logo_SantosBoats_Navy-1.png' },
  { name: 'Access Safety', logo: '/images/trusted/access-safety.png' },
  { name: 'Oud Hollands Spel', logo: '/images/trusted/oud_hollands_spel_logo_svg.svg' },
];

const TeamSection = () => {
  return (
    <Section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background gradient elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="relative">
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">Ons Team</span>
            </div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Klein, gezellig en gedreven
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bij Next Win zijn we een klein, hecht team van enthousiaste professionals die samen hun passie voor de digitale wereld delen. 
              Samen leveren we het beste resultaat voor onze klanten.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto mb-20">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-6 relative">
                  <div className="relative h-[380px] w-[280px] mx-auto overflow-hidden rounded-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="280px"
                      style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
                  
                  {/* LinkedIn icon */}
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="space-y-4 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-600">{member.bio}</p>
                  
                  <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-2">Expertisegebieden:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                Een greep uit onze klanten
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {clients.map((client, index) => (
                  <motion.div 
                    key={index} 
                    className="w-32 h-16 flex items-center justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={40}
                      style={{ objectFit: 'contain' }}
                      className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8 text-center">
                <a href="/cases" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <span>Bekijk onze cases</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TeamSection; 