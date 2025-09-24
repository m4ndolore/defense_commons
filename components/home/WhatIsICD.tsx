import { Building2, Users, Scale } from "lucide-react";
import Link from "next/link";

const icdTopics = [
  {
    icon: Building2,
    title: "The ICD Foundation",
    description: "A 501(c)(6) organization establishing the governance, standards, and infrastructure for collaborative defense technology development.",
    details: [
      "Neutral convening authority for DIB collaboration",
      "Establishes technical standards and frameworks",
      "Manages shared infrastructure and resources",
      "Ensures compliance with federal regulations"
    ],
    link: "/about",
    linkText: "Learn About ICD"
  },
  {
    icon: Users,
    title: "ICD Steering Body",
    description: "15 founding members representing diverse segments of the Defense Industrial Base, governing the strategic direction and operations.",
    details: [
      "Balanced representation across industry sectors",
      "Annual dues-based membership model",
      "Democratic governance and decision-making",
      "Revenue sharing and cost management oversight"
    ],
    link: "/join",
    linkText: "Join Steering Body"
  },
  {
    icon: Scale,
    title: "ICD License",
    description: "The SW-ICD License v1.0 enables secure, compliant sharing of software and intellectual property within the defense ecosystem.",
    details: [
      "SHARE-IT Act compliance framework",
      "IP protection with controlled sharing",
      "CUI and classified technology compatibility",
      "Reduces legal barriers to collaboration"
    ],
    link: "https://github.com/industry-commons-for-defense/icd-licenses/blob/main/SW-ICD-License-v1.0.txt",
    linkText: "View License"
  }
];

export default function WhatIsICD() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            What is ICD?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The Industry Commons for Defense represents a new paradigm for technology collaboration within the Defense Industrial Base, aligning concrete collaboration capability to the SHARE-IT Act mandates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {icdTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-800 rounded-full p-3 mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {topic.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {topic.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-icd-green mr-2 mt-0.5 text-sm">✓</span>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={topic.link}
                  {...(topic.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center text-primary-800 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  {topic.linkText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}