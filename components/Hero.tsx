"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-icd-purple via-purple-700 to-purple-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className={`text-center text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
            Industry Commons for Defense
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            A collaborative framework enabling transparent, modular, and
            sovereign-aligned collaboration across government, FFRDCs, UARCs,
            and industry partners in defense technology development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/get-started"
              variant="secondary"
              size="lg"
              className="bg-white text-primary-800 hover:bg-gray-100 shadow-lg"
            >
              Get Started
            </Button>
            <Button
              href="/framework"
              variant="primary"
              style="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-800"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}