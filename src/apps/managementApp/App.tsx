import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../shared/components/layout";
import RequireAuth from "../../shared/components/requireAuth";
import HomePage from "./pages/homePage";
import RequesterLayout from "./components/layout/RequesterLayout";
import LaboratoryDataGridPage from "./pages/laboratoryDataGridPage";
import LaboratoryEditFormPage from "./pages/laboratoryEditFormPage";
import LaboratoryAddFormPage from "./pages/laboratoryAddFormPage";

function ManagementApp() {
  return (
    <RequesterLayout>
      <RequireAuth>
        <Routes>
          <Route path="/management">
            <Route index element={<div>Home</div>} />
            <Route path="laboratories/">
              <Route index element={<LaboratoryDataGridPage />} />
              <Route path="add" element={<LaboratoryAddFormPage />} />
              <Route path="edit/:id" element={<LaboratoryEditFormPage />} />
              <Route path="remove" element={<div />} />
            </Route>
          </Route>
        </Routes>
      </RequireAuth>
    </RequesterLayout>
  );
}

export default ManagementApp;
