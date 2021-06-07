import React from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";

function Skills() {
  return (
    <div>
      <container id="skills">
        <Row style={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <Col>
            <h1 className="mt-2 text-center">My Experience</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="">HTML</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">CSS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">MySQL</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">ReactJS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">C</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Java</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">VS Code</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </container>
    </div>
  );
}

export default Skills;
