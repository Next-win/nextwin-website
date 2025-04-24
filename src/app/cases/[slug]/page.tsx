import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Correct type definition that matches Next.js expectations
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  // Default metadata
  return {
    title: `Case Study: ${slug} | Next Win`,
    description: `Bekijk onze case study over ${slug} en leer hoe wij digitale oplossingen creëren die resultaat leveren.`
  };
}

// Function to get case data by slug - in a real app, this would fetch from a database or API
// For now, we'll just map to known case pages
export default function CaseDetailPage({ params }: Props) {
  const { slug } = params;
  
  // Redirect to the appropriate case page based on the slug
  if (slug === 'oudhollandsspel') {
    return notFound(); // Let Next.js handle the redirection to the case detail page
  }
  
  if (slug === 'verhuursysteem-2nd-ride') {
    return notFound(); // Let Next.js handle the redirection to the case detail page
  }
  
  // If no matching slug is found, return not found
  return notFound();
} 