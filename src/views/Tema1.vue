<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La entrega perfecta

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4.px-lg-5
          p.mb-0 Comúnmente nos referimos a un buen servicio cuando se realiza una entrega perfecta, en el sector logístico este término mide la efectividad de la cadena de suministro y se evidencia sí el pedido fue entregado a tiempo, completo, en buen estado y con la documentación de respaldo, en consecuencia, se considera un indicador clave de cumplimiento en la organización. 
    
    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Documentos requeridos
        h3.mb-0.d-block.d-md-none.mx-3 Documentos requeridos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-lg-5.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/tema1/tema1-1.png', alt='')
      .col-12.col-lg-7
        p Es importante gestionar adecuadamente la información de entrada de mercancías en la bodega ya que facilitará la trazabilidad de los productos desde su recepción hasta la entrega a clientes. Esta información generalmente física, permite clasificar, inspeccionar, disponer de la mercancía para su correcto almacenamiento y posterior despacho.
        p.mb-0 Antes de que ingrese la mercancía a la bodega es importante validar el documento orden de compra, este es el medio oficial con el que el comprador solicita la mercancía al vendedor, deberá contener los datos de la información del pedido.

    p.mb-5(data-aos="fade-down") En el momento de la entrega, es necesario que la persona que realiza la recepción del pedido contraste la orden de compra con otro documento, la nota de remisión o albarán, este es un documento mercantil que acredita la entrega de un producto y garantiza que la transacción del producto se ha llevado a cabo, sin embargo, no acredita el pago de la mercancía. Legalmente este documento servirá como prueba de que la transacción se llevó a cabo en caso de que exista morosidad por parte del cliente, ya que el personal que recibe, el que descarga y que transporta deberá firmar, sellar y anotar todas las incidencias observadas durante la entrega, luego de verificar y comparar con la orden de compra. Los datos que debe contener son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-10.col-12.p-4.tarjeta.color-secundario 
        .row.justify-content-center.align-items-center
          .col-10.col-md-4
            img(src='@/assets/curso/temas/tema1/tema1-3.svg', alt='')
          .col-10.col-md-6
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Fecha y lugar del pedido.
              li.mb-0
                span.icon ✔ 
                | Datos de la empresa cliente y proveedora.
              li.mb-0
                span.icon ✔ 
                | Dirección de entrega.
              li.mb-0
                span.icon ✔ 
                | Datos del transportista.
              li.mb-0
                span.icon ✔ 
                | Referencia de la mercancía (Descripción y cantidad).
              li.mb-0
                span.icon ✔ 
                | Fecha y lugar de llegada deseada.
              li.mb-0
                span.icon ✔ 
                | Observaciones de las incidencias. 

    p.mb-3(data-aos="fade-down") En este caso la información se enfoca más a la descripción y las cantidades de la mercancía a recibir, junto con las observaciones que hacen referencia a las anomalías del estado de la mercancía encontradas en la validación del pedido.
    p.mb-4(data-aos="fade-down") Por otro lado, también se debe validar el manifiesto de carga que es el documento que ampara el transporte de mercancías ante las distintas autoridades, cuando estas se movilizan en vehículos de servicio público, mediante contratación a través de empresas de transporte de carga legalmente constituidas y debidamente habilitadas por el Ministerio de Transporte. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el caso de recepción de materiales peligrosos, por ejemplo: líquidos o sólidos inflamables, sustancias corrosivas, sustancias tóxicas o veneno, sustancias comburentes, gases explosivos, material radioactivo, entre otros, se debe portar la tarjeta de emergencia, que contiene la información básica sobre el material peligroso, identificación de peligros, protección personal, medidas de primeros auxilios, medidas para vertidos accidentales, estabilidad y reactividad.

    p.mb-4(data-aos="fade-down") Por último, el documento que soporta el desarrollo de la transacción económica es la factura, la cual se expide por el vendedor al comprador. Según la DIAN (2022), hay facturas por talonario, por computador, de máquina registradora, y electrónica, para efectos de entrega y de acuerdo con las políticas de compra de las empresas este documento debe contener la información de costos, impuestos, descuentos, cantidades, descripciones de la mercancía y la información del comprador y vendedor principalmente. 

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Naturaleza y tipo de mercancías

    p.mb-3(data-aos="fade-down") La mercancía como tal es un bien que se podrá vender o comprar, sin embargo, al momento de realizar la recepción e inspección, se deberán conocer los diferentes criterios de clasificación y en consecuencia tener en cuenta las características de embalaje y almacenamiento para hacer el alistamiento de los recursos necesarios para la operación logística.
    p.mb-4(data-aos="fade-down") A continuación, se indica cuales solo los principales tipos de mercancías:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1a.svg' alt='')
        h4.text-center Mercancías extranjeras
        p Son considerados todos  aquellos productos que han sido  procesados fuera del país. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1b.svg' alt='')
        h4.text-center Mercancías nacionales
        p Son aquellos productos procesados o remanufacturados en el país, teniendo en cuenta que se pueden usar materias primas nacionales o extranjeras pero que deben contar con su respectiva nacionalización.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1c.svg' alt='')
        h4.text-center Mercancías peligrosas
        p Son aquellos elementos que por sus propiedades o condiciones especiales deben ser tratadas de forma particular para su traslado.
      .tarjeta.color-primario.p-4 
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1d.svg' alt='')
        h4.text-center Animales vivos
        p Su traslado depende del derecho aduanero, se debe realizar por medio permisos y garantía de conservación. 
      .tarjeta.color-primario.p-4 
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1e.svg' alt='')
        h4.text-center Mercancías valoradas
        p Son aquellas que cuentan con distinta valoración, son productos costosos o asegurados por lo cual deben tener permisos y medidas de seguridad para ser trasladados.
      .tarjeta.color-primario.p-4 
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1f.svg' alt='')
        h4.text-center Restos humanos
        p Corresponde a cadáveres o restos incinerados, para ser trasladados se deben tener en cuenta las reglamentaciones, normativas y procedimientos adecuados.

    p.mb-3(data-aos="fade-down") De acuerdo con la naturaleza de la mercancía, se pueden clasificar de diferentes maneras como perecedera, no perecedera, animales vivos, frágil, peligrosa, extra dimensional, entre otras.
    p.mb-5(data-aos="fade-down") A continuación, se presentan algunas características relevantes a tener en cuenta a la hora de recibir estas mercancías:

    LineaTiempoE.color-acento-contenido.mb-5(data-aos="zoom-in-down")
      .row(titulo="01" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2a.svg', alt='')
        .col-lg-10
          p Cuando es mercancía perecedera, está contará con máximo 7 días de vida útil, lo que indica que se debe contar con lugares aptos con temperatura controlada para un almacenamiento temporal y distribución rápida, así mismo el transporte de estas mercancías debe contar con condiciones especiales para evitar el deterioro del producto, por ejemplo, productos alimenticios como frutas, verduras, lácteos, carnes y también productos cultivados, como flores y plantas.
      .row(titulo="02" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2b.svg', alt='')
        .col-lg-10
          p Si se recibe mercancía no perecedera, esta contará con una vida útil más prolongada por lo tanto no necesitan refrigeración, como lo son productos enlatados, o los alimentos empacados como sopas, pastas, arroces, snacks, entre otros. 
      .row(titulo="03" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2c.svg', alt='')
        .col-lg-10
          p Por otro lado, si se recibe animales vivos, se debe tener en cuenta las condiciones especiales de higiene y desinfección, además de contar con vehículos adaptados para tal fin.
      .row(titulo="04" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2d.svg', alt='')
        .col-lg-10
          p Con mercancía de naturaleza frágil, se debe contar con protocolos de descarga cuidadosa, ya que se puede romper fácilmente con golpes o vibraciones, como por ejemplo huevos, vidrio, cerámica, el ladrillo, porcelana, entre otros. 
      .row(titulo="05" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2e.svg', alt='')
        .col-lg-10
          p Si se recibe mercancía de naturaleza peligrosa se debe contar con protocolos de seguridad ya que hay riesgos inminentes en la manipulación. Para esto se cuenta con una normativa especial NTC 1692, Norma Técnica Colombiana que hace referencia a la clasificación de mercancías peligrosas y orienta acerca del transporte, etiquetado, rotulado de mercancías y la NTC 4435, Norma Técnica Colombiana que orienta acerca de los riesgos, la manipulación y almacenamiento de este tipo de mercancías, generalmente estas mercancías son de origen químico o productos inflamables.
      .row(titulo="06" subtitulo="")
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/carrucel-2f.svg', alt='')
        .col-lg-10
          p Finalmente, si la mercancía es de naturaleza extra dimensional, se debe tener en cuenta condiciones y herramientas de transporte, descarga y almacenamiento de productos de gran volumen, además de permisos específicos para movilizarse en carretera. Por ejemplo, vehículos, tubería de gran tamaño, cilindros para construcción, entre otros. 

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Cantidades recibidas
        h3.mb-0.d-block.d-md-none.mx-3 Cantidades recibidas
    
    p.mb-5(data-aos="fade-down") Una de las variables para verificar en la recepción de los pedidos son las cantidades entregadas, estas se deberán cotejar de acuerdo con la orden de compra, sin embargo, en el proceso de verificación es necesario conocer que las unidades contempladas en la orden de compra pueden venir embalados en cajas, bandejas, pallets, sacos, bolsas, contenedores, canastas o unidades sueltas. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-6.mb-2.mb-md-0
        .cajon.color-primario.p-4.p-md-5
          p.mb-0 #[b Carga paletizada:] se refiere al proceso de organizar y transportar mercancías sobre paletas, que son plataformas planas y robustas diseñadas para soportar el peso y facilitar el manejo mediante equipos como montacargas. Es identificada a través de rótulos que deberán contener la descripción del producto y la cantidad, con el objetivo de disponer el detalle de la información al momento de recibirla. 
      .col-md-6
        figure
          img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Especificaciones de empaques, pesaje y embalajes

    p.mb-3(data-aos="fade-down") En la recepción del producto se debe contemplar el tipo de envase, empaque y embalaje para realizar un adecuado alistamiento de la operación, así como también cuantificar correctamente las unidades del pedido, para esto es necesario entender que el envase es recipiente que contiene, conserva y transporta el producto. 
    p.mb-5(data-aos="fade-down") Los envases se clasifican de acuerdo con su función, de la siguiente manera:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-11.col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Envase primario")
            .col-12.mb-2
              p Es el recipiente que está en contacto directo con el producto, es la unidad primaria de protección de un producto. Para su fabricación existen una amplia variedad, es así que encontramos, por ejemplo, las botellas de vidrio para proteger el líquido de un jugo o un producto lácteo.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
          .row(numero="2" titulo="Envase secundario")
            .col-12.mb-2
              p También conocido como empaque, es aquel que contiene al envase primario, otorgándole protección o exhibición adicional. Se puede definir como el que está en contacto directo con el envase primario. En este caso encontramos las cajas de cartón principalmente, que contienen entre ellas botellas de vidrio, cajas más pequeñas, latas, entre otros.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
          .row(numero="3" titulo="Envase terciario")
            .col-12.mb-2
              p También conocido como embalaje, este unifica, protege y distribuye, el producto a lo largo de la cadena logística. Este deberá soportar la carga y este se deberá rotular para facilitar su identificación y transporte. 
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')

    p.mb-5(data-aos="fade-down") Cada tipo de envase permite proteger el producto para efectos de manipulación, exhibición, transporte y almacenamiento, sin embargo, esta es una muestra de cómo se debe interpretar la orden de compra por unidades, además se debe considerar que hay otros procesos de verificación que como el pesaje y la volumetría que permiten el alistamiento de los espacios para su posterior almacenamiento. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El pesaje del producto es una verificación del peso de la mercancía y la volumetría que no es más que la verificación del volumen de los envases, para esto se utilizarán básculas y escáneres especiales que permitan conocer con exactitud la medida de peso y volumen y así corroborar con la remisión y orden de compra para determinar su ubicación acuerdo a la capacidad de la estantería para el almacenamiento y su movilización dentro de la bodega.

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Fechas y lugares de entrega
        h3.mb-0.d-block.d-md-none.mx-3 Fechas y lugares de entrega

    p.mb-5(data-aos="fade-down") La entrega perfecta tiene dentro de sus variables la fecha de llegada de la mercancía y que esta se realice en el tiempo estipulado para que se tenga en cuenta dentro de los indicadores de cumplimiento, esta se determina dependiendo el de la organización por parte del vendedor y el transportista, el tiempo que transcurre entre la realización del pedido y la entrega se conoce como #[em lead time] o tiempo de ciclo.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-secundario.p-4.px-lg-5
          p.mb-0 Un ejemplo concreto son los envíos locales, que por lo general son de 24 horas, donde los inventarios se reponen a diario y las cantidades son menores, también con los productos de venta de una página de internet, donde se sabe que su distribución es de manera local y en cantidades pequeñas, llegará al otro día, dependiendo de las políticas de entrega del proveedor.

    p.mb-3(data-aos="fade-down") Para el caso de pedidos de mayoristas, donde las solicitudes comprenden grandes cantidades a lugares regionales e intermunicipales, el tiempo de ciclo oscila entre una semana. Por ejemplo, si se solicita una materia prima a una empresa ubicada en una ciudad a nivel nacional. Por otro lado, si los pedidos son mayoristas pero el lugar de donde proviene es internacional el tiempo de ciclo es aproximadamente de tres meses.
    p.mb-5(data-aos="fade-down") Dentro de la planeación de los envíos se deberá establecer unos límites de tiempo acordados entre el cliente y el proveedor con el fin de conocer la fecha aproximada de entrega, ya que se acogerá como un compromiso y tendrá incidencias legales si se llega a incumplir. Tener en cuenta las fechas de entrega facilita al receptor de la mercancía la planeación y el alistamiento de los lugares y recursos necesarios para almacenar, así como también, la estipulación de horarios de atención del almacén y la rotación de entregas de los diferentes transportistas.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-5.col-12.mb-2.mb-md-0
        .cajon.color-primario.p-4.px-lg-5.mb-3
          p.mb-0 Los lugares de entrega, tendrán gran relevancia a la hora de fijar la fecha de entrega, ya que de esta manera se podrá realizar la planeación de las rutas de distribución, entre más lejos sea el punto de salida con respecto al punto de llegada, se tendrá que disponer de una planeación más estricta y de más tiempo para realizar la descarga de mercancías.
        p Todas las variables verificadas, como la documentación, el tipo de mercancías, envases, cantidades a entregar, fechas y lugares de entrega, harán posible que la entrega sea perfecta, así como también el cumplimiento de procedimientos y protocolos. 
      .col-md-6.col-lg-5.col-12
        figure
          img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
