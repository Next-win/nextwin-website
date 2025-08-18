'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import { Button } from '../ui/Button';
import { Heading2, Paragraph } from '../ui/Typography';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  service: string;
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const inView = useInView(formRef, { once: false });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <Section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <div className="absolute inset-x-0 top-0 -translate-y-1/2 z-0">
          <div className="w-full max-w-7xl mx-auto relative h-32">
            <div className="absolute left-0 w-64 h-64 bg-secondary-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute right-10 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            {/* Left column - Contact Info */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-auto lg:max-w-md bg-white rounded-2xl shadow-soft p-8 border border-gray-100"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Onze contactgegevens</h2>
                <p className="text-gray-600 mb-8">
                  We staan klaar om jouw vragen te beantwoorden en je te helpen met jouw digitale uitdagingen.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
                      <a href="mailto:info@next-win.nl" className="text-primary-600 hover:underline transition-all">info@next-win.nl</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Telefoon</h3>
                      <a href="tel:+31636164419" className="text-primary-600 hover:underline transition-all">+31 6 3616 4419</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Adres</h3>
                      <p className="text-gray-600">Houtkampweg 3<br />6731AV, Otterlo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Opening hours */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Openingstijden</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Maandag - Vrijdag</span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zaterdag - Zondag</span>
                    <span className="font-medium">Gesloten</span>
                  </div>
                </div>
              </div>
              
              {/* Social media */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Volg ons</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Right column - Form */}
            <motion.div
              ref={formRef}
              className="w-full max-w-[400px] bg-white border border-gray-100 rounded-2xl shadow-soft p-8"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Bedankt voor je bericht!</h3>
                  <p className="text-gray-600 mb-6">
                    We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Nieuw bericht versturen
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <Heading2 
                      className="text-2xl font-bold mb-3"
                      gradient={false}
                    >
                      Stuur ons een bericht
                    </Heading2>
                    <Paragraph className="text-gray-600">
                      Vul het formulier in en wij nemen zo snel mogelijk contact met je op.
                    </Paragraph>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Naam <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                            errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Jouw naam"
                          {...register('name', { required: 'Naam is verplicht' })}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="jouw@email.nl"
                          {...register('email', {
                            required: 'E-mail is verplicht',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Ongeldig e-mailadres',
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Bedrijf
                        </label>
                        <input
                          id="company"
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                          placeholder="Bedrijfsnaam"
                          {...register('company')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefoonnummer
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                          placeholder="+31 6 1234 5678"
                          {...register('phone')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Waar ben je in geïnteresseerd?
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        {...register('service')}
                      >
                        <option value="">Selecteer een dienst</option>
                        <option value="websites">Website ontwikkeling</option>
                        <option value="marketing">Online Marketing</option>
                        <option value="content">Content Creatie</option>
                        <option value="other">Anders</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Bericht <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                          errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Hoe kunnen we je helpen?"
                        {...register('message', { required: 'Bericht is verplicht' })}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        fullWidth
                        className="bg-primary-600 hover:bg-primary-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Versturen...
                          </div>
                        ) : (
                          'Verstuur bericht'
                        )}
                      </Button>
                      
                      <p className="text-sm text-gray-500 text-center mt-4">
                        Velden met een <span className="text-red-500">*</span> zijn verplicht
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection; 