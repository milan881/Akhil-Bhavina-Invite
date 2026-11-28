import { motion } from 'framer-motion'

import { couple } from '@/data'
import { usePrefersReducedMotion } from '@/hooks'
import logoImage from '@/pages/Logo.jpeg'
import { motion as motionTokens } from '@/styles'
import { cn } from '@/lib/utils'

interface OpeningScreenProps {
  visible: boolean
}

export function OpeningScreen({ visible }: OpeningScreenProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-busy={visible}
      aria-label="Loading invitation"
      aria-hidden={!visible}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background',
        !visible && 'pointer-events-none',
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : motionTokens.duration.slower,
        ease: motionTokens.ease.elegant,
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : motionTokens.duration.slow,
          ease: motionTokens.ease.entrance,
        }}
      >
        <div className="relative size-28 overflow-hidden rounded-full border border-gold/50 shadow-lg md:size-32">
          <img
            src={logoImage}
            alt="Akhil and Bhavina wedding logo"
            className="size-full rounded-full object-cover"
            fetchPriority="high"
          />
        </div>
        <p className="type-overline">{couple.invitationLabel}</p>
      </motion.div>
    </motion.div>
  )
}
