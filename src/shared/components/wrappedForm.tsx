/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { FormikConfig, FormikProps } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { UseMutationResult } from "react-query";
import { Error } from "../../apps/loginApp/hooks/useLoginForm";
import ErrorFormAlert from "./errorFormAlert";
import Jumbotron, { IJumbotron } from "./jumbotron";

export type FormType = "edit" | "add";

export interface IWrappedForm {
  title: string;
  children: JSX.Element | JSX.Element[];
  request: UseMutationResult<any, Error, any, any>;
  form: FormikProps<any>;
}

function SuccessJumbotron({ ...props }: IJumbotron) {
  return (
    <Container className="d-flex justify-content-center">
      <Col xs="12" md="6">
        <Jumbotron className="mt-5" {...props} />
      </Col>
    </Container>
  );
}

function WrappedForm({ title, children, request, form }: IWrappedForm) {
  return (
    <Container className="pt-5">
      <h1>{title}</h1>
      <br />
      <div className="wrapped-Form">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(e);
          }}
        >
          <ErrorFormAlert error={request.error} />
          {children}
        </Form>
      </div>
    </Container>
  );
}

WrappedForm.SuccessJumbotron = SuccessJumbotron;
export default WrappedForm;
