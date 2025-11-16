"use client";

import Button from "@/components/ui/Button";

const promises = [
  "Neutral license that keeps proprietary work proprietary.",
  "Shared repo plus starter modules you can mirror in minutes.",
  "Compliance packet and templates that travel with every deal.",
];

export default function Hero() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
          Industry Commons for Defense
        </p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-black mb-6">
          Standards, documents, and a commons repo—nothing else.
        </h1>
        <p className="text-lg text-neutral-700 mb-8">
          ICD operates like a technical standards body. Read the framework, grab the documents,
          and plug into the repo. No sales funnel, just the pieces you need to collaborate.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <Button href="/waitlist" variant="primary" size="lg">
            Get the Starter Kit
          </Button>
          <Button
            href="https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt"
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noreferrer"
          >
            Read the License
          </Button>
        </div>
        <ul className="space-y-3 text-neutral-700">
          {promises.map((promise) => (
            <li key={promise} className="flex gap-3">
              <span className="text-icd-green font-bold">•</span>
              <span>{promise}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
