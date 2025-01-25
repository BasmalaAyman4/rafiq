import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation JSON files
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

i18n
    .use(LanguageDetector) // Detects the user's language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: { translation: enTranslation },
            ar: { translation: arTranslation },
        },
        fallbackLng: 'en', // Default language if none is detected
        debug: true, // Set to false in production
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
