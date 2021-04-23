import React from "react";
import "./bioCard.css";
import BioPic from "./BioPic.PNG";

function BioCard() {

    return (
        <div className="bioCard">
            <img alt="Vincent Favorito" src={BioPic} className="bioPic" />
            <p className="bioText">
                My name is Vincent Favorito.  I currently live in Eagan, Minnesota but I'm looking to relocate to Round Rock, Texas.
                <br />
                <br />
                I am currently employed by Coordinated Business Systems as a Copier Technician. As a Copier Technician I build, fix,
                 and refurbish copiers, but also learned how to go through the troubleshooting process.
                 <br />
                 <br />
                After completing a six month full-stack bootcamp through the University of Minnesota I am looking to begin a career in web-development.
                In the bootcamp I learned how to pick up new technologies/languages and work with them in a fast paced environment.
            </p>
        </div>

    )
}

export default BioCard;