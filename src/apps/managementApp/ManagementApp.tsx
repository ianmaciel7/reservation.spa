import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../shared/auth/requireAuth";
import HomePage from "./pages/homePage";

function ManagementApp() {
  return (
    <RequireAuth>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </RequireAuth>
  );
}

export default ManagementApp;
