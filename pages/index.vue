<template lang="pug">
  main
    navbar#inicio

    carousel(:width="width" :support-webp="supportWebp")

    services#servicios

    nos-banner#nosotros

    cards#cards

    clientes#clientes(:width="width")

    contacto#contacto

    footer-section
</template>

<script>
import Navbar from '../components/Navbar'
import Cards from '../components/cards/Cards'
import Services from '../components/services/Services'
import NosBanner from '../components/NosBanner'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Contacto from '../components/contacto/Contacto'
import Clientes from '../components/clientes/Clientes'
import '~/assets/scss/style.scss'

export default {
  components: {
    Navbar,
    Carousel,
    Services,
    NosBanner,
    Cards,
    Clientes,
    Contacto,
    'footer-section': Footer
  },

  data: () => ({
    width: null,
    supportWebp: false
  }),

  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWidth)
      this.getWidth()
      const img = new Image()
      img.onload = () => { this.supportWebp = !!(img.height > 0 && img.width > 0) }
      img.onerror = () => { this.supportWebp = false }
      img.src = '~/assets/img/test.webp'
    })
  },

  methods: {
    getWidth() {
      this.width = document.documentElement.clientWidth
    }
  }
}
</script>

<style lang="scss">
  body { overflow-x: hidden; }

  @import 'vueperslides/dist/vueperslides.css';

  .vueperslides {
    &__bullet {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      border: 1px solid var(--color-main--light);

      &--active { background-color: var(--color-main); }
    }

    @media (min-width: 600px) {
      &__bullet { margin: .6rem 1.5rem; }

      &__bullets {
        flex-direction: column;
        left: calc(100% - 4rem);
        top: 0;
      }
    }
  }

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
