"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import {
  ExternalLink,
  Download,
  FileText,
  BookOpen,
  Shield,
  Users,
  Cpu,
  Database,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Info,
  Building2,
  Target,
  Lightbulb,
  Zap
} from "lucide-react";

// Note: Metadata is handled in layout.tsx for client components

const primaryColors = [
  { name: "Primary 50", value: "#f5f3ff", hex: "245, 243, 255" },
  { name: "Primary 100", value: "#ede9fe", hex: "237, 233, 254" },
  { name: "Primary 200", value: "#ddd6fe", hex: "221, 214, 254" },
  { name: "Primary 300", value: "#c4b5fd", hex: "196, 181, 253" },
  { name: "Primary 400", value: "#a78bfa", hex: "167, 139, 250" },
  { name: "Primary 500", value: "#8b5cf6", hex: "139, 92, 246" },
  { name: "Primary 600", value: "#7c3aed", hex: "124, 58, 237" },
  { name: "Primary 700", value: "#6d28d9", hex: "109, 40, 217" },
  { name: "Primary 800", value: "#5b21b6", hex: "91, 33, 182", primary: true },
  { name: "Primary 900", value: "#4c1d95", hex: "76, 29, 149" },
  { name: "Primary 950", value: "#2e1065", hex: "46, 16, 101", darkBg: true },
];

const accentColors = [
  { name: "Gold", value: "#F59E0B", hex: "245, 158, 11", usage: "Primary CTA buttons, success states" },
  { name: "Green", value: "#059669", hex: "5, 150, 105", usage: "Secondary CTAs, positive indicators" },
  { name: "Blue", value: "#2563EB", hex: "37, 99, 235", usage: "Information, links" },
  { name: "Red", value: "#DC2626", hex: "220, 38, 38", usage: "Errors, urgent actions" },
];

const neutralColors = [
  { name: "Neutral 50", value: "#fafafa", hex: "250, 250, 250" },
  { name: "Neutral 100", value: "#f5f5f5", hex: "245, 245, 245" },
  { name: "Neutral 200", value: "#e5e5e5", hex: "229, 229, 229" },
  { name: "Neutral 300", value: "#d4d4d4", hex: "212, 212, 212" },
  { name: "Neutral 400", value: "#a3a3a3", hex: "163, 163, 163" },
  { name: "Neutral 500", value: "#737373", hex: "115, 115, 115" },
  { name: "Neutral 600", value: "#525252", hex: "82, 82, 82" },
  { name: "Neutral 700", value: "#404040", hex: "64, 64, 64" },
  { name: "Neutral 800", value: "#262626", hex: "38, 38, 38" },
  { name: "Neutral 900", value: "#171717", hex: "23, 23, 23" },
];

const icons = [
  { name: "ExternalLink", icon: ExternalLink, usage: "External links, new window" },
  { name: "Download", icon: Download, usage: "Download actions, exports" },
  { name: "FileText", icon: FileText, usage: "Documents, text files" },
  { name: "BookOpen", icon: BookOpen, usage: "Documentation, guides" },
  { name: "Shield", icon: Shield, usage: "Security, protection" },
  { name: "Users", icon: Users, usage: "Community, collaboration" },
  { name: "Cpu", icon: Cpu, usage: "Technology, processing" },
  { name: "Database", icon: Database, usage: "Data, storage" },
  { name: "ChevronRight", icon: ChevronRight, usage: "Navigation, expansion" },
  { name: "CheckCircle", icon: CheckCircle, usage: "Success, completion" },
  { name: "AlertCircle", icon: AlertCircle, usage: "Warnings, important info" },
  { name: "Info", icon: Info, usage: "Information, help" },
  { name: "Building2", icon: Building2, usage: "Organizations, enterprise" },
  { name: "Target", icon: Target, usage: "Goals, objectives" },
  { name: "Lightbulb", icon: Lightbulb, usage: "Ideas, innovation" },
  { name: "Zap", icon: Zap, usage: "Speed, performance" },
];

const components = [
  {
    name: "Button",
    description: "Interactive elements for user actions",
    variants: ["Primary", "Secondary", "Ghost"],
    sizes: ["Small", "Medium", "Large"],
    preview: (
      <div className="flex gap-3 justify-center items-center p-6">
        <Button variant="primary" size="sm">Primary</Button>
        <Button variant="secondary" size="md">Secondary</Button>
        <Button variant="primary" style="ghost" size="lg">Ghost</Button>
      </div>
    )
  },
  {
    name: "Card",
    description: "Content containers with optional borders and shadows",
    variants: ["Filled", "Outlined", "Elevated"],
    usage: "Feature highlights, content sections, information blocks",
    preview: (
      <div className="grid grid-cols-3 gap-3 p-4 scale-75">
        <Card variant="filled" padding="sm">
          <Text variant="small" className="font-semibold">Filled</Text>
          <Text variant="small">Content</Text>
        </Card>
        <Card variant="outlined" padding="sm">
          <Text variant="small" className="font-semibold">Outlined</Text>
          <Text variant="small">Content</Text>
        </Card>
        <Card variant="elevated" padding="sm">
          <Text variant="small" className="font-semibold">Elevated</Text>
          <Text variant="small">Content</Text>
        </Card>
      </div>
    )
  },
  {
    name: "Section",
    description: "Page layout sections with spacing variants",
    variants: ["Default", "Spacious", "Compact"],
    backgrounds: ["White", "Gray", "Gradient", "Dark"],
    preview: (
      <div className="w-full h-32 relative">
        <div className="absolute inset-0 flex flex-col gap-1 scale-50 origin-center">
          <div className="bg-white h-8 rounded flex items-center justify-center text-xs">White</div>
          <div className="bg-gray-100 h-8 rounded flex items-center justify-center text-xs">Gray</div>
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 h-8 rounded flex items-center justify-center text-white text-xs">Gradient</div>
          <div className="bg-gray-900 h-8 rounded flex items-center justify-center text-white text-xs">Dark</div>
        </div>
      </div>
    )
  },
  {
    name: "Typography",
    description: "Text elements with semantic HTML",
    components: ["Heading (h1-h6)", "Text (p, span)", "List (ul, ol)"],
    variants: ["Display", "Body", "Small", "Caption"],
    preview: (
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-display font-bold">Display Heading</h3>
        <p className="text-base">Body text paragraph</p>
        <p className="text-sm text-gray-600">Small caption text</p>
      </div>
    )
  },
  {
    name: "Container",
    description: "Content width constraints for readability",
    sizes: ["Small (640px)", "Medium (768px)", "Large (1024px)", "XL (1280px)"],
    usage: "Center content, maintain readable line lengths",
    preview: (
      <div className="w-full p-4 space-y-2">
        <div className="mx-auto bg-primary-100 h-4 rounded" style={{width: "40%"}}></div>
        <div className="mx-auto bg-primary-200 h-4 rounded" style={{width: "50%"}}></div>
        <div className="mx-auto bg-primary-300 h-4 rounded" style={{width: "60%"}}></div>
        <div className="mx-auto bg-primary-400 h-4 rounded" style={{width: "70%"}}></div>
      </div>
    )
  },
  {
    name: "Grid",
    description: "Responsive grid layouts",
    columns: ["1-4 columns", "Responsive breakpoints", "Gap utilities"],
    usage: "Card layouts, feature grids, content organization",
    preview: (
      <div className="grid grid-cols-3 gap-2 p-6">
        <div className="bg-primary-200 h-12 rounded"></div>
        <div className="bg-primary-300 h-12 rounded"></div>
        <div className="bg-primary-400 h-12 rounded"></div>
        <div className="bg-primary-300 h-12 rounded"></div>
        <div className="bg-primary-400 h-12 rounded"></div>
        <div className="bg-primary-200 h-12 rounded"></div>
      </div>
    )
  },
  {
    name: "Hero",
    description: "Page header sections with high visual impact",
    features: ["Dark background (primary-950)", "Geometric accents", "Gold/Green CTAs"],
    usage: "Page introductions, major sections",
    preview: (
      <div className="relative bg-primary-950 h-32 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-icd-gold to-transparent rounded-full blur-xl"></div>
        </div>
        <div className="text-center z-10">
          <h4 className="text-white font-display text-sm font-bold mb-2">Hero Section</h4>
          <div className="flex gap-2 justify-center scale-75">
            <Button size="sm" className="bg-icd-gold text-primary-950 text-xs px-2 py-1">CTA</Button>
            <Button size="sm" className="bg-transparent text-white border border-icd-green text-xs px-2 py-1">Learn</Button>
          </div>
        </div>
      </div>
    )
  },
  {
    name: "CTASection",
    description: "Call-to-action sections",
    features: ["High contrast design", "Centered content", "Dual button layout"],
    usage: "Conversion points, next steps",
    preview: (
      <div className="bg-primary-950 p-6 rounded-lg text-center">
        <h4 className="text-white font-display text-lg font-bold mb-2">Take Action</h4>
        <p className="text-white/80 text-sm mb-3">Join us today</p>
        <div className="flex gap-2 justify-center scale-90">
          <Button size="sm" className="bg-icd-gold text-primary-950 text-xs">Start</Button>
          <Button size="sm" className="bg-transparent text-white border border-icd-green text-xs">Info</Button>
        </div>
      </div>
    )
  }
];

export default function BrandPage() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const nextComponent = () => {
    setCurrentComponentIndex((prev) => (prev + 1) % components.length);
  };

  const prevComponent = () => {
    setCurrentComponentIndex((prev) => (prev - 1 + components.length) % components.length);
  };

  const currentComponent = components[currentComponentIndex];

  return (
    <>
      {/* Header Section */}
      <Section variant="spacious" background="gradient">
        <Container size="md">
          <div className="text-center text-white">
            <Heading level="h1" className="mb-6 text-white">
              ICD Foundation Brand Guidelines
            </Heading>
            <Text variant="large" className="text-white/95">
              Visual identity, design system, and component specifications for consistent brand representation
            </Text>
          </div>
        </Container>
      </Section>

      {/* Logo Section */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Logo & Identity</Heading>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="outlined" padding="lg">
              <div className="flex justify-center mb-6 p-8 bg-white rounded-lg">
                <Image
                  src="/icd-logo.jpeg"
                  alt="ICD Logo"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <Heading level="h3" className="mb-3">Primary Logo</Heading>
              <Text>
                The ICD Foundation logo represents collaboration and innovation in defense technology.
                Maintain clear space equal to the height of the &ldquo;I&rdquo; character around all sides.
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <div className="flex justify-center mb-6 p-8 bg-primary-950 rounded-lg">
                <Image
                  src="/icd-logo.jpeg"
                  alt="ICD Logo on dark"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <Heading level="h3" className="mb-3">Logo on Dark</Heading>
              <Text>
                When placed on dark backgrounds, ensure sufficient contrast.
                The logo should always be clearly visible and legible.
              </Text>
            </Card>
          </div>

          <Card variant="filled" padding="lg" className="bg-blue-50 border-blue-200">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <Heading level="h4" className="mb-2">Logo Usage Guidelines</Heading>
                <ul className="space-y-1 text-sm">
                  <li>• Minimum size: 50px width for digital, 0.5&rdquo; for print</li>
                  <li>• Do not rotate, skew, or distort the logo</li>
                  <li>• Do not change logo colors or add effects</li>
                  <li>• Maintain aspect ratio when scaling</li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Color Palette Section */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Color Palette</Heading>

          {/* Primary Colors */}
          <div className="mb-12">
            <Heading level="h3" className="mb-6">Primary Colors</Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {primaryColors.map((color) => (
                <Card key={color.name} variant="outlined" padding="md">
                  <div
                    className="h-24 rounded-lg mb-3 border border-gray-200"
                    style={{ backgroundColor: color.value }}
                  />
                  <Text variant="small" className="font-semibold">{color.name}</Text>
                  <Text variant="small" className="text-gray-600">{color.value}</Text>
                  <Text variant="small" className="text-gray-500">RGB: {color.hex}</Text>
                  {color.primary && (
                    <div className="mt-2">
                      <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">Main Brand</span>
                    </div>
                  )}
                  {color.darkBg && (
                    <div className="mt-2">
                      <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">Hero BG</span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-12">
            <Heading level="h3" className="mb-6">Accent Colors</Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {accentColors.map((color) => (
                <Card key={color.name} variant="outlined" padding="md">
                  <div
                    className="h-24 rounded-lg mb-3 border border-gray-200"
                    style={{ backgroundColor: color.value }}
                  />
                  <Text variant="small" className="font-semibold">ICD {color.name}</Text>
                  <Text variant="small" className="text-gray-600">{color.value}</Text>
                  <Text variant="small" className="text-gray-500">RGB: {color.hex}</Text>
                  <Text variant="small" className="text-gray-600 mt-2">{color.usage}</Text>
                </Card>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <Heading level="h3" className="mb-6">Neutral Colors</Heading>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {neutralColors.map((color) => (
                <Card key={color.name} variant="outlined" padding="sm">
                  <div
                    className="h-16 rounded mb-2 border border-gray-200"
                    style={{ backgroundColor: color.value }}
                  />
                  <Text variant="small" className="font-medium">{color.name}</Text>
                  <Text variant="small" className="text-gray-500">{color.value}</Text>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Typography</Heading>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-4">Playfair Display</Heading>
              <div className="space-y-3 font-display">
                <p className="text-4xl">Aa Bb Cc</p>
                <p className="text-2xl">Headlines & Display Text</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
              </div>
              <Text variant="small" className="mt-4 text-gray-600">
                Used for headings, hero text, and high-impact display elements
              </Text>
            </Card>

            <Card variant="outlined" padding="lg">
              <Heading level="h3" className="mb-4">Source Sans 3</Heading>
              <div className="space-y-3 font-body">
                <p className="text-4xl">Aa Bb Cc</p>
                <p className="text-xl">Body Text & UI Elements</p>
                <p className="text-base">The quick brown fox jumps over the lazy dog</p>
              </div>
              <Text variant="small" className="mt-4 text-gray-600">
                Used for body text, navigation, buttons, and general UI copy
              </Text>
            </Card>
          </div>

          <Card variant="filled" padding="lg">
            <Heading level="h4" className="mb-4">Type Scale</Heading>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-20">Display</span>
                <span className="text-4xl lg:text-5xl font-display font-bold">Strategic Defense Innovation</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-20">H1</span>
                <span className="text-3xl lg:text-4xl font-display font-bold">Industry Commons for Defense</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-20">H2</span>
                <span className="text-2xl lg:text-3xl font-display font-bold">Collaborative Framework</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-20">H3</span>
                <span className="text-xl lg:text-2xl font-display font-semibold">Component Architecture</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-20">Body</span>
                <span className="text-base">Enabling transparent collaboration across defense technology.</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-gray-500 w-20">Small</span>
                <span className="text-sm">Supporting text and metadata</span>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Icons Section */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Iconography</Heading>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {icons.map(({ name, icon: Icon, usage }) => (
              <Card key={name} variant="outlined" padding="md" className="text-center">
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <Text variant="small" className="font-medium">{name}</Text>
                <Text variant="small" className="text-gray-500">{usage}</Text>
              </Card>
            ))}
          </div>

          <Card variant="filled" padding="lg" className="mt-8 bg-blue-50 border-blue-200">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <Heading level="h4" className="mb-2">Icon Guidelines</Heading>
                <Text variant="small">
                  Icons are from Lucide React (MIT License). Use consistent sizing (w-4 h-4 for inline, w-5 h-5 for buttons, w-6 h-6 for features).
                  Maintain consistent stroke width and style throughout the interface.
                </Text>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Components Section - Carousel */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Component Library</Heading>

          <div className="relative">
            {/* Carousel Container */}
            <Card variant="outlined" padding="lg">
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevComponent}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Previous component"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="text-center">
                  <Heading level="h3" className="mb-2">{currentComponent.name}</Heading>
                  <Text variant="small" className="text-gray-500">
                    {currentComponentIndex + 1} of {components.length}
                  </Text>
                </div>

                <button
                  onClick={nextComponent}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Next component"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Component Preview */}
              <div className="bg-gray-50 rounded-lg mb-6 h-48 flex items-center justify-center overflow-hidden">
                {currentComponent.preview}
              </div>

              {/* Component Details */}
              <div className="space-y-4">
                <Text className="text-gray-700">{currentComponent.description}</Text>

                {currentComponent.variants && (
                  <div>
                    <Text variant="small" className="font-semibold mb-2">Variants:</Text>
                    <div className="flex flex-wrap gap-2">
                      {currentComponent.variants.map((variant) => (
                        <span key={variant} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentComponent.sizes && (
                  <div>
                    <Text variant="small" className="font-semibold mb-2">Sizes:</Text>
                    <div className="flex flex-wrap gap-2">
                      {currentComponent.sizes.map((size) => (
                        <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentComponent.backgrounds && (
                  <div>
                    <Text variant="small" className="font-semibold mb-2">Backgrounds:</Text>
                    <div className="flex flex-wrap gap-2">
                      {currentComponent.backgrounds.map((bg) => (
                        <span key={bg} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {bg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentComponent.features && (
                  <div>
                    <Text variant="small" className="font-semibold mb-2">Features:</Text>
                    <div className="flex flex-wrap gap-2">
                      {currentComponent.features.map((feature) => (
                        <span key={feature} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentComponent.columns && (
                  <div>
                    <Text variant="small" className="font-semibold mb-2">Columns:</Text>
                    <div className="flex flex-wrap gap-2">
                      {currentComponent.columns.map((column) => (
                        <span key={column} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {column}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentComponent.components && (
                  <div>
                    <Text variant="small" className="font-semibold mb-2">Components:</Text>
                    <div className="flex flex-wrap gap-2">
                      {currentComponent.components.map((comp) => (
                        <span key={comp} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentComponent.usage && (
                  <Text variant="small" className="text-gray-600 italic">
                    Usage: {currentComponent.usage}
                  </Text>
                )}
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {components.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentComponentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentComponentIndex
                        ? 'bg-primary-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to component ${index + 1}`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Design Principles Section */}
      <Section variant="default" background="gray">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Design Principles</Heading>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="filled" padding="lg">
              <Shield className="w-8 h-8 text-primary-600 mb-4" />
              <Heading level="h3" className="mb-3">Accessibility First</Heading>
              <Text>
                WCAG AA compliance with high contrast ratios. Text on dark backgrounds uses white/95 opacity.
                All interactive elements have clear focus states and keyboard navigation.
              </Text>
            </Card>

            <Card variant="filled" padding="lg">
              <Zap className="w-8 h-8 text-icd-gold mb-4" />
              <Heading level="h3" className="mb-3">Performance Optimized</Heading>
              <Text>
                Static generation, optimized images, lazy loading, and code splitting ensure fast load times.
                Tailwind CSS for minimal CSS bundle size.
              </Text>
            </Card>

            <Card variant="filled" padding="lg">
              <Users className="w-8 h-8 text-icd-green mb-4" />
              <Heading level="h3" className="mb-3">User Centered</Heading>
              <Text>
                Clear information hierarchy, consistent navigation patterns, and responsive design for all devices.
                Mobile-first approach with progressive enhancement.
              </Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Attribution Section */}
      <Section variant="default" background="white">
        <Container size="lg">
          <Heading level="h2" className="mb-8">Open Source Attribution</Heading>

          <Card variant="outlined" padding="lg" className="mb-8">
            <Heading level="h3" className="mb-6">Technologies & Licenses</Heading>

            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="filled" padding="md" className="border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Heading level="h4" className="mb-1">Next.js 15</Heading>
                    <Text variant="small" className="text-gray-600">MIT License - Vercel, Inc.</Text>
                    <Text variant="small" className="text-gray-500 mb-2">React framework for production</Text>
                  </div>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-2"
                    aria-label="Visit Next.js website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="https://github.com/vercel/next.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  GitHub
                </a>
              </Card>

              <Card variant="filled" padding="md" className="border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Heading level="h4" className="mb-1">React 19</Heading>
                    <Text variant="small" className="text-gray-600">MIT License - Meta Platforms, Inc.</Text>
                    <Text variant="small" className="text-gray-500 mb-2">JavaScript library for user interfaces</Text>
                  </div>
                  <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-2"
                    aria-label="Visit React website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="https://github.com/facebook/react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  GitHub
                </a>
              </Card>

              <Card variant="filled" padding="md" className="border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Heading level="h4" className="mb-1">Tailwind CSS</Heading>
                    <Text variant="small" className="text-gray-600">MIT License - Tailwind Labs, Inc.</Text>
                    <Text variant="small" className="text-gray-500 mb-2">Utility-first CSS framework</Text>
                  </div>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-2"
                    aria-label="Visit Tailwind CSS website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="https://github.com/tailwindlabs/tailwindcss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  GitHub
                </a>
              </Card>

              <Card variant="filled" padding="md" className="border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Heading level="h4" className="mb-1">Lucide Icons</Heading>
                    <Text variant="small" className="text-gray-600">ISC License - Lucide Contributors</Text>
                    <Text variant="small" className="text-gray-500 mb-2">Open source icon library</Text>
                  </div>
                  <a
                    href="https://lucide.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-2"
                    aria-label="Visit Lucide Icons website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="https://github.com/lucide-icons/lucide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  GitHub
                </a>
              </Card>

              <Card variant="filled" padding="md" className="border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Heading level="h4" className="mb-1">Playfair Display</Heading>
                    <Text variant="small" className="text-gray-600">Open Font License - Claus Eggers Sørensen</Text>
                    <Text variant="small" className="text-gray-500 mb-2">Display typeface via Google Fonts</Text>
                  </div>
                  <a
                    href="https://fonts.google.com/specimen/Playfair+Display"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-2"
                    aria-label="View Playfair Display on Google Fonts"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="https://github.com/clauseggers/Playfair-Display"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  GitHub
                </a>
              </Card>

              <Card variant="filled" padding="md" className="border-l-4 border-primary-600">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Heading level="h4" className="mb-1">Source Sans 3</Heading>
                    <Text variant="small" className="text-gray-600">Open Font License - Adobe Systems</Text>
                    <Text variant="small" className="text-gray-500 mb-2">Sans-serif typeface via Google Fonts</Text>
                  </div>
                  <a
                    href="https://fonts.google.com/specimen/Source+Sans+3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-2"
                    aria-label="View Source Sans 3 on Google Fonts"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="https://github.com/adobe-fonts/source-sans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  GitHub
                </a>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <Text variant="small" className="text-gray-600">
                The ICD Foundation website is built using open source technologies.
                We acknowledge and thank the open source community for their contributions.
                Full source code available at{" "}
                <a
                  href="https://github.com/industry-commons-for-defense/icd-website"
                  className="text-primary-600 hover:text-primary-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Text>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Download Section */}
      <Section variant="spacious" background="gradient">
        <Container size="sm">
          <div className="text-center">
            <Heading level="h2" className="mb-6 text-white">
              Brand Resources
            </Heading>
            <Text variant="large" className="mb-8 text-white/95">
              Download brand guidelines and assets for consistent implementation
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/brand-assets.zip"
                variant="secondary"
                size="lg"
                className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brand Kit
              </Button>
              <Button
                href="https://github.com/industry-commons-for-defense/icd-website"
                variant="secondary"
                size="lg"
                className="bg-transparent text-white border-2 border-icd-green hover:bg-icd-green hover:border-icd-green shadow-xl font-semibold transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}