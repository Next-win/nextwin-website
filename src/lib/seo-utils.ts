import { seoConfig } from '@/config/seo'

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noIndex?: boolean
  lastModified?: Date
}

export function generateMetadata(data: SEOData) {
  const title = data.title ? `${data.title} | ${seoConfig.siteName}` : seoConfig.defaultTitle
  const description = data.description || seoConfig.siteDescription
  const canonicalUrl = data.canonicalUrl || seoConfig.baseUrl
  const ogImage = data.ogImage || `${seoConfig.baseUrl}/images/og-default.jpg`

  return {
    title,
    description,
    keywords: data.keywords?.join(', '),
    authors: [{ name: seoConfig.siteName }],
    creator: seoConfig.siteName,
    publisher: seoConfig.siteName,
    robots: data.noIndex ? 'noindex,nofollow' : 'index,follow',
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'nl_NL',
      type: data.ogType || 'website',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: seoConfig.social.twitter,
    },
    
    // Last modified
    ...(data.lastModified && {
      other: {
        'last-modified': data.lastModified.toISOString(),
      },
    }),
  }
}

// Generate structured data for organization
export function generateOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.siteName,
    description: seoConfig.siteDescription,
    url: seoConfig.baseUrl,
    logo: `${seoConfig.baseUrl}/logo-200x37-nextwin.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'NL',
      availableLanguage: 'Dutch',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
      addressLocality: 'Nederland',
    },
    sameAs: [
      seoConfig.social.linkedin,
    ],
  }
}

// Generate structured data for services
export function generateServiceLD(service: {
  name: string
  description: string
  url: string
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    serviceType: 'Digital Marketing',
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'EUR',
      },
    }),
  }
}

// Generate structured data for case studies/portfolio
export function generateCreativeWorkLD(caseStudy: {
  name: string
  description: string
  url: string
  image?: string
  dateCreated?: Date
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: caseStudy.name,
    description: caseStudy.description,
    url: caseStudy.url,
    ...(caseStudy.image && { image: caseStudy.image }),
    creator: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
    },
    ...(caseStudy.dateCreated && {
      dateCreated: caseStudy.dateCreated.toISOString(),
    }),
  }
}

// Generate breadcrumb structured data
export function generateBreadcrumbLD(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
} 