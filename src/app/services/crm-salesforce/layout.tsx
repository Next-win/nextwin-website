import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM Systeem | Betere Klantrelaties & Meer Overzicht | Next Win',
  description: 'Alle klantgegevens op één plek. Betere klantrelaties, meer overzicht, geen gemiste kansen. CRM setup zonder technische complexiteit.',
  keywords: [
    'CRM implementatie',
    'Salesforce specialist',
    'CRM systeem',
    'Salesforce consultancy',
    'CRM integratie',
    'klantrelatiebeheer',
    'Salesforce setup',
    'CRM optimalisatie',
    'bedrijfsprocessen automatiseren',
    'sales pipeline'
  ],
  openGraph: {
    title: 'CRM Systeem | Betere Klantrelaties & Meer Overzicht | Next Win',
    description: 'Alle klantgegevens op één plek. Betere klantrelaties, meer overzicht, geen gemiste kansen. CRM setup zonder technische complexiteit.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/services/crm-salesforce',
    siteName: 'Next Win',
    images: [
      {
        url: '/crm-oplossingen.png',
        width: 1200,
        height: 630,
        alt: 'CRM & Salesforce oplossingen door Next Win',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Systeem | Betere Klantrelaties & Meer Overzicht | Next Win',
    description: 'Alle klantgegevens op één plek. Betere klantrelaties, meer overzicht, geen gemiste kansen.',
    images: ['/crm-oplossingen.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/services/crm-salesforce',
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

export default function CRMSalesforceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
