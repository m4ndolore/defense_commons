import Link from "next/link";

const inquiryTypes = [
  {
    title: "Government Programs",
    bullets: [
      "Mirroring the commons repo into secure enclaves",
      "Referencing ICD clauses in contracts",
      "Joining Technical Steering Committees",
    ],
  },
  {
    title: "Industry & Research Partners",
    bullets: [
      "Posting components under the ICD license",
      "Joining pilot programs",
      "Engaging with the Steering Body",
    ],
  },
  {
    title: "General Inquiries",
    bullets: [
      "Governance or membership",
      "Media or speaking requests",
      "Security/compliance questions",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-primary-800 mb-4">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-black mb-4">
            Talk to the ICD Foundation
          </h1>
          <p className="text-lg text-neutral-700 max-w-3xl">
            Whether you&rsquo;re adopting the framework, contributing to the commons, or requesting a pilot, we keep the process simple and direct.
            Email <Link href="mailto:contact@icd-defense.org" className="text-primary-900 underline">contact@icd-defense.org</Link> or use the form below.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black">Who to reach out to</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {inquiryTypes.map((type) => (
              <div key={type.title} className="border border-neutral-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {type.title}
                </h3>
                <ul className="text-neutral-700 space-y-2 text-sm">
                  {type.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Send a message</h2>
          <p className="text-neutral-700">
            We typically respond within two business days. You can also schedule time via <Link href="/waitlist" className="text-primary-900 underline">the starter kit form</Link>.
          </p>
          <form className="space-y-4" action="mailto:contact@icd-defense.org" method="post" encType="text/plain">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="text-sm text-neutral-700">
                First Name
                <input type="text" name="firstName" required className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2" />
              </label>
              <label className="text-sm text-neutral-700">
                Last Name
                <input type="text" name="lastName" required className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2" />
              </label>
            </div>
            <label className="text-sm text-neutral-700">
              Email
              <input type="email" name="email" required className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2" />
            </label>
            <label className="text-sm text-neutral-700">
              Organization
              <input type="text" name="organization" className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2" />
            </label>
            <label className="text-sm text-neutral-700">
              Message
              <textarea name="message" rows={5} className="mt-1 w-full border border-neutral-300 rounded-md px-3 py-2" />
            </label>
            <button type="submit" className="px-6 py-3 bg-primary-900 text-white rounded-xl hover:bg-primary-800 shadow-lg">
              Send email
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
