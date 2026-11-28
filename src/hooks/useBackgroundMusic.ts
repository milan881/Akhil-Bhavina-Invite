import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

import { music as musicConfig } from '@/data'

const MUTE_STORAGE_KEY = 'wedding-music-muted'
const FADE_MS = 800
const FADE_STEP_MS = 40
const TARGET_VOLUME = 0.65

interface UseBackgroundMusicReturn {
  isPlaying: boolean
  isAvailable: boolean
  toggle: () => void
  audioRef: RefObject<HTMLAudioElement | null>
}

function readStoredMutePreference(): boolean {
  try {
    return window.localStorage.getItem(MUTE_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function writeStoredMutePreference(muted: boolean) {
  try {
    window.localStorage.setItem(MUTE_STORAGE_KEY, String(muted))
  } catch {
    // Ignore storage failures (private mode, etc.)
  }
}

async function fadeVolume(
  audio: HTMLAudioElement,
  from: number,
  to: number,
  durationMs: number,
) {
  const steps = Math.max(1, Math.round(durationMs / FADE_STEP_MS))
  const delta = (to - from) / steps

  for (let step = 0; step < steps; step += 1) {
    audio.volume = Math.min(1, Math.max(0, from + delta * (step + 1)))
    await new Promise((resolve) => window.setTimeout(resolve, FADE_STEP_MS))
  }

  audio.volume = Math.min(1, Math.max(0, to))
}

/**
 * Background audio with fade transitions, persisted mute preference,
 * and graceful fallback when the audio asset is unavailable.
 */
export function useBackgroundMusic(): UseBackgroundMusicReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeTokenRef = useRef(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loadFailed, setLoadFailed] = useState(false)
  const isAvailable =
    musicConfig.enabled && Boolean(musicConfig.src) && !loadFailed

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0
    if (readStoredMutePreference()) {
      audio.pause()
    }

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onError = () => setLoadFailed(true)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('error', onError)
    }
  }, [])

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || !isAvailable) return

    const fadeToken = fadeTokenRef.current + 1
    fadeTokenRef.current = fadeToken

    try {
      if (isPlaying) {
        await fadeVolume(audio, audio.volume, 0, FADE_MS)
        if (fadeTokenRef.current !== fadeToken) return
        audio.pause()
        writeStoredMutePreference(true)
      } else {
        audio.muted = false
        await audio.play()
        await fadeVolume(audio, 0, TARGET_VOLUME, FADE_MS)
        if (fadeTokenRef.current !== fadeToken) return
        writeStoredMutePreference(false)
      }
    } catch {
      setIsPlaying(false)
      setLoadFailed(true)
    }
  }, [isAvailable, isPlaying])

  return {
    isPlaying,
    isAvailable,
    toggle,
    audioRef,
  }
}
