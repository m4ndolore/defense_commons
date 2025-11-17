'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ClosingCTA() {
  return (
    <Section background="white" className="text-center">
      <Container size="sm">
        <h2 className="text-3xl sm:text-3xl font-display font-bold text-primary-950 mb-4">
          Protect your IP. Share your code. Build faster.
        </h2>
        <p className="text-primary-900 mb-8">
          Download the licenses, invite partners into the commons repo, and cite ICD in your next contract.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            href="/documents"
            variant="primary"
            size="lg"
            className="bg-primary-900 text-white hover:bg-primary-800 shadow-[0_15px_35px_rgba(65,0,130,0.3)] rounded-2xl px-7 py-3"
          >
            Learn more
          </Button>
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            className="bg-primary-900 text-white hover:bg-primary-800 shadow-[0_15px_35px_rgba(65,0,130,0.3)] rounded-2xl px-7 py-3"
          >
            Join the waitlist
          </Button>
        </div>
      </Container>
    </Section>
  );
}
