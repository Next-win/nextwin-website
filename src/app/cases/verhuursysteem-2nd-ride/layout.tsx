import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verhuursysteem 2nd Ride | Next Win',
  description: 'Bekijk hoe Next Win een digitaal verhuursysteem ontwikkelde voor 2nd Ride, waarmee zij hun verhuurproces volledig geautomatiseerd hebben.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 