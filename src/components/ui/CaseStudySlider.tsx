import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { CaseStudy } from './CaseStudyGrid';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface CaseStudySliderProps {
  cases: CaseStudy[];
  showViewAllLink?: boolean;
  viewAllUrl?: string;
  viewAllText?: string;
}

const CaseStudySlider: React.FC<CaseStudySliderProps> = ({
  cases,
  showViewAllLink = true,
  viewAllUrl = '/cases',
  viewAllText = 'Bekijk alle projecten'
}) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.2}
        spaceBetween={16}
        centeredSlides={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          500: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          }
        }}
        className="w-full case-slider pb-12 overflow-hidden"
      >
        {cases.map((caseStudy) => (
          <SwiperSlide key={caseStudy.id}>
            <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={caseStudy.imageSrc}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-primary-400 bg-primary-900/30 py-1 px-2 rounded-full">{caseStudy.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{caseStudy.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="h-4 w-4 text-yellow-400" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{caseStudy.statLabel} {caseStudy.statValue}</span>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2">{caseStudy.description}</p>
                <Link 
                  href={caseStudy.slug ? `/cases/${caseStudy.slug}` : "/contact"} 
                  className="text-primary-600 font-medium inline-flex items-center group"
                >
                  {caseStudy.linkText || (caseStudy.slug ? "Bekijk succesverhaal" : "Neem contact op")}
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {showViewAllLink && (
        <div className="text-center mt-6">
          <Link href={viewAllUrl} className="text-lg text-gray-700 hover:text-primary-600 transition-colors inline-flex items-center group">
            {viewAllText}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}

      <style jsx global>{`
        .case-slider .swiper-pagination-bullet {
          background-color: rgb(var(--color-primary-600));
          opacity: 0.6;
        }
        .case-slider .swiper-pagination-bullet-active {
          background-color: rgb(var(--color-primary-600));
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CaseStudySlider; 