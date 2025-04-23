import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons | Next Win",
  description: "Leer meer over Next Win, ons team en onze waarden als creatief digital agency.",
};

const AboutUsPage = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Samen creëren we online succes
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Wie zijn wij en waarom doen wij wat we doen?
          </p>
        </div>
      </Section>
      
      <AboutSection />
      <TeamSection />
    </>
  );
};

export default AboutUsPage; 