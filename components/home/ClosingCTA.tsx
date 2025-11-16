'use client';

import Button from '@/components/ui/Button';

export default function ClosingCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-neutral-200">
        <h2 className="text-3xl font-display font-bold text-black mb-4">
          Everything starts with the documents
        </h2>
        <p className="text-neutral-700 mb-6">
          Download the licenses, share the framework, and invite partners into the commons repo.
          When you are ready, cite ICD in your next contract.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/documents" variant="primary" size="lg">
            View documents
          </Button>
          <Button href="/waitlist" variant="secondary" size="lg">
            Request starter kit
          </Button>
        </div>
      </div>
    </section>
  );
}
