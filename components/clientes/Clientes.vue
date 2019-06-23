<template lang="pug">
  section
    h4 Nuestros clientes
    carrusel-clientes(:width="width")
</template>

<script>
import CarruselClientes from './CarruselClientes'

export default {
  components: { CarruselClientes },

  props: { width: { type: Number, default: 0 } }
}
</script>

<style>

</style>
