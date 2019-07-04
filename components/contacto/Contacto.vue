<template lang="pug">
  section.contacto.offset
    h4.contacto__title Contacto
    .contacto__layout
      formulario
      .vertical-separator(v-if="width >= 1200")
      datos

</template>

<script>
import Formulario from './Formulario'
import Datos from './Datos'

export default {
  components: { Formulario, Datos },

  props: { width: { type: Number, default: 0 } }
}
</script>

<style lang="scss">
  .contacto {

    @media (min-width: 600px) {
      margin: 0 calc(100vw / 12);
    }

    &__title {
      font-size: var(--size-title);
      margin: 2rem 0;

      @media (min-width: 600px) and (max-width: 1199px) {
        text-align: center;
      }
    }

    &__layout {
      display: grid;

      grid-template-columns: 1fr;
      grid-auto-rows: auto;
      grid-template-areas: 'form' 'datos';

      @media (min-width: 1200px) {
        grid-gap: calc(100vw / 24);
        grid-template-columns: 1fr 1px 1fr;
        grid-template-areas: 'form separator datos';
      }
    }
  }

  .vertical-separator {
    grid-area: separator;
    margin: 2rem 0;
    border-right: 1px solid var(--color-border);
  }
</style>
