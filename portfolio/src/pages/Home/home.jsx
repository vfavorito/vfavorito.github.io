import React from "react";
import "./home.css";
import BioCard from "../../components/Bio Card/bioCard";
import ContactInfo from "../../components/Contact Info/contactInfo";
import LanguageCard from "../../components/Language Card/languageCard";
import TechCard from "../../components/Technology Card/techCard";
import { Container, Row, Col } from "react-bootstrap"
function Home() {

    return (
        <Container fluid>
            <Row className="customRow">
                <Col sm={12} md={8}>
                    <BioCard className="bioCard" />
                </Col>
                <Col sm={12} md={3}>
                    <ContactInfo className="contactCard" />
                </Col>
            </Row>
            <Row className="customRow bottomRow">
                <Col className="bottomCol" sm={12} md={8}>
                    <TechCard className="techCard" />
                </Col>
                <Col className="bottomCol" sm={12} md={3}>
                    <LanguageCard className="languageCard" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;