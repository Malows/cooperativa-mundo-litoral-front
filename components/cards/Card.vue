<template lang="pug" functional>
  .card(:class="{ 'card--important': props.important }")
    h4.card__title {{ props.title }}
    p.card__body {{ props.body }}
</template>

<style lang="scss">
  .card {
    $class: &;

    border: solid 1px var(--color-divider);
    padding: 1rem;
    text-align: center;

    &--important {
      order: -1;

      // &:hover {
      //   $shadow-color: rgba(34, 34, 34, 0.4);
      //   box-shadow: 0 5px 10px 2px lighten($shadow-color, 40%);
      // }

      @media (min-width: 720px) { order: 0; }
    }

    &__title {
      font-size: var(--size-card__title);
      margin: 1rem;
    }

    &__body {
      font-size: var(--size-card__body);
      line-height: 1.75rem;
      margin-top: 1rem;
      font-weight: 100;

      @media (max-width: 719px) { margin: 1rem 0; }
    }

    &:hover {
      border-color: var(--color-border);
      $shadow-color: rgba(34, 34, 34, 0.4);
      box-shadow: 0 5px 10px 2px lighten($shadow-color, 40%);

      #{$class}__title { color: var(--color-main--lighter); }
    }
  }
</style>
