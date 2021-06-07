import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown
} from "react-bootstrap";

function Navigation() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className=""
        fill=""
        expand="lg"
        sticky="top"
      >
        <Navbar.Brand href="#home">Portfolio created by React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link href="#pricing">Resume</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
