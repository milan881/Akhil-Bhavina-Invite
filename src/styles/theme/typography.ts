import type { FontFamilyTokens, TypographyScale } from '@/types/design-system'

export const fonts = {
  heading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
  body: '"Poppins", system-ui, -apple-system, sans-serif',
  script: '"Great Vibes", cursive',
} as const satisfies FontFamilyTokens

/**
 * Modular type scale — serif headings for heritage, sans body for clarity.
 * Script tokens reserved for names, monograms, and ceremonial accents only.
 */
export const typography = {
  displayXl: { size: '4.5rem', lineHeight: '1.1', letterSpacing: '-0.02em' },
  displayLg: { size: '3.75rem', lineHeight: '1.12', letterSpacing: '-0.02em' },
  heading1: { size: '3rem', lineHeight: '1.15', letterSpacing: '-0.01em' },
  heading2: { size: '2.25rem', lineHeight: '1.2', letterSpacing: '-0.01em' },
  heading3: { size: '1.75rem', lineHeight: '1.25' },
  heading4: { size: '1.375rem', lineHeight: '1.3' },
  bodyLg: { size: '1.125rem', lineHeight: '1.7' },
  body: { size: '1rem', lineHeight: '1.65' },
  bodySm: { size: '0.875rem', lineHeight: '1.6' },
  caption: { size: '0.75rem', lineHeight: '1.5', letterSpacing: '0.08em' },
  scriptLg: { size: '3.5rem', lineHeight: '1.2' },
  script: { size: '2.5rem', lineHeight: '1.25' },
} as const satisfies TypographyScale
