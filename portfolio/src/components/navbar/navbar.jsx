import { React } from "react";
import "./navbar.css";
import { Container, Row, Col } from "react-bootstrap";

function Navigation() {

    let redirect = (event) => {
        let target = event.target.dataset.location;
        window.location.assign(target);
    };

    return (
        <Container className="navBar" fluid>
            <Row>
                <Col sm={12} md={12}>
                    <div>
                        <div className="navHead navItem">
                            <h3 onClick={redirect} data-location="/">Vincent Favorito</h3>
                        </div>
                        <div className="navItem">
                            <h5 onClick={redirect} className="navText" data-location="/projects">Project Vault</h5>
                        </div>
                        <div className="navItem">
                            <h5 onClick={redirect} className="navText" data-location="/contact">Contact Me</h5>
                        </div>
                        <div className="navItem">
                            <h5 onClick={redirect} className="navText" data-location="/resume">Resume</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Navigation;