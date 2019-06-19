<template lang="pug" functional>
  .service
    .service__img
      picture
        source(:srcset="props.src + '.webp'" type="image/webp")
        img(:src="props.src +  '.png'")
    h4.service__name {{ props.name }}
    p.service__body {{ props.body }}
</template>

<style lang="scss" scoped>
  .service {
    border: solid 1px #333A;

    &:hover {
      color: #005c5e;
      &__img {
        box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.4);
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
      font-size: 1.7rem;
    }
    &__body {
      margin: 1rem 0;
    }
  }
</style>
