<template lang="pug" functional>
  .card(:class="{ 'card--important': props.important }")
    h4.card__title {{ props.title }}
    p.card__body {{ props.body }}
</template>

<style lang="scss" scoped>
  .card {
    border: solid 1px #333A;
    padding: 1rem;
    text-align: center;

    &--important {
      box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.4);
    }

    &__title {
      font-size: 2rem;
      margin: 2rem;
    }

    &__body {
      font-size: 1.35rem;
      margin: 2rem;
      font-weight: 100;
    }
  }
</style>
