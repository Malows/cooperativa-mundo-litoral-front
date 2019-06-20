<template lang="pug" functional>
  .service
    .service__img
      picture
        source(
          :srcset="`${props.src}--sm.webp 599w, ${props.src}--md.webp 1199w, ${props.src}--lg.webp 1200w`"
          sizes="(max-width: 639px) 100%, (max-width: 1199px) 100%, 100%"
          type="image/webp"
          )
        img(
          :srcset="`${props.src}--sm.png 599w, ${props.src}--md.png 11998w, ${props.src}--lg.png 1200w`"
          sizes="(max-width: 599px) 100%, (max-width: 1199px) 100%, 100%"
          :src="`${props.src}--sm.png`"
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
      font-size: 1.625rem;
    }
    &__body {
      margin: 1rem 0;
      line-height: 1.5rem;
    }
  }
</style>
