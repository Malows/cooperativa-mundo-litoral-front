<template lang="pug" functional>
  section#nosotros.nosotros.offset
    h4.nosotros__title Nosotros
    p.nosotros__body
      | Somos una cooperativa de trabajo joven y dinámica, donde la misión es
      |  llevar los mejores resultados en los servicios prestados. Somos
      |  eficientes y eficaces, lo que nos permite ser reconocidos a nivel
      |  local por nuestra trayectoria profesional. Desarrollamos trabajos en
      |  base a objetivos claros y comunes, dentro del proceso de mejora
      |  continua, brindando a nuestros clientes servicios de calidad.
</template>

<style lang="scss">
  .nosotros {
    text-align: center;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 100vh;
    background-image: url('~assets/img/nos--sm.png');
    padding: 0 3rem;

    @media (min-width: 600px) {
      $proportion: 447 / 768;
      min-height: calc(100vw * #{$proportion});
      background-image: url('~assets/img/nos--md.png');
    }

    @media (min-width: 1200px) {
      $proportion: 434 / 1440;
      min-height: calc(100vw * #{$proportion});
      background-image: url('~assets/img/nos--lg.png');
    }

    &__title {
      font-size: var(--size-title);
      margin: 1.5rem 0;
    }

    &__body {
      font-size: var(--size-nosotros__body);
      line-height: 2;
      margin: 1.5rem 0;
      @media screen {
        $column: 100vw / 12;
        margin-left: $column;
        margin-right: $column;
      }
    }
  }
</style>
