import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const versionInfo = [
  { label: "Version", value: "v1.0.0" },
  { label: "Updated", value: "May 2025" },
  { label: "Maintainer", value: "ICD Steering Body" },
];

const contents = [
  { href: "#whats-inside", label: "What's Inside" },
  { href: "#principles", label: "Core Principles" },
  { href: "#why", label: "Why ICD Works" },
  { href: "#procurement", label: "ICD in Procurement" },
  { href: "#adoption", label: "How Organizations Use ICD" },
  { href: "#governance", label: "Governance" },
  { href: "#faq", label: "FAQ" },
  { href: "#downloads", label: "Downloads" },
];

const elsewhere = [
  { label: "Documents", href: "/documents" },
  { label: "Commons Repo", href: "/commons" },
  { label: "Community", href: "/community" },
];

const procurementList = [
  "SHARE-IT Act",
  "MOSA",
  "DevSecOps / Platform One",
  "Software Acquisition Pathway",
  "OTA, rapid prototyping, and MTA pathways",
];

const adoptionSteps = [
  {
    title: "Request the Starter Kit",
    detail: "All documents, licenses, templates, and repo instructions.",
  },
  {
    title: "Mirror the Commons Repo",
    detail: "Bring ICD into your own environment, classified or unclassified.",
  },
  {
    title: "Cite ICD in Your Next Contract",
    detail: "Use the license, include the compliance packet, adopt the repo structure.",
  },
];

export default function FrameworkPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="flex-1 max-w-3xl">
            <header className="mb-10">
              <p className="text-xs uppercase tracking-[0.4em] text-primary-800 mb-4">
                Framework
              </p>
              <h1 className="text-4xl font-bold text-black mb-4">
                The ICD Framework
              </h1>
              <p className="text-lg text-neutral-700">
                A simple, neutral set of standards that help government and industry build, share, and protect defense software. No sales funnel. No proprietary lock-in. Just a clear way to collaborate.
              </p>
            </header>

            <section id="principles" className="space-y-3 mb-12">
              <h2 className="text-2xl font-bold">First Principles</h2>
              <ul className="space-y-2 text-neutral-700">
                <li><strong>Build Together:</strong> a shared innovation base eliminates duplication and accelerates delivery.</li>
                <li><strong>Share Access:</strong> common standards and repo structures allow reuse across programs, services, and vendors.</li>
                <li><strong>Protect Critical Assets:</strong> dual licensing preserves commercial rights while giving government the transparency it needs.</li>
              </ul>
            </section>

            <section id="whats-inside" className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold">What&apos;s Inside the Framework</h2>
              <p className="text-neutral-700">ICD provides three core pillars that work together:</p>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold">1. Overlay Licensing</h3>
                <p className="text-neutral-700">ICD uses a dual-license model designed for defense:</p>
                <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                  <li>Open Commons License &mdash; for reusable, unclassified components.</li>
                  <li>Secure Commons License &mdash; for sensitive or commercially valuable work.</li>
                  <li>Both include attribution, provenance, and clear IP boundaries.</li>
                </ul>
                <p className="text-neutral-700">
                  What this enables: reuse without losing ownership, clear rights for government, secure collaboration between organizations.
                </p>
                <Link href="https://github.com/industry-commons-for-defense/icd-licenses" className="text-primary-900 font-semibold underline">
                  → Read the License Set
                </Link>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold">2. The Commons Repo</h3>
                <p className="text-neutral-700">
                  A reference organization containing canonical components, schemas, APIs, starter templates, and metadata standards. Organizations can mirror the repo into their own environments (air-gapped or classified) in minutes.
                </p>
                <p className="text-neutral-700">What this enables: shared building blocks, transparent lineage, secure, sovereign development.</p>
                <Link href="/commons" className="text-primary-900 font-semibold underline">
                  → View Repo Structure
                </Link>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold">3. The ICD Technical Specification</h3>
                <p className="text-neutral-700">
                  Defines how components, metadata, and collaboration work inside the commons. Includes file-level metadata, contribution rules, repository structure, SBOM/HBOM requirements, versioning conventions, and a compliance checklist.
                </p>
                <p className="text-neutral-700">What this enables: predictable integration, consistent audits, module-level interoperability.</p>
                <Link href="/documents" className="text-primary-900 font-semibold underline">
                  → Read the Specification
                </Link>
              </article>
            </section>

            <section id="why" className="space-y-3 mb-12">
              <h2 className="text-2xl font-bold">Why ICD Works</h2>
              <ol className="list-decimal pl-6 text-neutral-700 space-y-2">
                <li><strong>No More Negotiating IP from Scratch:</strong> the license tells everyone what they can do before the contract starts.</li>
                <li><strong>No More Reinventing the Wheel:</strong> shared modules reduce parallel builds and duplicative spending.</li>
                <li><strong>No More &quot;Mystery Software&quot;:</strong> every component has SBOM, HBOM, authorship, provenance, and version lineage attached.</li>
              </ol>
            </section>

            <section id="procurement" className="space-y-3 mb-12">
              <h2 className="text-2xl font-bold">ICD in Procurement</h2>
              <p className="text-neutral-700">A simple clause:</p>
              <blockquote className="border-l-4 border-primary-900 pl-4 text-neutral-800">
                Use, reuse, or development of software components shall comply with the ICD Framework and applicable ICD licenses. Components shall include SBOM/HBOM and provenance metadata as defined in the ICD Specification.
              </blockquote>
              <p className="text-neutral-700">Aligns naturally with:</p>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                {procurementList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/documents#templates" className="text-primary-900 font-semibold underline">
                → Download contract language
              </Link>
            </section>

            <section id="adoption" className="space-y-3 mb-12">
              <h2 className="text-2xl font-bold">How Organizations Use ICD</h2>
              <ol className="list-decimal pl-6 text-neutral-700 space-y-4">
                {adoptionSteps.map((step) => (
                  <li key={step.title}>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-neutral-700">{step.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="text-neutral-700">That&apos;s it. No onboarding. No approval process.</p>
            </section>

            <section id="governance" className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold">Governance</h2>
              <p className="text-neutral-700">
                ICD is maintained by a rotating Steering Body of 15 organizations spanning industry, government, and research. Transparent, RFC-style process with an annual publication of updated specifications.
              </p>
              <Link href="/community#governance" className="text-primary-900 font-semibold underline">
                → View Governance Model
              </Link>
            </section>

            <section id="faq" className="space-y-2 mb-12">
              <h2 className="text-2xl font-bold">FAQ</h2>
              <Link href="/faq" className="text-primary-900 font-semibold underline">
                → Jump to FAQ section
              </Link>
              <p className="text-sm text-neutral-600">We&apos;ll rewrite this next.</p>
            </section>

            <section id="downloads" className="space-y-4">
              <h2 className="text-2xl font-bold">Download the Framework</h2>
              <ul className="space-y-2 text-neutral-700">
                <li><strong>Starter Kit:</strong> licenses, templates, repo structure.</li>
                <li><strong>Specifications:</strong> technical definition.</li>
                <li><strong>Compliance Kit:</strong> SBOM/HBOM templates, metadata schema.</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link href="/documents" className="px-6 py-3 rounded-xl bg-primary-900 text-white hover:bg-primary-800 shadow-lg">
                  Download Starter Kit
                </Link>
                <Link href="/documents#templates" className="px-6 py-3 rounded-xl border border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white shadow">
                  View Templates
                </Link>
              </div>
            </section>
          </main>

          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-8 text-sm">
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

              <div>
                <h3 className="text-sm font-bold text-black mb-3">Elsewhere</h3>
                <ul className="space-y-2">
                  {elsewhere.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-primary-900 hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
