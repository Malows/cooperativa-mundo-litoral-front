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
      a(href="#" target="_blank")
        fa(:icon="[ 'fab', 'facebook-f' ]")

      a(href="#" target="_blank")
        fa(:icon="[ 'fab', 'instagram' ]")
</template>

<style lang="scss">
  .contacto__data {
    grid-area: datos;
    margin: 0 calc(100% / 6);

    &__icons {
      display: grid;
      grid-template-columns: 3rem auto;
      grid-auto-rows: 2rem;
      align-items: center;

      *:nth-child(2n + 1) {
        justify-self: center;
        font-size: 1.5rem;
      }
    }

    &__anchors {
      display: flex;
      * {
        margin-right: 1rem;
        font-size: 1.5rem;
        @each $op in link, hover, visited, active {
        &:#{$op} { color: var(--color-main); }
      }
      }
    }

    &__subtitle {
      &:first-child { display: none; }

      &:last-child { display: block; }

      @media (min-width: 600px) {
        &:first-child { display: block; }

        &:last-child { display: none; }
      }
    }
  }
</style>
