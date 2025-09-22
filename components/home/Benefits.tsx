const stakeholderBenefits = [
  {
    title: "Government",
    color: "text-icd-purple",
    benefits: [
      "Accelerated fielding",
      "Transparent provenance",
      "Cost savings (20-40%)",
      "Enhanced security",
    ],
  },
  {
    title: "Industry",
    color: "text-icd-blue",
    benefits: [
      "Wider deployment",
      "New revenue streams",
      "Reduced duplication",
      "Clear IP framework",
    ],
  },
  {
    title: "Developers",
    color: "text-icd-green",
    benefits: [
      "Guaranteed attribution",
      "Controlled access",
      "Clear governance",
      "Community support",
    ],
  },
  {
    title: "Allied Partners",
    color: "text-icd-gold",
    benefits: [
      "Tiered access",
      "Shared standards",
      "Coalition interoperability",
      "Sovereignty preservation",
    ],
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-12 text-gray-900">
          Benefits by Stakeholder
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholderBenefits.map((stakeholder) => (
            <div
              key={stakeholder.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3
                className={`text-lg font-display font-semibold mb-3 ${stakeholder.color}`}
              >
                {stakeholder.title}
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                {stakeholder.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <span className="text-icd-green mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}