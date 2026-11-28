export interface PersonName {
  firstName: string
  fullName?: string
}

export interface Couple {
  bride: PersonName
  groom: PersonName
  displayName: string
  monogram: string
  weddingDate: string
  dateDisplayRange: string
  invitationLabel: string
  openInvitationLabel: string
}

export interface GeoCoordinates {
  latitude: number
  longitude: number
}

export interface GoogleMapsConfig {
  url?: string
  embedUrl?: string
  directionsUrl?: string
}

export interface VenueContact {
  person?: string
  phone?: string
}

export interface Venue {
  title: string
  introduction?: string
  name?: string
  ceremonyName?: string
  city: string
  state?: string
  country: string
  address?: string
  postalCode?: string
  timing?: string
  imageSrc?: string
  imageAlt?: string
  parking?: string
  accommodation?: string
  contact?: VenueContact
  calendarUrl?: string
  maps: GoogleMapsConfig
  coordinates?: GeoCoordinates
  notes?: string
}

export interface Countdown {
  targetDate: string
  label: string
  eventId?: string
  timezone: string
  dateDisplay: string
  timeDisplay: string
  completeMessage: string
  showDays: boolean
  showHours: boolean
  showMinutes: boolean
  showSeconds: boolean
}

export interface Music {
  enabled: boolean
  autoplay: boolean
  loop: boolean
  src: string
  title?: string
  artist?: string
}

export interface Seo {
  title: string
  description: string
  keywords: string[]
  siteUrl?: string
  ogImage?: string
  twitterHandle?: string
  ogType?: string
  locale?: string
}

export interface ThemeConfig {
  siteName: string
  locale: string
  dateFormat: string
  timeFormat: string
  currency: string
}
