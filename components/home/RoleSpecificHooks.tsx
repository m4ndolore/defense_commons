'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const outcomes = [
  {
    title: "Keep Your IP",
    subtitle: "Own everything you build while sharing only what you choose.",
    bullets: [
      "ICD license locks in sovereign-sharing terms.",
      "Dual-track contribution paths for classified and unclassified work."
    ],
  },
  {
    title: "Share Securely",
    subtitle: "Exchange code and data with instant clarity on who can use it.",
    bullets: [
      "Repo permissions mapped to CUI categories.",
      "Traceability from commit to contract clause."
    ],
  },
  {
    title: "Ship 6× Faster",
    subtitle: "No more bespoke policy waivers or one-off NDAs.",
    bullets: [
      "Starter modules with program-ready attestations.",
      "Adoption scripts that mirror the commons into your CI/CD in minutes."
    ],
  },
];

export default function RoleSpecificHooks() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold uppercase tracking-wide text-sm mb-2">
            Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
            Three promises every ICD member can bank on
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Whether you are an agency, startup, or prime, you adopt the same tooling and terms.
            No custom paperwork, just repeatable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {outcome.title}
              </h3>
              <p className="text-primary-800 font-medium mb-5">
                {outcome.subtitle}
              </p>
              <ul className="space-y-3 text-sm text-gray-600 flex-1">
                {outcome.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="text-icd-green mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/waitlist" variant="primary" size="md">
            See how the starter kit delivers these
          </Button>
        </div>
      </Container>
    </Section>
  );
}
