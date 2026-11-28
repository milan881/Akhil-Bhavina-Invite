import { useEffect, useState } from 'react'

const MIN_DISPLAY_MS = 1800

interface UseAppReadyOptions {
  minDisplayMs?: number
}

/**
 * Resolves when fonts are loaded and a minimum display time has elapsed.
 * Drives the OpeningScreen dismiss without blocking on heavy assets.
 */
export function useAppReady(options: UseAppReadyOptions = {}) {
  const { minDisplayMs = MIN_DISPLAY_MS } = options
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    const ready = async () => {
      const fontsReady = document.fonts?.ready ?? Promise.resolve()
      const minDelay = new Promise((resolve) =>
        setTimeout(resolve, minDisplayMs),
      )

      await Promise.all([fontsReady, minDelay])

      if (!cancelled) {
        setIsReady(true)
      }
    }

    void ready()

    return () => {
      cancelled = true
    }
  }, [minDisplayMs])

  return isReady
}
