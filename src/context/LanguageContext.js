import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../lang/en.json";
import frMessages from "../lang/bn.json";
const messages = {
  en: enMessages,
  bn: frMessages,
};
export const LanguageContext = React.createContext();
const defaultLocale = localStorage.getItem("YELLOCART_LOCALE") || "en";
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const onChangeLang = (lang) => {
    setLocale(lang);
    localStorage.setItem("YELLOCART_LOCALE", lang);
  };
  return (
    <LanguageContext.Provider value={{ locale, onChangeLang }}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
