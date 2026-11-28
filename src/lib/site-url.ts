/**
 * Resolves the canonical site URL for SEO, sitemap, and Open Graph tags.
 */
export function resolveSiteUrl(fallbackOrigin?: string): string {
  const fromEnv = import.meta.env.VITE_SITE_URL

  if (typeof fromEnv === 'string' && fromEnv.length > 0) {
    return fromEnv.replace(/\/$/, '')
  }

  if (fallbackOrigin) {
    return fallbackOrigin.replace(/\/$/, '')
  }

  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return ''
}

export function resolveAbsoluteUrl(
  path: string,
  siteUrl = resolveSiteUrl(),
): string {
  if (path.startsWith('http')) return path
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
