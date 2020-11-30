import React, { useState, createContext } from "react";

// Create Context Object
export const LanguageContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  );
};
