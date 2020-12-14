import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";

function Home() {
    return (
    <div class="container-fluid bg">
        <Row>
            <Col>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://avatars0.githubusercontent.com/u/54314099?s=460&u=f36910cf0b5cfac4691d8cbf4111c7c5dc4cd15a&v=4" className="m-5 shadow-lg" alt="photo" style={{borderRadius:"100%"}}/>

                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center" style={{Row}}>
                <h1 style={{ fontSize: "72px", color: ""}}>Aamjit</h1>
                <h3 style={{color: "red"}}>React Newbie</h3>

                <div>
                <a className="m-2" href="https://www.instagram.com/aamjit_/"  rel="noreffer">
                    <FaInstagram color="#" fontSize="32px"/>
                </a>
                </div>
                
            </Col>
        </Row>
    </div>

    )
}

export default Home
