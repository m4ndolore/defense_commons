import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-950 hero-high-contrast">
      {/* Subtle accent border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-icd-gold via-icd-green to-icd-blue"></div>

      {/* Geometric accent elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-icd-gold to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-icd-green to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
          Join the Industry Commons for Defense
        </h2>
        <p className="text-xl text-white/95 mb-8 font-light">
          Accelerate innovation, enhance security, and build the future of
          defense technology together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            href="/get-started"
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
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}