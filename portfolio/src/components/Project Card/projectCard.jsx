import React from "react";
import "./projectCard.css";
import Projects from "./projects.json";
import OrcaPic from "./Project Pics/orcaPic.PNG";
import SmashPic from "./Project Pics/smashPic.PNG";
import PochiPic from "./Project Pics/pochiPic.PNG";
import MarvelPic from "./Project Pics/marvelPic.PNG";
import BudgetPic from "./Project Pics/budgetPic.PNG";
import WeatherPic from "./Project Pics/weatherPic.PNG";
import DirectoryPic from "./Project Pics/directoryPic.PNG";
import {Row, Col} from "react-bootstrap";


function ProjectCard() {

    const setClasses = (orientation) => {
        switch (orientation) {
            case "left":
                return "project projectLeft";
            case "right":
                return "project projectRight";
            default:
                return;
        };

    };

    const PicSrc = (imgString) => {
        switch (imgString) {
            case "OrcaPic":
                return OrcaPic;
            
            case "SmashPic":
                return SmashPic;

            case "PochiPic":
                return PochiPic;

            case "MarvelPic":
                return MarvelPic;

            case "BudgetPic":
                return BudgetPic;

            case "WeatherPic":
                return WeatherPic;

            case "DirectoryPic":
                return DirectoryPic;

            default:
                return;
        };
    };

    return (
        <div>
            {Projects.projects.map(project =>
                <Row key={project.title}>
                    <Col md={7} sm={12}>
                        <div className={setClasses(project.orientation)}>
                            <h2>{project.title}</h2>
                            <img src={PicSrc(project.image)} alt={project.title} className="projectImage" />
                            <p>{project.description}</p>
                            <a href={project.repoLink} target="_blank" rel="noreferrer" className="projectLink">{project.title} Repository</a>
                            <br />
                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="projectLink">{project.title} Link</a>
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default ProjectCard;