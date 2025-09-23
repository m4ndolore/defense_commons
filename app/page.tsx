import Hero from "@/components/home/Hero";
import CoreComponents from "@/components/home/CoreComponents";
import Benefits from "@/components/home/Benefits";
import AAFPathways from "@/components/home/AAFPathways";
import ShareITSection from "@/components/home/ShareITSection";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreComponents />
      <Benefits />
      <AAFPathways />
      <ShareITSection />
      <CTASection />
    </>
  );
}