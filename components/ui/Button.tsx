import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/design-system';
import { componentVariants } from '@/lib/design-system';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  style?: 'base' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'gold' | 'green' | 'blue' | 'red';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  inlineStyle?: React.CSSProperties;
}

export default function Button({
  children,
  variant = 'primary',
  style = 'base',
  size = 'md',
  color,
  href,
  onClick,
  className,
  type = 'button',
  disabled = false,
  inlineStyle
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  let variantClasses = '';

  if (variant === 'accent' && color) {
    variantClasses = componentVariants.button.accent[color];
  } else if (variant !== 'accent') {
    variantClasses = componentVariants.button[variant][style];
  }

  const classes = cn(
    baseClasses,
    variantClasses,
    componentVariants.button.sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={inlineStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={inlineStyle}
    >
      {children}
    </button>
  );
}