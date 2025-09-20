import Button from "@/components/ui/Button";

export default function CTASection() {
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

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
          Join the Industry Commons for Defense
        </h2>
        <p className="text-xl text-white mb-8 font-light">
          Accelerate innovation, enhance security, and build the future of
          defense technology together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            href="/get-started"
            variant="secondary"
            size="lg"
            className="bg-white text-primary-800 hover:bg-gray-100 shadow-lg"
          >
            Start Your Journey
          </Button>
          <Button
            href="/about#contact"
            variant="primary"
            style="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary-800"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}