import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents - Industry Commons for Defense",
  description: "Defense Commons documents and templates for government contracting and intellectual property.",
};

const baseGitHubUrl = "https://github.com/industry-commons-for-defense/icd-artifacts";

export default function DocumentsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content - Left Side */}
          <main className="flex-1 max-w-3xl">
            {/* Title and Attribution */}
            <h1 className="text-4xl font-bold text-black mb-2">
              Defense Commons Framework
            </h1>
            <p className="text-lg text-neutral-600 mb-12">
              By Paul Garcia
            </p>

            {/* Download the Framework */}
            <section id="download-framework" className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6">
                Download the Framework
              </h2>
              <p className="text-neutral-700 mb-6">
                What we use to make collaboration work: licenses, templates, governance, and specs.
              </p>

              {/* Licenses */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">Licenses</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/SW-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Software Common License v1.0
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/HW-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Hardware Common License v1.0
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/Data-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      User Data Common License v1.0
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/Model-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      AI/ML Common License v1.0
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* About the ICD Framework */}
            <section id="about-framework" className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6">
                About the ICD Framework
              </h2>
              <div className="prose prose-neutral max-w-none space-y-4 text-neutral-700">
                <p>
                  The Industry Commons for Defense Framework (ICD) was created to provide a simple, modern, and standardized way for government, industry, and partners to collaborate on defense software. For decades, defense teams have relied on bespoke CRADAs, licenses, and one-off agreements that slowed development, blocked reuse, and made it difficult to build shared capability. ICD introduces a clear, modular structure that replaces this complexity with transparent, repeatable rules.
                </p>

                <p>
                  The first generation of ICD licenses focused primarily on enabling basic software reuse across government programs — a necessary step at a time when most defense development was still vertically integrated and locked inside proprietary systems. As collaboration needs grew, and as mandates like MOSA, the Software Acquisition Pathway, and the SHARE-IT Act emphasized openness and interoperability, it became clear the community needed a more complete, modernized framework.
                </p>

                <p>
                  The updated ICD Framework reflects this shift. It introduces a dual-license model designed specifically for defense: one license for open, reusable components and another for controlled, sensitive technology. Together, these licenses form a unified approach that gives contributors confidence in how their work will be used and gives government the transparency it needs to adopt, extend, and govern shared mission software.
                </p>

                <p>
                  The ICD Framework has two essential goals that are critically important for modern defense software:
                </p>

                <ol className="list-decimal ml-6 space-y-2">
                  <li>
                    <strong>High-resolution collaboration.</strong> Teams can contribute or consume components as soon as both sides are ready, without waiting for lengthy legal negotiation or bespoke agreements. This makes it easier for programs, labs, and companies to work together, iterate, and ship faster.
                  </li>
                  <li>
                    <strong>A simple, one-document structure.</strong> Each license is designed to minimize legal friction and reduce time spent negotiating terms. Instead of dozens of variants, ICD maintains a single core form for each licensing class. Contributors typically decide only one key variable: whether a component is intended for open reuse or controlled release.
                  </li>
                </ol>

                <p>
                  Whether you are using ICD for the first time or are already familiar with modern open collaboration models, we recommend reviewing the ICD User Guide. It explains the structure of the licenses, how components move across tiers, examples of SBOM/HBOM provenance tracking, and best practices for working across government and industry.
                </p>

                <p>
                  While ICD will not cover every possible edge case, its terms are intended to be balanced — supporting both the contributors building technology and the government teams depending on it. There is always a trade-off between simplicity and comprehensive coverage, and ICD is intentionally optimized for clarity, speed, and trust. Users are encouraged to consult legal counsel where necessary, but the framework provides a common, stable starting point for most defense collaboration scenarios.
                </p>

                <p>
                  We built ICD based on real operational lessons from industry, government, and the open-source community. It is shaped by feedback from engineers, acquisition professionals, lawyers, and program leaders who understand the practical challenges of modern defense technology. As the ecosystem evolves, ICD will continue to incorporate community input and remain a living standard that supports the mission.
                </p>
              </div>
            </section>

            {/* Legal Disclaimer */}
            <section id="disclaimer" className="border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-bold text-black mb-4">
                Legal Disclaimer
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The Defense Commons documents are provided for informational purposes only and do not constitute legal advice. Before using any DCF forms, you should consult with counsel familiar with U.S. government contracting and intellectual property law. The Defense Commons Foundation assumes no responsibility for the outcome or use of these materials.
              </p>
            </section>
          </main>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24">
              <nav className="space-y-8">
                {/* Contents */}
                <div>
                  <h3 className="text-sm font-bold text-black mb-3">Contents</h3>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <a href="#download-framework" className="text-blue-600 hover:underline">
                        Download the Framework
                      </a>
                      <ol className="ml-4 mt-1 space-y-1 text-neutral-600">
                        <li>Licenses</li>
                      </ol>
                    </li>
                    <li>
                      <a href="#about-framework" className="text-blue-600 hover:underline">
                        About the ICD Framework
                      </a>
                    </li>
                    <li>
                      <a href="#disclaimer" className="text-blue-600 hover:underline">
                        Legal Disclaimer
                      </a>
                    </li>
                  </ol>
                </div>

                {/* Elsewhere */}
                <div>
                  <h3 className="text-sm font-bold text-black mb-3">Elsewhere</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href={baseGitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      <a
                        href="/components"
                        className="text-blue-600 hover:underline"
                      >
                        Full Component Library
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${baseGitHubUrl}/blob/main/CONTRIBUTING.md`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Contributing Guidelines
                      </a>
                    </li>
                    <li>
                      <a href="/framework" className="text-blue-600 hover:underline">
                        Framework Overview
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-blue-600 hover:underline">
                        About ICD
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
