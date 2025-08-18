import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Creatie | Video & Foto die Opvalt | Next Win',
  description: 'Content die jouw merk laat opvallen. Professionele video, fotografie en sociale media content. Verhaal vertellen dat klanten raakt en onthoudt.',
  keywords: [
    'content creatie',
    'video productie',
    'bedrijfsfotografie',
    'sociale media content',
    'marketing content',
    'video marketing',
    'content strategie',
    'visuele content',
    'merkfotografie',
    'promotional video'
  ],
  openGraph: {
    title: 'Content Creatie | Video & Foto die Opvalt | Next Win',
    description: 'Content die jouw merk laat opvallen. Professionele video, fotografie en sociale media content. Verhaal vertellen dat klanten raakt en onthoudt.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/content-creatie',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/content-creatie/aftermovie-relatiedag-2024-4ps-Visulions-2048x1152.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Professionele content creatie door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Creatie | Video & Foto die Opvalt | Next Win',
    description: 'Content die jouw merk laat opvallen. Verhaal vertellen dat klanten raakt en onthoudt.',
    images: ['/images/content-creatie/aftermovie-relatiedag-2024-4ps-Visulions-2048x1152.jpg.webp'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/content-creatie',
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

export default function ContentCreatieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
