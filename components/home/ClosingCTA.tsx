// 'use client';

// import Button from '@/components/ui/Button';

// export default function ClosingCTA() {
//   return (
//     <section className="bg-white border-t border-neutral-200">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
//         <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-950 mb-4">
//           Everything starts with the documents
//         </h2>
//         <p className="text-primary-900 mb-8 text-lg">
//           Download the licenses, share the framework, and invite partners into the commons repo.
//           When you are ready, cite ICD in your next contract.
//         </p>
//         <div className="flex flex-wrap gap-4 justify-center">
//           <Button href="/documents" variant="primary" size="lg">
//             View documents
//           </Button>
//           <Button href="/waitlist" variant="secondary" size="lg">
//             Request starter kit
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ClosingCTA() {
  return (
    <Section background="gradient" className="text-white text-center">
      <Container size="sm">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
          Protect your IP. Share your code. Build faster.
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            href="/waitlist"
            variant="secondary"
            size="lg"
            className="bg-icd-gold text-primary-950 hover:bg-yellow-400 shadow-xl font-semibold transition-all duration-200"
          >
            Member&apos;s Waitlist
          </Button>
          <Button
            href="/components"
            variant="secondary"
            size="lg"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-950 shadow-xl font-semibold transition-all duration-200"
          >
            Contribute Code
          </Button>
        </div>
      </Container>
    </Section>
  );
}
