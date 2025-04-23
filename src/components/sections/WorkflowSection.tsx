'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import Section from '../ui/Section';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

const workflowSteps = [
  {
    number: '1',
    title: 'Passen wij bij elkaar?',
    description: 'We starten met een goed gesprek over jouw doelen en uitdagingen. Zo krijgen we snel zicht op wat je nodig hebt en hoe we jou kunnen helpen groeien.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Vrijblijvend concept',
    description: 'Na ons gesprek maken we een eerste concept van jouw digitale oplossing. Zonder verplichtingen krijg je een indruk van onze aanpak en ideeën.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Transparant voorstel',
    description: 'We sturen een heldere offerte met tijdsinschatting en uitleg over alle functionaliteiten. Duidelijk, compleet en zonder kleine lettertjes.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Design op maat',
    description: 'We ontwerpen jouw digitale oplossing tot in de puntjes, volledig afgestemd op jouw merk, doelgroep en strategische doelen.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: '5',
    title: 'Pixel-perfect realisatie',
    description: 'We bouwen jouw oplossing precies zoals ontworpen met moderne technieken. Flexibel, schaalbaar, veilig en klaar voor de toekomst.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '6',
    title: 'Jij denkt mee',
    description: 'Jij test, wij verbeteren. Net zolang tot alles perfect is. Samen zorgen we dat je digitale oplossing werkt én overtuigt.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '7',
    title: 'Zorgeloos live & support',
    description: 'Je oplossing gaat live, geoptimaliseerd en zonder zorgen. Daarna blijf je op ons rekenen: je krijgt 12 maanden garantie op updates en support.',
    icon: (
      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const WorkflowSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Calculate item width and container width on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
        const firstCard = sliderRef.current.querySelector('.workflow-card');
        if (firstCard) {
          setCardWidth((firstCard as HTMLElement).offsetWidth + 24); // card width + gap
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const snapToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, workflowSteps.length - 1);
    snapToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    snapToIndex(newIndex);
  };

  // Set visible items based on screen size
  const visibleSteps = 
    typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 
    typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 3;

  // Hide navigation buttons if at the start/end
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < workflowSteps.length - 1;

  return (
    <Section id="werkwijze" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Onze werkwijze
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Van eerste gesprek tot succesvolle digitale oplossing in 7 stappen
          </motion.p>
        </div>

        {/* Step navigation dots */}
        <div className="flex justify-center items-center space-x-2 mb-10">
          {workflowSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => snapToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary-600 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Slider container */}
        <div className="relative overflow-hidden px-4 sm:px-12">
          {/* Navigation arrows */}
          <div className="flex justify-between items-center absolute inset-0 pointer-events-none z-10">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={`p-2 rounded-full pointer-events-auto ${
                canGoPrev
                  ? "bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 shadow-sm"
                  : "opacity-0"
              }`}
              aria-label="Previous step"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={`p-2 rounded-full pointer-events-auto ${
                canGoNext
                  ? "bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 shadow-sm"
                  : "opacity-0"
              }`}
              aria-label="Next step"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Card container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="workflow-card flex-shrink-0 w-full px-4"
                >
                  <div className="bg-white rounded-xl border border-gray-100 p-8 h-full max-w-3xl mx-auto">
                    <div className="flex items-start mb-6">
                      <div className="bg-primary-50 rounded-full h-16 w-16 flex items-center justify-center shrink-0 mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          Stap {step.number}
                        </span>
                        <h3 className="text-xl font-semibold mt-2 text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* USP Cards Section - Updated to use ScrollAnimationWrapper */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <ScrollAnimationWrapper>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Waarom voor ons kiezen?</h2>
            </ScrollAnimationWrapper>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimationWrapper delay={0} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-50 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Alles in-house</h3>
              </div>
              <p className="text-gray-600">Wij hebben alle expertise in huis: strategie, design, development en marketing onder één dak.</p>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={0.1} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Duurzaam & binnen budget</h3>
              </div>
              <p className="text-gray-600">Oplossingen die meegroeien met je bedrijf en binnen je budget blijven, zonder verborgen kosten.</p>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={0.2} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-purple-50 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">12 maanden garantie</h3>
              </div>
              <p className="text-gray-600">Een jaar lang ondersteuning en updates om te zorgen dat jouw digitale oplossing perfect blijft werken.</p>
            </ScrollAnimationWrapper>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <Button
              href="/contact"
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Start jouw project
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkflowSection; 