# ICD Website Architecture

## Project Structure

```
icd-website/
├── app/                    # Next.js 15 App Router pages
│   ├── about/             # About page
│   ├── components/        # Components showcase page
│   ├── contact/           # Contact form page
│   ├── framework/         # Framework documentation
│   ├── get-started/       # Getting started guide
│   ├── glossary/          # Terms and definitions
│   ├── government/        # Government perspective
│   ├── industry/          # Industry perspective
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Homepage
│
├── components/            # React components
│   ├── home/             # Homepage-specific sections
│   │   ├── Benefits.tsx
│   │   ├── CoreComponents.tsx
│   │   ├── Hero.tsx
│   │   └── ROISection.tsx
│   ├── layout/           # Layout components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── shared/           # Reusable across pages
│   │   └── CTASection.tsx
│   └── ui/               # Design system components
│       ├── Accordion.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Grid.tsx
│       ├── Section.tsx
│       └── Typography.tsx
│
├── lib/                   # Utilities and configuration
│   ├── constants.ts      # Global constants
│   └── design-system.ts  # Design system configuration
│
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared types and interfaces
│
└── public/               # Static assets
    ├── favicon.ico
    └── icd-logo.jpeg
```

## Design Principles

### 1. Component Organization
- **Layout Components**: Header and Footer used across all pages
- **Page-Specific Components**: Organized by page (e.g., `/components/home/`)
- **Shared Components**: Reusable across multiple pages
- **UI Components**: Pure design system components

### 2. Type Safety
- All shared types defined in `/types/index.ts`
- Component props properly typed
- Form data and API responses typed

### 3. Design System
- Centralized design tokens in `/lib/design-system.ts`
- Consistent color palette using CSS custom properties
- Tailwind CSS for utility classes
- High-contrast design for accessibility (WCAG AA)

### 4. Constants Management
- Magic numbers and strings in `/lib/constants.ts`
- External URLs centralized
- Validation rules defined once

## Key Architectural Decisions

### Next.js 15 App Router
- Server-side rendering by default
- File-based routing
- Layouts for shared UI
- Metadata API for SEO

### Component Architecture
- Functional components with hooks
- Composition over inheritance
- Props for configuration
- CSS modules avoided in favor of Tailwind

### Styling Strategy
- Tailwind CSS for utilities
- CSS custom properties for theming
- Component-scoped styles via className
- Dark mode ready with color system

### Performance Optimizations
- Image optimization with Next.js Image
- Font optimization with next/font
- Static generation where possible
- Code splitting automatic with App Router

## Development Guidelines

### Adding New Pages
1. Create directory in `/app/[page-name]/`
2. Add `page.tsx` with metadata export
3. Use existing UI components from `/components/ui/`
4. Follow established patterns for sections

### Creating Components
1. Place in appropriate directory:
   - `/components/ui/` for design system
   - `/components/shared/` for reusable
   - `/components/[page]/` for page-specific
2. Export as default
3. Add TypeScript types
4. Use design system tokens

### Styling Components
1. Use Tailwind utility classes
2. Reference design system colors
3. Ensure WCAG AA contrast
4. Test responsive breakpoints

### Type Definitions
1. Add shared types to `/types/index.ts`
2. Keep component-specific types with component
3. Export and reuse where possible

## Deployment

- **Platform**: GitHub Pages
- **Build**: GitHub Actions workflow
- **Branch**: Main branch auto-deploys
- **Domain**: Custom domain via CNAME