export default function AboutPage() {
  const values = [
    { title: "Collaboration", detail: "Multi-stakeholder participation across government, research, and industry." },
    { title: "Innovation", detail: "Rapid validation and deployment of new capabilities into real programs." },
    { title: "Transparency", detail: "Open governance, clear standards, and auditable decisions." },
    { title: "Security", detail: "Cyber-hardened frameworks with strong provenance and audit trails." },
    { title: "Sovereignty", detail: "Alignment with national security priorities and trusted allied partnerships." },
  ];

  const governance = [
    {
      title: "ICD Steering Body (ICD-SB)",
      detail:
        "A nonprofit, IETF-modeled body that owns the technical roadmap, approves standards, and preserves the framework’s neutrality.",
    },
    {
      title: "Technical Steering Committees (TSCs)",
      detail:
        "Government-led committees that evaluate proposals from PEOs/PMs and operational users, ratify domain-specific standards, and submit recommendations to the ICD-SB.",
    },
    {
      title: "Government Oversight",
      detail:
        "OUSD(A&S) and OUSD(R&E) provide policy guidance, participate as non-voting members, manage classification and releasability, and ensure ICD remains aligned with DoD priorities.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <header>
          <p className="text-xs uppercase tracking-[0.4em] text-primary-800 mb-4">About Us</p>
          <h1 className="text-4xl font-bold text-black mb-4">About the ICD Foundation</h1>
          <p className="text-lg text-neutral-700 max-w-3xl">
            The Industry Commons for Defense (ICD) Foundation is a 501(c)(6) nonprofit that accelerates defense innovation by providing
            a neutral, shared framework for building and reusing mission software.
          </p>
        </header>

        <section className="space-y-6" id="mission">
          <article>
            <h2 className="text-2xl font-bold text-black mb-2">Our Mission</h2>
            <p className="text-neutral-700">
              To define and maintain a collaborative framework that enables transparent, modular, and sovereign-aligned collaboration
              across government, FFRDCs, UARCs, and industry partners in defense technology.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold text-black mb-2">Our Vision</h2>
            <p className="text-neutral-700">
              A defense ecosystem where trusted partners can share and adopt technology quickly, where security and collaboration reinforce each
              other, and where the best capabilities reach warfighters faster than adversaries can adapt.
            </p>
          </article>
        </section>

        <section className="space-y-4" id="values">
          <h2 className="text-2xl font-bold text-black">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="border border-neutral-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-black">{value.title}</h3>
                <p className="text-neutral-700 text-sm">{value.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4" id="governance">
          <h2 className="text-2xl font-bold text-black">Governance Structure</h2>
          <div className="space-y-4">
            {governance.map((item) => (
              <article key={item.title} className="border border-neutral-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-neutral-700 text-sm">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4" id="status">
          <h2 className="text-2xl font-bold text-black">501(c)(6) Nonprofit</h2>
          <p className="text-neutral-700">
            As a 501(c)(6) organization, the ICD Foundation provides a neutral forum for competitors and partners to collaborate while
            complying with federal regulations and defense security requirements.
          </p>
          <p className="text-neutral-700">
            This structure enables multi-stakeholder collaboration while enforcing clear accountability, transparency, and security in how
            defense software is developed, shared, and governed.
          </p>
        </section>
      </div>
    </div>
  );
}
