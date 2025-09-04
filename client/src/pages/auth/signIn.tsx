
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import signinImg from "@/assets/images/sign/unsplash_EVgsAbL51Rk.png";
import * as styles from "./signIn.style";
import api from "@/lib/axios";
import Content from "@/constants/content.json";
import AuthSplit from "@/components/auth/authSplit";
import { isEmail, isRequired } from "@/utlis/validators";

export default function SignIn() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!isRequired(email)) { setError("Email is required"); return; }
  if (!isEmail(email)) { setError("Enter a valid email"); return; }
  if (!isRequired(password)) { setError("Password is required"); return; }

  try {
    setError(""); 
    setLoading(true);

    const res = await api.post("/auth/login", { email, password });

    const token = res?.data?.token;
    const user  = res?.data?.data?.user || res?.data?.user;

    if (!token || !user) {
      setError("Invalid email or password");
      return; 
    }

    localStorage.setItem("token", token);
    navigate("/");
  } catch (err: any) {
    const backend = err?.response?.data;
    const firstMsg =
      backend?.errors?.[0]?.msg ||
      backend?.message ||
      "Invalid email or password";
    setError(firstMsg);
  } finally {
    setLoading(false);
  }
};

  return (
    <AuthSplit
      imageSide="right"
      imageUrl={signinImg}
      imageTitle={Content.signin.image.title}
      imageSubtitle={Content.signin.image.subtitle}
      imageCta={{
        text: Content.signin.image.cta,
        onClick: () => navigate("/signup"),
      }}
    >
      <div css={styles.title(theme)}>{Content.signin.title}</div>

      <form css={styles.form} onSubmit={submit} noValidate>
        <label css={styles.label(theme)}>{Content.signin.emailLabel}</label>
        <input
          css={styles.input(theme)}
          type="email"
          placeholder={Content.signin.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label css={styles.label(theme)}>{Content.signin.passwordLabel}</label>
        <input
          css={styles.input(theme)}
          type="password"
          placeholder={Content.signin.passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <div css={styles.error(theme)}>{error}</div>}

        <button css={styles.button(theme)} type="submit" disabled={loading}>
          {loading ? "Signing In..." : Content.signin.submit}
        </button>
      </form>
    </AuthSplit>
  );
}
