import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Components.scss";

function Home() {
  return (
    <div class="container-fluid d-inline-block">
      {/*<Row class="d-flex-justify-contents-center align-items-center r-pic">
        <Col className="col-pic" xs={12} md={7} lg={5} xxl={4}>*/}
      <div className="container-img ">
        
          <img
            src="https://avatars0.githubusercontent.com/u/54314099?s=460&u=f36910cf0b5cfac4691d8cbf4111c7c5dc4cd15a&v=4"
            alt="DP"
            className="dp-img"
            id=""
          />
          <p className="dp-text">(^ o ^)/" Hello Coders!</p>

      </div>

      <Row>
        <Col
          d-flex-justify-content-center
          align-items-center
          xs={12}
          md={7}
          lg={12}
          xxl={4}
        >
          <div class="wrapper">
            <div class="typing-text">
              Responsive Design of Portfolio using React+Bootstrap
            </div>
          </div>
        </Col>
      </Row>
      <div className="name-container">
        <h2 class="name-display">Amarjit Yanglem</h2>

        <h2 className="notation-name" >
          React Newbie
        </h2>

        <div className="icons-link">
          <a
            className="m-2"
            href="https://www.instagram.com/aamjit_/"
            rel="noreffer"
          >
            <FaInstagram className="icons-item"/>
          </a>
          <a className="m-2" href="https://github.com/Aamjit" rel="noreffer">
            <FaGithub className="icons-item"/>
          </a>
          <a
            className="m-2"
            href="https://www.linkedin.com/in/amarjit-yanglem-739538191/"
            rel="noreffer"
          >
            <FaLinkedin className="icons-item"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
