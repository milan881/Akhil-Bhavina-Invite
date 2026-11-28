import { motion } from 'framer-motion'

import { countdown as countdownData } from '@/data'
import { useScrollReveal } from '@/hooks'
import { scrollRevealFadeUp } from '@/lib/motion-variants'

import { CountdownFloralBackground } from './CountdownFloralBackground'
import { CountdownTimer } from './CountdownTimer'

export function CountdownSection() {
  const { ref, isInView } = useScrollReveal({ amount: 0.1 })

  return (
    <section
      id="countdown"
      ref={ref}
      aria-labelledby="countdown-heading"
      className="invitation-section invitation-section--countdown relative flex items-center justify-center overflow-hidden py-section-sm md:py-section"
    >
      <CountdownFloralBackground />

      {/* Soft glow behind timer */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-container px-gutter">
        <motion.header
          className="mx-auto mb-7 max-w-2xl text-center md:mb-9"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={scrollRevealFadeUp}
        >
          <p
            id="countdown-heading"
            className="invitation-overline invitation-countdown-label !font-script !text-[clamp(2.5rem,6vw,4rem)] !font-normal !tracking-normal !normal-case !text-[#65251e]"
          >
            {countdownData.label}
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={scrollRevealFadeUp}
          className="invitation-countdown-panel"
          aria-labelledby="countdown-heading"
        >
          <h2 className="invitation-countdown-date">
            {countdownData.dateDisplay}
          </h2>
          <p className="invitation-countdown-time">
            {countdownData.timeDisplay}
          </p>
          <div className="mt-8 flex justify-center">
            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
