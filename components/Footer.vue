<template lang="pug" functional>
  footer.footer
    .footer__links
      a(href="#inicio") Inicio
      a(href="#servicios") Servicios
      a(href="#nosotros") Nosotros
      a(href="#clientes") Clientes
      a(href="#contacto") Contacto
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

    &__links {
      grid-area: 'links';
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        text-decoration: none;
        &:link { color: white; }
        &:hover { color: white; }
        &:visited { color: white; }
      }
    }
  }
</style>
