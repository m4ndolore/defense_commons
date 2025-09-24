import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function CTASection() {
  return (
    <Section variant="compact" background="gradient">
      <Container size="md">
        <div className="text-center text-white">
          <Heading level="h2" className="mb-4 !text-white">
            Join the Industry Commons for Defense
          </Heading>
          <Text variant="large" className="mb-8 text-white/90">
            Accelerate innovation, enhance security, and build the future of
            defense technology together.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
          >
            Start Your Journey
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
          >
            Contact Us
          </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}