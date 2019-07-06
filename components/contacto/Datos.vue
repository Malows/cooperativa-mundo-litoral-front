<template lang="pug">
  .contacto__data
    strong.contacto__data__subtitle Comunicate con nosotros

    .contacto__data__icons
      fa(:icon="['fas', 'mobile-alt']")
      p Tel: +54 (0342) 464 8269

      fa(:icon="['fas', 'envelope']")
      p cooperativalitoral@gmail.com

    strong.contacto__data__subtitle Nuestras redes

    .contacto__data__anchors
      icon(name="facebook")
      icon(name="instagram")

</template>

<script>
import Icon from '../Icon'
export default {
  components: { Icon }
}
</script>

<style lang="scss">
  .contacto__data {
    grid-area: datos;

    &__icons {
      display: grid;
      margin: 1rem 0;
      grid-template-columns: 2rem auto;
      grid-auto-rows: 2rem;
      align-items: center;

      *:nth-child(2n + 1) {
        font-size: 1.5rem;
      }
    }

    &__anchors {
      display: flex;
      * {
        margin-right: 1rem;
        font-size: 1.5rem;

        @each $op in link, hover, visited, active {
          &:#{$op} { color: var(--color-divider); }
        }
      }
    }

    &__subtitle {
      &:first-child { display: none; }
      &:not(:first-child) { display: block; }

      @media (min-width: 600px) {
        &:first-child { display: block; }
        &:not(:first-child) { display: none; }
      }
    }
  }
</style>
