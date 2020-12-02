import React, { useContext } from "react";
import { LanguageContext } from "../state/LanguageContext";
import strings from "../data/strings";
import "../App.css";

const Header = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  const buttonLanguage = language === "en" ? "hr" : "en";

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
