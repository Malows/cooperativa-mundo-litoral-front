
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'Cooperativa Mundo Litoral',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/eslint-module',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookF', 'faInstagram']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faEnvelope', 'faMobileAlt']
        }
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
