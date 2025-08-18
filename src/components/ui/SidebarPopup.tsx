'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface SidebarPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  formType?: 'adviesgesprek' | 'contact' | 'demo' | 'audit';
  source?: string; // Track where the popup was triggered from
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const SidebarPopup: React.FC<SidebarPopupProps> = ({
  isOpen,
  onClose,
  title = "Gratis adviesgesprek",
  subtitle = "Ontdek hoe wij jouw bedrijf kunnen laten groeien",
  formType = 'adviesgesprek',
  source = 'homepage'
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add form submission logic here
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Track conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: `${formType}_${source}`,
          form_type: formType,
          source: source
        });
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };



  if (isSubmitted) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Success Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[480px] sm:w-[420px] md:w-[480px] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center max-w-sm">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', damping: 15, stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      Bedankt voor je aanvraag!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 mb-8 leading-relaxed"
                    >
                      We nemen binnen 24 uur contact met je op om jouw gratis adviesgesprek in te plannen.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button onClick={onClose} className="w-full">
                        Sluiten
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
                      {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[480px] sm:w-[420px] md:w-[480px] bg-white shadow-2xl z-50 overflow-y-auto"
            >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
                <div className="flex items-start justify-between p-4 sm:p-6">
                  <div className="flex items-start flex-1 min-w-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{title}</h2>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 ml-2"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="flex-1 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Personal Info Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <User className="w-5 h-5 mr-2 text-primary-600" />
                      Contactgegevens
                    </h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Voor- en achternaam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                          focusedField === 'name' 
                            ? 'border-primary-500 ring-2 ring-primary-500/20' 
                            : 'border-gray-300 hover:border-gray-400'
                        } focus:outline-none`}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                          focusedField === 'company' 
                            ? 'border-primary-500 ring-2 ring-primary-500/20' 
                            : 'border-gray-300 hover:border-gray-400'
                        } focus:outline-none`}
                        placeholder="Jouw bedrijf B.V."
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mailadres *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-11 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                            focusedField === 'email' 
                              ? 'border-primary-500 ring-2 ring-primary-500/20' 
                              : 'border-gray-300 hover:border-gray-400'
                          } focus:outline-none`}
                          placeholder="john@bedrijf.nl"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoonnummer
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-11 pr-4 py-3 border rounded-lg transition-all duration-200 ${
                            focusedField === 'phone' 
                              ? 'border-primary-500 ring-2 ring-primary-500/20' 
                              : 'border-gray-300 hover:border-gray-400'
                          } focus:outline-none`}
                          placeholder="06 1234 5678"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Waar kunnen we je mee helpen? (optioneel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-none ${
                        focusedField === 'message' 
                          ? 'border-primary-500 ring-2 ring-primary-500/20' 
                          : 'border-gray-300 hover:border-gray-400'
                      } focus:outline-none`}
                      placeholder="Korte beschrijving van je vraag of uitdaging..."
                    />
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-sm text-gray-600 min-w-0">
                        <p className="font-medium text-gray-900 mb-1">100% vrijblijvend</p>
                        <p className="leading-relaxed">We nemen binnen 24 uur contact op • Geen verplichtingen • Altijd persoonlijk advies</p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg font-semibold"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Versturen...
                      </div>
                    ) : (
                      'Gratis adviesgesprek aanvragen'
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarPopup;
