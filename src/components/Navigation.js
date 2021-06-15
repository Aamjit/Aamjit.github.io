import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Components.scss";
/*import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Dropdown from "react-bootstrap/esm/DropdownMenu"; */

function Navigation() {
  return (
    // <Container class="nav-full">
    <Navbar collapseOnSelect variant="dark" bg="dark" expand="md" width-100>
      <Navbar.Brand href="#home" id="nav-name">
        <strong>A</strong>MARJIT <strong>Y</strong>ANGLEM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className="menu-toggle" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg"
          style={{ maxHeight: "200px" }}
          navbarScroll
        >
          <Nav.Link href="#home" className="menu-list">
            Home
          </Nav.Link>
          <Nav.Link href="#projects" className="menu-list">
            My Works
          </Nav.Link>
          <Nav.Link href="#skills" className="menu-list">
            Skills
          </Nav.Link>
          <Nav.Link href="#contact" className="menu-list">
            Contact
          </Nav.Link>
          {/* <NavDropdown title="More" id="navbarScrollingDropdown" className="menu-list">
            {/*<NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4"></NavDropdown.Item>
  <NavDropdown.Divider />
            <NavDropdown.Item href="#" className="menu-list">
              Searching for something?
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form className="d-flex flex-row mr-2 form-search">
            <FormControl
              type="search"
              placeholder="Search"
              className="input-search"
            />
            <Button variant="outline-success" className="search-btn">
              <div class="search-text">Search</div>
            </Button>
          </Form> */}
      </Navbar.Collapse>
    </Navbar>
    // </Container>
  );
}

export default Navigation;
