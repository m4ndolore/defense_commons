"use client";

import { Building2, Users, Scale } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const dayOneItems = [
  {
    icon: Building2,
    title: "Neutral ICD License",
    summary:
      "Ready-to-use contract language that protects IP while meeting SHARE-IT requirements.",
    bullets: [
      "Template clauses for primes, startups, and agencies",
      "Guidance on how to keep proprietary code proprietary",
    ],
  },
  {
    icon: Users,
    title: "Commons Repo + Starter Modules",
    summary:
      "Pre-cleared components and data models you can mirror into your own pipelines immediately.",
    bullets: [
      "Zero-friction mirroring instructions",
      "Reference implementations from early adopters",
    ],
  },
  {
    icon: Scale,
    title: "Compliance & Security Kit",
    summary:
      "Checklists, CMMC-ready controls, and reciprocity documentation so approvals happen in days, not months.",
    bullets: [
      "Keyboard-ready assurance package",
      "Point-by-point mapping to SHARE-IT and modularity guidance",
    ],
  },
];

export default function DayOneValue() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary-700 font-semibold uppercase tracking-wide text-sm mb-2">
            What you get on day one
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Every member starts with the same toolkit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We remove the guesswork by shipping the legal, technical, and
            compliance pieces together so adoption is a single decision, not six
            different projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {dayOneItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 text-primary-900 rounded-full p-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 flex-1">{item.summary}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-icd-green mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <span>Get the ICD Starter Kit</span>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
