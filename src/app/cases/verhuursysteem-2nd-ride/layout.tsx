import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: 2nd Ride Verhuursysteem | 80% Tijdsbesparing | Next Win',
  description: 'Geavanceerd verhuursysteem voor 2nd Ride. 80% tijdsbesparing door automatisering. Web applicatie die administratieve taken elimineert.',
  keywords: [
    '2nd Ride case study',
    'verhuursysteem ontwikkeling',
    'web applicatie',
    'verhuur software',
    'automatisering systeem',
    'custom web app',
    'verhuur management',
    'bedrijfsautomatisering',
    'tijdsbesparing software',
    'verhuur platform'
  ],
  openGraph: {
    title: 'Case Study: 2nd Ride Verhuursysteem | 80% Tijdsbesparing | Next Win',
    description: 'Geavanceerd verhuursysteem voor 2nd Ride. 80% tijdsbesparing door automatisering. Web applicatie die administratieve taken elimineert.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://next-win.nl/cases/verhuursysteem-2nd-ride',
    siteName: 'Next Win',
    images: [
      {
        url: '/cases/verhuursysteem-2nd-ride/thumbnail.webp',
        width: 1200,
        height: 630,
        alt: '2nd Ride verhuursysteem case study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study: 2nd Ride Verhuursysteem | 80% Tijdsbesparing | Next Win',
    description: 'Geavanceerd verhuursysteem voor 2nd Ride. 80% tijdsbesparing door automatisering.',
    images: ['/cases/verhuursysteem-2nd-ride/thumbnail.webp'],
  },
  alternates: {
    canonical: 'https://next-win.nl/cases/verhuursysteem-2nd-ride',
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

export default function SecondRideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
