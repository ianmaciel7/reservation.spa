import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useLaboratoryAddForm from "../hooks/useLaboratoryAddForm";
import Jumbotron from "../../../shared/components/jumbotron";
import ErrorFormAlert from "../../../shared/components/errorFormAlert";
import LaboratoryForm from "../components/laboratoryForm";

function LaboratoryAddFormPage() {
  const { addRequest, form } = useLaboratoryAddForm();
  return <LaboratoryForm form={form} request={addRequest} type="add" />;
}

export default LaboratoryAddFormPage;
