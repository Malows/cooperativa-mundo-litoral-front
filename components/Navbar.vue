<template lang="pug">
  nav.navbar.x-offset
    .navbar__logo
      picture
        source(srcset="~/assets/img/logo.webp" type="image/webp" alt="brand logo")
        img(src="~/assets/img/logo.jpg" alt="brand logo")
</template>

<style lang="scss">
  .navbar {
    height: 4rem;
    padding: .5rem 1rem;
    background-color: #fff;

    @media (min-width: 600px) { height: 10vh; }

    &__logo {
      height: 100%;

      * {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
