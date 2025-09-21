import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "ICD Collaborative Framework - Industry Commons for Defense",
  description: "Learn about the ICD collaborative framework's core components, licensing models, and technical architecture for defense collaboration.",
};

const licenses = [
  {
    title: "Software (SW-ICD)",
    description: "Comprehensive license for software artifacts, APIs, and containerized environments",
    features: ["Source code transparency", "Government purpose rights", "Open-source compatibility"],
    color: "border-icd-purple"
  },
  {
    title: "Hardware (HW-ICD)",
    description: "License for hardware designs, schematics, and manufacturing specifications",
    features: ["Design transparency", "Modular architecture", "Supply chain security"],
    color: "border-icd-blue"
  },
  {
    title: "Data (Data-ICD)",
    description: "Governance for datasets, training data, and information sharing",
    features: ["Data provenance", "Privacy protection", "Tiered access control"],
    color: "border-icd-green"
  },
  {
    title: "Model (Model-ICD)",
    description: "AI/ML model sharing with transparency and auditability",
    features: ["Model lineage", "Bias detection", "Performance metrics"],
    color: "border-icd-gold"
  }
];

const architecturalPrinciples = [
  {
    title: "Modular Design",
    description: "Components can be independently developed, tested, and deployed"
  },
  {
    title: "Open Standards",
    description: "Built on industry-standard protocols and interfaces"
  },
  {
    title: "Security by Design",
    description: "Comprehensive security measures integrated from the ground up"
  },
  {
    title: "Auditability",
    description: "Complete traceability of all components and contributions"
  },
  {
    title: "Interoperability",
    description: "Seamless integration across different systems and platforms"
  },
  {
    title: "Scalability",
    description: "Designed to grow from pilot projects to enterprise deployment"
  }
];

export default function FrameworkPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h1 className="text-4xl font-display font-bold mb-8 text-gray-900 text-center">
            The ICD Collaborative Framework
          </h1>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-600">
              A modern collaborative framework for open, modular, and secure co-development of dual-use technologies, designed for software-defined warfare, peer competition, and agile acquisition mandates.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
            Core Components
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-display font-semibold mb-4">
                Overlay Licensing Framework
              </h3>
              <p className="text-gray-600 mb-4">
                Enables open collaboration while maintaining compatibility with community open-source licenses and government requirements.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Transparent attribution and lineage tracking</li>
                <li>Clear intellectual property boundaries</li>
                <li>Government purpose rights preservation</li>
                <li>Multi-tier access control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold mb-4">
                DevOps Pipeline Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Automated compliance checking, security scanning, and quality assurance integrated into development workflows.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Continuous integration/deployment</li>
                <li>Automated security scanning</li>
                <li>Compliance verification</li>
                <li>Quality metrics tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-gray-900">
            Licensing Models
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {licenses.map((license) => (
              <div key={license.title} className={`border-2 ${license.color} rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {license.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {license.description}
                </p>
                <ul className="space-y-2">
                  {license.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-icd-green mr-2">✓</span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
            Technical Architecture
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-display font-semibold mb-6">
              Architectural Principles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architecturalPrinciples.map((principle) => (
                <div key={principle.title} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{principle.title}</h4>
                  <p className="text-sm text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
            Implementation Phases
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-icd-purple text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Pilot Programs</h3>
                <p className="text-gray-600">Launch with select partners in controlled environments to validate framework components and processes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-icd-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Governance Establishment</h3>
                <p className="text-gray-600">Formalize Technical Steering Committees and ICD Steering Body operations with clear procedures and accountability.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-icd-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ecosystem Expansion</h3>
                <p className="text-gray-600">Scale to broader industry participation with mature tooling, processes, and governance structures.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
            Supporting Federal Law and Policy
          </h2>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-display font-semibold mb-6 text-blue-800">
              SHARE-IT Act Compliance
            </h3>
            <p className="text-gray-700 mb-6">
              The ICD Framework directly supports the Securing Hazardous Activities through Rigorous Examination
              and Information Technology (SHARE-IT) Act by enabling transparent, auditable software collaboration
              that maintains security while accelerating innovation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">SHARE-IT Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Comprehensive software bill of materials (SBOM)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Supply chain risk assessment and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Continuous monitoring and vulnerability management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Multi-stakeholder collaboration on security standards</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">ICD Implementation</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated SBOM generation and validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Integrated supply chain transparency tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Real-time security scanning and compliance checking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Government-industry collaborative security framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-display font-semibold mb-6 text-green-800">
              Adaptive Acquisition Framework (AAF) Integration
            </h3>
            <p className="text-gray-700 mb-8">
              ICD provides the collaborative infrastructure and compliance automation needed to enable all six AAF pathways,
              from urgent capability needs to complex major acquisitions. Each pathway leverages ICD&apos;s unique capabilities
              to accelerate delivery while maintaining security and competition.
            </p>

            {/* Pathway 1: Urgent Capability Acquisition */}
            <div className="mb-8">
              <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg mb-4">
                <h4 className="text-lg font-semibold mb-3 text-red-700">Pathway 1: Urgent Capability Acquisition (UCA)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-gray-800">AAF Requirements</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Fielding within 6-12 months</li>
                      <li>• Streamlined oversight and approvals</li>
                      <li>• Rapid prototype to production</li>
                      <li>• Emergency acquisition authorities</li>
                      <li>• Minimal documentation requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-green-700">ICD Enablers</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <strong>Pre-approved Component Library:</strong> Battle-tested components with existing ATO</li>
                      <li>• <strong>Automated Security Scanning:</strong> Continuous compliance checking in CI/CD</li>
                      <li>• <strong>Rapid Integration Framework:</strong> Modular architecture for fast assembly</li>
                      <li>• <strong>Emergency Licensing:</strong> Streamlined SW-ICD for urgent needs</li>
                      <li>• <strong>Real-time SBOM:</strong> Automatic documentation generation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-red-50 p-4 rounded">
                  <p className="text-sm text-red-800">
                    <strong>Example:</strong> Counter-drone system needed in 90 days leverages pre-vetted radar, AI/ML models,
                    and command modules from ICD ecosystem, reducing development time from 18 months to 3 months.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathway 2: Middle Tier Acquisition */}
            <div className="mb-8">
              <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg mb-4">
                <h4 className="text-lg font-semibold mb-3 text-blue-700">Pathway 2: Middle Tier Acquisition (MTA)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-gray-800">AAF Requirements</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Rapid prototyping (2-5 years)</li>
                      <li>• Rapid fielding focus</li>
                      <li>• Minimum viable product approach</li>
                      <li>• Streamlined milestone reviews</li>
                      <li>• Early user feedback integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-blue-700">ICD Enablers</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <strong>Collaborative Development:</strong> Multi-vendor teams on shared platform</li>
                      <li>• <strong>Iterative Integration:</strong> Continuous integration of new capabilities</li>
                      <li>• <strong>User Feedback Loops:</strong> Direct warfighter input via ICD channels</li>
                      <li>• <strong>Scalable Architecture:</strong> Modular design for incremental capability</li>
                      <li>• <strong>Cross-Service Compatibility:</strong> Joint requirements from day one</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 p-4 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Example:</strong> Next-generation tactical communications system developed collaboratively
                    by 3 prime contractors using ICD framework, enabling 18-month timeline vs. 4-year traditional approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathway 3: Major Capability Acquisition */}
            <div className="mb-8">
              <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg mb-4">
                <h4 className="text-lg font-semibold mb-3 text-purple-700">Pathway 3: Major Capability Acquisition (MCA)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-gray-800">AAF Requirements</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Complex systems (5+ years)</li>
                      <li>• Full lifecycle management</li>
                      <li>• Extensive testing and evaluation</li>
                      <li>• Multiple milestone reviews</li>
                      <li>• Long-term sustainment planning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-purple-700">ICD Enablers</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <strong>Enterprise Integration:</strong> System-of-systems architecture support</li>
                      <li>• <strong>Vendor Ecosystem:</strong> Competitive environment with open standards</li>
                      <li>• <strong>Lifecycle Traceability:</strong> Complete audit trail from concept to retirement</li>
                      <li>• <strong>Modular Modernization:</strong> Component-level upgrades without system redesign</li>
                      <li>• <strong>Coalition Interoperability:</strong> Allied integration from requirements phase</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-purple-50 p-4 rounded">
                  <p className="text-sm text-purple-800">
                    <strong>Example:</strong> Next-generation fighter aircraft avionics developed using ICD enables
                    multiple international partners and suppliers, reducing integration risk and enabling continuous capability updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathway 4: Software Acquisition Pathway */}
            <div className="mb-8">
              <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg mb-4">
                <h4 className="text-lg font-semibold mb-3 text-orange-700">Pathway 4: Software Acquisition Pathway (SwAP)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-gray-800">AAF Requirements</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Continuous delivery and deployment</li>
                      <li>• Agile and DevSecOps methodologies</li>
                      <li>• User-centered design approach</li>
                      <li>• Iterative development cycles</li>
                      <li>• Continuous authority to operate (cATO)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-orange-700">ICD Enablers</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <strong>Native DevSecOps Integration:</strong> ICD pipelines with automated security</li>
                      <li>• <strong>Continuous Compliance:</strong> Real-time ATO maintenance and validation</li>
                      <li>• <strong>Agile Collaboration Platform:</strong> Government product owners in development flow</li>
                      <li>• <strong>User Story Integration:</strong> Direct warfighter requirements via ICD channels</li>
                      <li>• <strong>Microservices Architecture:</strong> Containerized deployment with SW-ICD licensing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-orange-50 p-4 rounded">
                  <p className="text-sm text-orange-800">
                    <strong>Example:</strong> AI-powered logistics optimization software deployed continuously via ICD framework,
                    enabling weekly feature releases with automatic security validation and cross-service compatibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathway 5: Defense Business Systems */}
            <div className="mb-8">
              <div className="bg-white border-l-4 border-teal-500 p-6 rounded-lg mb-4">
                <h4 className="text-lg font-semibold mb-3 text-teal-700">Pathway 5: Defense Business Systems (DBS)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-gray-800">AAF Requirements</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Enterprise IT and business systems</li>
                      <li>• Commercial best practices adoption</li>
                      <li>• Cross-functional integration</li>
                      <li>• Data standardization and sharing</li>
                      <li>• Cost-effective COTS utilization</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-teal-700">ICD Enablers</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <strong>Enterprise Service Mesh:</strong> Common services shared across DoW</li>
                      <li>• <strong>Unified Compliance Framework:</strong> Single security model for all business systems</li>
                      <li>• <strong>Data Integration Platform:</strong> Standardized APIs for cross-functional workflows</li>
                      <li>• <strong>Commercial Adaptation Layer:</strong> COTS integration with government requirements</li>
                      <li>• <strong>Shared Infrastructure:</strong> Cloud-native deployment with ICD governance</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-teal-50 p-4 rounded">
                  <p className="text-sm text-teal-800">
                    <strong>Example:</strong> Integrated financial management system spanning multiple DoW components
                    using ICD framework enables real-time budget visibility and automated compliance reporting across services.
                  </p>
                </div>
              </div>
            </div>

            {/* Pathway 6: Acquisition of Services */}
            <div className="mb-8">
              <div className="bg-white border-l-4 border-indigo-500 p-6 rounded-lg mb-4">
                <h4 className="text-lg font-semibold mb-3 text-indigo-700">Pathway 6: Acquisition of Services</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-gray-800">AAF Requirements</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Knowledge-based services delivery</li>
                      <li>• Performance-based service contracts</li>
                      <li>• Commercial best practices adoption</li>
                      <li>• Outcome-focused service delivery</li>
                      <li>• Integrated service management</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-indigo-700">ICD Enablers</h5>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• <strong>Service Definition Framework:</strong> Standardized service specifications and metrics</li>
                      <li>• <strong>Collaborative Service Development:</strong> Multi-stakeholder service design and delivery</li>
                      <li>• <strong>Performance Monitoring Platform:</strong> Real-time service quality measurement</li>
                      <li>• <strong>Service Integration Layer:</strong> Seamless integration across service providers</li>
                      <li>• <strong>Quality Assurance Framework:</strong> Continuous improvement and standardization</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-indigo-50 p-4 rounded">
                  <p className="text-sm text-indigo-800">
                    <strong>Example:</strong> Multi-vendor cybersecurity services integrated through ICD framework
                    enabling seamless threat intelligence sharing and coordinated response across DoD enterprise.
                  </p>
                </div>
              </div>
            </div>

            {/* Cross-Pathway Benefits */}
            <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Cross-Pathway ICD Benefits</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium mb-2 text-green-700">Accelerated Timelines</h5>
                  <p className="text-sm text-gray-700">
                    Pre-approved components, automated compliance, and collaborative development reduce acquisition time across all six pathways by 40-60%.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-blue-700">Enhanced Competition</h5>
                  <p className="text-sm text-gray-700">
                    Open standards and modular architecture enable more vendors to compete effectively, increasing innovation and reducing costs.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-purple-700">Improved Interoperability</h5>
                  <p className="text-sm text-gray-700">
                    Common frameworks ensure systems work together from day one, reducing integration risk and enabling joint operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
            License and Rights Comparison
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Understanding how ICD licensing compares to traditional open-source licenses and Federal Acquisition Regulation (FAR) data rights assertions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold border-b border-gray-200">License/Rights Type</th>
                  <th className="text-center p-4 font-semibold border-b border-gray-200">Government Rights</th>
                  <th className="text-center p-4 font-semibold border-b border-gray-200">Industry IP Protection</th>
                  <th className="text-center p-4 font-semibold border-b border-gray-200">Commercial Reuse</th>
                  <th className="text-center p-4 font-semibold border-b border-gray-200">Compliance Automation</th>
                  <th className="text-center p-4 font-semibold border-b border-gray-200">Collaborative Development</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">SW-ICD License</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Strong</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Enabled</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Native</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Optimized</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">MIT License</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Minimal</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Full</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-600">Basic</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Apache 2.0</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-600">Moderate</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Full</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-600">Standard</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">GPL 3.0</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Limited</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-600">Restricted</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Strong</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">DFARS 252.227-7014<br/><span className="text-sm text-gray-500">(Unlimited Rights)</span></td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Blocked</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Manual</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Discouraged</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">DFARS 252.227-7013<br/><span className="text-sm text-gray-500">(Limited Rights)</span></td>
                  <td className="p-4 text-center">
                    <span className="text-yellow-600">Restricted</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Strong</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Full</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Manual</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Blocked</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Commercial License<br/><span className="text-sm text-gray-500">(Typical)</span></td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Complete</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-semibold">Full</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-red-600">Prohibited</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Key Advantages of SW-ICD Licensing</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2 text-green-700">Balanced Rights Model</h5>
                <p className="text-sm text-gray-600">
                  Preserves government unlimited rights while enabling industry to protect proprietary innovations and pursue commercial markets.
                </p>
              </div>
              <div>
                <h5 className="font-medium mb-2 text-blue-700">Automated Compliance</h5>
                <p className="text-sm text-gray-600">
                  Built-in DevOps integration ensures continuous compliance checking, reducing manual oversight burden and accelerating acquisition timelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-icd-purple text-white p-8 rounded-lg">
          <h2 className="text-2xl font-display font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="mb-6">
            Join the growing community of organizations leveraging the ICD Framework for defense innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="/get-started"
              variant="secondary"
              size="lg"
              className="bg-white text-primary-800 hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              style="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-800"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}