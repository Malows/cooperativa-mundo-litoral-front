<template lang="pug">
  section.clientes
    h4.x-offset.clientes__title Nuestros clientes
    h5.x-offset.clientes__subtitle
      | Estas son algunas de las empresas que han elegido nuestros servicios y día a
      |  día renuevan la confianza en nosotros:
    carrusel-clientes.offset__clientes-carrusel(:width="width")
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
      font-size: var(--size-section__title);
    }
    &__subtitle {
      color: var(--color-border);
      font-size: var(--size-card__body);
    }
  }
</style>
