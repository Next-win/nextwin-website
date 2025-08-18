import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Laten Maken | Professioneel & Conversiegericht | Next Win',
  description: 'Website die past bij jouw merk en klanten converteert. Maatwerk design, vindbaar in Google, mobiel-vriendelijk. Bewezen resultaten bij 30+ ondernemers.',
  keywords: [
    'website laten maken',
    'WordPress specialist',
    'website ontwikkeling',
    'professionele website',
    'website bouwen',
    'WordPress developer',
    'responsive website',
    'SEO website',
    'bedrijfswebsite',
    'website ontwerp'
  ],
  openGraph: {
    title: 'Website Laten Maken | Professioneel & Conversiegericht | Next Win',
    description: 'Website die past bij jouw merk en klanten converteert. Maatwerk design, vindbaar in Google, mobiel-vriendelijk.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/websites',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/websites-mockup.png',
        width: 1200,
        height: 630,
        alt: 'Professionele website ontwikkeling door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Laten Maken | Professioneel & Conversiegericht | Next Win',
    description: 'Website die past bij jouw merk en klanten converteert. Maatwerk design, vindbaar in Google.',
    images: ['/images/websites-mockup.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/websites',
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

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
