"use client";

import React, { useEffect } from 'react';
import { Search, ArrowDown } from 'lucide-react';

interface SearchResultsVisualizationProps {
  title?: string;
  subtitle?: string;
  className?: string;
  searchTerm?: string;
  beforeAfterResults?: {
    before: {
      yourResult: {
        position: number;
        title: string;
        description: string;
        url: string;
      };
      competitors: Array<{
        position: number;
        title: string;
        description: string;
        url: string;
      }>;
    };
    after: {
      yourResult: {
        position: number;
        title: string;
        description: string;
        url: string;
      };
      competitors: Array<{
        position: number;
        title: string;
        description: string;
        url: string;
      }>;
    };
  };
}

export default function SearchResultsVisualization({
  title = "Zoekresultaten verbeterd",
  subtitle = "Positie over tijd met actieve strategie",
  className = "",
  searchTerm = "digitaal bureau online marketing",
  beforeAfterResults = {
    before: {
      yourResult: {
        position: 8,
        title: "Next Win | Digitaal bureau en online marketing",
        description: "Professionele online marketing diensten van Next Win uit Otterlo. Verbeter je online zichtbaarheid en krijg meer klanten.",
        url: "www.next-win.nl"
      },
      competitors: [
        {
          position: 1,
          title: "Digitaal Marketing Bureau | Competitor 1",
          description: "Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.",
          url: "www.competitor1.nl"
        },
        {
          position: 2,
          title: "Digitale Marketing Services | Competitor 2",
          description: "SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.",
          url: "www.competitor2.nl"
        }
      ]
    },
    after: {
      yourResult: {
        position: 1,
        title: "Next Win | Resultaatgericht Digitaal Bureau Otterlo",
        description: "Online marketing die écht resultaat levert. Wij zorgen voor meer zichtbaarheid, meer bezoekers en meer klanten. Bekijk onze cases.",
        url: "www.next-win.nl"
      },
      competitors: [
        {
          position: 2,
          title: "Digitaal Marketing Bureau | Competitor 1",
          description: "Breng uw bedrijf online naar een hoger niveau met onze marketing expertise. Wij zijn het beste digitale bureau voor online marketing.",
          url: "www.competitor1.nl"
        },
        {
          position: 3,
          title: "Digitale Marketing Services | Competitor 2",
          description: "SEO, SEA en Social Media Marketing voor MKB bedrijven in heel Nederland. Neem vandaag nog contact op.",
          url: "www.competitor2.nl"
        }
      ]
    }
  }
}: SearchResultsVisualizationProps) {
  
  useEffect(() => {
    // Function to trigger "Na" animation after delay
    const triggerAnimation = () => {
      // First make the intro message visible with a nice entrance animation
      const introMessage = document.getElementById('animation-intro-message');
      const introContent = document.getElementById('animation-intro-content');
      
      if (introMessage && introContent) {
        // Fade in the background
        introMessage.style.opacity = '1';
        
        // After a slight delay, animate in the content
        setTimeout(() => {
          introContent.style.opacity = '1';
          introContent.style.transform = 'translateY(0)';
          
          // Then animate the position indicators after the content appears
          setTimeout(() => {
            const positionBefore = document.getElementById('position-before');
            const positionAfter = document.getElementById('position-after');
            
            if (positionBefore && positionAfter) {
              // Highlight the "before" position first
              positionBefore.style.transform = 'scale(1.2)';
              positionBefore.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.3)';
              
              // Then after a delay, highlight the "after" position
              setTimeout(() => {
                positionBefore.style.transform = 'scale(1)';
                positionBefore.style.boxShadow = 'none';
                
                positionAfter.style.transform = 'scale(1.2)';
                positionAfter.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.3)';
                
                // Reset after animation
                setTimeout(() => {
                  positionAfter.style.transform = 'scale(1)';
                  positionAfter.style.boxShadow = 'none';
                }, 1000);
              }, 1000);
            }
          }, 800);
        }, 300);
      }
      
      // Then fade out the intro message after giving users time to read it
      setTimeout(() => {
        if (introMessage) {
          introMessage.style.opacity = '0';
        }
        
        // Then trigger the animation after message fades out
        setTimeout(() => {
          const toggleAfterButton = document.getElementById('toggle-after');
          if (toggleAfterButton) {
            toggleAfterButton.click();
          }
        }, 1000); // Delay after fade-out begins
      }, 4000); // Show intro message for 4 seconds before starting the fade-out
    };

    // Set up Intersection Observer to detect when results container is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.unobserve(entry.target); // Only trigger once
          }
        });
      },
      {
        root: null, // Use viewport as root
        threshold: 0.3, // Trigger when 30% of element is visible
      }
    );

    // Start observing the results container
    const resultsContainer = document.getElementById('results-container');
    if (resultsContainer) {
      observer.observe(resultsContainer);
    }

    // Clean up observer on component unmount
    return () => {
      if (resultsContainer) {
        observer.unobserve(resultsContainer);
      }
    };
  }, []); // Empty dependency array means this runs once after component mounts

  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${className}`}>
      <div className="relative">
        <div className="flex items-center mb-5">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>

        {/* Search Results Visualization */}
        <div className="min-h-[550px] bg-gray-50 rounded-xl p-5 relative overflow-visible">
          {/* Search Bar */}
          <div className="w-full h-12 bg-white rounded-full border border-gray-200 shadow-sm flex items-center px-5 mb-6">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <span className="text-gray-800 font-medium">{searchTerm}</span>
          </div>

          {/* Before/After Toggle */}
          <div className="absolute right-5 top-5 flex items-center text-sm bg-white rounded-full shadow-sm border border-gray-200 p-1 sm:p-1" style={{ marginRight: '5px', marginTop: '5px' }}>
            <div className="relative">
              <div id="toggle-indicator" className="absolute inset-y-0 left-0 w-1/2 bg-primary-100 rounded-full transition-all duration-500"></div>
              <button 
                id="toggle-before" 
                className="z-10 relative px-2 sm:px-3 py-1 rounded-full text-primary-700 font-medium text-xs sm:text-sm"
                onClick={() => { 
                  document.getElementById('toggle-indicator')?.style.setProperty('transform', 'translateX(0%)');
                  document.getElementById('toggle-before')?.classList.add('text-primary-700');
                  document.getElementById('toggle-after')?.classList.remove('text-primary-700');
                  
                  // Get all the result cards
                  const cards = document.querySelectorAll('.result-card');
                  if (cards.length === 3) {
                    // Set transition for all cards
                    cards.forEach(card => {
                      const element = card as HTMLElement;
                      element.style.transition = 'all 1s ease-in-out';
                    });
                    
                    // Get the current state
                    const currentState = document.querySelector('.results-container')?.getAttribute('data-state') || 'after';
                    
                    if (currentState === 'after') {
                      // We're changing from "after" to "before"
                      document.querySelector('.results-container')?.setAttribute('data-state', 'before');
                      
                      // In "before" view:
                      // - Competitor1 should be position 1
                      // - Competitor2 should be position 2
                      // - NextWin should be position 8 (at the bottom)
                      
                      // Card 1 (NextWin) needs to move to the bottom (position 3 visually, position 8 in ranking)
                      const card1 = cards[0] as HTMLElement;
                      card1.style.transform = 'translateY(260px) scale(1)';
                      card1.style.opacity = '1';
                      card1.style.zIndex = '1';
                      
                      // Card 2 (Competitor1) needs to move to the top (position 1)
                      const card2 = cards[1] as HTMLElement;
                      card2.style.transform = 'translateY(0) scale(1)';
                      card2.style.opacity = '1';
                      card2.style.zIndex = '3';
                      
                      // Card 3 (Competitor2) stays in position 2
                      const card3 = cards[2] as HTMLElement;
                      card3.style.transform = 'translateY(130px) scale(1)';
                      card3.style.opacity = '1';
                      card3.style.zIndex = '2';
                      
                      // After animation completes, update content
                      setTimeout(() => {
                        // Update card content for "before" state
                        
                        // Card 1 (now position 3/8): Update to NextWin position 8
                        const title1 = card1.querySelector('.card-title');
                        const description1 = card1.querySelector('.card-description');
                        const position1 = card1.querySelector('.card-position');
                        const url1 = card1.querySelector('.card-url');
                        
                        if (title1) title1.textContent = beforeAfterResults.before.yourResult.title;
                        if (description1) description1.textContent = beforeAfterResults.before.yourResult.description;
                        if (position1) {
                          position1.textContent = `Positie ${beforeAfterResults.before.yourResult.position}`;
                          position1.className = 'card-position inline-block px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium';
                        }
                        if (url1) url1.textContent = beforeAfterResults.before.yourResult.url;
                        
                        // Card 2 (now position 1): Update to Competitor1
                        const title2 = card2.querySelector('.card-title');
                        const description2 = card2.querySelector('.card-description');
                        const position2 = card2.querySelector('.card-position');
                        const url2 = card2.querySelector('.card-url');
                        
                        if (title2) title2.textContent = beforeAfterResults.before.competitors[0].title;
                        if (description2) description2.textContent = beforeAfterResults.before.competitors[0].description;
                        if (position2) {
                          position2.textContent = `Positie ${beforeAfterResults.before.competitors[0].position}`;
                          position2.className = 'card-position inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium';
                        }
                        if (url2) url2.textContent = beforeAfterResults.before.competitors[0].url;
                        
                        // Card 3 (position 2): Update to Competitor2
                        const title3 = card3.querySelector('.card-title');
                        const description3 = card3.querySelector('.card-description');
                        const position3 = card3.querySelector('.card-position');
                        const url3 = card3.querySelector('.card-url');
                        
                        if (title3) title3.textContent = beforeAfterResults.before.competitors[1].title;
                        if (description3) description3.textContent = beforeAfterResults.before.competitors[1].description;
                        if (position3) {
                          position3.textContent = `Positie ${beforeAfterResults.before.competitors[1].position}`;
                          position3.className = 'card-position inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium';
                        }
                        if (url3) url3.textContent = beforeAfterResults.before.competitors[1].url;
                        
                        // Remove any pulse dots
                        const pulseDots = document.querySelectorAll('.pulse-dot');
                        pulseDots.forEach(dot => {
                          dot.parentNode?.removeChild(dot);
                        });
                      }, 500);
                    }
                  }
                }}
              >Voor</button>
              <button 
                id="toggle-after" 
                className="z-10 relative px-2 sm:px-3 py-1 rounded-full font-medium text-xs sm:text-sm"
                onClick={() => {
                  document.getElementById('toggle-indicator')?.style.setProperty('transform', 'translateX(100%)');
                  document.getElementById('toggle-after')?.classList.add('text-primary-700');
                  document.getElementById('toggle-before')?.classList.remove('text-primary-700');
                  
                  // Get all the result cards
                  const cards = document.querySelectorAll('.result-card');
                  if (cards.length === 3) {
                    // Set transition for all cards
                    cards.forEach(card => {
                      const element = card as HTMLElement;
                      element.style.transition = 'all 1s ease-in-out';
                    });
                    
                    // Get the current state
                    const currentState = document.querySelector('.results-container')?.getAttribute('data-state') || 'before';
                    
                    if (currentState === 'before') {
                      // We're changing from "before" to "after"
                      document.querySelector('.results-container')?.setAttribute('data-state', 'after');
                      
                      // Card 3 (NextWin at position 3/8) moves to the top (position 1)
                      const card3 = cards[2] as HTMLElement;
                      card3.style.transform = 'translateY(0) scale(1)';
                      card3.style.opacity = '1';
                      card3.style.zIndex = '3';
                      
                      // Card 1 (Competitor1 at position 1) moves to position 2
                      const card1 = cards[0] as HTMLElement;
                      card1.style.transform = 'translateY(130px) scale(1)';
                      card1.style.opacity = '1';
                      card1.style.zIndex = '2';
                      
                      // Card 2 (Competitor2 at position 2) moves to position 3
                      const card2 = cards[1] as HTMLElement;
                      card2.style.transform = 'translateY(260px) scale(1)';
                      card2.style.opacity = '1';
                      card2.style.zIndex = '1';
                      
                      // After animation completes, update content
                      setTimeout(() => {
                        // Update card content for "after" state
                        
                        // Card 3 (now position 1): Update to NextWin at position 1
                        const title3 = card3.querySelector('.card-title');
                        const description3 = card3.querySelector('.card-description');
                        const position3 = card3.querySelector('.card-position');
                        const url3 = card3.querySelector('.card-url');
                        
                        if (title3) title3.textContent = beforeAfterResults.after.yourResult.title;
                        if (description3) description3.textContent = beforeAfterResults.after.yourResult.description;
                        if (position3) {
                          position3.innerHTML = `<span class="inline-block mr-1">↑</span>Positie ${beforeAfterResults.after.yourResult.position}`;
                          position3.className = 'card-position inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium';
                        }
                        if (url3) url3.textContent = beforeAfterResults.after.yourResult.url;
                        
                        // Add animate pulse indicator to top result
                        let pulseDot = card3.querySelector('.pulse-dot');
                        if (!pulseDot) {
                          pulseDot = document.createElement('div');
                          pulseDot.className = 'mt-2 flex pulse-dot';
                          pulseDot.innerHTML = `
                            <div class="animate-pulse flex space-x-1">
                              <div class="h-2 w-10 bg-primary-100 rounded"></div>
                              <div class="h-2 w-16 bg-primary-100 rounded"></div>
                              <div class="h-2 w-12 bg-primary-100 rounded"></div>
                            </div>
                          `;
                          card3.appendChild(pulseDot);
                        }
                        
                        // Card 1 (now position 2): Update to Competitor1 at position 2
                        const title1 = card1.querySelector('.card-title');
                        const description1 = card1.querySelector('.card-description');
                        const position1 = card1.querySelector('.card-position');
                        const url1 = card1.querySelector('.card-url');
                        
                        if (title1) title1.textContent = beforeAfterResults.after.competitors[0].title;
                        if (description1) description1.textContent = beforeAfterResults.after.competitors[0].description;
                        if (position1) {
                          position1.innerHTML = `<span class="inline-block mr-1">↓</span>Positie ${beforeAfterResults.after.competitors[0].position}`;
                          position1.className = 'card-position inline-block px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium';
                        }
                        if (url1) url1.textContent = beforeAfterResults.after.competitors[0].url;
                        
                        // Remove pulse dot from other cards
                        let otherPulseDot = card1.querySelector('.pulse-dot');
                        if (otherPulseDot) {
                          card1.removeChild(otherPulseDot);
                        }
                        
                        // Card 2 (now position 3): Update to Competitor2 at position 3
                        const title2 = card2.querySelector('.card-title');
                        const description2 = card2.querySelector('.card-description');
                        const position2 = card2.querySelector('.card-position');
                        const url2 = card2.querySelector('.card-url');
                        
                        if (title2) title2.textContent = beforeAfterResults.after.competitors[1].title;
                        if (description2) description2.textContent = beforeAfterResults.after.competitors[1].description;
                        if (position2) {
                          position2.innerHTML = `<span class="inline-block mr-1">↓</span>Positie ${beforeAfterResults.after.competitors[1].position}`;
                          position2.className = 'card-position inline-block px-2 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium';
                        }
                        if (url2) url2.textContent = beforeAfterResults.after.competitors[1].url;
                        
                        // Remove pulse dot from other cards
                        otherPulseDot = card2.querySelector('.pulse-dot');
                        if (otherPulseDot) {
                          card2.removeChild(otherPulseDot);
                        }
                      }, 500);
                    }
                  }
                }}
              >Na</button>
            </div>
          </div>

          {/* Results Container with Animation */}
          <div id="results-container" className="results-container relative h-[550px] sm:h-[550px] flex flex-col items-center justify-start overflow-visible" data-state="before">
            {/* Animated message that shows before positions animate */}
            <div id="animation-intro-message" className="absolute inset-0 flex items-center justify-center z-10 bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-1000 opacity-0">
              <div className="text-center transform transition-all duration-700 translate-y-4 opacity-0" id="animation-intro-content">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">Laten we samenwerken</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">En jouw positie verbeteren</p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center justify-center">
                    <span id="position-before" className="px-2 sm:px-3 py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium mr-2 transition-all duration-500">Positie {beforeAfterResults.before.yourResult.position}</span>
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                    <span id="position-after" className="px-2 sm:px-3 py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium ml-2 transition-all duration-500">Positie {beforeAfterResults.after.yourResult.position}</span>
                  </div>
                  <p className="text-primary-600 text-xs sm:text-sm font-medium mt-2 animate-pulse">Bekijk wat er gebeurt...</p>
                </div>
              </div>
            </div>
            
            <div className="card-container relative w-full h-[450px] overflow-visible">
              {/* Card 1 - Initially Competitor1 at position 1 */}
              <div className="result-card bg-white rounded-lg p-2 sm:p-3 border border-gray-100 shadow-md transform transition-all duration-300 hover:shadow-lg absolute w-full h-[110px] sm:h-[120px] z-3" style={{ transform: 'translateY(0) scale(1)', opacity: '1' }}>
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <span className="card-url text-green-600 text-xs">{beforeAfterResults.before.competitors[0].url}</span>
                  <div className="flex items-center text-sm">
                    <span className="card-position inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium">
                      Positie {beforeAfterResults.before.competitors[0].position}
                    </span>
                  </div>
                </div>
                <h3 className="card-title text-blue-600 text-xs sm:text-sm font-medium mb-1">{beforeAfterResults.before.competitors[0].title}</h3>
                <p className="card-description text-xs text-gray-600 hidden sm:block">{beforeAfterResults.before.competitors[0].description}</p>
                <p className="card-description text-xs text-gray-600 sm:hidden">{beforeAfterResults.before.competitors[0].description.split('.')[0]}.</p>
              </div>

              {/* Card 2 - Initially Competitor2 at position 2 */}
              <div className="result-card bg-white rounded-lg p-2 sm:p-3 border border-gray-100 shadow-sm transform transition-all duration-300 absolute w-full h-[110px] sm:h-[120px] z-2" style={{ transform: 'translateY(130px) scale(1)', opacity: '1' }}>
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <span className="card-url text-green-600 text-xs">{beforeAfterResults.before.competitors[1].url}</span>
                  <div className="flex items-center text-sm">
                    <span className="card-position inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-green-100 text-green-800 text-xs font-medium">
                      Positie {beforeAfterResults.before.competitors[1].position}
                    </span>
                  </div>
                </div>
                <h3 className="card-title text-blue-600 text-xs sm:text-sm font-medium mb-1">{beforeAfterResults.before.competitors[1].title}</h3>
                <p className="card-description text-xs text-gray-600 hidden sm:block">{beforeAfterResults.before.competitors[1].description}</p>
                <p className="card-description text-xs text-gray-600 sm:hidden">{beforeAfterResults.before.competitors[1].description.split('.')[0]}.</p>
              </div>

              {/* Card 3 - Initially NextWin at position 8 */}
              <div className="result-card bg-white rounded-lg p-2 sm:p-3 border border-gray-100 shadow-sm transform transition-all duration-300 absolute w-full h-[110px] sm:h-[120px] z-1" style={{ transform: 'translateY(260px) scale(1)', opacity: '1' }}>
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <span className="card-url text-green-600 text-xs">{beforeAfterResults.before.yourResult.url}</span>
                  <div className="flex items-center text-sm">
                    <span className="card-position inline-block px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                      Positie {beforeAfterResults.before.yourResult.position}
                    </span>
                  </div>
                </div>
                <h3 className="card-title text-blue-600 text-xs sm:text-sm font-medium mb-1">{beforeAfterResults.before.yourResult.title}</h3>
                <p className="card-description text-xs text-gray-600 hidden sm:block">{beforeAfterResults.before.yourResult.description}</p>
                <p className="card-description text-xs text-gray-600 sm:hidden">{beforeAfterResults.before.yourResult.description.split('.')[0]}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 