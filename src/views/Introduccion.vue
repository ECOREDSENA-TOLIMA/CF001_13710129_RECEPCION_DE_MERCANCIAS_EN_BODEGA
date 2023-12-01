<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12
        p.mb-4 La eficiente gestión de los procesos de inspección y recibo de mercancías es esencial para el buen funcionamiento de cualquier entidad comercial. Estos procesos no solo aseguran la calidad y conformidad de los productos recibidos, sino que también cumplen un papel crucial en la salvaguarda de la integridad operativa y reputación de la organización. En esta exploración, examinaremos de cerca los fundamentos de los procesos de inspección y recibo de mercancías, destacando su importancia dentro del contexto de los procedimientos y políticas organizacionales.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Procesos de inspección y recibo de mercancías" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Procesos de inspección y recibo de mercancías


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
