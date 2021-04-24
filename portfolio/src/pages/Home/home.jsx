import React from "react";
import "./home.css";
import BioCard from "../../components/Bio Card/bioCard";
import ContactInfo from "../../components/Contact Info/contactInfo";
import LanguageCard from "../../components/Language Card/languageCard";
function Home() {

    return(
        <div className="home">
        <BioCard className="bioCard" />
        <ContactInfo className="contactCard" />
        <LanguageCard className="languageCard" />
        </div>
    )
}

export default Home;