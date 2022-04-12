/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element[];
}

function Layout({ children, ...props }: ILayout) {
  const navbar = children.filter((e) => e.type.name === "NavbarPresentation");
  const ma = children.filter((e) => e.type.name === "Main");
  return (
    <>
      <header>{navbar}</header>
      <main className="vh-100" {...props}>
        {ma}
      </main>
    </>
  );
}

export default Layout;
