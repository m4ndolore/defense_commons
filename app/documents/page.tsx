import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Documents - Industry Commons for Defense",
  description: "Defense Commons documents and templates for government contracting and intellectual property.",
};

const baseGitHubUrl = "https://github.com/industry-commons-for-defense/icd-artifacts";

const versionInfo = [
  { label: "Current Version", value: "v1.0.0" },
  { label: "Release Date", value: "May 2025" },
  { label: "Repository License", value: "SW-ICD" },
];

const contents = [
  { href: "#download-license", label: "Download the Framework", subsections: ["Licenses"] },
  { href: "#about-framework", label: "About the ICD Framework" },
  { href: "#disclaimer", label: "Legal Disclaimer" },
];

const elsewhere = [
  { href: baseGitHubUrl, label: "GitHub Repository", external: true },
  { href: "/components", label: "Full Component Library" },
  { href: `${baseGitHubUrl}/blob/main/CONTRIBUTING.md`, label: "Contributing Guidelines", external: true },
  { href: "/framework", label: "Framework Overview" },
  { href: "/about", label: "About ICD" },
];

export default function DocumentsPage() {
  return (
    <>
      <Section background="gray">
        <Container size="lg">
          <div className="max-w-3xl">
            <p className="text-primary-700 uppercase tracking-wide text-sm font-semibold mb-2">
              Documents
            </p>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
              Defense Commons License
            </h1>
            <p className="text-lg text-gray-600">
              Download the licenses, templates, and specs that power ICD.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content - Left Side */}
          <main className="flex-1 max-w-3xl">
            {/* Download the License */}
            <section id="download-license" className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold">
                Download and get started
              </h2>
              <p className="text-neutral-700">
                What we use to make collaboration work: licenses, templates, governance, and specs.
              </p>

              {/* Licenses */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Licenses</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/SW-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-900 font-semibold underline"
                    >
                      Software Common License v1.0
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/HW-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-900 font-semibold underline"
                    >
                      Hardware Common License v1.0
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/Data-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-900 font-semibold underline"
                    >
                      User Data Common License v1.0
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${baseGitHubUrl}/blob/main/licenses/Model-ICD_License_v1.0_May2025.txt`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-900 font-semibold underline"
                    >
                      AI/ML Common License v1.0
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* About the ICD Framework */}
            <section id="about-framework" className="space-y-3 mb-12">
              <h2 className="text-2xl font-bold">
                About the ICD Framework
              </h2>
              <p className="text-neutral-700">
                The Industry Commons for Defense Framework (ICD) was created to provide a simple, modern, and standardized way for government, industry, and partners to collaborate on defense software. For decades, defense teams have relied on bespoke CRADAs, licenses, and one-off agreements that slowed development, blocked reuse, and made it difficult to build shared capability. ICD introduces a clear, modular structure that replaces this complexity with transparent, repeatable rules.
              </p>

              <p className="text-neutral-700">
                The first generation of ICD licenses focused primarily on enabling basic software reuse across government programs — a necessary step at a time when most defense development was still vertically integrated and locked inside proprietary systems. As collaboration needs grew, and as mandates like MOSA, the Software Acquisition Pathway, and the SHARE-IT Act emphasized openness and interoperability, it became clear the community needed a more complete, modernized framework.
              </p>

              <p className="text-neutral-700">
                The updated ICD Framework reflects this shift. It introduces a dual-license model designed specifically for defense: one license for open, reusable components and another for controlled, sensitive technology. Together, these licenses form a unified approach that gives contributors confidence in how their work will be used and gives government the transparency it needs to adopt, extend, and govern shared mission software.
              </p>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" className="space-y-3 mb-12">
              <h2 className="text-2xl font-bold">
                Legal Disclaimer
              </h2>
              <p className="text-neutral-700">
                The Defense Commons documents are provided for informational purposes only and do not constitute legal advice. Before using any DCF forms, you should consult with counsel familiar with U.S. government contracting and intellectual property law. The Defense Commons Foundation assumes no responsibility for the outcome or use of these materials.
              </p>
            </section>
          </main>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-8 text-sm">
              {/* Version Information */}
              <div className="pb-8 border-b border-neutral-200">
                <div className="space-y-3 text-neutral-600">
                  {versionInfo.map((item) => (
                    <div key={item.label}>
                      <div className="font-semibold text-black">{item.value}</div>
                      <div>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contents */}
              <div>
                <h3 className="text-sm font-bold text-black mb-3">Contents</h3>
                <ol className="space-y-2">
                  {contents.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-primary-900 hover:underline">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Elsewhere */}
              <div>
                <h3 className="text-sm font-bold text-black mb-3">Elsewhere</h3>
                <ul className="space-y-2">
                  {elsewhere.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-primary-900 hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          </div>
        </Container>
      </Section>
    </>
  );
}
