import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "./Components.scss";

function Projects() {
  return (
    <div id="projects" className="projects-items">
      <container id="projects">
        <h1 className="mt-5 mb-3 text-center">My Works</h1>
        <Row>
          <Col className="image-slides">
            <Carousel fade>
              <Carousel.Item>
                <a href="https://i.ibb.co/ZKdbfnD/moonlight-01.jpg">
                  <img
                    src="https://i.ibb.co/ZKdbfnD/moonlight-01.jpg"
                    alt="moonlight-01"
                    border="0"
                    className="d-block w-100 img-1"
                  />
                  <Carousel.Caption>
                    <h3>Two birds in a full moon night</h3>
                    <p>
                      This is an illustration of tree and birds silhoutte
                      created using Adobe Illustrator.
                    </p>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-2"
                  src="https://i.ibb.co/ncjYkrh/Planet.jpg"
                  alt=""
                />

                <Carousel.Caption>
                  <h3>Planet made of glass</h3>
                  <p>Illustration of a planet which is made up of glass.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/*<Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>*/}
            </Carousel>
          </Col>
        </Row>
      </container>
    </div>
  );
}

export default Projects;
