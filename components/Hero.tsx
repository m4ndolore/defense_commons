"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary-950 hero-high-contrast">
      {/* Subtle accent border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-icd-gold via-icd-green to-icd-blue"></div>

      {/* Geometric accent elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-icd-gold to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-icd-green to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white">
            Industry Commons for Defense
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-light leading-relaxed text-white/95">
            A collaborative framework enabling transparent, modular, and
            sovereign-aligned collaboration across government, FFRDCs, UARCs,
            and industry partners in defense technology development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/get-started"
              variant="secondary"
              size="lg"
              className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200 hero-accent-glow"
            >
              Get Started
            </Button>
            <Button
              href="/framework"
              variant="secondary"
              size="lg"
              className="bg-transparent text-white border-2 border-icd-green hover:bg-icd-green hover:border-icd-green shadow-xl font-semibold transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}