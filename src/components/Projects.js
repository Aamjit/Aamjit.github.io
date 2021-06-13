import React from "react";
import { Carousel } from "react-bootstrap";
import "./Components.scss";

function Projects() {
  return (
    <div id="projects" className="projects-items">
      <container id="projects">
        <h1 className="mt-5 text-center headers">My Works</h1>
        <div className="image-slides">
            <Carousel fade>
              <Carousel.Item>
                <a href="https://i.ibb.co/ZKdbfnD/moonlight-01.jpg">
                  <img
                    src="https://i.ibb.co/q9B2DtQ/moonlight-01.jpg"
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
                <a href="https://i.ibb.co/ncjYkrh/Planet.jpg">
                <img
                  className="d-block w-100 img-2"
                  src="https://i.ibb.co/PhgPCxB/Planet.jpg"
                  alt="Planets"
                /></a>

                <Carousel.Caption>
                  <h3>Planet made of glass</h3>
                  <p>Illustration of a planet which is made up of glass.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          </div>
      </container>
    </div>
  );
}

export default Projects;
