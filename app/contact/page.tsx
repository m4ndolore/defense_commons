import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Industry Commons for Defense",
  description: "Get in touch with the ICD Foundation for membership, consulting, partnerships, or general inquiries.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@icd-defense.org",
    description: "Primary contact for all inquiries"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Business hours: Monday - Friday"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: "Washington, D.C.",
    description: "Metro area office locations"
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "24-48 hours",
    description: "We respond to all inquiries promptly"
  }
];

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <Section variant="spacious" background="white">
        <Container size="md">
          <Heading level="h1" className="mb-8 text-center">
            Contact the ICD Foundation
          </Heading>
          <Text variant="large" className="text-center mb-12">
            Ready to join the future of defense collaboration? We're here to help you get started.
          </Text>
        </Container>
      </Section>

      {/* Contact Form and Info */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card variant="filled" padding="lg">
              <Heading level="h2" className="mb-6">
                Send Us a Message
              </Heading>

              <form className="space-y-6" action="mailto:contact@icd-defense.org" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="membership">Membership Information</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="pilot">Pilot Program Interest</option>
                    <option value="technical">Technical Questions</option>
                    <option value="media">Media Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="consent" className="text-sm text-neutral-700">
                    I consent to being contacted by the ICD Foundation regarding my inquiry. *
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card variant="filled" padding="lg">
                <Heading level="h3" className="mb-6">
                  Get in Touch
                </Heading>
                <Text className="mb-6">
                  Whether you're interested in membership, consulting services, or have questions about our framework, we're here to help.
                </Text>

                <div className="space-y-6">
                  {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                        <method.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <Heading level="h4" className="text-lg mb-1">
                          {method.title}
                        </Heading>
                        <Text variant="base" className="font-medium mb-1">
                          {method.details}
                        </Text>
                        <Text variant="small" className="text-neutral-600">
                          {method.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="filled" padding="lg">
                <Heading level="h3" className="mb-4">
                  Quick Links
                </Heading>
                <div className="space-y-3">
                  <Button
                    href="/get-started"
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    Learn About Membership
                  </Button>
                  <Button
                    href="/framework"
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    Explore Our Framework
                  </Button>
                  <Button
                    href="/about"
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    About the Foundation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" background="white">
        <Container size="md">
          <Heading level="h2" className="mb-12 text-center">
            Frequently Asked Questions
          </Heading>

          <div className="space-y-8">
            <Card variant="outline" padding="lg">
              <Heading level="h3" className="mb-3">
                How do I become a member of the ICD Foundation?
              </Heading>
              <Text>
                Membership is available to government agencies, FFRDCs, UARCs, and qualified industry partners. Visit our Get Started page or contact us directly to learn about the application process and requirements.
              </Text>
            </Card>

            <Card variant="outline" padding="lg">
              <Heading level="h3" className="mb-3">
                What consulting services does the ICD Foundation offer?
              </Heading>
              <Text>
                We provide strategic consulting on defense technology collaboration, framework implementation, licensing guidance, and ecosystem development. Our experts help organizations navigate the ICD framework and maximize collaboration opportunities.
              </Text>
            </Card>

            <Card variant="outline" padding="lg">
              <Heading level="h3" className="mb-3">
                Can I schedule a meeting or demonstration?
              </Heading>
              <Text>
                Absolutely! We offer briefings, demonstrations, and consultation sessions for interested organizations. Use the contact form above or email us directly to schedule a meeting with our team.
              </Text>
            </Card>

            <Card variant="outline" padding="lg">
              <Heading level="h3" className="mb-3">
                How quickly can I expect a response?
              </Heading>
              <Text>
                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate the priority in your message subject line.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}