<template lang="pug">
  section.services
    h4.services__title Nuestros servicios
    .services__cards
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
        src: 'img/service-1'
      },
      {
        name: 'Reparación de mobiliarios',
        body: 'Arreglo de sillas y pupitres. Realizamos tapizado y reparaciones en general.',
        src: 'img/service-2'
      },
      {
        name: 'Armado y mantenimiento de vidrieras',
        body: 'Reposición de banner en locales y ploter en vidrieras. Se realizan cambios de gigantografías de publicidad.',
        src: 'img/service-3'
      },
      {
        name: 'Saneamiento en cocinas de restaurantes.',
        body: 'Snack de Cines y Fast food.',
        src: 'img/service-4'
      },
      {
        name: 'Acondicionamiento de salas de cine.',
        body: 'Tratamiento de telas, alfombras y butacas. Mantenimiento de sonido e iluminación.',
        src: 'img/service-5'
      },
      {
        name: 'Cobertura de eventos',
        body: 'Pre y post acondicionamiento de espacio para eventos. Decoraciones integrales. Atención a invitados',
        src: 'img/service-6'
      },
      {
        name: 'Reparaciones Generales',
        body: 'Pintura de espacios abiertos y cerrados. Permeabilización y cambios de luminarias en locales. Como reemplazo de alfombras y pisos',
        src: 'img/service-7'
      },
      {
        name: 'Laverap',
        body: 'Atención a empresas, hoteles, centros de estética, bares, restaurant, equipos de clubes deportivos, clínicas, escuelas y particulares.',
        src: 'img/service-8'
      },
      {
        name: 'Mantenimiento',
        body: 'En espacios abiertos y cerrados tales como locales, cines, colegios, bares, entre otros.',
        src: 'img/service-9'
      }
    ]
  })
}
</script>

<style lang="scss">
  .services {
    padding: 2.5rem 5vw;

    &__cards {
      display: grid;
      grid-gap: 2.5rem;
      grid-template-columns: 1fr;

      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;

      @media (min-width: 1200px) {
        text-align: center;
        color: var(--color-main--light);
        margin: 2rem 0 3rem;
      }
    }
  }
</style>
