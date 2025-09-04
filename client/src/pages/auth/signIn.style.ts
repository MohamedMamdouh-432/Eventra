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
  gap: spaces.sm1, // 14px 
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
  });

export const forgot = ({ typography }: Theme) =>
  css({
    ...typography["caption-small-12"],
    color: "#666",
    textAlign: "right",
    cursor: "pointer",
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
    ":hover": { background: "#6D28D9" },
  });

export const or = ({ typography }: Theme) =>
  css({
    ...typography["caption-small-14"],
    textAlign: "center",
    color: "#aaa",
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

export function error(_theme: Theme): import("@emotion/serialize").Interpolation<Theme> {
  throw new Error("Function not implemented.");
}
