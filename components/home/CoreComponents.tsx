import { Shield, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Secure Collaboration",
    description:
      "Cyber-hardened framework with trusted AI capabilities and comprehensive audit trails",
    icon: Shield,
    color: "text-icd-purple",
    bgColor: "bg-icd-purple",
  },
  {
    title: "Rapid Deployment",
    description:
      "Deliver MVPs in under 12 months with modular, reusable components",
    icon: Zap,
    color: "text-icd-gold",
    bgColor: "bg-icd-gold",
  },
  {
    title: "Multi-Stakeholder",
    description:
      "Unite government, industry, FFRDCs, and allies in collaborative innovation",
    icon: Users,
    color: "text-icd-green",
    bgColor: "bg-icd-green",
  },
];

export default function CoreComponents() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-12 text-gray-900">
          Core Components
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}