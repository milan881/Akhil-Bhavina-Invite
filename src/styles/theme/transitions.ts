import type { TransitionPreset } from '@/types/design-system'

import { motion } from './motion'

/**
 * Named transition presets — use in Tailwind via utility classes
 * or in JS via `transitions.elegant` for inline styles.
 */
export const transitions = {
  default: {
    property: 'color, background-color, border-color, opacity, box-shadow',
    duration: 'normal',
    easing: 'elegant',
  },
  colors: {
    property: 'color, background-color, border-color',
    duration: 'fast',
    easing: 'default',
  },
  opacity: {
    property: 'opacity',
    duration: 'normal',
    easing: 'elegant',
  },
  transform: {
    property: 'transform',
    duration: 'slow',
    easing: 'elegant',
  },
  elegant: {
    property: 'color, background-color, border-color, opacity, transform, box-shadow',
    duration: 'slow',
    easing: 'elegant',
  },
  reveal: {
    property: 'opacity, transform',
    duration: 'reveal',
    easing: 'entrance',
  },
} as const satisfies Record<string, TransitionPreset>

/** Resolve preset to a CSS transition string for inline styles. */
export function resolveTransition(preset: TransitionPreset): string {
  const durationKey =
    typeof preset.duration === 'number'
      ? preset.duration
      : motion.duration[preset.duration]

  const easingKey = preset.easing
  const easing =
    typeof easingKey === 'string' && easingKey in motion.ease
      ? motion.ease[easingKey as keyof typeof motion.ease]
      : easingKey

  const bezier = Array.isArray(easing)
    ? `cubic-bezier(${easing.join(', ')})`
    : 'ease'

  return `${preset.property} ${durationKey}s ${bezier}`
}
