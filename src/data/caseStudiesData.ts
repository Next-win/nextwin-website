import { CaseStudy } from '@/components/ui/CaseStudyGrid';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'oudhollandsspel',
    title: 'OudHollandsspel.nl',
    category: 'E-commerce',
    imageSrc: '/cases/oudhollandsspel/thumbnail.webp',
    rating: 5,
    statLabel: 'Omzet',
    statValue: '+157%',
    description: 'Webshop voor verhuur en verkoop van traditionele spellen. Betere productpresentatie en checkout zorgden voor een flinke omzetstijging.',
    slug: 'oudhollandsspel',
  },
  {
    id: 'fire-safety-shop',
    title: 'Fire Safety Shop',
    category: 'B2B Webshop',
    imageSrc: '/cases/fire-safety-shop/thumbnail.webp',
    rating: 5,
    statLabel: 'Conversie',
    statValue: '+92%',
    description: 'B2B webshop voor brandveiligheidsproducten met custom offerte-functionaliteit en volume-kortingen geïntegreerd.',
    slug: '',
  },
  {
    id: 'handgemaakte-sieraden',
    title: 'Handgemaakte Sieraden',
    category: 'WooCommerce',
    imageSrc: '/images/handmade-products.jpg',
    rating: 5,
    statLabel: 'Bereik',
    statValue: '+210%',
    description: 'Van fysieke verkoop naar online succes. Een stijlvolle webshop met productconfiguratie en personalisatieopties.',
    slug: '',
  },
  {
    id: 'natuurcentrum',
    title: 'Natuurcentrum',
    category: 'WordPress',
    imageSrc: '/images/natuurcentrum-desktop.png',
    rating: 5,
    statLabel: 'Bezoek',
    statValue: '+95%',
    description: 'Informatieve website voor een natuurcentrum met online ticketing en reserveringssysteem voor activiteiten en evenementen.',
    slug: '',
  },
  {
    id: 'access-safety',
    title: 'Access Safety',
    category: 'Corporate Website',
    imageSrc: '/images/access-safety-dekstop.png',
    rating: 5,
    statLabel: 'Leads',
    statValue: '+120%',
    description: 'Professionele bedrijfswebsite voor een veiligheidsbedrijf met online cursusregistratie en certificeringsprocessen.',
    slug: '',
  },
  {
    id: '2nd-ride',
    title: '2nd Ride Verhuursysteem',
    category: 'Web Applicatie',
    imageSrc: '/cases/verhuursysteem-2nd-ride/thumbnail.webp',
    rating: 5,
    statLabel: 'Tijdsbesparing',
    statValue: '80%',
    description: 'Een geavanceerd verhuursysteem dat administratieve taken automatiseert en de klanttevredenheid verhoogt.',
    slug: 'verhuursysteem-2nd-ride',
  },
];

// You can create specialized subsets for different pages
export const webshopCaseStudies = caseStudiesData.filter(
  c => (c.category === 'E-commerce' || c.category === 'B2B Webshop' || c.category === 'WooCommerce') && 
  c.slug && c.slug.trim() !== ''
).slice(0, 3);

export const websiteCaseStudies = caseStudiesData.filter(
  c => (c.category === 'WordPress' || c.category === 'Corporate Website') && 
  c.slug && c.slug.trim() !== ''
).slice(0, 3);

// Filter out empty cases
export const featuredCaseStudies = caseStudiesData.filter(
  c => c.slug && c.slug.trim() !== ''
).slice(0, 3); 