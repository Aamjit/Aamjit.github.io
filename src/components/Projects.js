import React from "react";
import { Row, Col, Nav, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <div>
      <container id="projects">
        <Row style={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <Col>
            <h1 className="mt-2 text-center">My Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="">Online Shopping</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">NFC in toll</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href=""></Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Some of the Projects i worked on are listed above as links.
                  {"\n"} Please refer them as you wish.
                </Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </container>
    </div>
  );
}

export default Projects;
