import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Commons - Industry Commons for Defense",
  description:
    "Explore the shared repo, reference components, and implementation standards that make ICD practical.",
};

const commonsHighlights = [
  {
    title: "Reference Repo",
    description:
      "Mirror ICD’s GitHub organization into your own CI/CD with one script. Every module is tagged with lineage, SBOMs, and usage guidance.",
    cta: {
      label: "Browse GitHub",
      href: "https://github.com/industry-commons-for-defense",
    },
  },
  {
    title: "Starter Modules",
    description:
      "Mission data models, auth packages, UI kits, and DevSecOps scaffolds vetted by the Steering Body.",
    cta: {
      label: "View components",
      href: "/components",
    },
  },
  {
    title: "Operational Standards",
    description:
      "Contribution templates, reciprocity tags, and compliance attestations so everyone speaks the same language.",
    cta: {
      label: "Download templates",
      href: "/documents#templates",
    },
  },
];

const mirroringSteps = [
  "Request the starter kit for your organization.",
  "Run the provided mirroring script inside your secure environment.",
  "Tag your first module with the ICD metadata schema and push upstream.",
];

export default function CommonsPage() {
  return (
    <>
      <Section background="gray">
        <Container size="lg">
          <div className="max-w-3xl">
            <p className="text-primary-700 uppercase tracking-wide text-sm font-semibold mb-2">
              Commons
            </p>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              The reusable code, data, and standards you can deploy today
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              ICD operates a neutral GitHub organization plus curated components so every
              member starts from the same trusted baseline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://github.com/industry-commons-for-defense"
                variant="primary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Visit the repo
              </Button>
              <Button href="/waitlist" variant="secondary" size="lg">
                Request mirroring access
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {commonsHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h2>
                <p className="text-gray-600 flex-1">{highlight.description}</p>
                <Button
                  href={highlight.cta.href}
                  variant="primary"
                  size="sm"
                  className="mt-6"
                  target={
                    highlight.cta.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    highlight.cta.href.startsWith("http") ? "noreferrer" : undefined
                  }
                >
                  {highlight.cta.label}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="gray">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Mirror the commons in three moves
            </h2>
            <ol className="space-y-4 text-gray-700 text-lg">
              {mirroringSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary-900 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}
