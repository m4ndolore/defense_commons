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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-display font-bold text-black mb-4">
          What you get on day one
        </h2>
        <p className="text-neutral-700 mb-6">
          Everything lives in one starter kit so legal, engineering, and security review
          the same packet. No pitch decks—just documents and repo access.
        </p>
        <div className="space-y-6 mb-10">
          {toolkit.map((item) => (
            <div key={item.title}>
              <p className="text-lg font-semibold text-black mb-2">{item.title}</p>
              <ul className="space-y-2 text-neutral-700">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="text-icd-green font-bold">•</span>
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
