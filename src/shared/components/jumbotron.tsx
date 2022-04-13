/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import "./jumbotron.scss";

type Variant = "success" | "danger";

interface Jumbotron
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  title: string;
  textBody: string;
  buttonHref: string;
  variant: Variant;
  buttonText: string;
}

function Jumbotron({
  variant,
  textBody,
  title,
  className,
  buttonHref,
  buttonText,
  ...props
}: Jumbotron) {
  const [variantClassName, setVariantClassName] = useState<string>();
  useMemo(() => {
    switch (variant) {
      case "success":
        setVariantClassName("alert alert-success");
        break;

      case "danger":
        setVariantClassName("alert alert-danger");
        break;

      default:
        break;
    }
  }, []);

  return (
    <Container>
      <div className={`jumbotron ${variantClassName} ${className}`} {...props}>
        <h1>{title}</h1>
        <p className="lead">{textBody}</p>
        <a className="btn btn-lg btn-primary" href={buttonHref} role="button">
          {buttonText} »
        </a>
      </div>
    </Container>
  );
}

export default Jumbotron;
