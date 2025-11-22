import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Community - Industry Commons for Defense",
  description:
    "Industry, government, and the Steering Body collaborate through ICD to keep IP protected while sharing what matters.",
};

const communitySegments = [
  {
    id: "industry",
    title: "Industry Contributors",
    description:
      "Startups, SMEs, and primes who bring working code and want to keep ownership while delivering to mission programs.",
    bullets: [
      "License your modules under SW-ICD and keep proprietary components proprietary.",
      "Reuse government-cleared modules without waiting months for CUI paperwork.",
    ],
    primaryCta: { label: "Explore the Framework", href: "/framework" },
    secondaryCta: { label: "Download the License", href: "https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt" },
  },
  {
    id: "government",
    title: "Government Programs",
    description:
      "Program offices, labs, and acquisitions teams that need modular, reusable software with clear lineage.",
    bullets: [
      "Reference ICD to align with SHARE-IT mandates and reciprocity requirements.",
      "Tap into the commons repo and mirror what you need into your enclaves.",
    ],
    primaryCta: { label: "Explore the Framework", href: "/framework" },
    secondaryCta: { label: "Contact ICD", href: "/contact" },
  },
  {
    id: "steering-body",
    title: "Steering Body",
    description:
      "Fifteen founding members representing government, industry, and academia who maintain the standards and roadmap.",
    bullets: [
      "Approve version updates to the ICD framework and licenses.",
      "Prioritize new components for the commons and review compliance kits.",
    ],
    primaryCta: { label: "Request Starter Kit", href: "/waitlist" },
    secondaryCta: { label: "Read About Governance", href: "/about#governance" },
  },
];

export default function CommunityPage() {
  return (
    <>
      <div className="bg-gray-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-700 uppercase tracking-[0.4em] text-xs font-semibold mb-4">
            Defense Commons Community
          </p>
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            One framework, shared across industry and government
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            ICD works because every participant uses the same agreements, repo, and starter kit. Pick your role and plug in.
          </p>
        </div>
      </div>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {communitySegments.map((segment) => (
              <div
                key={segment.id}
                id={segment.id}
                className="border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {segment.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-1">{segment.description}</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  {segment.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-icd-green font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <Button href={segment.primaryCta.href} variant="primary" size="sm">
                    {segment.primaryCta.label}
                  </Button>
                  <Button
                    href={segment.secondaryCta.href}
                    variant="secondary"
                    size="sm"
                    target={
                      segment.secondaryCta.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      segment.secondaryCta.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {segment.secondaryCta.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
