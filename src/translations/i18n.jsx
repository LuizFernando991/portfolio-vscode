import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en.json'
import ptTranslation from './locales/pt.json'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator', 'localStorage', 'sessionStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    }
  })

export default i18n
