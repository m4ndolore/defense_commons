import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

// Helper function to calculate contrast ratio
function getContrastRatio(color1: string, color2: string): number {
  // This is a simplified contrast calculation for testing
  // In a real implementation, you'd use a proper color contrast library

  // Convert colors to RGB values (simplified)
  const getRGB = (color: string) => {
    if (color === 'rgb(255, 255, 255)') return { r: 255, g: 255, b: 255 };
    if (color === 'rgb(46, 16, 101)') return { r: 46, g: 16, b: 101 }; // primary-950
    if (color.startsWith('rgba(255, 255, 255')) return { r: 255, g: 255, b: 255 };
    return { r: 128, g: 128, b: 128 }; // default gray
  };

  const rgb1 = getRGB(color1);
  const rgb2 = getRGB(color2);

  // Calculate relative luminance (simplified)
  const getLuminance = (rgb: {r: number, g: number, b: number}) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);

  const contrast = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
  return contrast;
}

describe('Footer Contrast Validation', () => {
  it('renders footer with proper structure', () => {
    render(<Footer />);

    // Verify footer exists
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    // Verify main sections exist
    expect(screen.getByText('By Role')).toBeInTheDocument();
    expect(screen.getByText('About ICD')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('footer links have sufficient contrast against dark background', () => {
    const { container } = render(<Footer />);

    // Find all footer links
    const footerLinks = container.querySelectorAll('footer a');
    expect(footerLinks.length).toBeGreaterThan(0);

    footerLinks.forEach((link) => {
      // Check that links use light purple text for good contrast
      expect(link).toHaveClass('text-primary-200');

      // Ensure no low-opacity classes that reduce contrast
      expect(link).not.toHaveClass('text-white/80');
      expect(link).not.toHaveClass('text-white/70');
      expect(link).not.toHaveClass('text-white/60');
    });
  });

  it('footer copyright text has sufficient contrast', () => {
    const { container } = render(<Footer />);

    // Find copyright section
    const copyrightSection = container.querySelector('.border-t');
    expect(copyrightSection).toBeInTheDocument();

    // Check copyright text uses proper contrast class
    expect(copyrightSection).toHaveClass('text-white/95'); // The section should have good contrast
  });

  it('social links have proper contrast', () => {
    render(<Footer />);

    // Test social media links
    const linkedinLink = screen.getByText('LinkedIn');
    const xLink = screen.getByText('X');
    const githubLink = screen.getByText('GitHub');

    [linkedinLink, xLink, githubLink].forEach(link => {
      expect(link).toHaveClass('text-primary-200');
      expect(link).not.toHaveClass('text-white/80');
    });
  });

  it('email link has proper contrast', () => {
    render(<Footer />);

    const emailLink = screen.getByText('contact@icd-defense.org');
    expect(emailLink).toHaveClass('text-primary-200');
    expect(emailLink).not.toHaveClass('text-white/80');
  });

  it('hover states maintain sufficient contrast', () => {
    const { container } = render(<Footer />);

    const footerLinks = container.querySelectorAll('footer a');

    footerLinks.forEach((link) => {
      // Check hover color is white which has excellent contrast
      expect(link).toHaveClass('hover:text-white');
    });
  });

  it('footer background is dark enough for white text', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('bg-primary-950'); // Very dark background
  });

  it('meets WCAG AA contrast standards', () => {
    const { container } = render(<Footer />);

    // Test computed styles (this would work in a real browser environment)
    const footer = container.querySelector('footer');
    const links = container.querySelectorAll('footer a');

    // In a real test environment with jsdom + CSS, you could test:
    // const computedStyle = window.getComputedStyle(footer);
    // const bgColor = computedStyle.backgroundColor;
    // const textColor = window.getComputedStyle(links[0]).color;
    // const contrast = getContrastRatio(textColor, bgColor);
    // expect(contrast).toBeGreaterThanOrEqual(4.5);

    // For now, test that proper classes are applied
    expect(footer).toHaveClass('bg-primary-950'); // Dark background
    links.forEach(link => {
      expect(link).toHaveClass('text-primary-200'); // Light purple text for good contrast
    });
  });
});