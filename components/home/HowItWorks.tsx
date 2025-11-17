'use client';

const steps = [
  {
    number: "1",
    title: "Join",
    description:
      "Become a member of the Industry Commons for Defense.",
  },
  {
    number: "2",
    title: "Contribute",
    description:
      "Share or license technology using the ICD framework.",
  },
  {
    number: "3",
    title: "Build",
    description:
      "Reuse code, collaborate across projects, and launch faster.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f3edff] border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm uppercase tracking-[0.4em] text-primary-800 mb-3">
          Adoption
        </p>
        <h2 className="text-3xl font-display font-bold text-primary-950 mb-4">
          How it works
        </h2>
        <p className="text-primary-900 mb-6">
          Simple steps to get started today.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              <div className="relative mb-6">
                <div className="w-10 h-10 mx-auto bg-primary-800 text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:bg-primary-700 transition-colors">
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-y-4 border-y-transparent"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
}
