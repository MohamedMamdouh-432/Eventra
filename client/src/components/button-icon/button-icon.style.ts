/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { colorOpacity } from "../../theme/palette/color-opacity";


export const baseStyles = ({ spaces, borderRadius }: Theme) =>
  css({
    padding: 0,
    margin: 0,
    background: "transparent",
    boxSizing: "border-box",
    border: "none",
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    gap: spaces.sm,
    borderRadius: borderRadius.xl4,
    whiteSpace: "nowrap",
    "& > *": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export const sizeStyles = {
  primary: {
    small: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.xs5} ${spaces.sm}`,
        ...typography["label-sm"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.sm} ${spaces.lg}`,
          ...typography["label-sm"],
          letterSpacing: 0,
        },
      }),
    medium: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.xs5} ${spaces.sm1}`,
        ...typography["label-md"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          ...typography["label-md"],
          padding: `${spaces.md} ${spaces.lg}`,
          letterSpacing: 0,
        },
      }),
    large: ({ spaces, breakPoints, typography }: Theme) =>
      css({
        padding: `${spaces.sm1} ${spaces.md2}`,
        ...typography["label-lg"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          ...typography["label-lg"],
          padding: `${spaces.md} ${spaces.lg}`,
          letterSpacing: 0,
        },
      }),
  },
  secondary: {
    small: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.xs5} ${spaces.sm}`,
        ...typography["label-sm"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.sm} ${spaces.lg}`,
          ...typography["label-sm"],
          letterSpacing: 0,
        },
      }),
    medium: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.xs5} ${spaces.sm1}`,
        ...typography["label-md"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.md} ${spaces.lg}`,
          ...typography["label-md"],
          letterSpacing: 0,
        },
      }),
    large: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.sm1} ${spaces.md2}`,
        ...typography["label-lg"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.md} ${spaces.lg}`,
          ...typography["label-lg"],
          letterSpacing: 0,
        },
      }),
  },
  secondaryInverted: {
    small: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.xs5} ${spaces.sm}`,
        ...typography["label-sm"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.sm} ${spaces.lg}`,
          ...typography["label-sm"],
          letterSpacing: 0,
        },
      }),
    medium: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        padding: `${spaces.xs5} ${spaces.sm1}`,
        ...typography["label-md"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.md} ${spaces.lg}`,
          ...typography["label-md"],
          letterSpacing: 0,
        },
      }),
    large: ({ spaces, breakPoints, typography }: Theme) =>
      css({
        padding: `${spaces.sm1} ${spaces.md2}`,
        ...typography["label-lg"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          padding: `${spaces.md} ${spaces.lg}`,
          ...typography["label-lg"],
          letterSpacing: 0,
        },
      }),
  },
  tertiary: {
    small: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        paddingBottom: `${spaces.xs2}`,
        ...typography["label-sm"],
        [`@media (min-width:${breakPoints.desktop})`]: {
          paddingBottom: `${spaces.xs2}`,
          ...typography["label-sm"],
          letterSpacing: 0,
        },
      }),
    medium: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        paddingBottom: `${spaces.xs5}`,
        ...typography["label-md"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          ...typography["label-md"],
          letterSpacing: 0,
        },
      }),
    large: ({ spaces, typography, breakPoints }: Theme) =>
      css({
        paddingBottom: `${spaces.xs5}`,
        ...typography["label-lg"],
        letterSpacing: 0,
        [`@media (min-width:${breakPoints.desktop})`]: {
          paddingBottom: `${spaces.xs5}`,
          ...typography["label-lg"],
          letterSpacing: 0,
        },
      }),
  },
};

export const variantStyles = {
  primary: ({ colors }: Theme, disabled: boolean) =>
    css({
      backgroundColor: disabled
        ? colorOpacity(colors.general.BreakerBay500, 50)
        : colors.general.BreakerBay500,
      color: colors.general.White,
      cursor: disabled ? "context-menu" : "pointer",
      "&:hover": {
        backgroundColor: disabled
          ? colorOpacity(colors.general.BreakerBay500, 50)
          : colors.general.BreakerBay700,
      },
      "&:active": {
        backgroundColor: disabled
          ? colorOpacity(colors.general.BreakerBay500, 50)
          : colorOpacity(colors.general.BreakerBay500, 80),
      },
    }),
  secondary: ({ colors, spaces }: Theme, disabled: boolean) =>
    css({
      outline: `${spaces.xxs2} solid ${
        disabled
          ? colorOpacity(colors.general.TimberGreen500, 50)
          : colors.general.TimberGreen500
      }`,
      backgroundColor: "transparent",
      color: disabled
        ? colorOpacity(colors.general.TimberGreen500, 50)
        : colors.general.TimberGreen500,
      cursor: disabled ? "context-menu" : "pointer",
      "&:hover": {
        backgroundColor: disabled ? "transparent" : colors.general.MintCream,
        color: disabled
          ? colorOpacity(colors.general.TimberGreen500, 50)
          : colors.general.TimberGreen500,
        outline: disabled
          ? `${spaces.xxs2} solid ${colorOpacity(colors.general.TimberGreen500, 50)}`
          : `${spaces.xxs2} solid ${colors.general.TimberGreen500}`,
      },
      "&:active": {
        color: disabled
          ? colorOpacity(colors.general.TimberGreen500, 50)
          : colors.general.TimberGreen500,
        backgroundColor: disabled
          ? "transparent"
          : colorOpacity(colors.general.MintCream, 80),
        outline: `${spaces.xxs2} solid ${colorOpacity(colors.general.TimberGreen500, 60)}`,
      },
    }),
  secondaryInverted: ({ colors, spaces }: Theme, disabled: boolean) =>
    css({
      outline: `${spaces.xxs2} solid ${
        disabled ? colorOpacity(colors.general.White, 50) : colors.general.White
      }`,
      backgroundColor: "transparent",
      color: disabled ? colorOpacity(colors.general.White, 50) : colors.general.White,
      cursor: disabled ? "context-menu" : "pointer",
      "&:hover": {
        backgroundColor: disabled ? "transparent" : colors.general.BreakerBay300,
        color: disabled ? colorOpacity(colors.general.TimberGreen500, 50) : colors.general.White,
        outline: disabled
          ? `${spaces.xxs2} solid ${colorOpacity(colors.general.TimberGreen500, 50)}`
          : `${spaces.xxs2} solid ${colors.general.White}`,
      },
      "&:active": {
        color: disabled ? colorOpacity(colors.general.TimberGreen500, 50) : colors.general.White,
        backgroundColor: disabled ? "transparent" : colorOpacity(colors.general.BreakerBay300, 60),
        outline: `${spaces.xxs2} solid ${colors.general.White}`,
      },
    }),
  tertiary: ({ colors, spaces }: Theme, disabled: boolean) =>
    css({
      borderRadius: 0,
      cursor: disabled ? "context-menu" : "pointer",
      backgroundColor: "transparent",
      color: disabled ? colors.general.TimberGreen500 : colors.general.BreakerBay600,
      textDecoration: "none",
      borderWidth: 0,
      borderBottomWidth: `${spaces.xxs2}`,
      borderStyle: "solid",
      borderColor: disabled ? colors.general.TimberGreen600 : colors.general.BreakerBay600,
      margin: "0",
      "&:hover": {
        borderBottomWidth: disabled ? `${spaces.xxs2}` : `${spaces.xs}`,
        borderColor: disabled ? colors.general.TimberGreen600 : colors.general.BreakerBay500,
        color: disabled ? colors.general.TimberGreen600 : colors.general.BreakerBay500,
      },
      "&:active": {
        borderBottomWidth: disabled ? `${spaces.xxs2}` : `${spaces.xs}`,
        borderColor: disabled ? colors.general.TimberGreen600 : colors.general.BreakerBay600,
        color: disabled ? colors.general.TimberGreen600 : colors.general.BreakerBay600,
      },
    }),
  iconContainer: ({ spaces }: Theme) =>
    css({
      display: "inline-block",
      height: "100%",
      width: "100%",
      maxHeight: spaces.lg,
      maxWidth: spaces.lg,
    }),
};
