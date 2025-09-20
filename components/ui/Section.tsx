import { ReactNode } from 'react';
import { cn } from '@/lib/design-system';
import { componentVariants } from '@/lib/design-system';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'compact' | 'spacious' | 'hero';
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  className?: string;
  id?: string;
}

export default function Section({
  children,
  variant = 'default',
  background = 'white',
  className,
  id
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    gradient: 'bg-gradient-to-br from-primary-800 via-purple-700 to-purple-900 text-white',
    dark: 'bg-neutral-900 text-white',
  };

  return (
    <section
      id={id}
      className={cn(
        componentVariants.section[variant],
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}