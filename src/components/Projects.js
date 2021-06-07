import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

function Projects() {
  return (
    <div id="projects">
      <container id="projects">
        <Row style={{ paddingTop: "40px", paddingBottom: "20px" }}>
          <Col>
            <h1 className="mt-2 text-center">My Works</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://github.com/Aamjit/Aamjit.profile/blob/master/src/components/files/Planet.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://github.com/Aamjit/Aamjit.profile/blob/master/src/components/files/moonlight-01.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </container>
    </div>
  );
}

export default Projects;
