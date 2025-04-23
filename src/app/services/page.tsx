import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Next Win",
  description: "Ontdek onze diensten op het gebied van website ontwikkeling, online marketing en content creatie.",
};

const ServicesPage = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Onze Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We bieden verschillende diensten aan om jouw bedrijf online te laten groeien.
          </p>
        </div>
      </Section>
      
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-12">
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            Services pagina in ontwikkeling
          </p>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage; 