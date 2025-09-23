"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, Shield, Rocket, Package, Briefcase, Microscope } from "lucide-react";

const pathways = [
  {
    id: 1,
    title: "Software Acquisition Pathway",
    icon: Zap,
    description: "ICD accelerates software development and deployment through modular, reusable components and standardized frameworks.",
    benefits: [
      "Continuous development and delivery",
      "Rapid iteration cycles",
      "Shared code repositories",
      "Automated testing and security"
    ],
    color: "bg-purple-800"
  },
  {
    id: 2,
    title: "Middle-Tier Acquisition",
    icon: Rocket,
    description: "ICD enables rapid prototyping and fielding within 2-5 years through collaborative development.",
    benefits: [
      "Fast-track prototyping",
      "Streamlined requirements",
      "Iterative development",
      "Quick transition to production"
    ],
    color: "bg-amber-500"
  },
  {
    id: 3,
    title: "Major Capability Acquisition",
    icon: Shield,
    description: "ICD reduces risk and cost for major defense programs through proven components and frameworks.",
    benefits: [
      "Reduced development risk",
      "Component reusability",
      "Cost savings through sharing",
      "Accelerated capability delivery"
    ],
    color: "bg-emerald-600"
  },
  {
    id: 4,
    title: "Urgent Operational Needs",
    icon: Package,
    description: "ICD provides immediate access to validated solutions for urgent warfighter requirements.",
    benefits: [
      "Pre-validated components",
      "Rapid deployment capability",
      "Immediate availability",
      "Combat-proven solutions"
    ],
    color: "bg-red-600"
  },
  {
    id: 5,
    title: "Acquisition of Services",
    icon: Briefcase,
    description: "ICD streamlines service acquisitions through standardized frameworks and proven methodologies.",
    benefits: [
      "Standardized service models",
      "Pre-negotiated frameworks",
      "Performance-based metrics",
      "Simplified procurement"
    ],
    color: "bg-blue-600"
  },
  {
    id: 6,
    title: "Defense Business Systems",
    icon: Microscope,
    description: "ICD modernizes business systems through shared enterprise solutions and common architectures.",
    benefits: [
      "Enterprise-wide solutions",
      "Shared infrastructure",
      "Reduced duplication",
      "Improved interoperability"
    ],
    color: "bg-indigo-600"
  }
];

export default function AAFPathways() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pathways.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pathways.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pathways.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentPathway = pathways[currentIndex];
  const Icon = currentPathway.icon;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Supporting the Adaptive Acquisition Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ICD accelerates all six AAF pathways through collaborative development,
            shared components, and proven frameworks
          </p>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`w-20 h-20 ${currentPathway.color} rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {currentPathway.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentPathway.description}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  How ICD Helps:
                </h4>
                <ul className="space-y-3">
                  {currentPathway.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <span className="text-icd-green mr-2 mt-0.5">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button
              onClick={handlePrevious}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              aria-label="Previous pathway"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button
              onClick={handleNext}
              className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
              aria-label="Next pathway"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {pathways.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-800'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to pathway ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* AAF Reference */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Based on DoD Instruction 5000.02 - Operation of the Adaptive Acquisition Framework
          </p>
        </div>
      </div>
    </section>
  );
}