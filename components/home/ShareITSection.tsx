import { Shield, Code, Users, BarChart } from "lucide-react";
import Button from "@/components/ui/Button";

const shareItFeatures = [
  {
    icon: Code,
    title: "Code Sharing Compliance",
    description: "ICD provides the infrastructure and governance framework required by the SHARE-IT Act for mandatory code sharing across federal agencies."
  },
  {
    icon: Shield,
    title: "Security & Validation",
    description: "Built-in security controls and validation processes ensure shared code meets federal security standards and operational requirements."
  },
  {
    icon: Users,
    title: "Cross-Agency Collaboration",
    description: "Enables seamless collaboration between DoD, federal agencies, and authorized contractors while maintaining proper access controls."
  },
  {
    icon: BarChart,
    title: "Cost Reduction & Metrics",
    description: "Provides transparent metrics and reporting on code reuse, reducing duplication and achieving the Act's cost-saving objectives."
  }
];

export default function ShareITSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Enabling SHARE-IT Act Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ICD provides the collaborative framework and technical infrastructure to implement
            the Source Code Harmonization And Reuse in Information Technology Act
          </p>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-display font-semibold text-primary-900 mb-4">
            About the SHARE-IT Act (H.R.9566)
          </h3>
          <p className="text-gray-700 mb-4">
            The SHARE-IT Act requires federal agencies to share custom-developed software code
            to reduce duplication, lower costs, and improve government technology efficiency.
            The Act mandates:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-800 mr-2 mt-0.5">•</span>
              <span>Agencies must share custom-developed code with other agencies</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-800 mr-2 mt-0.5">•</span>
              <span>Establishment of a federal code repository and sharing platform</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-800 mr-2 mt-0.5">•</span>
              <span>Security review and validation before code sharing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-800 mr-2 mt-0.5">•</span>
              <span>Metrics and reporting on code reuse and cost savings</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {shareItFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
            How ICD Implements SHARE-IT Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Technical Implementation
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Federated repository architecture for code sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Automated security scanning and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Standardized APIs and integration frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Version control and dependency management</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Governance & Compliance
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Licensing framework (SW-ICD) for code sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Role-based access controls and audit trails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Compliance reporting and metrics dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-icd-green mr-2 mt-0.5">✓</span>
                  <span>Interagency collaboration workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
            Measurable Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-800 mb-2">30-50%</div>
              <p className="text-gray-600">Reduction in duplicative development</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-800 mb-2">$2.4B</div>
              <p className="text-gray-600">Projected annual savings across DoD</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-800 mb-2">100%</div>
              <p className="text-gray-600">Compliance with SHARE-IT mandates</p>
            </div>
          </div>
          <Button
            href="/framework"
            variant="primary"
            size="lg"
          >
            Learn About ICD Framework
          </Button>
        </div>
      </div>
    </section>
  );
}