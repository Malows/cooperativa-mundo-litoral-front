<template lang="pug">
  main
    .container
      div
        h1.title carrusel
        //- h2.subtitle My super-duper Nuxt.js project
        //- .links
        //-   a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
        //-   a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub

      //- carousel

    services

    cards

</template>

<script>
import Cards from '../components/cards/Cards'
import Services from '../components/services/Services'

export default {
  components: { Cards, Services }
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
