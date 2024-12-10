import { createInstance } from "i18next";
import { languageResources } from "./languageConfig";

const i18n = createInstance({
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
  resources: languageResources,
});

i18n.init();

export default i18n;
