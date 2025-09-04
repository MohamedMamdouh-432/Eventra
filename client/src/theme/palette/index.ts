import { eventThemeLight } from "./all-color";
import { borderRadius, breakPoints, elevations, spaces } from "./utils";
import { typography } from "./fonts";

const general = {
  White: eventThemeLight.White,
  Transparent: eventThemeLight.Transparent,

  // backgrounds
  Neutral300: eventThemeLight.Neutral300,
  BrandGradient: eventThemeLight.BrandGradient,

  BreakerBay300: eventThemeLight.StateHover,
  BreakerBay500: eventThemeLight.BrandNavy700,
  BreakerBay600: eventThemeLight.BrandNavy800,
  BreakerBay700: eventThemeLight.BrandNavy900,

  // text 
  TimberGreen500: eventThemeLight.TextPrimary,
  TimberGreen600: eventThemeLight.BrandNavy900,

  // borders
  BorderSubtle: eventThemeLight.BorderSubtle,
  BorderStrong: eventThemeLight.BorderStrong,
  BorderFocus: eventThemeLight.BorderFocus,

  // extra used by inverted/hover
  Purple500: eventThemeLight.BrandPurple500,
  Purple600: eventThemeLight.BrandPurple600,
  Purple700: eventThemeLight.BrandPurple700,

  // light bg for hover in secondary buttons
  MintCream: eventThemeLight.Neutral300,
};

export const DefaultTheme = {
  colors: {
    general,
    
    primary: {
      light: eventThemeLight.BrandPurple600,
      main: eventThemeLight.BrandNavy700,
      dark: eventThemeLight.BrandNavy900,
    },
    secondary: {
      light: eventThemeLight.Neutral300,
      main: eventThemeLight.TextPrimary,
      dark: eventThemeLight.BrandNavy900,
    },
  },
  borderRadius,
  breakPoints,
  elevation: elevations,
  spaces,
  typography,
};

export type AppTheme = typeof DefaultTheme;
