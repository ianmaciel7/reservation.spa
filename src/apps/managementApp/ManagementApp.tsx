import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../shared/components/layout";
import RequireAuth from "../../shared/components/requireAuth";
import HomePage from "./pages/homePage";
import RequesterLayout from "./components/layout/RequesterLayout";
import LaboratoryDataGridPage from "./pages/laboratoryDataGridPage";

function ManagementApp() {
  return (
    <RequireAuth>
      <RequesterLayout>
        <Routes>
          <Route path="/management" element={<HomePage />} />
          <Route path="/laboratories" element={<LaboratoryDataGridPage />} />
        </Routes>
      </RequesterLayout>
    </RequireAuth>
  );
}

export default ManagementApp;
