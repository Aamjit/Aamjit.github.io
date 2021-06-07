import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div class="container-fluid bg">
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://avatars0.githubusercontent.com/u/54314099?s=460&u=f36910cf0b5cfac4691d8cbf4111c7c5dc4cd15a&v=4"
              alt="DP"
              className="m-5 shadow-lg"
              id="profile-image"
              style={{
                borderRadius: "100%",
                width: "100%",
                display: "inline-block",
                position: "relative",
                border: "1px solid #ccc",
                padding: "20px",
                background: "#f2f2f2",
                marginBottom: "30px",
                WebkitBoxShadow: "0 28px 16px -26px rgba(0, 0, 0)",
                MozBoxShadow: " 0 28px 16px -26px rgba(0, 0, 0)",
                boxShadow: "0 28px 16px -26px rgba(a, a, a)"
              }}
            />
          </div>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%", display: "flex" }}
        >
          <h1
            style={{
              fontSize: "8vw",
              color: "#02890D"
            }}
            class="dropdown-header"
          >
            Amarjit Yanglem
          </h1>

          <h2 style={{ color: "red", fontSize: "1vw" }} class="dropdown-header">
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
