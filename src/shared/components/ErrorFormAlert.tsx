import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Error } from "../hooks/useLoginForm";
import isEmpty from "../util/isEmpty.util";

interface IErrorFormAlert {
  error: Error | null;
}

function ErrorFormAlert({ error }: IErrorFormAlert) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!isEmpty(error)) setShow(true);
  }, [error]);

  return (
    <div>
      {show && (
        <Alert
          key="alertError"
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Ocorreu um erro</Alert.Heading>
          <p>{error?.message}</p>
        </Alert>
      )}
    </div>
  );
}

export default ErrorFormAlert;
