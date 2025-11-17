"use client";

import Button from "@/components/ui/Button";

const toolkit = [
  {
    title: "Licenses",
    details: [
      "SW-ICD and HW-ICD language that satisfies SHARE-IT.",
      "Clause-by-clause guidance for primes and startups.",
    ],
  },
  {
    title: "Repo + Components",
    details: [
      "Reference organization on GitHub with tagged modules.",
      "Mirroring script for air-gapped or classified pipelines.",
    ],
  },
  {
    title: "Compliance Kit",
    details: [
      "Reciprocity checklist and assurance packet.",
      "Templates for data rights, SBOMs, and contribution notes.",
    ],
  },
];

export default function DayOneValue() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-900/80 mb-3">
          Documents + Repo
        </p>
        <h2 className="text-3xl font-display font-bold text-amber-950 mb-4">
          What you get on day one
        </h2>
        <p className="text-amber-900/80 mb-8">
          Everything lives in one starter kit so legal, engineering, and security review
          the same packet. No pitch decks—just documents and repo access.
        </p>
        <div className="space-y-6 mb-10">
          {toolkit.map((item) => (
            <div key={item.title}>
              <p className="text-lg font-semibold text-amber-950 mb-2">{item.title}</p>
              <ul className="space-y-2 text-amber-900/80">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button href="/waitlist" variant="primary" size="md">
          Request the starter kit
        </Button>
      </div>
    </section>
  );
}
