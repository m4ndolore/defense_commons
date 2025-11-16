import Link from "next/link";

const footerLinks = {
  navigation: {
    title: "Navigate",
    links: [
      { name: "Home", href: "/" },
      { name: "Framework", href: "/framework" },
      { name: "Documents", href: "/documents" },
      { name: "Commons", href: "/commons" },
      { name: "Community", href: "/community" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Request Starter Kit", href: "/waitlist" },
      { name: "SW-ICD License", href: "https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt", external: true },
      { name: "GitHub Repo", href: "https://github.com/industry-commons-for-defense", external: true },
      { name: "Templates & Agreements", href: "/documents#templates" },
    ],
  },
  organization: {
    title: "Organization",
    links: [
      { name: "About ICD", href: "/about" },
      { name: "Community Governance", href: "/community#steering-body" },
      { name: "Brand Guidelines", href: "/brand" },
      { name: "Contact", href: "/contact" },
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
    <footer className="bg-primary-950 relative overflow-hidden" style={{ backgroundColor: '#2e1065', color: '#ffffff' }}>
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
            <h3 className="font-display font-semibold mb-4" style={{ color: '#ffffff' }}>
              {footerLinks.navigation.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.navigation.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:opacity-80 transition-opacity duration-200"
                    style={{ color: '#ffffff' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: '#ffffff' }}>
              {footerLinks.resources.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.links.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity duration-200"
                      style={{ color: '#ffffff' }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:opacity-80 transition-opacity duration-200"
                      style={{ color: '#ffffff' }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: '#ffffff' }}>
              {footerLinks.organization.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.organization.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:opacity-80 transition-opacity duration-200"
                    style={{ color: '#ffffff' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: '#ffffff' }}>
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  style={{ color: '#ffffff' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-sm" style={{ color: '#ffffff' }}>
              Contact:
              <br />
              <a
                href="mailto:contact@icd-defense.org"
                className="hover:opacity-80 transition-opacity duration-200"
                style={{ color: '#ffffff' }}
              >
                contact@icd-defense.org
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-8 text-center text-sm" style={{ color: '#ffffff' }}>
          <p style={{ color: '#ffffff' }}>
            © {currentYear} The ICD Foundation. All rights reserved. Licensed
            under <a
              href="https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity duration-200"
              style={{ color: '#ffffff' }}
            >
              SW-ICD License v1.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
