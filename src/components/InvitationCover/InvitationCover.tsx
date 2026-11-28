import { motion } from 'framer-motion'

import { Button } from '@/components/ui'
import { couple } from '@/data'
import { usePrefersReducedMotion } from '@/hooks'
import { motion as motionTokens } from '@/styles'
import { cn } from '@/lib/utils'

import { FloralBorder } from './FloralBorder'

interface InvitationCoverProps {
  visible: boolean
  isExiting: boolean
  onOpen: () => void
}

export function InvitationCover({
  visible,
  isExiting,
  onOpen,
}: InvitationCoverProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (!visible && !isExiting) return null

  return (
    <motion.section
      aria-label="Wedding invitation cover"
      className={cn(
        'fixed inset-0 z-40 flex items-center justify-center bg-background px-gutter',
        !visible && !isExiting && 'pointer-events-none',
      )}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isExiting ? 0 : visible ? 1 : 0,
        scale: isExiting ? 1.04 : 1,
      }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : motionTokens.duration.reveal,
        ease: motionTokens.ease.elegant,
      }}
    >
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          y: isExiting ? -24 : 0,
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : motionTokens.duration.slower,
          ease: motionTokens.ease.entrance,
        }}
      >
        <div className="relative aspect-[5/7] w-full">
          <FloralBorder className="absolute inset-0 size-full" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 py-12 text-center md:gap-8 md:px-12">
            <p className="type-overline">{couple.invitationLabel}</p>

            <div className="space-y-1">
              <p className="font-heading text-4xl text-primary md:text-5xl">
                {couple.groom.firstName}
              </p>
              <p className="font-script text-3xl text-gold md:text-4xl">&</p>
              <p className="font-heading text-4xl text-primary md:text-5xl">
                {couple.bride.firstName}
              </p>
            </div>

            <div className="divider-gold" />

            <p className="font-heading text-lg tracking-wide text-muted-foreground md:text-xl">
              {couple.dateDisplayRange}
            </p>

            <Button
              size="lg"
              className="mt-2 font-heading tracking-widest uppercase"
              onClick={onOpen}
            >
              {couple.openInvitationLabel}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
