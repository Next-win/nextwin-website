import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextWin | Websites, Webshops & Online Marketing",
  description: "Next Win helpt ondernemers met het bouwen van websites, webshops en online marketing die écht resultaat opleveren.",
}

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <CasesSection />
        <div className="py-12 md:py-20"></div>
        <ContactSection />
      </main>
    </>
  )
}
