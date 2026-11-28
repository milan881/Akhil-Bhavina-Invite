import type { Seo } from '@/types/wedding'

const defaultSiteUrl =
  typeof import.meta.env.VITE_SITE_URL === 'string'
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
    : undefined

export const seo: Seo = {
  title: 'Akhil & Bhavina — Wedding Invitation',
  description:
    'Join Akhil and Bhavina in celebrating their wedding on 24 January 2027 in Raipur.',
  keywords: [
    'Akhil',
    'Bhavina',
    'wedding',
    'invitation',
    'Raipur',
    'Indian wedding',
    '2027',
  ],
  siteUrl: defaultSiteUrl,
  ogImage: '/og-image.svg',
  twitterHandle: undefined,
  ogType: 'website',
  locale: 'en_IN',
}
