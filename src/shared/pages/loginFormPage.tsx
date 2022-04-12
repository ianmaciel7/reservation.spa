/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import ErrorFormAlert from "../components/errorFormAlert";
import useLoginForm, { Error } from "../hooks/useLoginForm";
import Layout from "../components/layout/index";
import "./loginFormPage.scss";

function LoginFormPage() {
  const { loginRequest, form } = useLoginForm();

  if (loginRequest.isLoading) return <div>Loading...</div>;
  return (
    <Layout>
      <Layout.NavBar />
      <Layout.Main>
        <Form
          className="login-form"
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
      </Layout.Main>
    </Layout>
  );
}

export default LoginFormPage;
