import React from "react";
import "./techCard.css";

function TechCard() {
    const technologies = ["API's", "Ajax", "Axios", "Mongo", "Mongoose", "MySql", "Sequelize", "Node", "Git", "Github",
     "Heroku", "Express", "Bootstrap", "Passport"]
    return (
        <div className="techCard">
            
                <h4 className="cardHeader">Technology Proficiencies</h4>
                {technologies.map(tech =>
                    <p className="technology" key={tech}>• {tech}</p>
                )}
            
        </div>
    )
}

export default TechCard;