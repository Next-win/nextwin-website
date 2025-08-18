import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Marketing Bureau | Digital Marketing | Next Win',
  description: 'Compleet online marketing bureau. SEA, SEO, social media, content marketing. Meetbare resultaten, transparante rapportage. Groei jouw online aanwezigheid.',
  keywords: [
    'online marketing bureau',
    'digital marketing',
    'online marketing specialist',
    'SEA en SEO',
    'social media marketing',
    'content marketing',
    'online adverteren',
    'digital marketing strategie',
    'performance marketing',
    'online marketing campagnes'
  ],
  openGraph: {
    title: 'Online Marketing Bureau | Digital Marketing | Next Win',
    description: 'Compleet online marketing bureau. SEA, SEO, social media, content marketing. Meetbare resultaten en transparante rapportage.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/online-marketing',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/marketing.png',
        width: 1200,
        height: 630,
        alt: 'Online marketing diensten door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Marketing Bureau | Digital Marketing | Next Win',
    description: 'Compleet online marketing bureau. SEA, SEO, social media, content marketing.',
    images: ['/images/marketing.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/online-marketing',
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

export default function OnlineMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
