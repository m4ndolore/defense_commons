'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ClosingCTA() {
  return (
    <Section background="gradient" className="text-white text-center">
      <Container size="sm">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
          Ready to put ICD in front of your leadership this week?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          The starter kit bundles the license summary, contract clauses, repo guide, and compliance checklist.
          Hand it to legal, engineering, and security in one shareable link.
        </p>

        <Button
          href="/waitlist"
          variant="secondary"
          size="lg"
          className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 w-full sm:w-auto"
        >
          Request the ICD Starter Kit
        </Button>
      </Container>
    </Section>
  );
}
