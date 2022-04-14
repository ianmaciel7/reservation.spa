import React from "react";

// eslint-disable-next-line import/no-unresolved
import "normalize.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RequesterApp from "./apps/requesterApp/App";
import ManagementApp from "./apps/managementApp/App";
import AuthProvider from "./shared/provider/authProvider";
import LoginApp from "./apps/loginApp/App";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <LoginApp />
            <ManagementApp />
            <RequesterApp />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
