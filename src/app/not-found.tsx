import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Section className="pt-32 md:pt-40 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pagina niet gevonden</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Terug naar homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact opnemen
          </Button>
        </div>
      </div>
    </Section>
  );
} 