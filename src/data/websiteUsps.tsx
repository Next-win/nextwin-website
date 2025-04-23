// Website USPs Data
import React, { ReactNode } from 'react';

type WebsiteUsp = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export const websiteUsps: WebsiteUsp[] = [
  {
    id: 'usp-1',
    title: 'Alles in-house',
    description: 'Of het nu gaat om webdesign, ontwikkeling, creatie van pakkende content (zoals teksten, dronevideo\'s, fotografie en meer), zoekmachineoptimalisatie of hosting – wij hebben de expertise in huis. Je hoeft je geen zorgen te maken over verschillende partijen, want bij ons kun je met alles terecht. Zoek je één aanspreekpunt voor al je online behoeften? Wij staan voor je klaar.',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'usp-2',
    title: 'Duurzaam & binnen je budget',
    description: 'Wij geloven niet in one size fits all-oplossingen. Onze websites worden op maat gemaakt voor jouw organisatie en doelgroep, met toekomstbestendige technologie. En dat hoeft niet duur te zijn. Door slimme keuzes te maken, leveren we kwaliteit binnen vrijwel elk budget. Wel zo prettig!',
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]; 