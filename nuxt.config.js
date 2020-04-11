import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  firebase: {
    config: {
      // apiKey: process.env.FIREBASE_API_KEY,
      // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      // databaseURL: process.env.FIREBASE_DATABASE_URL,
      // projectId: process.env.FIREBASE_PROJECT_ID,
      // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      // appId: process.env.FIREBASE_APP_ID,
      // measurementId: process.env.FIREBASE_MEASUREMENT_ID
      apiKey: 'AIzaSyBD0p4ccYjXjO7sgOBs8lO9sqNGkFEgn2w',
      authDomain: 'nvimc-generator.firebaseapp.com',
      databaseURL: 'https://nvimc-generator.firebaseio.com',
      projectId: 'nvimc-generator',
      storageBucket: 'nvimc-generator.appspot.com',
      messagingSenderId: '569106731289',
      appId: '1:569106731289:web:af839511c8b2673232f588',
      measurementId: 'G-DRNY2FGFGJ'
    },
    services: {
      analytics: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
