import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const roiHighlights = [
  "Positive government ROI in under 1 year",
  "20-40% cost reduction in acquisition",
  "3x innovation impact vs traditional models",
];

const metrics = [
  {
    value: "$2.5B+",
    label: "Estimated annual savings",
  },
  {
    value: "12 Months",
    label: "Average time to MVP",
  },
  {
    value: "15+",
    label: "Active pilot programs",
  },
];

export default function ROISection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-gray-900">
              Proven ROI
            </h2>
            <p className="text-gray-600 mb-6">
              The ICD Framework delivers measurable returns across all
              stakeholder groups:
            </p>
            <ul className="space-y-4 mb-8">
              {roiHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-icd-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/framework"
              variant="primary"
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="space-y-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-4xl font-bold text-icd-purple mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}