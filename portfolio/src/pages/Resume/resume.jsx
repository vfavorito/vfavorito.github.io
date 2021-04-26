import React from "react";
import "./resume.css";
import ResumeCard from "../../components/Resume Card/resumeCard";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {

    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={10}>
                <ResumeCard className="resumeCard" />
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;