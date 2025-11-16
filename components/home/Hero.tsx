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
    <section className="relative overflow-hidden bg-primary-950 hero-high-contrast">
      {/* Subtle accent border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-icd-gold via-icd-green to-icd-blue"></div>

      {/* Geometric accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-icd-gold to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-icd-green to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-icd-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Industry Commons for Defense
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Ship defense software without surrendering your IP.
          </h1>

          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed text-white/95">
            ICD is the neutral license, shared repo, and compliance kit that let
            government and industry reuse code on day one. One agreement. One
            workflow. No more 12-month CUI delays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button
              href="/waitlist"
              variant="secondary"
              size="lg"
              className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
            >
              Get the ICD Starter Kit
            </Button>
            <Button
              href="https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt"
              variant="secondary"
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read the ICD license
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-left text-white/80 text-sm">
            {[
              "Protect proprietary modules with sovereign-sharing terms.",
              "Mirror the commons repo into your own pipelines immediately.",
              "Carry a pre-approved compliance packet into every program.",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
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

