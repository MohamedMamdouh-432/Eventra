export function pixelsToRem(pixels: number, baseFontSize: number = 16): string {
  return pixels / baseFontSize + "rem";
}

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 600,
  bold: 700,
} as const;

export const letterSpacings = {
  xs: "0.04em",
  sm: "1px",
  md: "2px",
  lg: "0.15em",
} as const;

export const fonts = {
  fontBold: "IBMPlexSansArabic-Bold",
  fontSemiBold: "IBMPlexSansArabic-SemiBold",
  fontExtraLight: "IBMPlexSansArabic-ExtraLight",
  fontRegular: "IBMPlexSansArabic-Regular",
  fontThin: "IBMPlexSansArabic-Thin",
} as const;

export const typography = {
  // Headline
  "headline-01_80": {
    fontSize: pixelsToRem(80),
    lineHeight: pixelsToRem(80),
    fontWeight: fontWeights.bold,
  },
  "headline-02_60": {
    fontSize: pixelsToRem(60),
    lineHeight: pixelsToRem(60),
    fontWeight: fontWeights.bold,
  },
  "headline-03_40": {
    fontSize: pixelsToRem(40),
    lineHeight: pixelsToRem(40),
    fontWeight: fontWeights.bold,
  },
  "headline-04_30": {
    fontSize: pixelsToRem(30),
    lineHeight: pixelsToRem(30),
    fontWeight: fontWeights.bold,
  },
  "headline-04_20": {
    fontSize: pixelsToRem(20),
    lineHeight: pixelsToRem(20),
    fontWeight: fontWeights.bold,
  },

  // Subtitle
  "subtitle-03_24": {
    fontSize: pixelsToRem(24),
    lineHeight: pixelsToRem(28),
    fontWeight: fontWeights.regular,
  },

  // Body
  "body-07_16": {
    fontSize: pixelsToRem(16),
    lineHeight: pixelsToRem(24),
    fontWeight: fontWeights.regular,
  },

  // Caption
  "caption-large": {
    fontSize: pixelsToRem(20),
    lineHeight: pixelsToRem(24),
    fontWeight: fontWeights.regular,
  },
  "caption-medium": {
    fontSize: pixelsToRem(16),
    lineHeight: pixelsToRem(24),
    fontWeight: fontWeights.regular,
  },
  "caption-small-14": {
    fontSize: pixelsToRem(14),
    lineHeight: pixelsToRem(14),
    fontWeight: fontWeights.regular,
  },
  "caption-small-12": {
    fontSize: pixelsToRem(12),
    lineHeight: pixelsToRem(12),
    fontWeight: fontWeights.regular,
  },
  "caption-extra-small": {
    fontSize: pixelsToRem(8),
    fontWeight: fontWeights.regular,
  },

  // Button
  "button-02_12": {
    fontSize: pixelsToRem(12),
    textTransform: "uppercase" as const,
    letterSpacing: pixelsToRem(2.1),
    lineHeight: pixelsToRem(14),
    fontWeight: fontWeights.regular,
  },

  // Labels
  "label-lg": {
    fontSize: pixelsToRem(16),
    lineHeight: pixelsToRem(20),
    fontWeight: fontWeights.regular,
  },
  "label-md": {
    fontSize: pixelsToRem(14),
    lineHeight: pixelsToRem(16),
    fontWeight: fontWeights.regular,
  },
  "label-sm": {
    fontSize: pixelsToRem(12),
    lineHeight: pixelsToRem(16),
    fontWeight: fontWeights.regular,
  },
  // Buttons
"button-01_14": {
  fontSize: pixelsToRem(14),
  textTransform: "uppercase" as const,
  letterSpacing: letterSpacings.sm,
  lineHeight: pixelsToRem(16),
  fontWeight: fontWeights.medium,
},

// Labels (uppercase small)
"label-sm-uppercase": {
  fontSize: pixelsToRem(12),
  lineHeight: pixelsToRem(16),
  fontWeight: fontWeights.regular,
  textTransform: "uppercase" as const,
},

} as const;

export type Typography = typeof typography;
export type TypographyNames = keyof Typography;
export const typographyNames = Object.keys(typography) as Array<TypographyNames>;
