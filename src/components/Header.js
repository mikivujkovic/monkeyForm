/*
  Header component with language change button
*/

import React, { useContext } from "react";
import { LanguageContext } from "../state/LanguageContext";
import strings from "../data/strings";
import "../App.css";

const Header = () => {
  // get language from Context
  const [language, setLanguage] = useContext(LanguageContext);

  // get text for language change button. Button text is opposite to current language
  const buttonLanguage = language === "en" ? "hr" : "en";

  // handle button click to change language. When clicked change language to ooposite of current language
  const changeLanguage = () => {
    setLanguage(buttonLanguage);
  };

  return (
    <header className="App-header">
      <h1>Monkey Form</h1>
      <span>{strings.changeLanguage[language]}</span>
      <button onClick={changeLanguage}>{buttonLanguage}</button>
      <br />
    </header>
  );
};

export default Header;
