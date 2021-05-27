import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../lang/en.json";
import frMessages from "../lang/bn.json";
const messages = {
  en: enMessages,
  bn: frMessages,
};
export const LanguageContext = React.createContext();
const savedLocale = localStorage.getItem("YELLOCART_LOCALE") || "en";
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(savedLocale);
  const onChangeLang = (lang) => {
    setLocale(lang);
    localStorage.setItem("FLUID_LOCALE", lang);
  };
  return (
    <LanguageContext.Provider value={{ locale, onChangeLang }}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
