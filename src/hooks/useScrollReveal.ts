import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface UseScrollRevealOptions {
  once?: boolean
  amount?: number
  margin?: `${number}px ${number}px ${number}px ${number}px` | `${number}px`
}

/**
 * Intersection-based visibility for scroll-triggered animations.
 * Returns a ref to attach and whether the element is in view.
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { once = true, amount = 0.25, margin = '-80px 0px 0px 0px' } = options
  const ref = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const isInView = useInView(ref, {
    once,
    amount,
    margin,
  })

  return {
    ref,
    isInView: prefersReducedMotion ? true : isInView,
    prefersReducedMotion,
  }
}
