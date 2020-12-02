// Language global state Context

import React, { useState, createContext } from "react";

// Create Context Object
export const LanguageContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const LanguageContextProvider = (props) => {
  // set defaut value for language
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {props.children}
    </LanguageContext.Provider>
  );
};
