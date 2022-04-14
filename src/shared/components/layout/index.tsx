import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LayoutPresentation from "./layout";
import "./layout.scss";

interface ILayout {
  children: JSX.Element[];
}

interface IChildren {
  // eslint-disable-next-line react/require-default-props
  children?: JSX.Element | JSX.Element[];
}

function Main({ children }: IChildren) {
  return <div className="layout-main">{children}</div>;
}

function NavbarPresentation({ children }: IChildren) {
  return (
    <Navbar className="layout-navbar" bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Reserva-APP</Navbar.Brand>
        <Nav className="me-auto">{children}</Nav>
      </Container>
    </Navbar>
  );
}

function Layout({ children }: ILayout) {
  return <LayoutPresentation>{children}</LayoutPresentation>;
}

Layout.Main = Main;
Layout.NavBar = NavbarPresentation;

export default Layout;
