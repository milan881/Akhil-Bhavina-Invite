import type { SpacingScale } from '@/types/design-system'

/** 4px base grid — predictable rhythm for section layout and component padding. */
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  section: '6rem',
  sectionSm: '4rem',
  container: '72rem',
  gutter: '1.5rem',
} as const satisfies SpacingScale
