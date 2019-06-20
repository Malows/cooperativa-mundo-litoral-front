<template lang="pug">
  section#cards
    .cards
      card(
        v-for="(carta, index) in cartas"
        :key="index"
        :important="carta.important"
        :title="carta.title"
        :body="carta.body"
      )
</template>

<script>
import Card from './Card'

export default {
  components: { Card },

  data: () => ({
    cartas: [
      {
        title: 'Dinamismo',
        body: `Movimiento permanente. Mejora continua. Tenemos como premisa la proactividad,
         la búsqueda permanente de la actualización y la mejora del servicio, para ofrecer lo
         mejor a nuestros clientes, superando sus expectativas.`,
        important: false
      },
      {
        title: 'Compromiso',
        body: `Nos comprometemos con cada uno de los trabajos tomados como si fueran únicos y propios,
         sabiendo el esfuerzo personal que significa para nuestros clientes la contratación de nuestro servicio.`,
        important: true
      },
      {
        title: 'Respecto',
        body: `Respetamos a cada cliente como el mas importante. Sabemos que cada uno es tan
         importante desde el último al primero para lograr el éxito esperado.`,
        important: false
      }
    ]
  })
}
</script>

<style lang="scss">
  #cards {
    display: flex;
    justify-content: center;
  }

  .cards {
    margin: 2rem 10vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 720px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
