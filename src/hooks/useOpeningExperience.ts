import { useEffect, useState } from 'react'

export type OpeningPhase = 'loading' | 'cover' | 'opened'

interface UseOpeningExperienceOptions {
  isAppReady: boolean
}

interface UseOpeningExperienceReturn {
  phase: OpeningPhase
  isLoading: boolean
  isCover: boolean
  isOpened: boolean
  openInvitation: () => void
}

/**
 * State machine for the three-stage opening flow:
 * loading → cover → opened (hero).
 */
export function useOpeningExperience({
  isAppReady,
}: UseOpeningExperienceOptions): UseOpeningExperienceReturn {
  const [phase, setPhase] = useState<OpeningPhase>('loading')
  const [hasDismissedLoading, setHasDismissedLoading] = useState(false)

  useEffect(() => {
    if (isAppReady && !hasDismissedLoading) {
      setHasDismissedLoading(true)
      setPhase('cover')
    }
  }, [isAppReady, hasDismissedLoading])

  const openInvitation = () => {
    setPhase('opened')
  }

  return {
    phase,
    isLoading: phase === 'loading',
    isCover: phase === 'cover',
    isOpened: phase === 'opened',
    openInvitation,
  }
}
