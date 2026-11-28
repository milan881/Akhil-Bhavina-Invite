import { lazy, Suspense, useCallback, useState } from 'react'

import { InvitationCover } from '@/components/InvitationCover'
import { MusicControl } from '@/components/MusicControl'
import { OpeningScreen } from '@/components/OpeningScreen'
import { CountdownFloralBackground } from '@/components/sections/Countdown/CountdownFloralBackground'
import { music as musicConfig } from '@/data'
import pageOneImage from '@/pages/Page1.jpeg'
import pageTwoImage from '@/pages/Page2.jpeg'
import pageThreeImage from '@/pages/Page3.png'
import pageFourImage from '@/pages/Page4.jpeg'
import pageFiveImage from '@/pages/Page5.jpeg'
import pageSixImage from '@/pages/Page6.jpeg'
import pageSevenImage from '@/pages/WhatsApp Image 2026-11-27 at 14.19.55.jpeg'
import pageEightImage from '@/pages/WhatsApp Image 2026-11-27 at 14.19.55 (1).jpeg'
import {
  useAppReady,
  useBackgroundMusic,
  useOpeningExperience,
} from '@/hooks'
import { motion as motionTokens } from '@/styles'

import { JsonLd } from './JsonLd'
import { SeoHead } from './SeoHead'
import { SkipLink } from './SkipLink'

const CountdownSection = lazy(() =>
  import('@/components/sections/Countdown').then((module) => ({
    default: module.CountdownSection,
  })),
)
const VenueSection = lazy(() =>
  import('@/components/sections/Venue').then((module) => ({
    default: module.VenueSection,
  })),
)
const FooterSection = lazy(() =>
  import('@/components/sections/Footer').then((module) => ({
    default: module.FooterSection,
  })),
)
const COVER_EXIT_MS = motionTokens.duration.reveal * 1000

/**
 * Orchestrates the three-stage opening flow and shared audio.
 * Keeps presentation components pure — all state lives in hooks.
 */
export function OpeningExperience() {
  const isAppReady = useAppReady()
  const { isLoading, isCover, isOpened, openInvitation } = useOpeningExperience({
    isAppReady,
  })
  const { isPlaying, isAvailable, toggle, audioRef } = useBackgroundMusic()
  const [coverExiting, setCoverExiting] = useState(false)

  const handleOpenInvitation = useCallback(() => {
    setCoverExiting(true)
    window.setTimeout(() => {
      openInvitation()
      setCoverExiting(false)
    }, COVER_EXIT_MS)
  }, [openInvitation])

  const showMusicControl = isCover || isOpened

  return (
    <>
      <SeoHead />
      <JsonLd />
      <SkipLink visible={isOpened} />

      {musicConfig.enabled && musicConfig.src && (
        <audio
          ref={audioRef}
          src={musicConfig.src}
          loop={musicConfig.loop}
          muted
          preload="none"
          aria-hidden="true"
        />
      )}

      <OpeningScreen visible={isLoading} />

      <InvitationCover
        visible={isCover && !coverExiting}
        isExiting={coverExiting}
        onOpen={handleOpenInvitation}
      />

      <main
        id="main-content"
        className={isOpened ? 'invitation-page invitation-page--opened' : undefined}
      >
        {isOpened && (
          <div className="invitation-sheet invitation-sheet--opened">
            <img
              className="invitation-page-one"
              src={pageOneImage}
              alt="Wedding invitation for Akhil and Bhavina"
              fetchPriority="high"
            />
            <Suspense fallback={null}>
              <CountdownSection />
            </Suspense>
            <section
              className="invitation-end-panel"
              aria-labelledby="events-schedule-heading"
            >
              <h2
                id="events-schedule-heading"
                className="text-background !font-script !text-[clamp(3rem,8vw,5rem)] !font-normal !leading-[1.2]"
              >
                Events Schedule
              </h2>
            </section>
            <div className="invitation-additional-pages">
              <img src={pageTwoImage} alt="Wedding invitation, page 2" loading="lazy" />
              <img src={pageThreeImage} alt="Wedding invitation, page 3" loading="lazy" />
              <img src={pageFourImage} alt="Wedding invitation, page 4" loading="lazy" />
              <img src={pageFiveImage} alt="Wedding invitation, page 5" loading="lazy" />
              <img src={pageSixImage} alt="Wedding invitation, page 6" loading="lazy" />
            </div>
            <section
              className="invitation-section invitation-section--countdown invitation-page-extension relative overflow-hidden pt-[1cm] pb-[1cm]"
              aria-label="Additional invitation pages"
            >
              <CountdownFloralBackground />
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 size-[min(90vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="invitation-page-extension-pages px-[1cm]">
                <img
                  src={pageSevenImage}
                  alt="Wedding invitation, page 7: family business and RSVP details"
                  loading="lazy"
                />
                <img
                  src={pageEightImage}
                  alt="Wedding invitation, page 8: awaiting your presence"
                  loading="lazy"
                />
              </div>
            </section>
            <Suspense fallback={null}>
              <VenueSection />
            </Suspense>
            <Suspense fallback={null}>
              <FooterSection />
            </Suspense>
          </div>
        )}
      </main>

      <MusicControl
        visible={showMusicControl}
        isPlaying={isPlaying}
        isAvailable={isAvailable}
        onToggle={toggle}
      />
    </>
  )
}
