import React from "react";
import "./home.css";
import BioCard from "../../components/Bio Card/bioCard";
import ContactInfo from "../../components/Contact Info/contactInfo";
import LanguageCard from "../../components/Language Card/languageCard";
import TechCard from "../../components/Technology Card/techCard";
function Home() {

    return(
        <div className="home">
        <BioCard className="bioCard" />
        <ContactInfo className="contactCard" />
        <LanguageCard className="languageCard" />
        <TechCard className="techCard" />
        </div>
    )
}

export default Home;