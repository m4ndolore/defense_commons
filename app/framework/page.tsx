import Link from "next/link";
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
    <>
      <Section background="gray">
        <Container size="lg">
          <div className="max-w-3xl" id="top">
            <p className="text-primary-700 uppercase tracking-wide text-sm font-semibold mb-2">
              Framework
            </p>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
              The ICD Framework
            </h1>
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Open, transparent, and neutral.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              The ICD Framework extends the community backed excellence of open-source development for national security technology. ICD gives government and industry a better way to build, share, and protect mission software without renegotiating IP, reinventing structure, or rebuilding tools from scratch.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              This free toolkit provides simple, proven templates and guidance that protect your intellectual property, enable technical reuse, and let you get back to building.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/documents" variant="primary" size="lg">
                Download the framework
              </Button>
              <Button href="/waitlist" variant="secondary" size="lg">
                Request the starter kit
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <div className="flex flex-col lg:flex-row gap-12">
            <main className="flex-1 max-w-3xl">
              <section id="whats-inside" className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold">What’s Inside</h2>
                <p className="text-neutral-700">ICD consists of three components that work as a single system:</p>

                <article className="space-y-3">
                  <h3 className="text-xl font-semibold">1. An Overlay License (Dual-License Model)</h3>
                  <p className="text-neutral-700">
                    A tiered IP model that balances openness with protected innovation.
                  </p>
                  <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                    <li>Open Commons License for reusable, unclassified work</li>
                    <li>Secure Commons License for sensitive or commercially protected work</li>
                    <li>Both include attribution, provenance, and clear IP boundaries.</li>
                  </ul>
                  <p className="text-neutral-700">
                    Enable reuse without losing ownership. Obtain clear rights, expectations, and unlocked organizational growth.
                  </p>
                  <Link href="https://github.com/industry-commons-for-defense/icd-licenses" className="text-primary-900 font-semibold underline">
                    → Read the License Set
                  </Link>
                </article>

                <article className="space-y-3">
                  <h3 className="text-xl font-semibold">2. Access</h3>
                  <p className="text-neutral-700">
                    Stop waiting on signatures and start building.
                    The Open Commons License makes reusable, unclassified components available to anyone who passes the trusted background-screening process at SAM.gov. You get back to building with instant access to publicly funded code, data, and tools.
                  </p>

                  <p className="text-neutral-700 mt-2">
                    Save time and get started building with end-users from day one. Reuse what's already built, share modules, and accelerate delivery without being blocked by bespoke negotiations or deferred complicated approvals.
                  </p>

                  <p className="text-neutral-700 font-semibold mt-3">
                    This enables:
                  </p>

                  <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                    <li>shared building blocks</li>
                    <li>transparent lineage</li>
                    <li>secure, sovereign development</li>
                  </ul>
                  <Link href="/commons" className="text-primary-900 font-semibold underline">
                    → View Repo Structure
                  </Link>
                </article>

                <article className="space-y-3">
                  <h3 className="text-xl font-semibold">3. Technical Guidance</h3>
                  <p className="text-neutral-700">
                    The playbook for securing and growing the defense industrial base.
                    This community-maintained guidance defines how contributors build, validate, and release components inside the Commons.
                    {/* <br />
                    <strong>It includes:</strong> */}
                  </p>
                  <p className="text-neutral-700 font-semibold mt-2">It includes:</p>
                  <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                    <li>contribution rules and provenance and authorship requirements</li>
                    <li>SBOM/HBOM requirements</li>
                    <li>versioning and release conventions</li>
                    <li>interoperability and compliance expectations</li>
                  </ul>

                  <p className="text-neutral-700">
                    What this enables: predictable integration, consistent audits, module-level interoperability.
                  </p>
                  <Link href="/documents" className="text-primary-900 font-semibold underline">
                    → Read the Specification
                  </Link>
                </article>
              </section>

              <section id="principles" className="space-y-3 mb-12">
                <h2 className="text-2xl font-bold">Core Principles</h2>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Build Together.</strong> Common, open standards encourage speed, reuse and efficiency.</li>
                  <li><strong>Share Access.</strong> Streamlined identity and federated repositories enable reuse across programs and vendors.</li>
                  <li><strong>Protect Critical Assets.</strong> Dual licensing preserves commercial advantage while meeting government transparency needs.</li>
                </ul>
              </section>

              <section id="why" className="space-y-3 mb-12">
                <h2 className="text-2xl font-bold">Why ICD Works</h2>
                <ol className="list-decimal pl-6 text-neutral-700 space-y-2">
                  <li><strong>Stop Negotiating IP from Scratch.</strong> Clear rights up front, before contract award.</li>
                  <li><strong>Stop Reinventing Components.</strong> Reusable modules replace bespoke one-offs.</li>
                  <li><strong>Stop "black box" technology.</strong> SBOM, HBOM, authorship, and version lineage attached to every component.</li>
                </ol>
              </section>

              <section id="procurement" className="space-y-3 mb-12">
                <h2 className="text-2xl font-bold">ICD in Procurement</h2>
                <p className="text-neutral-700">
                  A simple clause:
                </p>    
                <blockquote className="border-l-4 border-primary-900 pl-4 text-neutral-800">
                  “Use, reuse, or development of software components shall comply with the ICD Framework and applicable ICD licenses. All components shall include SBOM/HBOM and provenance metadata as defined in the ICD Specification.”
                </blockquote>
                <p className="text-neutral-700">
                  Aligns naturally with 
                </p>
                SHARE-IT Act

MOSA

DevSecOps / Platform One

Software Acquisition Pathway

OTA, rapid prototyping, and MTA pathways

                <ol className="list-decimal pl-6 text-neutral-700 space-y-2">
                  <li>SHARE-IT Act</li>
                  <li>MOSA</li>
                  <li>DevSecOps / Platform One</li>
                  <li>Software Acquisition Pathway</li>
                  <li>OTA, rapid prototyping, and MTA pathways</li>
                </ol>
                <Link href="/documents#templates" className="text-primary-900 font-semibold underline">
                  → Download contract language
                </Link>
              </section>

              <section id="adoption" className="space-y-3 mb-12">
                <h2 className="text-2xl font-bold">How Organizations Use ICD</h2>

                <ol className="list-decimal pl-6 text-neutral-700 space-y-4">
                  <li>
                    <p className="font-semibold">Request the Starter Kit.</p>
                    <p>Includes licenses, templates, repo instructions, and the full compliance packet.</p>
                  </li>

                  <li>
                    <p className="font-semibold">Access the Commons Repo.</p>
                    <p>Start building with Defense Commons in your own environment in minutes.</p>
                  </li>

                  <li>
                    <p className="font-semibold">Simplify your next contract.</p>
                    <p>Apply ICD templates, license, and metadata standards to start building faster.</p>
                  </li>
                </ol>
              </section>

              <section id="governance" className="space-y-3 mb-12">
                <h2 className="text-2xl font-bold">Governance</h2>
                <p className="text-neutral-700">
                  ICD is maintained by a rotating Steering Body of 15 organizations spanning industry, government, and research.
                  Transparent, RFC-style process built to keep pace with modern technical development.
                </p>
                <Link href="/community#governance" className="text-primary-900 font-semibold underline">
                  → View Governance Model
                </Link>
              </section>

              <section id="faq" className="space-y-3 mb-12">
                <h2 className="text-2xl font-bold">FAQ</h2>
                <Link href="/faq" className="text-primary-900 font-semibold underline">
                  → Jump to FAQ section
                </Link>
                <p className="text-sm text-neutral-600">In work, contribute today.</p>
              </section>

              <section id="downloads" className="space-y-4">
                <h2 className="text-2xl font-bold">Download the Framework</h2>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Starter Kit</strong> — licenses, templates, repo structure.</li>
                  <li><strong>Specifications</strong> — technical definition.</li>
                  <li><strong>Compliance Kit</strong> — SBOM/HBOM templates, metadata schema.</li>
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
        </Container>
      </Section>
    </>
  );
}
