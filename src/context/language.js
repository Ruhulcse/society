import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  let [english, setEnglish] = useState(true);

  const en = () => {
    setEnglish(true);
  };

  const ar = () => {
    setEnglish(false);
  };
  return (
    <LanguageContext.Provider value={{ english, en, ar }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };
