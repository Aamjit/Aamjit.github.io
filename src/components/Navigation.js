import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./Components.css";

function Navigation() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="me-auto"
        fill="tabs"
        expand="lg"
        id="home"
      >
        <Navbar.Brand href="#home" id="nav-name">
          AMARJIT YANGLEM
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <Nav.Link href="#features">Projects</Nav.Link>

          <Nav.Link href="#pricing">Contact</Nav.Link>

          <Nav.Link href="#pricing">Resume</Nav.Link>
        </Nav>
        <Form className="mb-3 form-search" inline display-flex-right>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary" class="btn-search">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
