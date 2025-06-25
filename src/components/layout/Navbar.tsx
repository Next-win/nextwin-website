'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Define types for the service links
interface ServiceItem {
  name: string;
  href: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

type ServiceLink = 
  | { name: string; href: string; description: string }
  | ServiceCategory;

// Type guard function
function isServiceCategory(service: ServiceLink): service is ServiceCategory {
  return 'category' in service && 'items' in service;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDropdownAnimating, setIsDropdownAnimating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clear any pending timeouts when component unmounts
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, []);

  // Pages that should always have a solid navbar (not transparent)
  const solidNavbarPages = ['/cases', '/about-us', '/contact', '/services'];
  const shouldAlwaysShowSolidNavbar = solidNavbarPages.some(page => pathname?.startsWith(page));

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Onze diensten', 
      href: '/services',
      hasDropdown: true 
    },
    { name: 'Cases', href: '/cases' },
    { name: 'Over ons', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks: ServiceLink[] = [
    { name: 'Alle diensten', href: '/services', description: 'Bekijk al onze digitale diensten' },
    { 
      category: 'Websites & Shops',
      items: [
        { name: 'Websites', href: '/services/websites', description: 'Professionele, responsieve websites', icon: (
          <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )},
        { name: 'Webshops', href: '/services/webshops', description: 'E-commerce oplossingen die verkopen', icon: (
          <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        )}
      ]
    },
    {
      category: 'Marketing & Content',
      items: [
        { name: 'Zoekmachine optimalisatie', href: '/services/zoekmachine-optimalisatie', description: 'Snel resultaat met organische SEO', icon: (
          <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )},
        { name: 'Google Ads (SEA)', href: '/services/google-ads', description: 'Doelgerichte advertenties met directe resultaten', icon: (
          <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        )},
        { name: 'Content Creatie', href: '/services/content-creatie', description: 'Professionele foto- en videografie', icon: (
          <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      ]
    },
    {
      category: 'Bedrijfssystemen',
      items: [
        { name: 'CRM & Salesforce', href: '/services/crm-salesforce', description: 'Stroomlijn je klantprocessen', icon: (
          <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )}
      ]
    }
  ];

  // Add these hover handlers for the desktop navigation dropdown
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownAnimating(true);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
      // Set isDropdownAnimating to false after animation completes
      setTimeout(() => {
        setIsDropdownAnimating(false);
      }, 200);
    }, 100);
  };

  return (
    <header className={`fixed top-0 w-full z-50 ${isScrolled || shouldAlwaysShowSolidNavbar ? 'bg-white' : ''} transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-200x37-nextwin.svg" 
              alt="Next Win Logo" 
              width={150} 
              height={28} 
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="text-gray-700 hover:text-primary-700 font-medium transition-colors flex items-center"
                  >
                    {link.name}
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {(isServicesDropdownOpen || isDropdownAnimating) && (
                    <div 
                      className={`absolute left-0 mt-5 w-[600px] transform -translate-x-1/4 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden transition-all duration-300 ease-in-out ${isServicesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
                    >
                      <div className="grid grid-cols-12 w-full">
                        {/* All Services Link */}
                        <div className="col-span-12 bg-gray-50 border-b border-gray-200">
                          <Link 
                            href="/services"
                            className="block px-6 py-4 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-primary-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                              </svg>
                              <div>
                                <span className="font-medium text-gray-800">Alle diensten</span>
                                <p className="text-sm text-gray-500">Bekijk al onze digitale diensten</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        
                        {/* Service Categories */}
                        <div className="col-span-12">
                          <div className="p-4">
                            {serviceLinks.slice(1).map((category, idx) => (
                              <div key={idx} className="mb-6 last:mb-0">
                                {isServiceCategory(category) && (
                                  <>
                                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                                      {category.category}
                                    </h3>
                                    <div className="space-y-1">
                                      {category.items.map((item) => (
                                        <Link 
                                          key={item.name} 
                                          href={item.href}
                                          className="flex items-start rounded-lg p-2 hover:bg-gray-50 transition-all duration-200 group"
                                        >
                                          <div className="flex-shrink-0 h-6 w-6 group-hover:text-primary-700 transition-colors">
                                            {item.icon}
                                          </div>
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-800 group-hover:text-primary-700 transition-colors">{item.name}</p>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-700 hover:text-primary-700 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="font-medium py-2 px-4 rounded-lg transition-all bg-primary-600 hover:bg-primary-700 text-white"
            >
              Maak een afspraak <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg py-4 max-h-[80vh] overflow-y-auto"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="text-gray-700 hover:text-primary-700 font-medium transition-colors py-2 flex items-center justify-between w-full"
                    >
                      {link.name}
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isServicesDropdownOpen && (
                      <div className="pl-4 border-l-2 border-gray-200 mt-2 mb-4">
                        <Link 
                          href="/services"
                          className="flex items-center py-3 text-gray-700 hover:text-primary-700 transition-colors"
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <svg className="w-5 h-5 text-primary-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          <span className="font-medium">Alle diensten</span>
                        </Link>
                        
                        {serviceLinks.slice(1).map((category, idx) => (
                          <div key={idx} className="my-3">
                            {isServiceCategory(category) && (
                              <>
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                  {category.category}
                                </h4>
                                <div className="space-y-3">
                                  {category.items.map((item) => (
                                    <Link 
                                      key={item.name} 
                                      href={item.href}
                                      className="flex items-center py-2 text-gray-700 hover:text-primary-700 transition-colors group"
                                      onClick={() => {
                                        setIsServicesDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                      }}
                                    >
                                      <div className="flex-shrink-0 h-5 w-5 mr-2 group-hover:text-primary-700 transition-colors">
                                        {item.icon}
                                      </div>
                                      <span className="group-hover:text-primary-700 transition-colors">
                                        {item.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="text-gray-700 hover:text-primary-700 font-medium transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link 
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-all text-center shadow-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Maak een afspraak
              </Link>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-8px);
          }
        }

        .dropdown-enter {
          animation: fadeDown 0.2s ease-out forwards;
        }

        .dropdown-exit {
          animation: fadeUp 0.2s ease-in forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar; 