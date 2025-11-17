"use client";

import Button from "@/components/ui/Button";

const promises = [
  "Build Together. Best practices for government and industry collaboration.",
  "Deliver Faster. Shared access to data and tools.",
  "Protect What Matters. Industry leading security practices replacing compliance checklists",
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
          A Better Way to Work With Government.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            href="/waitlist"
            variant="primary"
            size="lg"
            className="bg-primary-900 text-white hover:bg-primary-800"
          >
            Join the waitlist
          </Button>
          <Button
            href="/components"
            variant="secondary"
            size="lg"
            className="border border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
          >
            Contribute code
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
