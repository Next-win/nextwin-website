export const seoConfig = {
  // Base URL - will be automatically detected from environment or default
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://next-win.nl',
  
  // Site metadata
  siteName: 'Next Win',
  siteDescription: 'Professionele websites, webshops en online marketing die echt resultaat leveren. Van concept tot conversie.',
  
  // Default metadata
  defaultTitle: 'Next Win | Websites & Online Marketing die Resultaat Leveren',
  titleTemplate: '%s | Next Win',
  
  // Social media
  social: {
    twitter: '@nextwin_nl',
    linkedin: 'https://linkedin.com/company/next-win',
  },
  
  // Sitemap configuration
  sitemap: {
    // How often pages are updated
    changeFrequencies: {
      homepage: 'daily' as const,
      services: 'weekly' as const,
      cases: 'monthly' as const,
      about: 'monthly' as const,
      contact: 'yearly' as const,
    },
    
    // Page priorities (0.0 to 1.0)
    priorities: {
      homepage: 1.0,
      services: 0.9,
      servicesPages: 0.8,
      cases: 0.9,
      casesPages: 0.7,
      about: 0.8,
      contact: 0.8,
    },
  },
  
  // Robots configuration
  robots: {
    disallowPaths: [
      '/demo/',
      '/coming-soon/',
      '/admin/',
      '/api/',
      '/_next/',
      '/temp-nextwin/',
      '*.pdf',
      '/404',
      '/500',
    ],
    allowPaths: [
      '/',
      '/services/',
      '/cases/',
      '/about-us/',
      '/contact/',
    ],
  },
}

// Static routes that should be included in sitemap
export const staticRoutes = [
  {
    path: '/',
    priority: seoConfig.sitemap.priorities.homepage,
    changeFrequency: seoConfig.sitemap.changeFrequencies.homepage,
  },
  {
    path: '/services',
    priority: seoConfig.sitemap.priorities.services,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/websites',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/webshops',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/online-marketing',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/google-ads',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/zoekmachine-optimalisatie',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/content-creatie',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/services/crm-salesforce',
    priority: seoConfig.sitemap.priorities.servicesPages,
    changeFrequency: seoConfig.sitemap.changeFrequencies.services,
  },
  {
    path: '/cases',
    priority: seoConfig.sitemap.priorities.cases,
    changeFrequency: seoConfig.sitemap.changeFrequencies.cases,
  },
  {
    path: '/about-us',
    priority: seoConfig.sitemap.priorities.about,
    changeFrequency: seoConfig.sitemap.changeFrequencies.about,
  },
  {
    path: '/contact',
    priority: seoConfig.sitemap.priorities.contact,
    changeFrequency: seoConfig.sitemap.changeFrequencies.contact,
  },
] 