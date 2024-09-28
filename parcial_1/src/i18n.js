import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './idiomas/en.json';
import translationEs from './idiomas/sp.json';

const resources = {
    en: {
        translation: translationEn
    },
    es: {
        translation: translationEs
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
