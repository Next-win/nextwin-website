import { notFound } from 'next/navigation';

// Make sure the type definition matches what Next.js expects
interface CaseParams {
  params: {
    slug: string;
  };
}

// Function to get case data by slug - in a real app, this would fetch from a database or API
// For now, we'll just map to known case pages
export default function CaseDetailPage({ params }: CaseParams) {
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