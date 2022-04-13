import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../shared/components/layout";
import RequireAuth from "../../shared/components/requireAuth";
import HomePage from "./pages/homePage";
import RequesterLayout from "./components/layout/RequesterLayout";
import LaboratoryDataGridPage from "./pages/laboratoryDataGridPage";
import LaboratoryEditFormPage from "./pages/laboratoryEditFormPage";
import LaboratoryAddFormPage from "./pages/laboratoryAddFormPage";

function ManagementApp() {
  return (
    <RequireAuth>
      <RequesterLayout>
        <Routes>
          <Route path="laboratories/">
            <Route index element={<LaboratoryDataGridPage />} />
            <Route path="add" element={<LaboratoryAddFormPage />} />
            <Route path="edit/:labId" element={<LaboratoryEditFormPage />} />
            <Route path="remove" element={<div />} />
          </Route>
        </Routes>
      </RequesterLayout>
    </RequireAuth>
  );
}

export default ManagementApp;
