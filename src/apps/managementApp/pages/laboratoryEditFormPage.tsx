import React from "react";
import LaboratoryForm from "../components/laboratoryForm";
import useLaboratoryEditForm from "../hooks/useLaboratoryEditForm";

function LaboratoryEditFormPage() {
  const { findRequest, editRequest, form } = useLaboratoryEditForm();
  const isLoading = findRequest.isLoading || editRequest.isLoading;

  if (isLoading) return <div>carregando...</div>;
  return <LaboratoryForm form={form} request={editRequest} type="edit" />;
}

export default LaboratoryEditFormPage;
