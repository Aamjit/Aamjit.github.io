import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default function Contact() {
    return (
        <div className="container-fluid bg-">
            <Row>
                <Col>
                    <h1 className="text-center m-3 text-light">Contact Info</h1>
                </Col>
            </Row>

            <Row>
                <Col sm="12" lg="8" md="8" className="container-fluid text-light">
                    <Form>

                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Enter your message</Form.Label>
                            <Form.Control type="text" placeholder="Enter your message." />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>                    
                </Col>
            </Row>
        </div>
    )
}
