import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import signupImg from "@/assets/images/sign/unsplash_UCbMZ0S-w28.png";
import * as styles from "./signUp.style";
import Content from "@/constants/content.json";
import api from "@/lib/axios";
import { isEmail } from "@/utlis/validators";
import AuthSplit from "@/components/auth/authSplit";

export default function SignUp() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (name.trim().length < 3)
      return setError("Name must be at least 3 characters");
    if (!isEmail(email)) return setError("Enter a valid email");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");
    if (password !== confirm) return setError("Passwords don't match");

    try {
      setError("");
      setLoading(true);

      const payload = { name, email, password, passwordConfirm: confirm };
 

      const res = await api.post("/auth/signup", payload);
      console.log("✅ API Response:", res.data);

      localStorage.setItem("token", res.data.token);
      navigate("/signin");
    } catch (err: any) {
      const backend = err?.response?.data;
      const firstMsg =
        backend?.errors?.[0]?.msg ||
        backend?.message ||
        err.message ||
        "Signup failed. Please try again.";
      console.error("❌ API Error:", backend || err);
      setError(firstMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthSplit
      imageSide="left"
      imageUrl={signupImg}
      imageTitle={Content.signup.image.title}
      imageSubtitle={Content.signup.image.subtitle}
      imageCta={{
        text: Content.signup.image.cta,
        onClick: () => navigate("/signin"),
      }}
    >
      <div css={styles.title(theme)}>{Content.signup.title}</div>
      <form css={styles.form} onSubmit={submit}>
        <label css={styles.label(theme)}>{Content.signup.nameLabel}</label>
        <input
          css={styles.input(theme)}
          placeholder={Content.signup.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label css={styles.label(theme)}>EMAIL</label>
        <input
          css={styles.input(theme)}
          type="email"
          placeholder={Content.signin.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label css={styles.label(theme)}>{Content.signup.passwordLabel}</label>
        <input
          css={styles.input(theme)}
          type="password"
          placeholder={Content.signup.passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label css={styles.label(theme)}>{Content.signup.confirmLabel}</label>
        <input
          css={styles.input(theme)}
          type="password"
          placeholder={Content.signup.confirmPlaceholder}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && <div css={styles.error(theme)}>{error}</div>}

        <button css={styles.button(theme)} type="submit" disabled={loading}>
          {loading ? "Signing Up..." : Content.signup.submit}
        </button>
      </form>
    </AuthSplit>
  );
}
