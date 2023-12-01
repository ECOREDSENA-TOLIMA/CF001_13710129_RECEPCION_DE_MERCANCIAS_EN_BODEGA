<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Procesos de inspección y recibo de mercancías, los cuales son esenciales para garantizar la calidad y la integridad de los productos en la cadena de suministro. Desde la llegada de la mercancía hasta su almacenamiento, cada paso implica una cuidadosa evaluación. Los inspectores verifican la conformidad con las especificaciones, la cantidad correcta y la ausencia de daños. Esta fase no solo asegura la satisfacción del cliente al recibir productos de alta calidad, sino que también previene posibles problemas en etapas posteriores. La eficiencia en los procesos de inspección y recibo mejora la gestión del inventario y fortalece la confianza en la cadena logística.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se hace referencia a los temas principales que se desarrollan en el mismo, entre ellos, la entrega perfecta y las operaciones llevadas a cabo teniendo en cuenta características relevantes en el proceso como la naturaleza y clasificación de los elementos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
