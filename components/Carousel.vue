<template lang="pug">
  carousel(autoplay :perPage="1")
    slide(v-for="page in pages" :key="page.key")
      .slide-page
        img.slide-page__img(:src="page.src")
        h4.slide-page__title {{ page.title }}
        p.slide-page__body {{ page.body }}
        button.slide-page__action Action

</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: { Carousel, Slide },
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
  })
}
</script>
