<template lang="pug">
  section.clientes.offset
    h4.clientes__title Nuestros clientes
    h5.clientes__subtitle
      | Estas son algunas de las empresas que han elegido nuestros servicios y día a
      |  día renuevan la confianza en nosotros:
    carrusel-clientes(:width="width")
</template>

<script>
import CarruselClientes from './CarruselClientes'

export default {
  components: { CarruselClientes },

  props: { width: { type: Number, default: 0 } }
}
</script>

<style lang="scss">
  .clientes {
    background-color: white;
    text-align: center;

    &__title {
      font-size: var(--size-title);
      margin: 2rem 0;
    }

    &__subtitle {
      color: var(--color-border);
      font-size: var(--size-card__title);

      @media (min-width: 1200px) {
        margin: 0 calc(100vw / 6);
      }
    }
  }
</style>
