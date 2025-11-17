'use client';

const steps = [
  {
    number: "1",
    title: "Join",
    description: "Become a member of Defense Commons."
  },
  {
    number: "2",
    title: "Contribute",
    description: "Share or license code under the ICD framework."
  },
  {
    number: "3",
    title: "Build",
    description: "Reuse code, collaborate across projects, and launch faster."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f3edff] border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-left mb-6">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-800 mb-2">
            Adoption
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-950 mb-2">
            How It Works
          </h2>
          <p className="text-xl text-primary-900">
            Simple steps to get started today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              <div className="relative mb-10 min-h-[0.5rem]">
                {index === 0 && (
                  <div className="hidden md:block absolute top-2 left-2/5 w-[110%] h-0.5 bg-black"></div>
                )}
                {index === 1 && (
                  <div className="hidden md:block absolute top-2 left-3/5 w-[110%] h-0.5 bg-black"></div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-primary-950 mb-2">
                {step.title}
              </h3>
              
              <p className="text-primary-900">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
