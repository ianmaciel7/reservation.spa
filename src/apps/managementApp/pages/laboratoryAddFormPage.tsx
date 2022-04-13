import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useLaboratoryAddForm from "../hooks/useLaboratoryAddForm";
import Jumbotron from "../../../shared/components/jumbotron";
import ErrorFormAlert from "../../../shared/components/errorFormAlert";

function LaboratoryAddFormPage() {
  const { addRequest, form } = useLaboratoryAddForm();
  if (addRequest.isSuccess)
    return (
      <Container className="d-flex justify-content-center">
        <Col xs="12" md="6">
          <Jumbotron
            className="mt-5"
            title="Sucesso"
            textBody="laboratório foi adicionando com sucesso clique no botão abaixo para voltar"
            buttonHref="/management/laboratories"
            buttonText="Voltar"
            variant="success"
          />
        </Col>
      </Container>
    );
  return (
    <Container className="pt-5">
      <h1>Adicionar novo laboratório</h1>
      <br />
      <div className="add-lab">
        <Form
          className="add-form"
          onSubmit={(e) => {
            e.preventDefault();      
            form.handleSubmit(e);
          }}
        >
          <ErrorFormAlert error={addRequest.error} />
          <Row>
            <Col sm="12" md="6" lg="4">
              <Form.Group className="mb-3" controlId="loginForm.nameInput">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  name="name"
                  onChange={form.handleChange}
                  value={form.values.name}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="4">
              <Form.Group className="mb-3" controlId="loginForm.numberInput">
                <Form.Label>Número</Form.Label>
                <Form.Control
                  name="number"
                  type="number"
                  defaultValue={0}
                  min="1"
                  onChange={form.handleChange}
                  value={form.values.number}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="4">
              <Form.Group className="mb-3" controlId="loginForm.sectorInput">
                <Form.Label>Setor</Form.Label>
                <Form.Control
                  name="sector"
                  onChange={form.handleChange}
                  value={form.values.sector}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit" className="w-auto">
                Confirma
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default LaboratoryAddFormPage;
