'use client';

import { TrendingDown, DollarSign, Zap } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const stats = [
  {
    id: "duplication-reduction",
    value: "30-50%",
    label: "reduction in duplication",
    icon: TrendingDown
  },
  {
    id: "annual-savings",
    value: "$2.4B",
    label: "projected annual savings",
    icon: DollarSign
  },
  {
    id: "cui-access",
    value: "Months → Days",
    label: "Faster CUI access for startups",
    icon: Zap
  }
];

export default function ImpactStats() {
  return (
    <Section background="gray" className="text-black">
      <Container>
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-black mb-3">
            Proven Impact
          </h2>
          <p className="text-xl text-black/90">
            Government and Industry results from sharing data and code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            
            return (
              <div key={stat.id} className="text-center group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
                  <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-black text-white w-14 h-14 shadow-[0_12px_20px_rgba(0,0,0,0.25)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-5xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-black/90">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
