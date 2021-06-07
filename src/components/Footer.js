import React from "react";
import { Container } from "react-bootstrap";
import "./Components.scss";

function Footer() {
  return (
    <div className="foot-main" id="foot">
      <Container fluid classname="bg-primary pb-2">
        <div className="text-center footer">
          Copyright &copy; Amarjit Yanglem 2020-Infinity. No rights reserved
        </div>
      </Container>
    </div>
  );
}

export default Footer;
