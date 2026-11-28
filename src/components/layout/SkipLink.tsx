import { cn } from '@/lib/utils'

interface SkipLinkProps {
  visible?: boolean
}

/**
 * Keyboard-first bypass to main invitation content.
 */
export function SkipLink({ visible = true }: SkipLinkProps) {
  if (!visible) return null

  return (
    <a
      href="#countdown"
      className={cn(
        'sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]',
        'focus:rounded-xl focus:border focus:border-gold/40 focus:bg-card focus:px-4 focus:py-3',
        'focus:text-body-sm focus:font-medium focus:text-foreground focus:shadow-elevated',
        'focus:outline-none focus:ring-[3px] focus:ring-gold/30',
      )}
    >
      Skip to invitation
    </a>
  )
}
