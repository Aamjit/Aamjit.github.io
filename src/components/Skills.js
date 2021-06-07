import React from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";

function Skills() {
  return (
    <div>
      <container className="skills">
        <h1 className="mt-5 mb-4 text-center">My Experience</h1>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Nav
                  variant="pills"
                  defaultActiveKey="#first"
                  className="skills-list"
                >
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
