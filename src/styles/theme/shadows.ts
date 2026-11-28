import type { ShadowTokens } from '@/types/design-system'

/**
 * Warm, low-contrast shadows tinted with maroon — avoids harsh grey drops
 * that feel generic on ivory backgrounds.
 */
export const shadows = {
  xs: '0 1px 2px rgba(107, 30, 40, 0.04)',
  sm: '0 2px 8px rgba(47, 47, 47, 0.05)',
  md: '0 4px 16px rgba(107, 30, 40, 0.07)',
  lg: '0 8px 32px rgba(47, 47, 47, 0.08)',
  gold: '0 4px 24px rgba(201, 162, 39, 0.15)',
  card: '0 8px 32px rgba(47, 47, 47, 0.06)',
  elevated: '0 16px 48px rgba(107, 30, 40, 0.1)',
} as const satisfies ShadowTokens
