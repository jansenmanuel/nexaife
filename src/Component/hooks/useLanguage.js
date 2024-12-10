import {useContext} from "react";
import {LanguageContext} from "../providers/LanguageProvider";

/**
 * Custom hook to access the LanguageContext.
 * @returns {{ language: string, changeLanguage: (newLanguage: string) => void }}
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default useLanguage