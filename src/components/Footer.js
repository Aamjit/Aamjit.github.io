import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Container fluid classname="bg-primary pb-2">
        <div className="text-center footer">
          Copyright &copy; 2020-Infinity. No rights reserved
        </div>
      </Container>
    </div>
  );
}

export default Footer;
