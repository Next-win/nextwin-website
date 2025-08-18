import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Diensten | Website, Webshop & Online Marketing | Next Win',
  description: 'Alle digitale diensten onder één dak. Websites, webshops, SEO, Google Ads, content creatie. Van concept tot conversie met meetbare resultaten.',
  keywords: [
    'digitale diensten',
    'website laten maken',
    'webshop ontwikkeling',
    'online marketing bureau',
    'SEO specialist',
    'Google Ads',
    'content creatie',
    'digital agency Nederland',
    'website en webshop',
    'online marketing diensten'
  ],
  openGraph: {
    title: 'Diensten | Website, Webshop & Online Marketing | Next Win',
    description: 'Alle digitale diensten onder één dak. Websites, webshops, SEO, Google Ads, content creatie. Van concept tot conversie.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/services-overview.png',
        width: 1200,
        height: 630,
        alt: 'Digitale diensten overzicht Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diensten | Website, Webshop & Online Marketing | Next Win',
    description: 'Alle digitale diensten onder één dak. Van concept tot conversie met meetbare resultaten.',
    images: ['/images/services-overview.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services',
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
};

const ServicesPage = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Onze Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We bieden verschillende diensten aan om jouw bedrijf online te laten groeien.
          </p>
        </div>
      </Section>
      
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-12">
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            Services pagina in ontwikkeling
          </p>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage; 