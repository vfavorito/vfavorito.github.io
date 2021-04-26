import React from "react";
import "./languageCard.css";
import HTML5Icon from "./Language Icons/html5Icon.png";
import CSS3Icon from "./Language Icons/css3Icon.png";
import JavascriptIcon from "./Language Icons/javascriptIcon.png";
import JQueryIcon from "./Language Icons/jqueryIcon.png";
import ReactIcon from "./Language Icons/reactIcon.png";

function LanguageCard() {
    const languages = [
        { Language: "HTML5", Icon: HTML5Icon },
        { Language: "CSS3", Icon: CSS3Icon },
        { Language: "JavaScript", Icon: JavascriptIcon },
        { Language: "jQuery", Icon: JQueryIcon },
        { Language: "React", Icon: ReactIcon }
    ]
    return (
        <div className="languageCard">
            <h4 className="cardHeader">Language Proficiencies</h4>
            {languages.map(language =>
                <div key={language.Language}>
                    <img className="languageIcon"
                        src={language.Icon}
                        alt={language.Language + "icon"}
                    />
                    <p className="languageText">
                        {language.Language}
                    </p>
                </div>
            )}
        </div>
    )
}

export default LanguageCard;