import Section from "@/components/ui/Section";
import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Next Win",
  description: "Neem contact op met Next Win voor vragen over onze diensten of om een afspraak te maken.",
};

const ContactPage = () => {
  return (
    <>
      <Section className="py-32 md:py-40 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Neem contact met ons op voor meer informatie of om een afspraak te maken.
          </p>
        </div>
      </Section>
      
      <ContactSection />
    </>
  );
};

export default ContactPage; 