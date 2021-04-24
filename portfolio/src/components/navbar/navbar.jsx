import { React } from "react";
import "./navbar.css"

function Navigation() {

    let redirect = (event) => {
        let target= event.target.dataset.location;
        window.location.assign("http://localhost:3000" + target);
    };

    return (
       <div className="navBar">
           <div className="navItem">
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
    );
};

export default Navigation;