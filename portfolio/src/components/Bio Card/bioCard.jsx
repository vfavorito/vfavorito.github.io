import React from "react";
import "./bioCard.css";
import BioPic from "./BioPic.PNG";

function BioCard() {

    return (
        <div className="bioCard">
            <div className="flexContainer">
                <img alt="Vincent Favorito" src={BioPic} className="bioPic" id="bioPic" />
                <div className="textContainer">
                    <div>My name is Vincent Favorito and I am located in Round Rock, Texas.</div>
                    <br />
                    <div>
                        I am currently employed by Conversion Fanatics as a front-end CRO jQuery developer.  As a CRO developer I am primarily in charge of building A/B tests.
                        These tests serve the purpose of creating a better user experience and boosting website performance.  Through communication with clients I focus on
                        incorporating their brand's style into every experiment conducted.
                    </div>
                </div>
            </div>
            <div className="bottomText">
                I have built and run A/B tests on a number of platforms including Convert, VWO, Optimizely, and Dynamic Yield.
                Currently I specialize in front end-development, but I also have knowledge of back-end processes that I learned from a six-month full-stack coding bootcamp
                through the University of Minnesota.
            </div>
        </div>

    )
}

export default BioCard;