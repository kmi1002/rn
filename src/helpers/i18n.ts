import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranEn from '@assets/locales/en.json';

const resources = {
  en: { translation: tranEn },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
