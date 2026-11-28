import { breakpoints } from './breakpoints'
import { colors, semanticColors } from './colors'
import { motion } from './motion'
import { radius } from './radius'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { transitions } from './transitions'
import { fonts, typography } from './typography'

import type { Theme } from '@/types/design-system'

export const theme = {
  colors,
  semantic: semanticColors,
  fonts,
  typography,
  spacing,
  radius,
  shadows,
  motion,
  transitions,
  breakpoints,
} as const satisfies Theme

export { breakpoints } from './breakpoints'
export { colors, semanticColors } from './colors'
export { motion } from './motion'
export { baseRadius, radius } from './radius'
export { shadows } from './shadows'
export { spacing } from './spacing'
export { resolveTransition, transitions } from './transitions'
export { fonts, typography } from './typography'

export default theme
