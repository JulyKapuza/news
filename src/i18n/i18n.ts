import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "home": "Home",
      "news": "News",
      "profile": "Profile",
      "login": 'Log in',
      "logout": 'Log out'
    }
  },
  ua: {
    translation: {
      "home": "Головна",
      "news": "Новини",
      "profile": "Профіль",
      "login": 'Увійти',
      "logout": 'Вийти'
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;