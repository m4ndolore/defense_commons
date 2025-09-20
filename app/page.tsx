import Hero from "@/components/Hero";
import CoreComponents from "@/components/CoreComponents";
import Benefits from "@/components/Benefits";
import ROISection from "@/components/ROISection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreComponents />
      <Benefits />
      <ROISection />
      <CTASection />
    </>
  );
}