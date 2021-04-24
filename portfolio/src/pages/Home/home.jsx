import React from "react";
import "./home.css";
import BioCard from "../../components/Bio Card/bioCard";
import ContactInfo from "../../components/Contact Info/contactInfo"
function Home() {

    return(
        <div className="home">
        <BioCard className="bioCard" />
        <ContactInfo className="contactCard" />
        </div>
    )
}

export default Home;