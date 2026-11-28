import { useEffect } from 'react'

import { seo as seoData, themeConfig } from '@/data'
import { resolveAbsoluteUrl, resolveSiteUrl } from '@/lib/site-url'

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  )

  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  element.href = href
}

/**
 * Applies wedding SEO metadata from the data layer at runtime.
 */
export function SeoHead() {
  useEffect(() => {
    const { title, description, keywords, ogImage, twitterHandle } = seoData
    const siteUrl = resolveSiteUrl(window.location.origin)
    const canonicalUrl = siteUrl || window.location.origin
    const imageUrl = ogImage ? resolveAbsoluteUrl(ogImage, canonicalUrl) : undefined

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords.join(', '))
    upsertMeta('name', 'author', themeConfig.siteName)
    upsertLink('canonical', canonicalUrl)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', seoData.ogType ?? 'website')
    upsertMeta('property', 'og:locale', seoData.locale ?? 'en_IN')
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:site_name', themeConfig.siteName)

    if (imageUrl) {
      upsertMeta('property', 'og:image', imageUrl)
      upsertMeta('property', 'og:image:alt', title)
      upsertMeta('name', 'twitter:card', 'summary_large_image')
      upsertMeta('name', 'twitter:image', imageUrl)
      upsertMeta('name', 'twitter:image:alt', title)
    } else {
      upsertMeta('name', 'twitter:card', 'summary')
    }

    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    if (twitterHandle) {
      upsertMeta('name', 'twitter:site', twitterHandle)
    }
  }, [])

  return null
}
