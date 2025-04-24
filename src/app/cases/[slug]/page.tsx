import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Define the params type
type Params = {
  slug: string;
};

// Define metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: Params
}): Promise<Metadata> {
  const { slug } = params;
  
  return {
    title: `Case Study: ${slug} | Next Win`,
    description: `Bekijk onze case study over ${slug} en leer hoe wij digitale oplossingen creëren die resultaat leveren.`
  };
}

// The main page component
export default async function CaseDetailPage({ 
  params 
}: { 
  params: Params 
}) {
  const { slug } = params;
  
  // In a real app, you would fetch data here
  // const data = await getCaseData(slug);
  
  // For now, just redirect to the proper case pages
  if (slug === 'oudhollandsspel') {
    return notFound();
  }
  
  if (slug === 'verhuursysteem-2nd-ride') {
    return notFound();
  }
  
  // If no matching slug is found, return not found
  return notFound();
} 