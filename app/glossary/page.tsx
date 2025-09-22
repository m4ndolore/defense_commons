import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Glossary - Industry Commons for Defense",
  description: "Definitive terminology and definitions for the ICD collaborative framework, licensing models, and defense acquisition processes.",
};

const glossaryTerms = [
  {
    term: "Adaptive Acquisition Framework (AAF)",
    definition: "DoD's structured approach with six distinct acquisition pathways designed to deliver effective, suitable, survivable, sustainable, and affordable solutions in a timely manner.",
    category: "Acquisition"
  },
  {
    term: "Capability Requirements Data Sheet (CRDS)",
    definition: "Standardized documentation format for defining capability requirements within the ICD collaborative framework.",
    category: "Documentation"
  },
  {
    term: "Coalition Disclosure Tiers",
    definition: "Structured guidelines for sharing ICD framework components with coalition partners, ensuring appropriate security levels and sovereign alignment.",
    category: "Security"
  },
  {
    term: "Collaborative Framework",
    definition: "The ICD model enabling transparent, modular, and sovereign-aligned collaboration across government, FFRDCs, UARCs, and industry partners in defense technology development.",
    category: "Core Concept"
  },
  {
    term: "Federated Audit Ledger",
    definition: "Distributed system for tracking component lineage, compliance, and audit trails across the ICD ecosystem.",
    category: "Governance"
  },
  {
    term: "FFRDC",
    definition: "Federally Funded Research and Development Center - government-sponsored entities that assist federal agencies with scientific research and analysis.",
    category: "Organization"
  },
  {
    term: "Hardware Requirements Data Sheet (HRDS)",
    definition: "Standardized documentation format for hardware designs, schematics, and manufacturing specifications within the ICD framework.",
    category: "Documentation"
  },
  {
    term: "HW-ICD License",
    definition: "Hardware Industry Commons for Defense License - standardized licensing framework for hardware designs, schematics, and manufacturing specifications.",
    category: "Licensing"
  },
  {
    term: "ICD Certification Authority",
    definition: "Governance body providing validation and certification services for components within the ICD collaborative framework.",
    category: "Governance"
  },
  {
    term: "ICD Steering Body",
    definition: "501(c)(6) organization serving as the primary governance authority for the ICD collaborative framework, modeled after IETF-style governance.",
    category: "Governance"
  },
  {
    term: "Industry Commons for Defense (ICD)",
    definition: "A collaborative framework enabling transparent, modular, and sovereign-aligned collaboration across government, FFRDCs, UARCs, and industry partners in defense technology development.",
    category: "Core Concept"
  },
  {
    term: "Middle-Tier Acquisition (MTA)",
    definition: "AAF pathway for programs intended to be completed in 2-5 years via rapid prototyping or rapid fielding approaches.",
    category: "Acquisition"
  },
  {
    term: "Model-ICD License",
    definition: "AI/ML Models Industry Commons for Defense License - standardized licensing framework for artificial intelligence and machine learning models.",
    category: "Licensing"
  },
  {
    term: "Modular Collaboration",
    definition: "ICD principle enabling standardized, interoperable components that can be combined and shared across defense technology projects.",
    category: "Core Concept"
  },
  {
    term: "OUSW A&S",
    definition: "Office of the Under Secretary of War for Acquisition and Sustainment - provides policy guidance and oversight for ICD framework implementation.",
    category: "Organization"
  },
  {
    term: "OUSW R&E",
    definition: "Office of the Under Secretary of War for Research and Engineering - provides policy guidance and participates in ICD Steering Body governance.",
    category: "Organization"
  },
  {
    term: "SHARE-IT Act",
    definition: "Source Code Harmonization And Reuse in Information Technology Act - federal legislation requiring agencies to share custom-developed software code to reduce duplication and costs.",
    category: "Legislation"
  },
  {
    term: "Software Acquisition Pathway (SWP)",
    definition: "AAF pathway designated as the preferred approach for all software development components of business and weapon system programs in DoD (as of March 2025).",
    category: "Acquisition"
  },
  {
    term: "Acquisition of Services",
    definition: "AAF pathway for acquiring knowledge-based services, professional services, and other service contracts with performance-based outcomes.",
    category: "Acquisition"
  },
  {
    term: "Sovereign Alignment",
    definition: "ICD principle ensuring collaboration respects national security requirements and allied partnership constraints.",
    category: "Core Concept"
  },
  {
    term: "SW-ICD License",
    definition: "Software Industry Commons for Defense License - comprehensive licensing framework for software artifacts, APIs, and containerized environments.",
    category: "Licensing"
  },
  {
    term: "Technical Steering Committee (TSC)",
    definition: "Government-led, defense-only committees that ratify standards proposed by PEOs/PMs and submit recommendations to the ICD Steering Body.",
    category: "Governance"
  },
  {
    term: "Transparent Collaboration",
    definition: "ICD principle requiring open governance, clear decision-making processes, and comprehensive documentation of all framework activities.",
    category: "Core Concept"
  },
  {
    term: "UARC",
    definition: "University Affiliated Research Center - academic institutions that provide specialized research and development capabilities to federal agencies.",
    category: "Organization"
  }
];

const categories = ["All", "Core Concept", "Licensing", "Governance", "Acquisition", "Organization", "Documentation", "Security", "Legislation"];

export default function GlossaryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 text-white">
              ICD Glossary
            </Heading>
            <Text variant="large" className="mb-8 text-white">
              Definitive terminology and definitions for the Industry Commons for Defense
              collaborative framework, ensuring consistent understanding across all stakeholders.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Glossary Content */}
      <Section variant="spacious" background="white">
        <Container size="lg">
          <div className="mb-8">
            <Text className="text-center text-gray-600 mb-8">
              This glossary ensures alignment with official ICD artifacts, DoD policy documents,
              and current legislation affecting defense technology collaboration.
            </Text>
          </div>

          {/* Categories Filter */}
          <div className="mb-12">
            <Heading level="h2" className="mb-4">Categories</Heading>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium cursor-pointer hover:bg-primary-100 hover:text-primary-800 transition-colors"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Terms List */}
          <div className="space-y-6">
            {glossaryTerms
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((item) => (
                <Card key={item.term} variant="outlined" padding="lg">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Heading level="h3" className="text-lg mb-0">
                          {item.term}
                        </Heading>
                        <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-md font-medium">
                          {item.category}
                        </span>
                      </div>
                      <Text className="text-gray-700">
                        {item.definition}
                      </Text>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <Heading level="h3" className="mb-3">About This Glossary</Heading>
            <Text className="text-gray-700 mb-4">
              This glossary is maintained to ensure consistent terminology across all ICD communications and documentation.
              Terms are aligned with official sources including:
            </Text>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• ICD Artifacts Repository (github.com/industry-commons-for-defense/icd-artifacts)</li>
              <li>• DoD Instruction 5000.02: Operation of the Adaptive Acquisition Framework</li>
              <li>• SHARE-IT Act (H.R.9566) - Source Code Harmonization And Reuse in IT</li>
              <li>• Current DoD acquisition policy and guidance documents</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}