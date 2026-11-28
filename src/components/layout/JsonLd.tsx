import { couple, seo, themeConfig, venue } from '@/data'
import { resolveAbsoluteUrl, resolveSiteUrl } from '@/lib/site-url'

/**
 * Wedding Event structured data for search engines and rich previews.
 */
export function JsonLd() {
  const siteUrl =
    resolveSiteUrl(typeof window !== 'undefined' ? window.location.origin : '')
  const imageUrl = seo.ogImage
    ? resolveAbsoluteUrl(seo.ogImage, siteUrl)
    : undefined

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: themeConfig.siteName,
        description: seo.description,
        inLanguage: seo.locale ?? 'en-IN',
      },
      {
        '@type': 'Event',
        '@id': `${siteUrl}/#wedding`,
        name: `${couple.displayName} Wedding`,
        description: seo.description,
        startDate: `${couple.weddingDate}T12:05:00+05:30`,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name:
            venue.name ??
            venue.ceremonyName ??
            `${venue.city}, ${venue.state ?? venue.country}`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: venue.city,
            addressRegion: venue.state,
            addressCountry: venue.country,
          },
        },
        image: imageUrl,
        organizer: {
          '@type': 'Person',
          name: couple.displayName,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
