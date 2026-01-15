
import { siteConfig } from './config/siteConfig'

export default defineNuxtConfig({
  site: {
    name: 'C° - bildender Künstler',
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', 'motion-v/nuxt', '@nuxtjs/color-mode'],
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'Englisch',
    }, {
      code: 'de',
      name: 'Deutsch',
    }],
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }
})
