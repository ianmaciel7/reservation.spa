import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginFormPage from "./page/loginFormPage";

function LoginApp() {
  return (
    <Routes>
      <Route path="/" element={<LoginFormPage />} />
    </Routes>
  );
}

export default LoginApp;
