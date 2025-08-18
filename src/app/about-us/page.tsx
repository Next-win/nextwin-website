import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import Section from "@/components/ui/Section";
import { Subtitle } from "@/components/ui/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Over Next Win | Persoonlijk Digital Bureau | Ons Team',
  description: 'Ontmoet het team achter Next Win. Geen corporate gedoe, wel persoonlijke aandacht. Specialisten die écht begrijpen wat ondernemers nodig hebben.',
  keywords: [
    'over Next Win',
    'digital agency team',
    'website specialists',
    'online marketing team',
    'web ontwikkelaars',
    'digital agency Nederland',
    'Next Win team',
    'web design bureau',
    'ervaren specialisten',
    'digital marketing experts'
  ],
  openGraph: {
    title: 'Over Next Win | Persoonlijk Digital Bureau | Ons Team',
    description: 'Ontmoet het team achter Next Win. Geen corporate gedoe, wel persoonlijke aandacht. Specialisten die écht begrijpen wat ondernemers nodig hebben.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/about-us',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/team/ourteam.avif',
        width: 1200,
        height: 630,
        alt: 'Next Win team - digital agency specialisten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over Next Win | Persoonlijk Digital Bureau | Ons Team',
    description: 'Ontmoet het team achter Next Win. Geen corporate gedoe, wel persoonlijke aandacht.',
    images: ['/images/team/ourteam.avif'],
  },
  alternates: {
    canonical: 'https://next-win.nl/about-us',
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

const AboutUsPage = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <Subtitle className="mb-4">Over ons</Subtitle>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Samen creëren we online succes
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Wie zijn wij en waarom doen wij wat we doen?
          </p>
        </div>
      </Section>
      
      <AboutSection />
      <TeamSection />
    </>
  );
};

export default AboutUsPage; 