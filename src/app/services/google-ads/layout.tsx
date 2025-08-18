import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads | Meer Klanten via Online Advertenties | Next Win',
  description: 'Meer klanten via Google advertenties. Professioneel beheer, transparante rapportage, geen lange contracten. Focus op jouw doelgroep en budget.',
  keywords: [
    'Google Ads specialist',
    'SEA campagnes',
    'Google Ads beheer',
    'online adverteren',
    'Google Ads optimalisatie',
    'zoekmachine advertenties',
    'PPC specialist',
    'Google Ads bureau',
    'AdWords specialist',
    'betaalde zoekresultaten'
  ],
  openGraph: {
    title: 'Google Ads | Meer Klanten via Online Advertenties | Next Win',
    description: 'Meer klanten via Google advertenties. Professioneel beheer, transparante rapportage, geen lange contracten.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/google-ads',
    siteName: 'Next Win',
    images: [
      {
        url: '/google-ads-specialist.png',
        width: 1200,
        height: 630,
        alt: 'Google Ads specialist en dashboard door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads | Meer Klanten via Online Advertenties | Next Win',
    description: 'Meer klanten via Google advertenties. Professioneel beheer, transparante rapportage.',
    images: ['/google-ads-specialist.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/google-ads',
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

export default function GoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
