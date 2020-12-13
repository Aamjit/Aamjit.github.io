import React from 'react'
import { Row, Col, Nav, Card, Button } from 'react-bootstrap';

function Projects() {
    return (
        <div>
            <container id="projects">
                <Row>
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
                                    <Nav.Link href="#first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                   <Nav.Link href="#link">Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Card.Header>
                            <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </container>
        </div>
    )
}

export default Projects
