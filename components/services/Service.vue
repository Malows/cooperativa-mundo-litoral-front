<template lang="pug" functional>
  .service
    .service__img
      picture
        source(
          :srcset="`${props.src}--sm.webp 599w, ${props.src}--md.webp 1199w, ${props.src}--lg.webp 1200w`"
          sizes="(max-width: 639px) 100%, (max-width: 1199px) 100%, 100%"
          type="image/webp"
          :alt="props.name"
          )
        img(
          :srcset="`${props.src}--sm.jpg 599w, ${props.src}--md.jpg 11998w, ${props.src}--jpg.png 1200w`"
          sizes="(max-width: 599px) 100%, (max-width: 1199px) 100%, 100%"
          :src="`${props.src}--sm.jpg`"
          :alt="props.name"
          )

    h4.service__name {{ props.name }}
    p.service__body {{ props.body }}
</template>

<style lang="scss">
  .service {
    // border: solid 1px #333A;

    &:hover {
      color: var(--color-main--light);
      &__img {
        box-shadow: 0px 5px 10px 2px var(--color-border);
      }
    }

    &__img {
      height: 16.8rem;
      * {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__name {
      margin: 1rem 0;
      font-size: var(--size-service__title);
    }
    &__body {
      margin: 1rem 0;
      font-size: var(--size-service__body);
      line-height: 1.5rem;
    }
  }
</style>
