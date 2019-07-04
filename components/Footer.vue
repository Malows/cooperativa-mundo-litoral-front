<template lang="pug" functional>
  footer.footer.offset
    .footer__links
      a(href="#inicio") Inicio
      a(href="#servicios") Servicios
      a(href="#nosotros") Nosotros
      a(href="#clientes") Clientes
      a(href="#contacto") Contacto

    .footer__social
      a(href="https://www.facebook.com/mundolitoral/" target="_blank" aria-label="Contactanos a través de facebook")
        fa(:icon="[ 'fab', 'facebook-f' ]")

      a(href="https://www.instagram.com/mundolitoral/" target="_blank" aria-label="Contactanos a través de instagram")
        fa(:icon="[ 'fab', 'instagram' ]")

    p.footer__small-reference Cooperativa Mundo Litoral 2019

</template>

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

    &__links {
      grid-area: 'links';
      display: flex;
      justify-content: space-around;
      align-items: center;

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
      grid-area: 'small';
      display: none;
      text-align: center;
      font-size: var(--size-navbar__link);
      align-self: flex-end;

      @media (min-width: 600px) and (max-width: 1199px) {
        display: block;
      }
    }

    &__social {
      display: none;
      font-size: 1.5rem;

      a {
        margin-right: 1rem;
        text-decoration: none;
        cursor: pointer;
        color: white;

        @each $op in link, hover, visited, active {
          &:#{$op} { color: white; }
        }
      }

      @media (min-width: 1200px) {
        display: flex;
      }
    }
  }
</style>
