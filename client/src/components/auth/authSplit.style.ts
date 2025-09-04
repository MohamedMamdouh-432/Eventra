/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { spaces, borderRadius } from "../../theme/palette/utils"; 

export const container = css({
  display: "flex",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

export const image = (url: string) =>
  css({
    flex: 1,
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

export const overlay = css({
  textAlign: "center",
  padding: spaces.xl, // 32px 
  borderRadius: borderRadius.xs3, // 8px
  h2: {
    fontSize: "2rem",
    marginBottom: spaces.sm, // 12px
  },
  p: {
    fontSize: "1rem",
    marginBottom: spaces.md2, // 20px
  },
  button: {
    padding: `${spaces.xs5} ${spaces.md}`, // 10px 16px
    background: "#fff",
    border: "none",
    borderRadius: borderRadius.xs2, // 4px
    cursor: "pointer",
  },
});

export const form = css({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  background: "#f9f9f9",
  // padding: spaces.xl2,
});
