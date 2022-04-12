import React from "react";

// eslint-disable-next-line import/no-unresolved
import "normalize.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginFormPage from "./shared/pages/loginFormPage";
import RequesterApp from "./apps/requesterApp/RequesterApp";
import ManagementApp from "./apps/managementApp/ManagementApp";
import AuthProvider from "./shared/provider/authProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginFormPage />} />
            </Routes>
          </BrowserRouter>
          <BrowserRouter basename="management">
            <ManagementApp />
          </BrowserRouter>
          <BrowserRouter basename="requester">
            <RequesterApp />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
