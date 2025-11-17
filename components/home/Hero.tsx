"use client";

import Button from "@/components/ui/Button";

const promises = [
  "Neutral license that keeps proprietary work proprietary.",
  "Shared repo plus starter modules you can mirror in minutes.",
  "Compliance packet and templates that travel with every deal.",
];

export default function Hero() {
  return (
    <section className="bg-[#f3edff] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary-800 mb-6">
          Industry Commons for Defense
        </p>
        <h1 className="text-4xl sm:text-6xl font-display font-bold text-primary-950 mb-8">
          Unlock Public Technology.
        </h1>
        <p className="text-xl text-primary-900 max-w-3xl mb-10 leading-relaxed">
          ICD is the standards framework for building with government. Download the documents,
          mirror the commons repo, and cite ICD in your next contract. No pitch decks—just the
          rules, code, and compliance kit.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            href="/waitlist"
            variant="secondary"
            size="lg"
            className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200"
          >
            Member&apos;s Waitlist
          </Button>
          <Button
            href="/components"
            variant="secondary"
            size="lg"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200"
          >
            Contribute Code
          </Button>
        </div>

        <ul className="space-y-4 text-primary-900 text-lg">
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
