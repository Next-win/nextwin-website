import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webshop Laten Maken | Verkopen Vanaf Dag 1 | Next Win',
  description: 'Webshop die écht verkoopt. Veilige betalingen, gebruiksvriendelijk, mobiel geoptimaliseerd. Maatwerk e-commerce voor jouw producten en klanten.',
  keywords: [
    'webshop laten maken',
    'WooCommerce specialist',
    'e-commerce website',
    'webshop ontwikkeling',
    'online verkoop',
    'webshop bouwen',
    'WooCommerce developer',
    'e-commerce platform',
    'webwinkel maken',
    'online shop'
  ],
  openGraph: {
    title: 'Webshop Laten Maken | Verkopen Vanaf Dag 1 | Next Win',
    description: 'Webshop die écht verkoopt. Veilige betalingen, gebruiksvriendelijk, mobiel geoptimaliseerd. Maatwerk e-commerce voor jouw producten.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/webshops',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/webshops-mockup.png',
        width: 1200,
        height: 630,
        alt: 'Professionele webshop ontwikkeling door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webshop Laten Maken | Verkopen Vanaf Dag 1 | Next Win',
    description: 'Webshop die écht verkoopt. Veilige betalingen, gebruiksvriendelijk, mobiel geoptimaliseerd.',
    images: ['/images/webshops-mockup.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/webshops',
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

export default function WebshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
