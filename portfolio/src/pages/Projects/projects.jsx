import React from "react";
import ProjectCard from "../../components/Project Card/projectCard";
import { Container } from "react-bootstrap";

function Projects() {

    return (
        <Container fluid>
            <div className="projects">
                <ProjectCard />
            </div>
        </Container>
    )
}

export default Projects;