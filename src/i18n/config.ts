import { initReactI18next } from 'react-i18next';

import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
// Import translation files directly
import esTranslations from './locales/es.json';

export enum Language {
  ES = 'es',
  EN = 'en',
}

type LanguageOption = {
  label: string;
  flagCode: string;
  code: Language;
};

export const availableLanguages: LanguageOption[] = [
  {
    label: 'Español',
    flagCode: 'co',
    code: Language.ES,
  },
  {
    label: 'English',
    flagCode: 'us',
    code: Language.EN,
  },
];

export const [fallbackLanguage] = availableLanguages;

const options: InitOptions = {
  fallbackLng: fallbackLanguage.code,
  supportedLngs: availableLanguages.map((lang) => lang.code),
  resources: {
    es: {
      translation: esTranslations,
    },
    en: {
      translation: enTranslations,
    },
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie'],
  },
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init(options);

export default i18n;
