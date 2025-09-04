/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { colorOpacity } from "../../theme/palette/color-opacity";

export const Classes = {
  error: "field--error",
  disabled: "field--disabled",
} as const;

export const styles = {
  wrapper: (theme: Theme) =>
    css({
      display: "grid",
      gap: theme.spaces.xs3,
      width: "100%",
    }),

  label: (theme: Theme) =>
    css({
      ...theme.typography["label-sm"],
      color: theme.colors.general.TimberGreen500,
      userSelect: "none",
    }),

  inputWrap: () =>
    css({
      position: "relative",
      width: "100%",
    }),

  input: (
    theme: Theme,
    hasError: boolean,
    withLead: boolean,
    withTrail: boolean
  ) =>
    css({
      width: "100%",
      padding: `${theme.spaces.sm} ${theme.spaces.md}`,
      paddingLeft: withLead ? theme.spaces.xl3 : theme.spaces.md,
      paddingRight: withTrail ? theme.spaces.xl3 : theme.spaces.md,
      borderRadius: theme.borderRadius.sm,
      border: `1px solid ${
        hasError
          ? theme.colors.general.BorderFocus
          : theme.colors.general.BorderSubtle
      }`,
      background: theme.colors.general.White,
      color: theme.colors.general.TimberGreen500,
      outline: "none",
      transition: "border-color .15s ease, box-shadow .15s ease",
      "::placeholder": { color: colorOpacity(theme.colors.general.TimberGreen500, 56) },

      ":hover": {
        borderColor: theme.colors.general.BorderStrong,
        background: colorOpacity(theme.colors.general.White, 96),
      },

      ":focus": {
        borderColor: theme.colors.general.BorderFocus,
        boxShadow: `0 0 0 2px ${colorOpacity(theme.colors.general.BorderFocus, 24)}`,
      },

      [`.${Classes.disabled} &`]: {
        background: colorOpacity(theme.colors.general.White, 60),
        borderColor: colorOpacity(theme.colors.general.BorderSubtle, 40),
        color: colorOpacity(theme.colors.general.TimberGreen500, 40),
        cursor: "not-allowed",
      },

      [`.${Classes.error} &`]: {
        borderColor: theme.colors.general.BorderFocus,
      },
    }),

  affix: (theme: Theme, side: "left" | "right") =>
    css({
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [side]: theme.spaces.md,
      display: "inline-flex",
      alignItems: "center",
      gap: theme.spaces.xs3,
      color: colorOpacity(theme.colors.general.TimberGreen500, 72),
      userSelect: "none",
    }),

  help: (theme: Theme, isError: boolean) =>
    css({
      minHeight: theme.spaces.md,
      ...theme.typography["caption-small-12"],
      color: isError
        ? theme.colors.general.BorderFocus
        : colorOpacity(theme.colors.general.TimberGreen500, 56),
    }),

  toggle: (theme: Theme) =>
    css({
      background: "transparent",
      border: 0,
      padding: 0,
      cursor: "pointer",
      ...theme.typography["label-sm"],
      color: theme.colors.general.TimberGreen500,
      opacity: 0.85,
      ":hover": {
        color: theme.colors.general.BorderFocus,
      },
    }),
};
