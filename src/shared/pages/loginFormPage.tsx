/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import ErrorFormAlert from "../components/ErrorFormAlert";
import useLoginForm, { Error } from "../hooks/useLoginForm";

function LoginFormPage() {
  const { loginRequest, form } = useLoginForm();

  if (loginRequest.isLoading) return <div>Loading...</div>;
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(e);
        }}
      >
        <ErrorFormAlert error={loginRequest.error} />
        <Form.Group className="mb-3" controlId="loginForm.usernameInput">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            name="username"
            onChange={form.handleChange}
            value={form.values.username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginForm.passwordInput">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            name="password"
            onChange={form.handleChange}
            value={form.values.password}
            type="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Logar
        </Button>
      </Form>
    </Container>
  );
}

export default LoginFormPage;
