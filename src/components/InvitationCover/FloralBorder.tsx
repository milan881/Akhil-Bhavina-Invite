interface FloralBorderProps {
  className?: string
}

/**
 * SVG decorative frame — corner florals in gold/maroon.
 * Pure vector, no image assets, scales cleanly on all screens.
 */
export function FloralBorder({ className }: FloralBorderProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <rect
        x="24"
        y="24"
        width="352"
        height="512"
        rx="2"
        stroke="url(#border-gradient)"
        strokeWidth="1"
      />

      {/* Top-left floral */}
      <path
        d="M24 48 C36 36, 48 24, 64 24 M24 64 C40 48, 48 32, 64 24"
        stroke="#C9A227"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="48" cy="36" r="3" fill="#6B1E28" opacity="0.5" />

      {/* Top-right floral */}
      <path
        d="M376 48 C364 36, 352 24, 336 24 M376 64 C360 48, 352 32, 336 24"
        stroke="#C9A227"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="352" cy="36" r="3" fill="#6B1E28" opacity="0.5" />

      {/* Bottom-left */}
      <path
        d="M24 512 C36 524, 48 536, 64 536 M24 496 C40 512, 48 528, 64 536"
        stroke="#C9A227"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="48" cy="524" r="3" fill="#6B1E28" opacity="0.5" />

      {/* Bottom-right */}
      <path
        d="M376 512 C364 524, 352 536, 336 536 M376 496 C360 512, 352 528, 336 536"
        stroke="#C9A227"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="352" cy="524" r="3" fill="#6B1E28" opacity="0.5" />

      {/* Corner leaves */}
      <path
        d="M80 24 Q100 40, 80 56 M320 24 Q300 40, 320 56 M80 536 Q100 520, 80 504 M320 536 Q300 520, 320 504"
        stroke="#9F7A12"
        strokeWidth="0.8"
        opacity="0.4"
      />

      <defs>
        <linearGradient id="border-gradient" x1="0" y1="0" x2="400" y2="560">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#6B1E28" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
