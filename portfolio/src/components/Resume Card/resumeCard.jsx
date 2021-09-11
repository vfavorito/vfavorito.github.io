import React from "react";
import "./resumeCard.css"

function ResumeCard() {
    const techSkills = ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Express", "NodeJS", "Git", "Github", "Heroku",
        "Relational Databases", "NoSQL Databases", "MVC Design", "React"]

    return (
        <div className="resumeCard">
            <h3 className="centerHeaders">Vincent Favorito</h3>
            <p className="centerHeaders">Round Rock, TX | (952)-923-0199 | vince.favorito@gmail.com</p>
            <p className="centerHeaders">
                <a href="https://www.linkedin.com/in/vincent-favorito-0741781b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBsH1DcUqQeGHfVnBj1MENA%3D%3D" target="_blank" rel="noreferrer">LinkedIn</a> |
                <a href="https://github.com/vfavorito" target="_blank" rel="noreferrer"> Github</a> | 
                <a href="https://docs.google.com/document/d/1-I8l-jtUU9ZfEbi3PJ2Nide3fLb2ksl-RdAgrGd5eKs/edit?usp=sharing" target="_blank" rel="noreferrer"> Resume <img className="download" alt="download" src="https://img.icons8.com/android/24/4a90e2/download.png"/></a></p>
            <p>I’m a hard-working and committed web developer who is currently looking for a full-time web-development position.
            I am currently located in Round Rock, TX.
            I strive to create quality organized code in a team setting and as an individual.
            I have experience in HTML, CSS, JavaScript, JQuery, MySQL, MongoDB, Express, and React.
            </p>
            <h4 className="centerHeaders">Technical Skills:</h4>
            <div className="skillList">
                {techSkills.map(skill =>
                    <p className="techSkills" key={skill}>{skill} | </p>
                )}
                MERN
            </div>
            <h4 className="centerHeaders">Projects:</h4>
            <h5 className="leftHeaders">Orcastrator</h5>
            <p>• Create/Login to an account which is added to a Mongo DB.  Then create pods (groups) and invite other orcas (people) to them.
            When in a pod live chat with other orcas in that pod via socket io.
                <br />
               • Role: configured passport local and OAuth Strategies,  used routes/controllers to CRUD  documents in the Mongo DB,
               created a context with React to keep track of current user’s data.
               <br />
               • React, CSS, Mongo, Express, Passport
               <br />
               • <a href="https://orcastrator.herokuapp.com/" target="_blank" rel="noreferrer">https://orcastrator.herokuapp.com/</a>
            </p>
            <h5 className="leftHeaders">Smash Ultimatum</h5>
            <p>• Create/Login to an account which is added to a Mongo DB.  Create Super Smash Bros. Ultimate
                 Iron Man Arenas and Tournaments as well as track your stats.
                <br />
               • Role: everything from front end design to back end configuration. 
               <br />
               • React, CSS, Mongo, Passport, Express
               <br />
               • <a href="https://smash-ultimatum.herokuapp.com/" target="_blank" rel="noreferrer">https://smash-ultimatum.herokuapp.com/</a>
            </p>
            <h4 className="centerHeaders">Experience</h4>
            <h5 className="leftHeaders">COORDINATED BUSINESS SYSTEMS 11/2017 - PRESENT: </h5>
            <p>• Build, refurbish, and fix Laserjet/Inkjet copiers and printers.
                <br />
               • Coordinated with dispatch to meet delivery deadlines.
            </p>
            <h4 className="centerHeaders">Education</h4>
            <h5 className="leftHeaders">UNIVERSITY OF MINNESOTA 09/2020 – 03/2021: </h5>
            <p>A 6-month long full-stack coding bootcamp curriculum designed around building web applications.
            Skills learned: HTML5, CSS3, JavaScript, JQuery, Bootstrap, and NodeJS, Express, MySQL, Handlebars, Sequelize, Mongo,
            React.
            </p>
        </div>
    )
}

export default ResumeCard;