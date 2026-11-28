import type { BreakpointTokens } from '@/types/design-system'

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const satisfies BreakpointTokens
