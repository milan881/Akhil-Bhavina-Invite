import { useEffect, useState } from 'react'

export interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
  isComplete: boolean
}

const EMPTY: CountdownValues = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isComplete: false,
}

function calculateRemaining(targetMs: number): CountdownValues {
  const diff = targetMs - Date.now()

  if (diff <= 0) {
    return { ...EMPTY, isComplete: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, isComplete: false }
}

/**
 * Returns live countdown values, updating every second.
 * Pure date math — no UI concerns.
 */
export function useCountdown(targetDate: string): CountdownValues {
  const targetMs = new Date(targetDate).getTime()

  const [values, setValues] = useState(() => calculateRemaining(targetMs))

  useEffect(() => {
    const tick = () => setValues(calculateRemaining(targetMs))
    tick()

    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [targetMs])

  return values
}
