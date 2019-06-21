<template lang="pug" functional>
  section#nosotros.nosotros
    h4.nosotros__title Nosotros
    p.nosotros__body
      | Somos una cooperatica de trabajo joven y dinámica, donde la misión es llevar los mejores resultados
      | en los servicios prestados. Somos una Cooperativa eficiente y eficaz, que permite ser reconocida a
      | nivel local por su trayectoria profesional. Desarrollamos trabajos en base a objetivos claros y
      | comunes, dentro del proceso de mejora continua, brindando a nuestros clientes servicios de calidad.
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
      min-height: 75vh;
      background-image: url('~assets/img/nos--md.png');
      padding: 0 10rem;
    }

    @media (min-width: 1200px) {
      min-height: 50vh;
      background-image: url('~assets/img/nos--lg.png');
      padding: 0 15rem;
    }

    &__title {
      font-size: 1.75rem;
      margin: 1.5rem 0;
    }

    &__body {
      font-size: 1.25rem;
      line-height: 2.5rem;
      margin: 1.5rem 0;
    }
  }
</style>
