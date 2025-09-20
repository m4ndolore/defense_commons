import { ReactNode } from 'react';
import { cn } from '@/lib/design-system';
import { componentVariants } from '@/lib/design-system';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <div
      className={cn(
        componentVariants.card[variant],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}