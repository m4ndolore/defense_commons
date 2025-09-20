import { ReactNode } from 'react';
import { cn } from '@/lib/design-system';
import { componentVariants } from '@/lib/design-system';

interface HeadingProps {
  children: ReactNode;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ children, level, className, as }: HeadingProps) {
  const Component = as || level;
  return (
    <Component className={cn(componentVariants.text.heading[level], className)}>
      {children}
    </Component>
  );
}

interface TextProps {
  children: ReactNode;
  variant?: 'large' | 'base' | 'small' | 'xs';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export function Text({ children, variant = 'base', className, as = 'p' }: TextProps) {
  const Component = as;
  return (
    <Component className={cn(componentVariants.text.body[variant], className)}>
      {children}
    </Component>
  );
}