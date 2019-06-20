<template lang="pug">
  nav.navbar
    .navbar__logo
      picture
        source(srcset="~/assets/img/logo.webp" type="image/webp")
        img(src="~/assets/img/logo.jpg")
</template>

<style lang="scss">
  .navbar {
    height: 4rem;
    padding: .5rem 1rem;

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
