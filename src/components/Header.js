import React, { useContext } from "react";
import { LanguageContext } from "../state/LanguageContext";
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
      <h2>{language}</h2>
      <button onClick={changeLanguage}>{buttonLanguage}</button>
      <br />
    </header>
  );
};

export default Header;
