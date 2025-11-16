'use client';

const steps = [
  {
    title: "Request the starter kit",
    detail:
      "One email gives legal, engineering, and security the same documents, templates, and repo instructions.",
  },
  {
    title: "Mirror the commons",
    detail:
      "Run the script in your environment, tag your first module with ICD metadata, and keep everything sovereign.",
  },
  {
    title: "Cite ICD in your next contract",
    detail:
      "Reference the license, attach the compliance packet, and invite partners to reuse the same repo.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-display font-bold text-black mb-4">
          How it works
        </h2>
        <p className="text-neutral-700 mb-6">
          Three moves. No demos, no pilots, no procurement cycles.
        </p>
        <ol className="space-y-6 text-neutral-800">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="text-primary-900 font-semibold">{index + 1}.</span>
              <div>
                <p className="text-lg font-semibold text-black">{step.title}</p>
                <p className="text-neutral-700">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
