import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import WrappedForm, {
  FormType,
  IWrappedForm,
} from "../../../shared/components/wrappedForm";
import useMessage from "../../../shared/hooks/useMessage";

interface ILaboratoryForm extends Omit<IWrappedForm, "children" | "title"> {
  type: FormType;
}

function LaboratoryForm({ form, request, type }: ILaboratoryForm) {
  const generatorMessage = useMessage();
  const name = "Laboratório";

  if (request.isSuccess)
    return (
      <WrappedForm.SuccessJumbotron
        title="Sucesso"
        textBody={generatorMessage.successForm(name, type)}
        buttonHref="/management/laboratories"
        buttonText="Voltar"
        variant="success"
      />
    );

  return (
    <WrappedForm
      title={generatorMessage.titleForm(name, type)}
      form={form}
      request={request}
    >
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
    </WrappedForm>
  );
}

export default LaboratoryForm;
