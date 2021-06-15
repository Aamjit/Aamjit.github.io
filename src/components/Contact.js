import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Components.scss";
import { db } from "../components/Firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message
      })
      .then(() => {
        alert("Feedback has been Submitted! 👌😁");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container-fluid" id="contact">
      <h1 className="text-center mt-5 mb-3  headers">Feedback</h1>
      <Row>
        <Col xs={10} md={8} xl={6} className="container-fluid form-bg">
          <Form
            style={{ background: "" }}
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label-text">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-notice">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label-text">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-notice">
                We'll never share your e-mail with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="floatingTextArea">
              <Form.Label className="label-text">Your Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            {/*<Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
  */}
            <div className="submit-button">
              <Button
                variant="primary"
                type="submit"
                style={{ background: loader ? "#ccc" : "#0D6EFD" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
