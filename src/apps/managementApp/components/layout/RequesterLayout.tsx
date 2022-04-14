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
        <Nav.Link href="/management/reservations">Reservas</Nav.Link>
        <Nav.Link href="/management/laboratories">Laboratórios</Nav.Link>
        <Nav.Link href="/management/users">Usuários</Nav.Link>
      </Layout.NavBar>
      <Layout.Main>{children}</Layout.Main>
    </Layout>
  );
}

export default RequesterLayout;
