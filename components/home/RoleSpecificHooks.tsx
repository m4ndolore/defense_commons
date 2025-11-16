'use client';

const commitments = [
  {
    title: "Industry",
    summary:
      "Ship real software, keep your IP, and reuse government-cleared components without bespoke NDAs.",
    link: { label: "Industry overview", href: "/industry" },
  },
  {
    title: "Government",
    summary:
      "Reference ICD in solicitations, mirror the commons repo, and align with SHARE-IT mandates.",
    link: { label: "Government overview", href: "/government" },
  },
  {
    title: "Steering Body",
    summary:
      "Fifteen organizations maintain the framework, approve changes, and publish new standards.",
    link: { label: "Community governance", href: "/community#steering-body" },
  },
];

export default function RoleSpecificHooks() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-display font-bold text-black mb-4">
          One framework, shared across every role
        </h2>
        <p className="text-neutral-700 mb-6">
          No persona pages or marketing funnels. Each role uses the exact same documents,
          repo, and starter kit.
        </p>
        <div className="space-y-6">
          {commitments.map((commitment) => (
            <div key={commitment.title}>
              <p className="text-lg font-semibold text-black">{commitment.title}</p>
              <p className="text-neutral-700">{commitment.summary}</p>
              <a
                href={commitment.link.href}
                className="text-blue-600 hover:underline text-sm"
              >
                {commitment.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
