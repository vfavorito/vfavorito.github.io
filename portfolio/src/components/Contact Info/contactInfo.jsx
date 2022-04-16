import React from "react";
import "./contactInfo.css";

function ContactInfo(){
    
    return(
        <div className="contactCard">
            <h4 className="cardHeader">Vincent Favorito</h4>
            <p className="cardText">
                <div className="contactBold">Email: </div>

                <div>vince.favorito@gmail.com</div>

                <div className="contactBold">Phone: </div>

                <div>(952)-923-0199</div>
            </p>
        </div>
    )
}

export default ContactInfo;