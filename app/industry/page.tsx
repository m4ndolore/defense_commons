import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { TrendingUp, Shield, Users, Zap, DollarSign, Lock, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "For Industry - Industry Commons for Defense",
  description: "How the ICD Framework solves critical challenges for defense industry partners, enabling profitable collaboration while protecting IP and reducing compliance burden.",
};

const industryProblems = [
  {
    icon: Lock,
    title: "IP Protection Concerns",
    description: "Sharing valuable IP with government without clear protection frameworks",
    impact: "Hesitation to engage in meaningful collaboration"
  },
  {
    icon: AlertTriangle,
    title: "Compliance Complexity",
    description: "Navigating DFARS, ITAR, and multiple licensing requirements",
    impact: "High legal costs and project delays"
  },
  {
    icon: DollarSign,
    title: "Revenue Model Uncertainty",
    description: "Unclear path to monetization under government data rights",
    impact: "Reduced R&D investment in defense applications"
  },
  {
    icon: Users,
    title: "Limited Collaboration",
    description: "Siloed development with minimal cross-industry synergy",
    impact: "Duplicated efforts and slower innovation cycles"
  }
];

const icdSolutions = [
  {
    icon: Shield,
    title: "Transparent IP Framework",
    description: "Clear attribution, lineage tracking, and IP boundary definitions",
    benefit: "Confident sharing with government while protecting commercial interests"
  },
  {
    icon: CheckCircle,
    title: "Streamlined Compliance",
    description: "Automated compliance checking integrated into DevOps pipelines",
    benefit: "Reduced legal overhead and faster time-to-market"
  },
  {
    icon: TrendingUp,
    title: "Dual-Use Revenue Streams",
    description: "Commercial licensing alongside government purpose rights",
    benefit: "Multiple monetization paths for single development investment"
  },
  {
    icon: Zap,
    title: "Collaborative Ecosystem",
    description: "Modular, interoperable development with industry partners",
    benefit: "Shared R&D costs and accelerated innovation"
  }
];

const businessCase = [
  {
    metric: "40-60%",
    label: "Reduction in compliance costs",
    description: "Automated compliance checking vs. manual processes"
  },
  {
    metric: "3x",
    label: "Faster procurement cycles",
    description: "Pre-validated components reduce evaluation time"
  },
  {
    metric: "2-5x",
    label: "ROI improvement",
    description: "Dual-use commercialization of defense R&D"
  },
  {
    metric: "$2.5B+",
    label: "Estimated market opportunity",
    description: "Annual addressable market for ICD-enabled solutions"
  }
];

export default function IndustryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 !text-white">
              Transform Defense Collaboration
            </Heading>
            <Text variant="large" className="mb-8 text-white/90">
              The ICD collaborative framework eliminates traditional barriers between industry and government,
              creating profitable pathways for defense innovation while protecting your IP.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Get Started Today
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem Statement */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            The Industry Challenge
          </Heading>
          <Text variant="large" className="text-center mb-12 text-neutral-600">
            Defense contractors face a fundamental tension: how to innovate collaboratively
            with government while protecting competitive advantages and maintaining profitable business models.
          </Text>

          <Grid cols={2} gap="lg" className="mb-12">
            {industryProblems.map((problem) => (
              <Card key={problem.title} variant="outlined" padding="lg">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">{problem.title}</Heading>
                    <Text className="mb-3">{problem.description}</Text>
                    <Text variant="small" className="text-red-600 font-medium">
                      Impact: {problem.impact}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>

          <Card variant="filled" padding="lg" className="bg-red-50 border-red-200">
            <Heading level="h3" className="mb-4 text-red-800 text-center">
              The Cost of Status Quo
            </Heading>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">18-24 months</div>
                <Text variant="small">Average procurement timeline</Text>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">30-50%</div>
                <Text variant="small">Program compliance costs</Text>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-2">Limited</div>
                <Text variant="small">Commercial reuse potential</Text>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ICD Solution */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            How ICD Transforms Industry Collaboration
          </Heading>

          <Grid cols={2} gap="lg" className="mb-12">
            {icdSolutions.map((solution) => (
              <Card key={solution.title} variant="filled" padding="lg">
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <solution.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <Heading level="h3" className="mb-2">{solution.title}</Heading>
                    <Text className="mb-3">{solution.description}</Text>
                    <Text variant="small" className="text-green-600 font-medium">
                      Benefit: {solution.benefit}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Business Case */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-12 text-center">
            The Business Case for ICD
          </Heading>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {businessCase.map((metric) => (
              <Card key={metric.label} variant="outlined" padding="lg" className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {metric.metric}
                </div>
                <Heading level="h4" className="mb-2">{metric.label}</Heading>
                <Text variant="small" className="text-neutral-600">
                  {metric.description}
                </Text>
              </Card>
            ))}
          </div>

          <Card variant="filled" padding="lg" className="bg-blue-50 border-blue-200">
            <Grid cols={2} gap="lg" className="items-center">
              <div>
                <Heading level="h3" className="mb-4 text-blue-800">
                  Real-World Example: Software-Defined Radar
                </Heading>
                <Text className="mb-4">
                  A defense contractor developing software-defined radar can use ICD to:
                </Text>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Share core algorithms with DoW while protecting proprietary optimizations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Collaborate with other contractors on common interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>License commercial variants for automotive radar applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automate ITAR compliance throughout development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Heading level="h4" className="mb-4 text-center">Projected ROI</Heading>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Defense Contract:</span>
                    <span className="font-semibold">$50M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commercial Licensing:</span>
                    <span className="font-semibold">$75M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Savings:</span>
                    <span className="font-semibold">$15M</span>
                  </div>
                  <hr className="border-neutral-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Value:</span>
                    <span className="text-green-600">$140M</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Card>
        </Container>
      </Section>

      {/* Implementation Path */}
      <Section variant="default" background="gray">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Your Path to ICD Implementation
          </Heading>

          <div className="space-y-8">
            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  1
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Assessment & Planning</Heading>
                  <Text className="mb-3">
                    Evaluate your current IP portfolio and identify opportunities for ICD collaboration.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 2-4 weeks | Investment: Strategy consultation
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  2
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Pilot Implementation</Heading>
                  <Text className="mb-3">
                    Launch with a focused project to demonstrate value and refine processes.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 3-6 months | Investment: Pilot program participation
                  </Text>
                </div>
              </div>
            </Card>

            <Card variant="filled" padding="lg">
              <div className="flex items-start">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-semibold">
                  3
                </div>
                <div>
                  <Heading level="h3" className="mb-2">Ecosystem Integration</Heading>
                  <Text className="mb-3">
                    Scale successful practices across your defense portfolio and expand collaboration.
                  </Text>
                  <Text variant="small" className="text-neutral-600">
                    Timeline: 6-12 months | Investment: Full ecosystem membership
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="compact" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h2" className="mb-4 !text-white">
              Ready to Transform Your Defense Business?
            </Heading>
            <Text variant="large" className="mb-8 text-white/90">
              Join leading defense contractors who are already leveraging ICD for competitive advantage.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                Start Your Journey
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200 btn-secondary-on-dark"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}