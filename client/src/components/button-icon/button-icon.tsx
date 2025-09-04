/** @jsxImportSource @emotion/react */
import type { Theme } from "@emotion/react";
import { baseStyles, sizeStyles, variantStyles } from "./button-icon.style";

export type ButtonProps = {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "secondaryInverted" | "tertiary";
  size?: "small" | "medium" | "large";
  color?: string;
  leadIcon?: React.ReactNode;
  trailIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconRenderer = ({ icon }: { icon?: React.ReactNode }) =>
  icon ? <div css={(t: Theme) => variantStyles.iconContainer(t)}>{icon}</div> : null;

export default function Button({
  text,
  href,
  onClick,
  disabled = false,
  variant = "primary",
  size = "medium",
  color,
  leadIcon,
  trailIcon,
  ...rest
}: ButtonProps) {
  const Component: any = href ? "a" : "button";
  return (
    <Component
      css={[
        (t: Theme) => baseStyles(t),
        (t: Theme) => variantStyles[variant](t, disabled),
        color && { color },
        (t: Theme) => sizeStyles[variant][size](t),
      ]}
      href={href}
      onClick={(e: React.MouseEvent) => onClick?.(e)}
      disabled={disabled}
      {...rest}
    >
      <IconRenderer icon={leadIcon} />
      {text}
      <IconRenderer icon={trailIcon} />
    </Component>
  );
}
