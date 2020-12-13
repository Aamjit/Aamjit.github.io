import React from 'react'
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';

function Navigation(){

    return(
        <div>
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">REACT</Navbar.Brand>
    <Nav className="ml-auto">
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
    )
}

export default Navigation;