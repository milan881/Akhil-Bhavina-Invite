import { Button } from '@/components/ui/button'
import { venue as venueData } from '@/data'
import { Navigation } from 'lucide-react'

import { CountdownFloralBackground } from '../Countdown/CountdownFloralBackground'

export function VenueSection() {
  return (
    <section
      aria-labelledby="venue-heading"
      className="invitation-section invitation-section--countdown relative flex items-center justify-center overflow-hidden py-section-sm md:py-section"
    >
      <CountdownFloralBackground />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-container px-gutter text-center">
        <p className="invitation-overline mb-3">Venue</p>
        <h2 id="venue-heading" className="mb-6">
          Where We Celebrate
        </h2>
        {venueData.maps.embedUrl && (
          <div className="invitation-venue-map-wrap">
            <div className="invitation-venue-map">
              <iframe
                src={venueData.maps.embedUrl}
                title="Map showing Whistling Woods wedding venue"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {venueData.maps.directionsUrl && (
              <Button
                asChild
                className="invitation-venue-directions mx-auto mt-12 !bg-[#b98a46] !text-white hover:!bg-[#a87936]"
              >
                <a
                  href={venueData.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation aria-hidden="true" />
                  Get Directions
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
