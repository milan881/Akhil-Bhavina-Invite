export type CubicBezier = [number, number, number, number]

export interface ColorTokens {
  background: string
  gold: string
  goldDark: string
  maroon: string
  text: string
  white: string
}

export interface SemanticColors {
  background: string
  foreground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string
  muted: string
  mutedForeground: string
  border: string
  ring: string
  card: string
  cardForeground: string
}

export interface FontFamilyTokens {
  heading: string
  body: string
  script: string
}

export interface FontSizeToken {
  size: string
  lineHeight: string
  letterSpacing?: string
}

export interface TypographyScale {
  displayXl: FontSizeToken
  displayLg: FontSizeToken
  heading1: FontSizeToken
  heading2: FontSizeToken
  heading3: FontSizeToken
  heading4: FontSizeToken
  bodyLg: FontSizeToken
  body: FontSizeToken
  bodySm: FontSizeToken
  caption: FontSizeToken
  scriptLg: FontSizeToken
  script: FontSizeToken
}

export interface SpacingScale {
  px: string
  0: string
  0.5: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  8: string
  10: string
  12: string
  16: string
  20: string
  24: string
  32: string
  section: string
  sectionSm: string
  container: string
  gutter: string
}

export interface RadiusTokens {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  full: string
}

export interface ShadowTokens {
  xs: string
  sm: string
  md: string
  lg: string
  gold: string
  card: string
  elevated: string
}

export interface DurationTokens {
  instant: number
  fast: number
  normal: number
  slow: number
  slower: number
  reveal: number
}

export interface EasingTokens {
  default: CubicBezier
  elegant: CubicBezier
  entrance: CubicBezier
  exit: CubicBezier
  linear: CubicBezier
}

export interface TransitionPreset {
  property: string
  duration: keyof DurationTokens | number
  easing: keyof EasingTokens | CubicBezier
}

export interface MotionTokens {
  duration: DurationTokens
  ease: EasingTokens
}

export interface BreakpointTokens {
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

export interface Theme {
  colors: ColorTokens
  semantic: SemanticColors
  fonts: FontFamilyTokens
  typography: TypographyScale
  spacing: SpacingScale
  radius: RadiusTokens
  shadows: ShadowTokens
  motion: MotionTokens
  transitions: Record<string, TransitionPreset>
  breakpoints: BreakpointTokens
}
