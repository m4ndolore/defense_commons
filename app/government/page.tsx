import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Government - Industry Commons for Defense",
  description:
    "A concise guide for agencies adopting the ICD framework to meet SHARE-IT mandates and accelerate delivery.",
};

const priorities = [
  "Reference the SW-ICD license in your solicitations to guarantee sovereign reuse.",
  "Mirror the commons repo into your accredited environment and reuse pre-cleared components.",
  "Nominate a first mission module for shared stewardship with industry partners.",
];

export default function GovernmentPage() {
  return (
    <>
      <Section background="gray">
        <Container size="md">
          <div className="text-center mb-8">
            <p className="text-primary-700 uppercase tracking-wide text-sm font-semibold mb-2">
              Government
            </p>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Treat ICD like a standards body, not a vendor
            </h1>
            <p className="text-lg text-gray-600">
              Point your teams to the framework, pull the documents you need, and invite industry
              partners into the same commons.
            </p>
          </div>
          <div className="text-center flex flex-wrap gap-4 justify-center">
            <Button href="/framework" variant="primary" size="lg">
              Explore the Framework
            </Button>
            <Button href="/documents" variant="secondary" size="lg">
              Download Documents
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Execute in three moves
            </h2>
            <ol className="space-y-4 text-gray-700">
              {priorities.map((priority, index) => (
                <li key={priority} className="flex gap-3">
                  <span className="text-primary-900 font-bold">{index + 1}.</span>
                  <span>{priority}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}
