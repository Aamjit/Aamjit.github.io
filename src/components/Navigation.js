import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  FormGroup,
  Col,
  Row,
  NavDropdown
} from "react-bootstrap";
import "./Components.css";
/*import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Dropdown from "react-bootstrap/esm/DropdownMenu"; */

function Navigation() {
  return (
    <Container class="nav-full" fluid="xxl" justify-content-center>
      <Navbar bg="dark" variant="dark" className="" expand="xxl" id="home">
        <Row classname="" xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
          <Col xxl="12" xl="12" lg="12" md="12" sm="12" xs="12">
            <Navbar.Brand href="#home" id="nav-name">
              <strong>A</strong>MARJIT <strong>Y</strong>ANGLEM
            </Navbar.Brand>
          </Col>
        </Row>
        <Row d-flex-justify-content-right>
          <Col
            xxl="12"
            xl="12"
            lg="12"
            md="12"
            sm="12"
            xs="12"
            order="last"
            className="mt-2"
          >
            <Form className="" inline>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mb-2 mt-2"
                />
                <Button className="btn-search" variant="outline-secondary">
                  Search
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        {/*
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <Nav.Link href="#features">Projects</Nav.Link>

          <Nav.Link href="#pricing">Contact</Nav.Link>

          <Nav.Link href="#pricing">Resume</Nav.Link>
        </Nav>
        */}
        <Row>
          <Col
            xxl="auto"
            xl="auto"
            lg="auto"
            md="auto"
            sm="auto"
            xs="auto"
            order="last"
            inline
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="mt-2"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" style={{ maxHeight: "200px" }}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#projects">My Works</Nav.Link>

                <NavDropdown
                  title="More"
                  id="collasible-nav-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
                  <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                  <NavDropdown.Item href="#Foot">End</NavDropdown.Item>
                </NavDropdown>
                {/*<NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Links
            </Nav.Link>
      */}
              </Nav>
            </Navbar.Collapse>
          </Col>

          {/*<Dropdown menuAlign="">
              <Dropdown.Toggle variant="success" id="ddown-basic">
                <HiViewList color="#" size="32px" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <DropdownItem href="#">Home</DropdownItem>
                <DropdownItem href="#">Skills</DropdownItem>
                <DropdownItem href="#">My Works</DropdownItem>
                <DropdownItem href="#">Contact</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
      */}
        </Row>
      </Navbar>
    </Container>
  );
}

export default Navigation;
