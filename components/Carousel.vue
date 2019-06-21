<template lang="pug">
  vueper-slides(
    autoplay
    fade
    :dragging-distance="50"
    :arrows="false"
    :speed="6000"
    :fixed-height="true"
    :slide-ratio="1"
    )

    vueper-slide(v-for="page in parsedPages" :key="page.key" :image="page.src" :title="page.title" :content="page.body")
      //- .slide-page
      //-   img.slide-page__img(:src="page.src")
      //-   h4.slide-page__title {{ page.title }}
      //-   p.slide-page__body {{ page.body }}
      //-   button.slide-page__action Action
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  components: { VueperSlides, VueperSlide },

  data: () => ({
    width: null,
    supportWebp: false,
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
  },

  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWidth)
      this.getWidth()
      const img = new Image()
      img.onload = () => { this.supportWebp = !!(img.height > 0 && img.width > 0) }
      img.onerror = () => { this.supportWebp = false }
      img.src = '/img/slide-1--sm.webp'
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
  .vueperslides--fixed-height {
    height: calc(100vh - 4rem);

    @media (min-width: 600px) {
      height: 90vh;
    }
  }

  .vueperslides__bullet {
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1px solid var(--color-main);
    background-color: var(--color-main);
    box-shadow: 0 0 1px rgba(#000, 0.5), 0 0 3px rgba(#000, 0.3);
    margin: 1.5em 0.6em;
    padding: 0;
    transition: 0.4s ease-in-out;

    &--active {
      background-color: var(--color-main);
      border-width: 6px;
    }
    span {
      color: var(--color-main);
    }
  }
</style>
