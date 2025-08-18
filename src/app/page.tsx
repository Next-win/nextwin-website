import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedCases from "@/components/ui/FeaturedCases";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Next Win | Persoonlijk Digital Bureau voor Ondernemers',
  description: 'Digital bureau zonder corporate gedoe. Website, webshop en online marketing die écht werkt. Persoonlijke aandacht, duidelijke communicatie, meetbare resultaten.',
  keywords: [
    'Next Win digital agency',
    'website laten maken',
    'webshop ontwikkeling',
    'online marketing bureau',
    'SEO specialist',
    'Google Ads specialist',
    'WordPress specialist',
    'WooCommerce developer',
    'digital marketing Nederland',
    'website en webshop bureau'
  ],
  openGraph: {
    title: 'Next Win | Persoonlijk Digital Bureau voor Ondernemers',
    description: 'Digital bureau zonder corporate gedoe. Website, webshop en online marketing die écht werkt. Persoonlijke aandacht, meetbare resultaten.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl',
    siteName: 'Next Win',
    images: [
      {
        url: '/logo-200x37-nextwin.svg',
        width: 1200,
        height: 630,
        alt: 'Next Win - Digital Agency voor websites, webshops en online marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Win | Persoonlijk Digital Bureau voor Ondernemers',
    description: 'Digital bureau zonder corporate gedoe. Website, webshop en online marketing die écht werkt.',
    images: ['/logo-200x37-nextwin.svg'],
  },
  alternates: {
    canonical: 'https://next-win.nl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <FeaturedCases showHeader={true} />
        <div className="py-12 md:py-20"></div>
        <ContactSection />
      </main>
    </>
  )
}
