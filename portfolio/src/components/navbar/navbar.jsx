import { React } from "react";
import { Row, Col } from "react-bootstrap"
import "./navbar.css"

function Navigation() {

    let redirect = (event) => {
        let target= event.target.dataset.location;
        window.location.assign("http://localhost:3000" + target);
    };

    return (
       <Row className="navBar">
           <Col sm={2} className="navItem" onClick={redirect} >
           <h3 data-location="/">Vincent Favorito</h3>
           </Col>
           <Col sm={2} className="navItem" onClick={redirect}>
           <h5 className="navText" data-location="/projects">Project Vault</h5>
           </Col>
           <Col sm={2} className="navItem" onClick={redirect}>
           <h5 className="navText" data-location="/contact">Contact Me</h5>
           </Col>
           <Col sm={2} className="navItem" onClick={redirect}>
           <h5 className="navText" data-location="/resume">Resume</h5>
           </Col>
       </Row>
    );
};

export default Navigation;