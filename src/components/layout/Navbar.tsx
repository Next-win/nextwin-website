'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useSidebarPopupContext } from '../providers/SidebarPopupProvider';

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
  const { openPopup } = useSidebarPopupContext();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDropdownAnimating, setIsDropdownAnimating] = useState(false);
  const [mobileView, setMobileView] = useState<'root' | 'services'>('root');
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [isMobileMenuOpen]);

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
            <button 
              onClick={() => openPopup({
                title: "Gratis adviesgesprek",
                subtitle: "Ontdek hoe wij jouw bedrijf kunnen laten groeien",
                formType: "adviesgesprek",
                source: "navbar-desktop"
              })}
              className="font-medium py-2 px-4 rounded-lg transition-all bg-primary-600 hover:bg-primary-700 text-white"
            >
              Maak een afspraak <span className="ml-1">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setMobileView('root'); setIsServicesDropdownOpen(false); }}
            aria-label="Open mobiele navigatie"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
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

      {/* Mobile Menu - Creative overlay */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 z-[60]"
        >
          {/* Backdrop with subtle brand gradient */}
          <button
            aria-label="Sluit mobiele navigatie"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-gradient-to-br from-white/70 via-primary-50/60 to-white/70 dark:from-gray-900/70 dark:via-primary-900/50 dark:to-gray-900/70 backdrop-blur-xl"
          />

          {/* Slide-up panel */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative h-full overflow-y-auto"
          >
            <div className="container mx-auto px-4 pt-4 pb-28">
              {/* Top bar */}
              <div className="flex items-center justify-between py-3">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                  <Image src="/logo-200x37-nextwin.svg" alt="Next Win Logo" width={130} height={26} className="h-6 w-auto" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-10 w-10 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur flex items-center justify-center shadow-sm"
                  aria-label="Sluiten"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sub-header for drilldown views */}
              {mobileView !== 'root' && (
                <div className="mt-2 mb-1">
                  <button
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-primary-700"
                    onClick={() => setMobileView('root')}
                    aria-label="Terug"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Terug
                  </button>
                </div>
              )}

              {/* Navigation (drilldown style) */}
              {mobileView === 'root' ? (
                <nav className="mt-2" aria-label="Mobiele navigatie">
                  {navLinks.map((link) => (
                    link.hasDropdown ? (
                      <div key={link.name}>
                        {(() => { const isActive = pathname?.startsWith(link.href || ''); return (
                        <button
                          onClick={() => { setMobileView('services'); }}
                          className={`w-full flex items-center justify-between px-1 py-4 text-lg font-medium ${isActive ? 'text-primary-700 dark:text-primary-400' : 'text-gray-900 dark:text-gray-100'}`}
                          aria-haspopup="menu"
                          aria-controls="mobile-services"
                        >
                          <span>{link.name}</span>
                          <div className="flex items-center gap-2">
                            {isActive && <span className="text-xs text-primary-600">Huidig</span>}
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </button>
                        ); })()}
                        <div className="h-px bg-gray-200/70 dark:bg-gray-700/60" />
                      </div>
                    ) : (
                      <div key={link.name}>
                        {(() => { const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href || '') ; return (
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-1 py-4 text-lg font-medium transition-colors ${isActive ? 'text-primary-700 dark:text-primary-400' : 'text-gray-900 dark:text-gray-100 hover:text-primary-700'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{link.name}</span>
                          {isActive && <span className="text-xs text-primary-600">Huidig</span>}
                        </Link>
                        ); })()}
                        <div className="h-px bg-gray-200/70 dark:bg-gray-700/60" />
                      </div>
                    )
                  ))}
                </nav>
              ) : (
                <nav id="mobile-services" className="mt-2" aria-label="Diensten submenu">
                  {serviceLinks.slice(1).map((category, idx) => (
                    isServiceCategory(category) && (
                      <div key={idx} className="py-3">
                        <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">{category.category}</div>
                        <div className="flex flex-col">
                          {category.items.map((item) => (
                            (() => { const isActive = pathname?.startsWith(item.href || ''); return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`py-3 text-base flex items-center justify-between ${isActive ? 'text-primary-700 dark:text-primary-400' : 'text-gray-900 dark:text-gray-100 hover:text-primary-700'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>{item.name}</span>
                                {isActive && <span className="text-xs text-primary-600">Huidig</span>}
                              </Link>
                            ); })()
                          ))}
                        </div>
                        <div className="h-px bg-gray-200/70 dark:bg-gray-700/60 mt-3" />
                      </div>
                    )
                  ))}
                </nav>
              )}

              {/* Contact CTA - show only on root view */}
              {mobileView === 'root' && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Direct contact?</span>
                  <span className="text-xs text-gray-500">Reactie binnen 24 uur</span>
                </div>
                <div className="mt-3 flex gap-3">
                  <Link
                    href="tel:+31636164419"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 inline-flex items-center justify-center h-10 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
                  >
                    Bel ons
                  </Link>
                  <Link
                    href="mailto:info@next-win.nl"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 inline-flex items-center justify-center h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-medium hover:border-primary-600 transition-colors"
                  >
                    E-mail
                  </Link>
                </div>
              </div>
              )}
            </div>

            {/* Sticky bottom primary action */}
            <div className="fixed inset-x-0 bottom-0 z-[61] px-4 pb-6 pt-3 bg-gradient-to-t from-white/90 via-white/70 to-transparent dark:from-gray-900/90 dark:via-gray-900/70">
              <div className="container mx-auto px-0">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openPopup({
                      title: "Gratis adviesgesprek",
                      subtitle: "Ontdek hoe wij jouw bedrijf kunnen laten groeien",
                      formType: "adviesgesprek",
                      source: "navbar-mobile"
                    });
                  }}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-primary-600 text-white py-3 font-semibold shadow-md shadow-primary-600/25 hover:bg-primary-700 transition-colors"
                >
                  Gratis adviesgesprek
                </button>
              </div>
            </div>
          </motion.div>
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