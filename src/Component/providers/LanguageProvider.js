import React, { createContext, useState, useCallback, useEffect } from "react";
import i18n from "../config/i18nConfig";
import { I18nextProvider } from "react-i18next";
import { ConfigProvider } from "antd";

import moment from "moment";
import "moment/locale/id";
import "moment/locale/en-gb";

import id from "antd/es/locale/id_ID";
import enGB from "antd/es/locale/en_GB";

export const LanguageContext = createContext(null);

const localeMap = {
  en: enGB,
  id: id,
};

const LanguageProvider = ({ children, defaultLanguage = "en" }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  /**
   * Function to change the application's language.
   * It updates the language state, synchronizes with i18n and moment locales.
   *
   * @param {string} newLanguage - The new language code (e.g., 'en', 'id').
   */
  const changeLanguage = useCallback((newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    moment.locale(newLanguage);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
    moment.locale(defaultLanguage);
  }, [defaultLanguage]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <ConfigProvider locale={localeMap[language] || enGB}>
        {children}
      </ConfigProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;