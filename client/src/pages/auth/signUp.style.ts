/** @jsxImportSource @emotion/react */
import { css, type Theme } from "@emotion/react";
import { spaces, borderRadius } from "../../theme/palette/utils";

export const title = ({ typography }: Theme) =>
  css({
    ...typography["headline-04_30"],
    textAlign: "center",
    marginBottom: spaces.md2, // 20px
  });

export const form = css({
  display: "flex",
  flexDirection: "column",
  gap: spaces.xs5, // 10px
  width: "100%",
  maxWidth: "350px",
});

export const label = ({ typography }: Theme) =>
  css({
    ...typography["label-sm-uppercase"],
    fontWeight: 600,
    color: "#555",
  });

export const input = ({ typography }: Theme) =>
  css({
    ...typography["body-07_16"],
    padding: spaces.sm, // 12px
    border: "1px solid #ddd",
    borderRadius: borderRadius.xs3, // 8px 
    outline: "none",
    "&[aria-invalid='true']": { borderColor: "#E53935" },
  });

export const error = ({ typography }: Theme) =>
  css({
    ...typography["caption-small-12"],
    color: "#E53935",
    marginTop: `-${spaces.xs3}`, // -6px
  });

export const serverError = ({ typography }: Theme) =>
  css({
    ...typography["caption-small-14"],
    color: "#E53935",
    textAlign: "center",
    marginTop: spaces.xs4, // 8px
  });

export const forgot = ({ typography }: Theme) =>
  css({
    ...typography["caption-small-12"],
    color: "#666",
    textAlign: "right",
    cursor: "pointer",
    marginTop: spaces.xs2, // 4px
  });

export const button = ({ typography }: Theme) =>
  css({
    ...typography["button-01_14"],
    background: "#7C3AED",
    color: "#fff",
    padding: spaces.sm, // 12px
    border: "none",
    borderRadius: borderRadius.xs3, // 8px 
    cursor: "pointer",
    textAlign: "center",
    marginTop: spaces.xs3, // 6px
    ":disabled": { opacity: 0.6, cursor: "not-allowed" },
    ":hover": { background: "#6D28D9" },
  });

export const or = ({ typography }: Theme) =>
  css({
    ...typography["caption-small-14"],
    textAlign: "center",
    color: "#aaa",
    margin: `${spaces.xs5} 0`, // 10px 0
  });

export const google = ({ typography }: Theme) =>
  css({
    ...typography["button-01_14"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spaces.xs4, // 8px
    padding: spaces.sm, // 12px
    border: "1px solid #ddd",
    borderRadius: borderRadius.xs3, // 8px
    background: "#fff",
    cursor: "pointer",
  });
