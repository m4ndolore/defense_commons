'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const steps = [
  {
    number: "1",
    title: "Request the ICD Starter Kit",
    description:
      "Download the license summary, contract clauses, repo mirroring script, and compliance packet. Share it with legal, engineering, and security at the same time.",
  },
  {
    number: "2",
    title: "Nominate Your First Module",
    description:
      "Pick one component to share or reuse. We walkthrough tagging, access levels, and how to mirror the commons repo back into your CI/CD within minutes.",
  },
];

const milestones = [
  {
    title: "Starter Kit Distribution",
    date: "Now",
    detail: "Legal + technical packet delivered as soon as you join the waitlist.",
  },
  {
    title: "Commons Repo Launch",
    date: "Q2 2025",
    detail: "Founding members mirror the reference repo into their environments.",
  },
  {
    title: "Mission Module Exchange",
    date: "Q3 2025",
    detail: "First reusable mission applications cleared for operational use.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold uppercase tracking-wide text-sm mb-2">
            Adoption steps
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-3">
            Two actions to get ICD running inside your program
          </h2>
          <p className="text-xl text-gray-600">
            We intentionally removed everything else. Do these two steps and
            you&apos;re in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-800 text-white font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-950 text-white rounded-3xl p-8 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-icd-gold font-semibold uppercase tracking-wide text-xs mb-2">
                Roadmap
              </p>
              <h3 className="text-2xl font-display font-semibold mb-4">
                Here&apos;s when each milestone lands
              </h3>
              <p className="text-white/80">
                Set expectations with leadership using this simple timeline.
              </p>
            </div>
            <Button
              href="/waitlist"
              variant="secondary"
              size="md"
              className="bg-icd-gold text-primary-950 hover:bg-yellow-400"
            >
              Get timeline updates
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {milestones.map((milestone) => (
              <div key={milestone.title} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <p className="text-icd-gold font-semibold text-sm mb-1">
                  {milestone.date}
                </p>
                <p className="text-lg font-semibold text-white mb-2">
                  {milestone.title}
                </p>
                <p className="text-white/80 text-sm">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
