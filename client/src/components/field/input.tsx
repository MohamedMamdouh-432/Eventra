/** @jsxImportSource @emotion/react */
import clsx from "clsx";
import { forwardRef, useId, useMemo, useState } from "react";
import { useTheme } from "@emotion/react";
import { Classes, styles } from "./input.style";

export type FieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  hint?: string;
  error?: string;
  lead?: React.ReactNode;
  trail?: React.ReactNode;
  passwordToggle?: boolean; 
};

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  {
    id,
    label,
    hint,
    error,
    type = "text",
    disabled,
    lead,
    trail,
    passwordToggle = true,
    className,
    ...rest
  },
  ref
) {
  const theme = useTheme();
  const autoId = useId();
  const inputId = id ?? autoId;

  const isPassword = type === "password";
  const [show, setShow] = useState(false);
  const effectiveType = isPassword && show ? "text" : type;

  const trailNode = useMemo(() => {
    if (trail) return trail;
    if (!isPassword || !passwordToggle) return null;
    return (
      <button
        type="button"
        css={styles.toggle(theme)}
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? "Hide" : "Show"}
      </button>
    );
  }, [trail, isPassword, passwordToggle, show, theme]);

  const wrapperClasses = clsx(
    className,
    disabled && Classes.disabled,
    !!error && Classes.error
  );

  return (
    <label htmlFor={inputId} css={styles.wrapper(theme)} className={wrapperClasses}>
      {label ? <span css={styles.label(theme)}>{label}</span> : null}

      <div css={styles.inputWrap()}>
        {lead ? <span css={styles.affix(theme, "left")}>{lead}</span> : null}

        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          css={styles.input(theme, !!error, !!lead, !!trailNode)}
          type={effectiveType}
          {...rest}
        />

        {trailNode ? <span css={styles.affix(theme, "right")}>{trailNode}</span> : null}
      </div>

      <div css={styles.help(theme, !!error)}>{error ?? hint ?? " "}</div>
    </label>
  );
});

export default Field;
