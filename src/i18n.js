import en from "./trans/en.json";
import ru from "./trans/rus.json";
import arm from "./trans/arm.json";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  arm: {
    translation: arm,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem("language")),
  fallbackLng: "arm",
});

export default i18n;
