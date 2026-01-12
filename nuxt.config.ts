
import { siteConfig } from './config/siteConfig'

export default defineNuxtConfig({
  site: {
    name: 'chidi odili', 
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', 'motion-v/nuxt'],
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
})
