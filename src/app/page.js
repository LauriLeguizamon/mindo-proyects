import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DiferencialSection } from "@/components/DiferencialSection";
import { CasestudiesSection } from "@/components/CasestudiesSection";
import { TecnologiasSection } from "@/components/TecnologiasSection";
import { FaqSection } from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Fade transition between hero and services */}
      <div className="relative h-32 -mt-32 z-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      <ServicesSection />
      <DiferencialSection />
      <CasestudiesSection />
      <TecnologiasSection />
      <FaqSection />
    </>
  );
}
