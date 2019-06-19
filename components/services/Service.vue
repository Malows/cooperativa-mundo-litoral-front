<template lang="pug" functional>
  .service
    .service__img
      img(:src="props.src")
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
