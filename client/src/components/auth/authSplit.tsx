/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import * as styles from "./authSplit.style";

interface AuthSplitProps {
  children: ReactNode;
  imageSide?: "left" | "right";
  imageUrl: string;
  imageTitle: string;
  imageSubtitle: string;
  imageCta: { text: string; onClick: () => void };
}

export default function AuthSplit({
  children,
  imageSide = "right",
  imageUrl,
  imageTitle,
  imageSubtitle,
  imageCta,
}: AuthSplitProps) {
  return (
    <div css={styles.container}>
      {imageSide === "left" && (
        <div css={styles.image(imageUrl)}>
          <div css={styles.overlay}>
            <h2>{imageTitle}</h2>
            <p>{imageSubtitle}</p>
            <button onClick={imageCta.onClick}>{imageCta.text}</button>
          </div>
        </div>
      )}

      <div css={styles.form}>{children}</div>

      {imageSide === "right" && (
        <div css={styles.image(imageUrl)}>
          <div css={styles.overlay}>
            <h2>{imageTitle}</h2>
            <p>{imageSubtitle}</p>
            <button onClick={imageCta.onClick}>{imageCta.text}</button>
          </div>
        </div>
      )}
    </div>
  );
}
