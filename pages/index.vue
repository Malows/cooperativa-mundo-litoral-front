<template lang="pug">
  main
    navbar#inicio(:width="width")

    carousel(:width="width" :support-webp="supportWebp")

    services#servicios

    nosotros#nosotros

    cards#cards

    clientes#clientes(:width="width")

    contacto#contacto(:width="width")

    footer-section
</template>

<script>
import Navbar from '../components/navbar/Navbar'
import Cards from '../components/cards/Cards'
import Services from '../components/services/Services'
import Nosotros from '../components/Nosotros'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Contacto from '../components/contacto/Contacto'
import Clientes from '../components/clientes/Clientes'
import '~/assets/scss/style.scss'
import webpTest from '~/assets/img/test.webp'

export default {
  components: {
    Navbar,
    Carousel,
    Services,
    Nosotros,
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
      img.src = webpTest
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
      bottom: -2rem;

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
</style>
