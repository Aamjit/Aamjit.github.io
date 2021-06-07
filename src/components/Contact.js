import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="container-fluid bg-">
      <Row>
        <Col>
          <h1 style={{ color: "#05A9A6" }} className="text-center m-3">
            Contact Info
          </h1>
        </Col>
      </Row>

      <Row>
        <Col sm="10" lg="8" md="8" className="container-fluid text-light">
          <Form style={{ background: "lightblue" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label
                style={{ color: "#621232", width: "90%", padding: "14px" }}
              >
                Name
              </Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" />
              <Form.Text className="text-muted" style={{ paddingTop: "4px" }}>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label
                style={{ color: "#621232", width: "90%", padding: "14px" }}
              >
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted" style={{ paddingTop: "4px" }}>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label
                style={{ color: "#621232", width: "90%", padding: "14px" }}
              >
                Enter your message
              </Form.Label>
              <Form.Control type="text" placeholder="Enter your message." />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                style={{ color: "#621232" }}
                type="checkbox"
                label="Check me out"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
