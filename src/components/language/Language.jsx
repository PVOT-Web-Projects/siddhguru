import { createContext, useState } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  
  const switchLanguage = (newLanguage) => {
    localStorage.setItem("language",newLanguage)
    setLanguage(localStorage.getItem("language"));
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };

export default LanguageContext;

LanguageProvider.propTypes = {
  children: PropTypes.any,
};
