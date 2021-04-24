import React from "react";
import "./footer.css";
import FooterIcon from "./footerIcon.png";

function Footer(){
    return(
        <div className="footer">
            <p className="footerText">Vincent Favorito</p>
            <img src={FooterIcon} alt="code fork" className="footerIcon" />
        </div>
    )
}

export default Footer;