<template lang="pug">
  vueper-slides(
    v-if="width"
    autoplay
    fade
    :dragging-distance="50"
    :arrows="false"
    :speed="6000"
    :fixed-height="true"
    :slide-ratio="1")

    vueper-slide(
      v-for="page in parsedPages"
      :key="'carousel-' + page.key"
      :image="page.src")
      template(slot="slideContent" :page="page")
        .carousel-slide.x-offset
          div
            h4.carousel-slide__title {{ page.title }}
            p.carousel-slide__subtitle {{ page.body }}
            .carousel-slide__social
              a(href="https://www.facebook.com/mundolitoral/" target="_blank" aria-label="Contactanos a través de facebook")
                fa(:icon="[ 'fab', 'facebook-f' ]")

              a(href="https://www.instagram.com/mundolitoral/" target="_blank" aria-label="Contactanos a través de instagram")
                fa(:icon="[ 'fab', 'instagram' ]")

          .carousel-slide__button
            a(href="#contacto") Contratar Servicios
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  components: { VueperSlides, VueperSlide },

  props: {
    width: { type: Number, default: 0 },
    supportWebp: { type: Boolean, default: false }
  },

  data: () => ({
    pages: [
      {
        key: '1',
        src: '#',
        title: 'Perseguimos la excelencia a través del trabajo en equipo.',
        body: 'Somos una cooperativa de trabajo joven y dinámica, donde la misión es llevar los mejores resultados en los servicios prestados.'
      },
      {
        key: '2',
        src: '#',
        title: 'Nos compremetemos a prestar nuestros servicios con los más altos estándares de calidad y excelencia.',
        body: 'Con todos, hacia adentro y hacia fuera.'
      },
      {
        key: '3',
        src: '#',
        title: 'Nuestros retos requieren el empeño de todos los que formamos parte de esta empresa',
        body: 'Enfocados en la satisfacción del cliente'
      },
      {
        key: '4',
        src: '#',
        title: 'Compromiso en cada uno de nuestros trabajos.',
        body: 'Movimiento permanente y mejora continua.'
      }
    ]
  }),

  computed: {
    parsedPages() {
      const subfix = this.width && this.width >= 1200
        ? 'lg'
        : this.width && this.width >= 600
          ? 'md'
          : 'sm'

      return this.pages.map((p) => {
        p.src = `/img/slide-${p.key}--${subfix}.${this.supportWebp ? 'webp' : 'png'}`
        return p
      })
    }
  }
}
</script>

<style lang="scss">
  .vueperslides--fixed-height {
    height: calc(100vh - 4rem);

    @media (min-width: 600px) {
      height: 600px;
    }
  }

  .carousel-slide {
    width: 100vw;
    height: calc(50vh - 2rem);
    color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 600px) {
      height: 300px;
    }

    &__title { font-size: 2.5rem; }

    &__subtitle {
      font-size: 1.8rem;
      $shadow-color: rgba(34, 34, 34, 0.6);
      text-shadow: 0 5px 7px $shadow-color;
    }

    &__social {
      font-size: 1.5rem;
      margin: 1rem 0;
      display: flex;

      a {
        margin: 1rem 1rem 0 0;
        text-decoration: none;
        cursor: pointer;
        @each $op in link, hover, visited, active {
          &:#{$op} { color: white; }
        }
      }
    }

    &__button {
      color: white;
      a {
        padding: 1rem 2rem;
        background-color: var(--color-main);
        text-decoration: none;
        cursor: pointer;

        @each $op in link, hover, visited, active {
          &:#{$op} { color: white; }
        }
      }
    }
  }
</style>
