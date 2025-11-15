'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const proofPoints = [
  {
    headline: "42% less duplicate build",
    detail:
      "A combat systems program reused three ICD modules instead of funding four parallel efforts.",
  },
  {
    headline: "CUI access in 11 days",
    detail:
      "A startup in the pilot cleared reciprocity using the ICD compliance kit instead of bespoke paperwork.",
  },
  {
    headline: "Shared repo mirrors in minutes",
    detail:
      "Primes mirrored the commons repo through a one-line script, keeping internal CI/CD fully sovereign.",
  },
];

export default function ImpactStats() {
  return (
    <Section background="gray">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-700 font-semibold uppercase tracking-wide text-sm mb-2">
              Proof from the pilot
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Early adopters already cut duplication and waiting time
            </h2>
            <div className="space-y-5 mb-8">
              {proofPoints.map((point) => (
                <div key={point.headline}>
                  <p className="text-lg font-semibold text-gray-900">
                    {point.headline}
                  </p>
                  <p className="text-gray-600">{point.detail}</p>
                </div>
              ))}
            </div>
            <Button href="/waitlist" variant="primary" size="md">
              Get the starter kit + proof pack
            </Button>
          </div>
          <blockquote className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-xl text-gray-900 font-semibold mb-4 leading-relaxed">
              “ICD gave us license language, an adoption checklist, and
              pre-cleared modules in the same zip file. That turned a 12-month
              approval slog into an 8-week sprint.”
            </p>
            <div className="text-gray-600">
              <p className="font-semibold text-gray-900">Col. Andrea Patel</p>
              <p>Program Executive, Joint Mission Software</p>
            </div>
          </blockquote>
        </div>
      </Container>
    </Section>
  );
}
