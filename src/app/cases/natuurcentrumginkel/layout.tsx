import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: Natuurcentrum de Ginkel | +125% Bezoekers | Next Win',
  description: 'Complete digitale transformatie van Natuurcentrum de Ginkel. Van verouderde website naar moderne WordPress site met webshop. +125% meer bezoekers.',
  keywords: [
    'Natuurcentrum de Ginkel case study',
    'WordPress website redesign',
    'natuurcentrum website',
    'WooCommerce webshop',
    'website transformatie',
    'WordPress & e-commerce',
    'educatieve website',
    'toerisme website',
    'evenementen website',
    'natuur website'
  ],
  openGraph: {
    title: 'Case Study: Natuurcentrum de Ginkel | +125% Bezoekers | Next Win',
    description: 'Complete digitale transformatie van Natuurcentrum de Ginkel. Van verouderde website naar moderne WordPress site met webshop.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://next-win.nl/cases/natuurcentrumginkel',
    siteName: 'Next Win',
    images: [
      {
        url: '/cases/natuurcentrumginkel/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Natuurcentrum de Ginkel website case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study: Natuurcentrum de Ginkel | +125% Bezoekers | Next Win',
    description: 'Complete digitale transformatie van Natuurcentrum de Ginkel. +125% meer bezoekers.',
    images: ['/cases/natuurcentrumginkel/thumbnail.jpg'],
  },
  alternates: {
    canonical: 'https://next-win.nl/cases/natuurcentrumginkel',
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

export default function NatuurcentrumGinkelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
