<template lang="pug">
  footer.footer.offset
    .footer__big-reference
      p.footer__big-reference__title MUNDO LITORAL
      p.footer__big-reference__subtitle Cooperativa limitada de trabajo

    .footer__links
      a(href="#inicio") Inicio
      a(href="#servicios") Servicios
      a(href="#nosotros") Nosotros
      a(href="#clientes") Clientes
      a(href="#contacto") Contacto

    .footer__social
      icon(name="facebook")
      icon(name="instagram")

    p.footer__small-reference Cooperativa Mundo Litoral 2019

</template>

<script>
import Icon from './Icon'
export default {
  components: { Icon }
}
</script>

<style lang="scss">
  .footer {
    // padding: 2rem;
    height: 25vh;
    background-color: var(--color-main);
    display: grid;
    grid-template-areas: 'links';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    color: white;

    @media (min-width: 600px) {
      grid-template-areas: 'links' 'small';
      grid-template-rows: 1fr 1fr;
    }

    @media (min-width: 1200px) {
      grid-template-areas: 'big . links' 'big . social';
      grid-template-rows: 3rem auto;
      grid-template-columns: repeat(3, 1fr);
    }

    &__links {
      grid-area: links;
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (min-width: 1200px) {
        justify-content: space-between;
        align-items: flex-start;
      }

      a {
        font-size: var(--size-navbar__link);
        text-decoration: none;
        cursor: pointer;

        @each $op in link, hover, visited, active {
          &:#{$op} { color: white; }
        }

        @media (min-width: 600px) {
          font-size: var(--size-service__body);
        }
      }
    }

    &__small-reference {
      grid-area: small;
      display: none;
      text-align: center;
      font-size: var(--size-navbar__link);
      align-self: flex-end;

      @media (min-width: 600px) and (max-width: 1199px) {
        display: block;
      }
    }

    &__big-reference {
      grid-area: big;
      display: none;

      @media (min-width: 1200px) {
        display: block;
      }

      &__title {
        font-family: 'relawey-heavy', 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
      }
      &__subtitle {
        font-size: var(--size-section__subtitle)
      }
    }

    &__social {
      grid-area: social;
      display: none;
      font-size: 1.5rem;

      a {
        &:not(:last-child) { margin-right: 1rem; }

        text-decoration: none;
        cursor: pointer;
        color: white;

        @each $op in link, hover, visited, active {
          &:#{$op} { color: white; }
        }
      }

      @media (min-width: 1200px) {
        display: flex;
        justify-self: flex-end;
      }
    }
  }
</style>
