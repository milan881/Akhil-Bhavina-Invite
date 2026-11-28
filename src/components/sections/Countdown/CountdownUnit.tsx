import { AnimatePresence, motion } from 'framer-motion'

import { motion as motionTokens } from '@/styles'
import { cn } from '@/lib/utils'

interface CountdownUnitProps {
  value: number
  label: string
  className?: string
}

function pad(value: number): string {
  return value.toString().padStart(2, '0')
}

export function CountdownUnit({ value, label, className }: CountdownUnitProps) {
  const display = pad(value)

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2',
        className,
      )}
      role="group"
      aria-label={`${value} ${label}`}
    >
      <div
        className={cn(
          'invitation-countdown-unit relative flex min-w-[4.5rem] flex-col items-center justify-center rounded-xl',
          'border border-white/40 bg-white/25 px-4 py-5 shadow-gold backdrop-blur-md',
          'md:min-w-[6rem] md:px-6 md:py-6',
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent"
          aria-hidden="true"
        />
        <div
          className="invitation-countdown-value relative overflow-hidden font-heading text-3xl tabular-nums text-primary md:text-5xl"
          aria-hidden="true"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={display}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{
                duration: motionTokens.duration.fast,
                ease: motionTokens.ease.elegant,
              }}
              className="block"
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <span className="invitation-countdown-unit-label font-body text-caption uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}
