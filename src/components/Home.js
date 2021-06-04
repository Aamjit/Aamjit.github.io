import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Components.css";

function Home() {
  return (
    <div class="container-fluid bg">
      <Row class="r-pic">
        <Col className="col-pic" xs="{6}">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://avatars0.githubusercontent.com/u/54314099?s=460&u=f36910cf0b5cfac4691d8cbf4111c7c5dc4cd15a&v=4"
              alt="DP"
              className="m-5 shadow-g"
              id="profile-image"
              style={{
                borderRadius: "100%",
                width: "100%",
                display: "inline-block",
                padding: "8px",
                background: "#f2f2f2",
                marginBottom: "px",
                boxShadow: "20px 30px 50px 10px rgba(0,0,0,0.6)"
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%", display: "flex" }}
        >
          <h2 class="dropdown-header" id="name-display">
            Amarjit Yanglem
          </h2>

          <h2
            id="notation-name"
            style={{ color: "red", fontSize: "2vw" }}
            class=""
          >
            React Newbie
          </h2>

          <div>
            <a
              className="m-2"
              href="https://www.instagram.com/aamjit_/"
              rel="noreffer"
            >
              <FaInstagram color="#" fontSize="32px" />
            </a>
            <a className="m-2" href="https://github.com/Aamjit" rel="noreffer">
              <FaGithub color="#" fontSize="32px" />
            </a>
            <a
              className="m-2"
              href="https://www.linkedin.com/in/amarjit-yanglem-739538191/"
              rel="noreffer"
            >
              <FaLinkedin color="#" fontSize="32px" />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
