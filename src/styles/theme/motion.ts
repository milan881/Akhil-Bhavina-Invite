import type { MotionTokens } from '@/types/design-system'

/** Durations in seconds — for Framer Motion and JS animation logic. */
export const motion = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
    reveal: 1.2,
  },
  ease: {
    default: [0.25, 0.1, 0.25, 1] as const,
    elegant: [0.22, 1, 0.36, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
    linear: [0, 0, 1, 1] as const,
  },
} as const satisfies MotionTokens
