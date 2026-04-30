/**
 * COM98 Brain Design Tokens
 * Late-night-cable / surveillance-feed aesthetic. Inspired by mde.tv +
 * fishtank.live: pure-black canvas, brutalist all-caps, yellow gold accent
 * for primary action, red for live/danger, sharp corners, mono for numbers.
 */

export const colors = {
  // Backgrounds — pure black, then graded gray panels
  bg: '#000000',
  surface: '#0a0a0a',
  surfaceRaised: '#141414',
  surfaceHover: 'rgba(255,255,255,0.04)',

  // Glass / panel inset
  glass: 'rgba(255,255,255,0.03)',
  glassBorder: 'rgba(255,255,255,0.10)',

  // Borders — harder than the minds version, more visible chrome lines
  border: 'rgba(255,255,255,0.18)',
  borderSubtle: 'rgba(255,255,255,0.10)',
  borderFocus: '#f5d24a',

  // Text — full white, then knock back for hierarchy
  text: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.78)',
  textMuted: 'rgba(255,255,255,0.48)',
  textInverse: '#000000',

  // Accent — MDE yellow gold (primary action, brand)
  accent: '#f5d24a',
  accentHover: '#ffe066',
  accentMuted: 'rgba(245, 210, 74, 0.14)',
  accentSubtle: 'rgba(245, 210, 74, 0.06)',

  // Live — Fishtank-inspired red (status indicator, "ON AIR", danger)
  live: '#ff3838',
  liveMuted: 'rgba(255, 56, 56, 0.14)',

  // Semantic — kept, but biased toward the show-control-room feel
  success: '#39d353',
  successMuted: 'rgba(57, 211, 83, 0.12)',
  error: '#ff3838',
  errorMuted: 'rgba(255, 56, 56, 0.12)',
  warning: '#f5d24a',
  warningMuted: 'rgba(245, 210, 74, 0.12)',
  info: '#7dd3fc',
  infoMuted: 'rgba(125, 211, 252, 0.12)',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.85)',
  scrim: 'rgba(0, 0, 0, 0.65)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
} as const;

// Sharp corners. Brutalist UI doesn't round.
export const radius = {
  sm: 2,
  md: 2,
  lg: 4,
  xl: 6,
  full: 9999,
} as const;

// Typography is heavier and tighter than minds-brain. Caps variants exist for
// section labels (the FEATURED / SPOTLIGHT / NEW NEW pattern from mde.tv and
// the OFFLINE/ONLINE pattern from fishtank.live).
export const typography = {
  hero: {
    fontSize: 44,
    lineHeight: 48,
    fontFamily: 'Geist-Bold',
    letterSpacing: -1.2,
  },
  h1: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: 'Geist-Bold',
    letterSpacing: -0.6,
  },
  h2: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: 'Geist-Bold',
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Geist-SemiBold',
    letterSpacing: -0.1,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Geist-Regular',
    letterSpacing: 0,
  },
  bodyMedium: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Geist-SemiBold',
    letterSpacing: 0,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Geist-Regular',
    letterSpacing: 0,
  },
  // Brutalist label — ALL CAPS, wide letter-spacing, used for section
  // headers ("CASH", "BURN", "RUNWAY") and status pills ("LIVE", "OFFLINE").
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: 'Geist-Bold',
    letterSpacing: 1.6,
    textTransform: 'uppercase' as const,
  },
  // Mono for numbers — KPI values, currency, counters. Tabular feel.
  mono: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Geist-Medium',
    letterSpacing: 0.4,
    fontVariant: ['tabular-nums'] as ('tabular-nums')[],
  },
} as const;

// Flat, brutalist. Borders do the work, not shadows. Kept for compatibility.
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
} as const;
