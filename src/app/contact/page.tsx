import Section from "@/components/ui/Section";
import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";
import { Heading1, Heading2, Paragraph } from "@/components/ui/Typography";
import Image from "next/image";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: 'Contact | Vrijblijvend Gesprek | Next Win',
  description: 'Klaar voor jouw digitale project? Bel direct of plan een vrijblijvend gesprek. Persoonlijke aandacht, duidelijke communicatie, snelle reactie.',
  keywords: [
    'contact Next Win',
    'afspraak maken',
    'digitaal bureau contact',
    'website offerte',
    'webshop offerte',
    'online marketing contact',
    'vrijblijvende afspraak',
    'digital agency contact',
    'Next Win kantoor',
    'website ontwikkeling contact'
  ],
  openGraph: {
    title: 'Contact | Vrijblijvend Gesprek | Next Win',
    description: 'Klaar voor jouw digitale project? Bel direct of plan een vrijblijvend gesprek. Persoonlijke aandacht, duidelijke communicatie.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://next-win.nl/contact',
    siteName: 'Next Win',
    images: [
      {
        url: '/images/contact-next-win.png',
        width: 1200,
        height: 630,
        alt: 'Contact opnemen met Next Win digital agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Vrijblijvend Gesprek | Next Win',
    description: 'Klaar voor jouw digitale project? Bel direct of plan een vrijblijvend gesprek.',
    images: ['/images/contact-next-win.png'],
  },
  alternates: {
    canonical: 'https://next-win.nl/contact',
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

const ContactPage = () => {
  // FAQ items
  const faqItems = [
    {
      question: "Hoe snel kunnen jullie reageren op mijn aanvraag?",
      answer: "We streven ernaar om binnen 24 uur te reageren op alle inkomende aanvragen. Voor dringende zaken kun je ons ook telefonisch bereiken tijdens kantooruren."
    },
    {
      question: "Maken jullie ook websites voor kleine bedrijven?",
      answer: "Ja, we werken met bedrijven van alle groottes. Of je nu een startende ondernemer bent of een gevestigde organisatie, we kunnen een website op maat maken die past bij jouw behoeften en budget."
    },
    {
      question: "Wat zijn de kosten voor jullie diensten?",
      answer: "De kosten variëren afhankelijk van de specifieke behoeften van jouw project. We bieden maatwerk oplossingen en stellen graag een vrijblijvende offerte voor je op na een eerste gesprek waarin we je wensen bespreken."
    },
    {
      question: "Kan ik bij jullie terecht voor zowel website ontwikkeling als marketing?",
      answer: "Absoluut! We bieden een volledig pakket aan digitale diensten, waaronder website ontwikkeling, online marketing en content creatie. Hierdoor kunnen we zorgen voor een consistente aanpak van jouw gehele online aanwezigheid."
    },
    {
      question: "Hoe lang duurt het om een website te laten maken?",
      answer: "De doorlooptijd van een website ontwikkelingsproject hangt af van de complexiteit en omvang. Een eenvoudige website kan binnen 2-4 weken gerealiseerd worden, terwijl complexere projecten 2-3 maanden kunnen duren. We bespreken de tijdlijn altijd aan het begin van het project."
    }
  ];
  
  return (
    <>
      {/* Hero Section with background */}
      <div className="relative bg-gradient-to-b from-primary-50/30 to-white pb-20">
        <Section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="relative max-w-5xl mx-auto">
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            
            <div className="relative text-center z-10">
              <Heading1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                gradient={true}
                align="center"
              >
                Neem contact met ons op
              </Heading1>
              <Paragraph 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                align="center"
              >
                Klaar om jouw digitale aanwezigheid naar een hoger niveau te tillen? We staan klaar om jouw vragen te beantwoorden en je te helpen groeien.
              </Paragraph>
            </div>
          </div>
        </Section>
      </div>
      
      {/* Contact Section */}
      <div className="relative -mt-16">
        <ContactSection />
      </div>
      
      {/* Map Section */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <Heading2 
              className="mb-4"
              gradient={false}
              align="center"
            >
              Bezoek ons kantoor
            </Heading2>
            <Paragraph 
              className="text-gray-600 max-w-2xl mx-auto"
              align="center"
            >
              Wij verwelkomen je graag voor een persoonlijk gesprek op ons kantoor in Otterlo.
            </Paragraph>
          </div>
          
          <div className="overflow-hidden rounded-2xl shadow-soft border border-gray-100 h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.5656688859054!2d5.783112115772793!3d52.0201376798163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7b4a9d3fb7d85%3A0xb46e68b43e19a925!2sHoutkampweg%203%2C%206731%20AV%20Otterlo!5e0!3m2!1snl!2snl!4v1643116058806!5m2!1snl!2snl" 
              className="w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Locatie Next Win"
            ></iframe>
            
            {/* Overlay card with address */}
            <div className="absolute top-6 left-6 bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-100 p-2 rounded-full">
                  <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Ons kantoor</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Houtkampweg 3<br />
                6731AV, Otterlo<br />
                Nederland
              </p>
              <Button 
                variant="primary" 
                size="sm"
                className="w-full"
                href="https://goo.gl/maps/7s8dXsCqJ5ZQJz7G9"
                isExternal
              >
                Route plannen
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section with curved divider */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-16 bg-white"></div>
        <svg className="relative z-10 text-white w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <Section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Heading2
                className="mb-4"
                gradient={false}
                align="center"
              >
                Veelgestelde vragen
              </Heading2>
              <Paragraph
                className="text-gray-600 max-w-2xl mx-auto"
                align="center"
              >
                Hier vind je antwoorden op de meest gestelde vragen. Staat jouw vraag er niet tussen? Neem dan gerust contact met ons op.
              </Paragraph>
            </div>
            
            <div className=" overflow-hidden">
              <FaqAccordion items={faqItems} />
            </div>
            
            <div className="text-center mt-12">
              <Button
                variant="outline"
                href="#contact" 
                className="inline-flex items-center space-x-2"
              >
                <span>Stel ons je vraag</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </Section>
      </div>
      
      {/* CTA Banner */}
      <Section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om jouw online succes te versnellen?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ontdek hoe wij jouw bedrijf kunnen helpen groeien met onze digitale oplossingen.
          </p>
          <Button
            variant="white"
            size="lg"
            href="/onze-diensten"
          >
            Bekijk onze diensten
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ContactPage; 