import WhatIsICD from "@/components/home/WhatIsICD";
import CoreComponents from "@/components/home/CoreComponents";
import Benefits from "@/components/home/Benefits";
import AAFPathways from "@/components/home/AAFPathways";
import ShareITSection from "@/components/home/ShareITSection";
import CTASection from "@/components/shared/CTASection";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient" className="text-center">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 !text-white">
              Industry Commons for Defense
            </Heading>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-white/95">
              A collaborative framework enabling transparent, modular, and
              sovereign-aligned collaboration across government, FFRDCs, UARCs,
              and industry partners in defense technology development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Get Started
              </Button>
              <Button
                href="/framework"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <WhatIsICD />
      <CoreComponents />
      <ShareITSection />
      <Benefits />
      <AAFPathways />
      <CTASection />
    </>
  );
}