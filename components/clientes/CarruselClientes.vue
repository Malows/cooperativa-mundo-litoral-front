<template lang="pug">
  vueper-slides.no-shadow(
    autoplay :speed="6000"
    :arrows-outside="false"
    :bullets="false"
    :visible-slides="slidesAmount" slide-multiple
    :fixed-height="sliderHeight" :slide-ratio="1"
    )

    vueper-slide(v-for="slide in slides" :key="slide.key")
      template(slot="slideContent" :slide="slide")
        .custom-client-slide(@mouseover="slide.hover = true" @mouseleave="slide.hover = false")
          div.custom-client-slide__img
            img(:src="`${slide.src}${slide.hover ? '--color' : ''}.svg`")
          h4 {{ slide.name }}

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  components: { VueperSlides, VueperSlide },

  props: {
    width: { type: Number, default: 0 }
  },

  data: () => ({
    slides: [
      { src: '/img/clientes/1', hover: false, name: 'CHER' },
      { src: '/img/clientes/2', hover: false, name: 'CineMark' },
      { src: '/img/clientes/3', hover: false, name: 'TUCCI' },
      { src: '/img/clientes/4', hover: false, name: 'E-Max Cines' },
      { src: '/img/clientes/5', hover: false, name: 'VITAMINA' },
      { src: '/img/clientes/6', hover: false, name: 'Universidad Nacional del Litoral' },
      { src: '/img/clientes/7', hover: false, name: '47 Street' },
      { src: '/img/clientes/8', hover: false, name: 'Ministerio de Seguridad' },
      { src: '/img/clientes/9', hover: false, name: 'La Vera Pizza' }
    ]
  }),

  computed: {
    slidesAmount() {
      if (this.width < 600) return 2
      if (this.width < 1200) return 3
      return 5
    },

    sliderHeight() {
      if (this.width < 600) return '61.8vw'
      if (this.width < 1200) return '41.2vw'
      return '20.6vw'
    }
  }
}
</script>

<style lang="scss">
  .custom-client-slide {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;

    &__img {
      align-self: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__name {
      align-self: flex-start;
    }
  }
</style>
