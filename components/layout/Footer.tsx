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
    <footer className="bg-[#f3edff] text-primary-950 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-semibold mb-4 text-primary-950">
              {footerLinks.navigation.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.navigation.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-900 hover:text-primary-700 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-primary-950">
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
                      className="text-primary-900 hover:text-primary-700 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-primary-900 hover:text-primary-700 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-primary-950">
              {footerLinks.organization.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.organization.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-900 hover:text-primary-700 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-primary-950">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-900 hover:text-primary-700 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-900">
              Contact:
              <br />
              <a
                href="mailto:contact@icd-defense.org"
                className="text-primary-900 hover:text-primary-700 transition-colors duration-200"
              >
                contact@icd-defense.org
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-200 mt-8 pt-8 text-center text-sm text-primary-900">
          <p>
            © {currentYear} The ICD Foundation. All rights reserved. Licensed
            under <a
              href="https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary-900 hover:text-primary-700 transition-colors duration-200"
            >
              SW-ICD License v1.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
