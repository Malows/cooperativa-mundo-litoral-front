<template lang="pug">
  section.services
    service(
      v-for="(servicio, index) in servicios"
      :key="index"
      :name="servicio.name"
      :body="servicio.body"
      :src="servicio.src"
      )
</template>

<script>
import Service from './Service'
export default {
  components: { Service },

  data: () => ({
    servicios: [
      {
        name: 'Finales de obra',
        body: 'Una vez finalizada la obra, Mundo Litoral deja a punto el espacio para poder ser utilizado.',
        src: '/img/service-1--lg'
      },
      {
        name: 'Reparación de mobiliarios',
        body: 'Arreglo de sillas y pupitres. Realizamos tapizado y reparaciones en general.',
        src: '/img/service-2--lg'
      },
      {
        name: 'Armado y mantenimiento de vidrieras',
        body: 'Reposición de banner en locales y ploter en vidrieras. Se realizan cambios de gigantografías de publicidad.',
        src: '/img/service-3--lg'
      },
      {
        name: 'Saneamiento en cocinas de restaurantes.',
        body: 'Snack de Cines y Fast food.',
        src: '/img/service-4--lg'
      },
      {
        name: 'Acondicionamiento de salas de cine.',
        body: 'Tratamiento de telas, alfombras y butacas. Mantenimiento de sonido e iluminación.',
        src: '/img/service-5--lg'
      },
      {
        name: 'Cobertura de eventos',
        body: 'Pre y post acondicionamiento de espacio para eventos. Decoraciones integrales. Atención a invitados',
        src: '/img/service-6--lg'
      },
      {
        name: 'Reparaciones Generales',
        body: 'Pintura de espacios abiertos y cerrados. Permeabilización y cambios de luminarias en locales. Como reemplazo de alfombras y pisos',
        src: '/img/service-7--lg'
      },
      {
        name: 'Laverap',
        body: 'Atención a empresas, hoteles, centros de estética, bares, restaurant, equipos de clubes deportivos, clínicas, escuelas y particulares.',
        src: '/img/service-8--lg'
      },
      {
        name: 'Mantenimiento',
        body: 'En espacios abiertos y cerrados tales como locales, cines, colegios, bares, entre otros.',
        src: '/img/service-9--lg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .services {
    margin: 5rem 5vw;
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
