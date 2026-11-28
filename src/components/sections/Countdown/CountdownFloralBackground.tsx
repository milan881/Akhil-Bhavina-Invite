/**
 * Subtle SVG floral motif for countdown section background.
 * Low opacity — decorative only, aria-hidden.
 */
export function CountdownFloralBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]"
      aria-hidden="true"
    >
      <svg
        className="absolute -top-10 -left-10 size-64 text-gold md:size-96"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <path
          d="M100 20 Q130 60 100 100 Q70 60 100 20 M100 100 Q130 140 100 180 Q70 140 100 100"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle cx="100" cy="20" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="100" cy="180" r="4" fill="currentColor" opacity="0.6" />
      </svg>
      <svg
        className="absolute -right-10 -bottom-10 size-64 rotate-180 text-maroon md:size-96"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <path
          d="M100 20 Q130 60 100 100 Q70 60 100 20 M100 100 Q130 140 100 180 Q70 140 100 100"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle cx="100" cy="20" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="100" cy="180" r="4" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  )
}
