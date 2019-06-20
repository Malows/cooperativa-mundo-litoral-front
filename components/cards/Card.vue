<template lang="pug" functional>
  .card(:class="{ 'card--important': props.important }")
    h4.card__title {{ props.title }}
    p.card__body {{ props.body }}
</template>

<style lang="scss">
  .card {
    border: solid 1px #333A;
    padding: 1rem;
    text-align: center;

    &--important {
      box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.4);
      order: -1;

      @media (min-width: 720px) {
        order: 0;
      }
    }

    &__title {
      font-size: 2rem;
      margin: 1rem;
    }

    &__body {
      font-size: 1.35rem;
      line-height: 1.75rem;
      margin-top: 1rem;
      font-weight: 100;

      @media (max-width: 719px) {
        margin: 1rem 0;
      }
    }
  }
</style>
