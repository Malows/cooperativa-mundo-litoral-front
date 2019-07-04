<template lang="pug">
  nav.navbar.x-offset
    .navbar__logo
      picture
        source(srcset="~/assets/img/logo.webp" type="image/webp" alt="brand logo")
        img(src="~/assets/img/logo.jpg" alt="brand logo")

    navbar-menu(v-if="this.width < 600" :links="links")
    .navbar__items(v-else)
      a.navbar__link(v-for="link in links" :key="value" :href="link.value") {{ link.label }}
</template>

<script>
import NavbarMenu from './NavbarMenu'

export default {
  components: { NavbarMenu },

  props: { width: { type: Number, default: 0 } },

  data: () => ({
    links: [
      { label: 'Inicio', value: '#inicio' },
      { label: 'Servicios', value: '#servicios' },
      { label: 'Nosotros', value: '#nosotros' },
      { label: 'Clientes', value: '#clientes' },
      { label: 'Contacto', value: '#contacto' }
    ]
  })
}
</script>

<style lang="scss">
  .navbar {
    height: 4rem;
    padding: .5rem 1rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    @media (min-width: 600px) { height: 10vh; }

    &__logo {
      height: 100%;

      * {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }

    &__items {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__link {
      padding: 1rem;
      text-decoration: none;
      cursor: pointer;
      @each $op in link, hover, visited, active {
          &:#{$op} { color: var(--color-divider); }
        }
    }
  }
</style>
