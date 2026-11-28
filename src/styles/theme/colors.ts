import type { ColorTokens, SemanticColors } from '@/types/design-system'

/**
 * Core brand palette — Royal Heritage × Modern Luxury.
 * Kept minimal: six intentional colors, no decorative noise.
 */
export const colors = {
  background: '#FCF8F2',
  gold: '#C9A227',
  goldDark: '#9F7A12',
  maroon: '#6B1E28',
  text: '#2F2F2F',
  white: '#FFFFFF',
} as const satisfies ColorTokens

/**
 * Semantic aliases map brand colors to UI roles (shadcn + Tailwind).
 * Maroon carries authority; gold signals celebration without dominating.
 */
export const semanticColors = {
  background: colors.background,
  foreground: colors.text,
  primary: colors.maroon,
  primaryForeground: colors.white,
  secondary: '#F5EDD8',
  secondaryForeground: colors.goldDark,
  accent: colors.gold,
  accentForeground: colors.text,
  muted: '#F3EDE4',
  mutedForeground: '#6B6360',
  border: '#E8DFD0',
  ring: colors.gold,
  card: colors.white,
  cardForeground: colors.text,
} as const satisfies SemanticColors
