import { motion as motionTokens } from '@/styles'

export const scrollRevealFadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: motionTokens.duration.slower,
      ease: motionTokens.ease.entrance,
    },
  },
}

export const scrollRevealFade = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.elegant,
    },
  },
}

export const scrollRevealScale = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease.entrance,
    },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}
