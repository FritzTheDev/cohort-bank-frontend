import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>MRM Practice App</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
      <LinkContainer to="/branches">
        <Nav.Link>Branches</Nav.Link>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)