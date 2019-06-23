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
      :key="page.key"
      :image="page.src"
      :title="page.title"
      :content="page.body")
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
      height: 90vh;
    }
  }
</style>
