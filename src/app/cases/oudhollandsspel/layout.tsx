import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: OudHollandsspel.nl | +157% Omzet | Next Win',
  description: 'Ontdek hoe we OudHollandsspel.nl transformeerden tot een succesvolle webshop. +157% omzet door betere UX en checkout optimalisatie. Bekijk de resultaten.',
  keywords: [
    'OudHollandsspel case study',
    'webshop succes verhaal',
    'e-commerce optimalisatie',
    'webshop redesign',
    'conversie optimalisatie',
    'WooCommerce success',
    'omzet verhoging webshop',
    'checkout optimalisatie',
    'webshop case study',
    'e-commerce resultaten'
  ],
  openGraph: {
    title: 'Case Study: OudHollandsspel.nl | +157% Omzet | Next Win',
    description: 'Ontdek hoe we OudHollandsspel.nl transformeerden tot een succesvolle webshop. +157% omzet door betere UX en checkout optimalisatie.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://next-win.nl/cases/oudhollandsspel',
    siteName: 'Next Win',
    images: [
      {
        url: '/cases/oudhollandsspel/thumbnail.webp',
        width: 1200,
        height: 630,
        alt: 'OudHollandsspel.nl webshop case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study: OudHollandsspel.nl | +157% Omzet | Next Win',
    description: 'Ontdek hoe we OudHollandsspel.nl transformeerden tot een succesvolle webshop. +157% omzet.',
    images: ['/cases/oudhollandsspel/thumbnail.webp'],
  },
  alternates: {
    canonical: 'https://next-win.nl/cases/oudhollandsspel',
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

export default function OudHollandsspelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
