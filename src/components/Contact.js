import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Components.scss";

export default function Contact() {
  return (
    <div className="container-fluid bg-" id="contact">
      <Row>
        <Col>
          <h1 style={{ color: "#05A9A6" }} className="text-center m-3">
            Contact Info
          </h1>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={7} className="container-fluid text-darks">
          <Form style={{ background: "" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              <Form.Text className="text-muted">
                We'll never share your e-mail with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            {/*<Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
  */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
