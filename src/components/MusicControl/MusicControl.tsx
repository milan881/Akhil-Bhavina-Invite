import { Music2, VolumeX } from 'lucide-react'

import { Button } from '@/components/ui'
import { music as musicConfig } from '@/data'
import { cn } from '@/lib/utils'

interface MusicControlProps {
  isPlaying: boolean
  isAvailable: boolean
  onToggle: () => void
  visible: boolean
}

export function MusicControl({
  isPlaying,
  isAvailable,
  onToggle,
  visible,
}: MusicControlProps) {
  if (!visible || !isAvailable) return null

  const label = isPlaying
    ? `Pause ${musicConfig.title ?? 'background music'}`
    : `Play ${musicConfig.title ?? 'background music'}`

  return (
    <div className="fixed bottom-5 left-5 z-50 md:bottom-6 md:left-6">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={label}
        aria-pressed={isPlaying}
        onClick={onToggle}
        className={cn(
          'size-11 rounded-full border-gold/40 bg-card/90 shadow-sm backdrop-blur-sm',
          'transition-elegant hover:border-gold hover:shadow-gold',
        )}
      >
        {isPlaying ? (
          <Music2 className="size-4 text-gold" aria-hidden="true" />
        ) : (
          <VolumeX className="size-4 text-muted-foreground" aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}
