/**
 * Shared TypeScript types for the ICD Foundation website
 */

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType;
}

// Component variant types
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type CardVariant = "filled" | "outlined" | "elevated";
export type SectionBackground = "white" | "gray" | "gradient" | "dark";

// Content types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: React.ComponentType;
  metrics?: string[];
}

export interface Pathway {
  number: number;
  name: string;
  acronym: string;
  description: string;
  requirements: string[];
  icdEnablers: string[];
  example?: string;
  color: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export interface License {
  title: string;
  acronym: string;
  description: string;
  features: string[];
  color: string;
}

// Form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  inquiryType: string;
  message: string;
  consent: boolean;
}

// Layout types
export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: React.ComponentType;
}