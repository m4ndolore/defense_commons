import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industry - Industry Commons for Defense",
  description:
    "A concise look at how startups, SMEs, and primes engage with ICD without lengthy sales copy.",
};

const promises = [
  "Keep your proprietary modules proprietary while licensing what you choose under SW-ICD.",
  "Show up with a compliance packet and repo mirroring script instead of waiting for CUI waivers.",
  "Reuse government-cleared components to cut duplicate build and accelerate milestones.",
];

export default function IndustryPage() {
  return (
    <>
      <Section background="gray">
        <Container size="md">
          <div className="text-center mb-8">
            <p className="text-primary-700 uppercase tracking-wide text-sm font-semibold mb-2">
              Industry
            </p>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Your role is simple: protect IP, deliver value, reuse what works
            </h1>
            <p className="text-lg text-gray-600">
              ICD is a standards framework—not a services vendor. Bring your working code,
              apply the license, and plug into the commons repo on day one.
            </p>
          </div>
          <div className="text-center flex flex-wrap gap-4 justify-center">
            <Button href="/framework" variant="primary" size="lg">
              Explore the Framework
            </Button>
            <Button
              href="https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt"
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noreferrer"
            >
              Download the License
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              What industry members get
            </h2>
            <ul className="space-y-4 text-gray-700">
              {promises.map((promise) => (
                <li key={promise} className="flex gap-3">
                  <span className="text-icd-green font-bold mt-1">•</span>
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
