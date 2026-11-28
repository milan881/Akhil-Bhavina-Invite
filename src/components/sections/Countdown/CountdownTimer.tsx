import { motion } from 'framer-motion'

import { countdown as countdownData } from '@/data'
import { useCountdown } from '@/hooks'
import { scrollRevealScale } from '@/lib/motion-variants'

import { CountdownUnit } from './CountdownUnit'

export function CountdownTimer() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(
    countdownData.targetDate,
  )

  if (isComplete) {
    return (
      <motion.p
        className="invitation-countdown-complete font-heading text-display-lg text-primary md:text-display-xl"
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        role="status"
        aria-live="polite"
      >
        {countdownData.completeMessage}
      </motion.p>
    )
  }

  const units = [
    { value: days, label: 'Days', show: countdownData.showDays },
    { value: hours, label: 'Hours', show: countdownData.showHours },
    { value: minutes, label: 'Minutes', show: countdownData.showMinutes },
    { value: seconds, label: 'Seconds', show: countdownData.showSeconds },
  ].filter((unit) => unit.show)

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 md:gap-6"
      variants={scrollRevealScale}
      role="timer"
      aria-live="off"
      aria-label={`Countdown to ${countdownData.dateDisplay} at ${countdownData.timeDisplay}`}
    >
      {units.map((unit) => (
        <CountdownUnit key={unit.label} value={unit.value} label={unit.label} />
      ))}
    </motion.div>
  )
}
