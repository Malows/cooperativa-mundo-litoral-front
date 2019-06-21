<template lang="pug">
  section.contacto
    h4 Contacto
    .contacto__layout
      formulario
      .vertical-separator
      datos
</template>

<script>
import Formulario from './Formulario'
import Datos from './Datos'

export default {
  components: { Formulario, Datos }
}
</script>

<style lang="scss">
  .contacto {
    &__layout {
      display: grid;

      grid-template-columns: 1fr;
      grid-template-areas: 'form' 'datos';

      @media (min-width: 1200px) {
        grid-template-columns: 1fr 1px 1fr;
        grid-template-areas: 'form separator datos';
      }
    }
  }

  .vertical-separator {
    grid-area: separator;
    margin: 5rem 0;
    border-right: 1px solid var(--color-border);
  }
</style>
