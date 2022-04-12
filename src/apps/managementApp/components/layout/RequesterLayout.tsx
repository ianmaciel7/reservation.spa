import React from "react";
import { Nav } from "react-bootstrap";
import Layout from "../../../../shared/components/layout";

interface IRequesterLayout {
  children: JSX.Element;
}

function RequesterLayout({ children }: IRequesterLayout) {
  return (
    <Layout>
      <Layout.NavBar>
        <Nav.Link href="#home">Reservas</Nav.Link>
        <Nav.Link href="#features">Laboratórios</Nav.Link>
        <Nav.Link href="#pricing">Usuários</Nav.Link>
      </Layout.NavBar>
      <Layout.Main>{children}</Layout.Main>
    </Layout>
  );
}

export default RequesterLayout;
