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
        src: '#'
      },
      {
        name: 'Reparación de mobiliarios',
        body: 'Arreglo de sillas y pupitres. Realizamos tapizado y reparaciones en general.',
        src: '#'
      },
      {
        name: 'Saneamiento en cocinas de restaurantes.',
        body: 'Snack de cines. FALTA DESCRIPCIÓN tal vez',
        src: '#'
      },
      {
        name: 'Acondicionamiento de salas de cine.',
        body: '',
        src: '#'
      },
      {
        name: 'Cobertura de eventos',
        body: 'Atención a invitados',
        src: '#'
      },
      {
        name: 'Reparaciones Generales',
        body: 'Pintura de espacios abiertos y cerrados. Permeabilización y cambios de luminarias en locales. Como reemplazo de alfombras y pisos',
        src: '#'
      },
      {
        name: 'Laverap',
        body: 'Atención a empresas, hoteles, centros de estética, bares, restaurant, equipos de clubes deportivos, clínicas, escuelas y particulares.',
        src: '#'
      },
      {
        name: 'Mantenimiento',
        body: 'En espacios abiertos y cerrados tales como locales, cines, colegios, bares, entre otros.',
        src: '#'
      },
      {
        name: 'Armado y mantenimiento de vidrieras',
        body: 'Reposición de banner en locales y ploter en vidrieras. Se realizan cambios de gigantografías de publicidad.',
        src: '#'
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
