import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoekmachine Optimalisatie | Vindbaar in Google | Next Win',
  description: 'Vindbaar worden in Google voor jouw klanten. Professionele SEO zonder technische termen. Meer bezoekers, betere positie, meetbare groei.',
  keywords: [
    'SEO specialist',
    'zoekmachine optimalisatie',
    'SEO bureau',
    'hoger in Google',
    'SEO optimalisatie',
    'technische SEO',
    'content SEO',
    'lokale SEO',
    'SEO consultancy',
    'Google ranking'
  ],
  openGraph: {
    title: 'Zoekmachine Optimalisatie | Vindbaar in Google | Next Win',
    description: 'Vindbaar worden in Google voor jouw klanten. Professionele SEO zonder technische termen. Meer bezoekers, betere positie.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/zoekmachine-optimalisatie',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/seo-optimization.png',
        width: 1200,
        height: 630,
        alt: 'SEO en zoekmachine optimalisatie door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoekmachine Optimalisatie | Vindbaar in Google | Next Win',
    description: 'Vindbaar worden in Google voor jouw klanten. Professionele SEO zonder technische termen.',
    images: ['/images/seo-optimization.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/zoekmachine-optimalisatie',
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

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
