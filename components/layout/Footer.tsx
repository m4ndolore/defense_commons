import Link from "next/link";

const footerLinks = {
  perspectives: {
    title: "By Role",
    links: [
      { name: "For Industry", href: "/industry" },
      { name: "For Government", href: "/government" },
      { name: "Framework", href: "/framework" },
      { name: "Components", href: "/components" },
    ],
  },
  about: {
    title: "About ICD",
    links: [
      { name: "Mission", href: "/about#mission" },
      { name: "Governance", href: "/about#governance" },
      { name: "501(c)(6) Status", href: "/about#status" },
      { name: "Brand Guidelines", href: "/brand" },
    ],
  },
  getInvolved: {
    title: "Get Started",
    links: [
      { name: "Join ICD", href: "/get-started" },
      { name: "Pilot Programs", href: "/get-started#onboarding" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/icd-foundation" },
  { name: "X", href: "https://x.com/ICDFoundation" },
  { name: "GitHub", href: "https://github.com/industry-commons-for-defense" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white hero-high-contrast relative overflow-hidden">
      {/* Subtle accent border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-icd-gold via-icd-green to-icd-blue"></div>

      {/* Geometric accent elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-icd-blue to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
        <div className="w-full h-full bg-gradient-to-tr from-icd-gold to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-display font-semibold mb-4">
              {footerLinks.perspectives.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.perspectives.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-200 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">
              {footerLinks.about.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.about.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-200 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">
              {footerLinks.getInvolved.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.getInvolved.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-200 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-4">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-white">
              Contact:
              <br />
              <a
                href="mailto:contact@icd-defense.org"
                className="text-primary-200 hover:text-white transition-colors duration-200"
              >
                contact@icd-defense.org
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-8 text-center text-sm text-white/95">
          <p>
            © {currentYear} The ICD Foundation. All rights reserved. Licensed
            under SW-ICD License v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}