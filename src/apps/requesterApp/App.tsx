import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../../shared/components/layout";
import RequireAuth from "../../shared/components/requireAuth";

function RequesterApp() {
  return (
    <RequireAuth>
      <Routes>
        <Route path="/requester" element={<div>RequesterApp</div>} />
      </Routes>
    </RequireAuth>
  );
}

export default RequesterApp;
