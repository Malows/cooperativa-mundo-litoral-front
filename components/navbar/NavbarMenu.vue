<template lang="pug">
  .navbar-menu
    button.navbar-menu__button(@click="show = !show")
      fa(:icon="iconValue")
    .navbar-menu__items(v-show="show")
      a.navbar__link(
        v-for="link in links"
        :key="`burguer-${link.value}`"
        :href="link.value"
        @click="show = false") {{ link.label }}

</template>

<script>
export default {
  props: { links: { type: Array, default: () => [] } },

  data: () => ({ show: false }),

  computed: {
    iconValue() {
      return this.show
        ? ['fas', 'times']
        : ['fas', 'bars']
    }
  }
}
</script>

<style lang="scss">
.navbar-menu {
  display: flex;
  justify-content: center;
  align-items: center;

  &__button {
    border: none;
    font-size: 1.5rem;
  }

  &__items {
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100vw;
    z-index: 999;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
