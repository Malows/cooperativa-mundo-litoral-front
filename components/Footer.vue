<template lang="pug" functional>
  footer.footer.offset
    .footer__links
      a(href="#inicio") Inicio
      a(href="#servicios") Servicios
      a(href="#nosotros") Nosotros
      a(href="#clientes") Clientes
      a(href="#contacto") Contacto

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
    color: white;

    @media (min-width: 600px) {
      grid-template-areas: 'links' 'small';
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
      }
    }

    &__small-reference {
      grid-area: 'small';
      display: none;

      @media (min-width: 600px) and (max-width: 1199px) {
        display: block;
      }
    }
  }
</style>
