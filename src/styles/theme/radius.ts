import type { RadiusTokens } from '@/types/design-system'

/** Restrained radii — luxury reads as precision, not rounded playfulness. */
export const radius = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const satisfies RadiusTokens

/** shadcn base radius — maps to --radius in CSS */
export const baseRadius = radius.lg
