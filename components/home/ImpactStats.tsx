'use client';

const proofPoints = [
  {
    headline: "42% less duplicate build",
    detail:
      "Pilot programs reused three ICD modules instead of funding parallel efforts.",
  },
  {
    headline: "CUI access in 11 days",
    detail:
      "Startups cleared reciprocity with the ICD compliance kit instead of bespoke paperwork.",
  },
  {
    headline: "Repo mirrors in minutes",
    detail:
      "Primes mirrored the commons organization locally with a single script while keeping everything sovereign.",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-display font-bold text-black mb-4">
          Proof from the pilot
        </h2>
        <p className="text-neutral-700 mb-6">
          Simple statements, no vanity metrics. These are the outcomes we expect every member
          to replicate.
        </p>
        <ul className="space-y-6">
          {proofPoints.map((point) => (
            <li key={point.headline}>
              <p className="text-lg font-semibold text-black">{point.headline}</p>
              <p className="text-neutral-700">{point.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
