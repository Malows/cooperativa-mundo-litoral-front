<template lang="pug" functional>
  .nosotros
    h4.nosotros__title Nosotros
    p.nosotros__body
      | Somos una cooperatica de trabajo joven y dinámica, donde la misión es llevar los mejores resultados
      | en los servicios prestados. Somos una Cooperativa eficiente y eficaz, que permite ser reconocida a
      | nivel local por su trayectoria profesional. Desarrollamos trabajos en base a objetivos claros y
      | comunes, dentro del proceso de mejora continua, brindando a nuestros clientes servicios de calidad.
</template>

<style  lang="scss">
  .nosotros {
    text-align: center;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 100vh;
    background-image: url('img/nos--sm.png');
    padding: 0 3rem;

    @media (min-width: 640px) {
      height: 75vh;
      background-image: url('img/nos--md.png');
      padding: 0 10rem;
    }

    @media (min-width: 1200px) {
      height: 50vh;
      background-image: url('img/nos--lg.png');
      padding: 0 15rem;
    }
  }
</style>
