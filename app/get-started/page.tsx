import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Get Started - Industry Commons for Defense",
  description: "Begin your journey with the ICD Framework through our onboarding process and partner programs.",
};

export default function GetStartedPage() {
  return (
    <>
      <Section variant="spacious" background="white">
        <Container size="md">
          <Heading level="h1" className="mb-8 text-center">
            Get Started with ICD
          </Heading>
          <Text variant="large" className="text-center mb-12">
            Join the collaborative framework that&apos;s transforming defense technology development.
          </Text>

          <Grid cols={2} gap="lg">
            <Card variant="elevated" padding="lg">
              <Heading level="h3" className="mb-4 text-primary-800">
                For Government Agencies
              </Heading>
              <Text variant="base" className="mb-6">
                Accelerate your technology acquisition and deployment through collaborative frameworks.
              </Text>
              <ul className="space-y-2 mb-6 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Pilot program participation
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Technical Steering Committee involvement
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Framework governance participation
                </li>
              </ul>
              <Button
                href="/about#contact"
                variant="primary"
                size="lg"
              >
                Contact Us
              </Button>
            </Card>

            <Card variant="elevated" padding="lg">
              <Heading level="h3" className="mb-4 text-accent-blue">
                For Industry Partners
              </Heading>
              <Text variant="base" className="mb-6">
                Expand your market reach and collaborate on cutting-edge defense technologies.
              </Text>
              <ul className="space-y-2 mb-6 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Partnership program enrollment
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Collaborative development opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">✓</span>
                  Market expansion support
                </li>
              </ul>
              <Button
                href="/about#contact"
                variant="accent"
                color="blue"
                size="lg"
              >
                Join Program
              </Button>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section variant="default" background="gray">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Onboarding Process
          </Heading>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-800 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                1
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Initial Consultation</Heading>
                <Text>Schedule a consultation to discuss your organization&apos;s needs and alignment with ICD objectives.</Text>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent-gold text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                2
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Framework Review</Heading>
                <Text>Review the ICD Framework documentation and licensing requirements relevant to your use case.</Text>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent-green text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                3
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Pilot Participation</Heading>
                <Text>Begin with a pilot project to demonstrate framework capabilities and benefits.</Text>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-accent-blue text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-semibold text-lg">
                4
              </div>
              <div className="flex-1">
                <Heading level="h4" className="mb-2">Full Integration</Heading>
                <Text>Scale to full framework participation with access to all collaboration tools and resources.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="compact" background="white">
        <Container size="md">
          <Card variant="filled" padding="lg" className="text-center">
            <Heading level="h2" className="mb-4">
              Ready to Begin?
            </Heading>
            <Text variant="large" className="mb-6">
              Contact our team to start your ICD journey and join the growing community of defense innovators.
            </Text>
            <Button
              href="mailto:contact@icd-defense.org"
              variant="primary"
              size="xl"
            >
              Get In Touch
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}