<template lang="pug">
  main
    navbar#inicio

    .container
      div
        h1.title carrusel
        //- h2.subtitle My super-duper Nuxt.js project
        //- .links
        //-   a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
        //-   a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub

      //- carousel

    services#servicios

    nos-banner#nosotros

    cards#cards

    #clientes.container
      div
        h1.title clientes

    #contacto.container
      div
        h1.title formulario

    footer-section
</template>

<script>
import Navbar from '../components/Navbar'
import Cards from '../components/cards/Cards'
import Services from '../components/services/Services'
import NosBanner from '../components/NosBanner'
import Footer from '../components/Footer'
import '~/assets/scss/style.scss'

export default {
  components: { Navbar, Cards, Services, NosBanner, 'footer-section': Footer }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2222;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
