import Hero from "@/components/home/Hero";
import CoreComponents from "@/components/home/CoreComponents";
import Benefits from "@/components/home/Benefits";
import ROISection from "@/components/home/ROISection";
import CTASection from "@/components/shared/CTASection";

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