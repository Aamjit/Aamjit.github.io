import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";

function Home() {
    return (
    <div class="container-fluid bg">
        <Row>
            <Col>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://cdn.shopify.com/s/files/1/1004/0238/files/IMG_0721_20e4394f-d3a8-438b-a670-f87004f59be6.jpg?10105982215108757311" className="m-5 shadow-lg" alt="photo" style={{borderRadius:"100%"}}/>

                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <h1 style={{ fontSize: "72px", color: ""}}>Aamjit</h1>
                <h3 style={{color: "red"}}>React Newbie</h3>

                <div>
                <a className="m-2" href="" target="_blank">
                    <FaInstagram color="#" fontSize="32px"/>
                </a>
                </div>
                
            </Col>
        </Row>
    </div>

    )
}

export default Home
