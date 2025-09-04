/** @jsxImportSource @emotion/react */
import { Navigate, Route, Routes } from "react-router-dom";
import { Global, css } from "@emotion/react";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";

function App() {
  return (
    <>
      {/* global styles */}
      <Global
        styles={css`
          html,
          body,
          #root {
            height: 100%;
            margin: 0;
            padding: 0;
          }
        `}
      />

      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
