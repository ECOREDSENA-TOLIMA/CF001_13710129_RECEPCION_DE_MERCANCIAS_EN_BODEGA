<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operaciones de recibo e inspección

    p.mb-5(data-aos="fade-down") En el flujo del proceso logístico, la recepción e inspección de las mercancías consiste en un conjunto de actividades que se materializan en la venta del producto por parte del proveedor, es decir hace llegar las mercancías que se solicitaron a través de la orden de compra, que contiene actividades administrativas y operativas. 

    .d-flex.py-3.mb-4(data-aos="zoom-in-down")
      .titulo-herramientas.d-flex.py-2.text-white
        img(src='@/assets/curso/temas/icono.svg', style="width: 30px", alt='')
        h3.mb-0.d-none.d-sm-none.d-md-inline-flex.mx-3 Descargue de mercancías
        h3.mb-0.d-block.d-md-none.mx-3 Descargue de mercancías

    p.mb-3(data-aos="fade-down") Para la recepción de mercancías se plantean etapas que se realizan antes de la llegada, durante y posterior a esta. 
    p.mb-5(data-aos="fade-down") Antes de la llegada se contempla la planeación de tareas y verificación de la disponibilidad de recursos para realizar la descarga de mercancías. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-10.col-12.mb-4.mb-md-0
              h4 La planeación de tareas
              p Contempla la verificación del tiempo necesario para descargar el vehículo teniendo en cuenta el tipo y la cantidad de mercancía, de esta manera se podrá cuantificar los recursos humanos y las competencias necesarias para realizar la operación. Por otro lado, en la verificación de disponibilidad de recursos se deberá validar sí se cuenta con los elementos mecánicos para movilizar la carga, ya que, por normativa de seguridad y salud en el trabajo, el operador no podrá levantar cargas mayores a 25 kilogramos. 
            .col-md-2.col-10
              figure
                img(src='@/assets/curso/temas/tema2/tema2-1.svg', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-2.col-10.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-2.svg', alt='')
            .col-md-10.col-12.text-start
              h4 La llegada del vehículo
              p Se procederá a verificar la documentación, como tal la nota de remisión o albarán se debe comparar con la orden de compra, además de los documentos adicionales, como certificados de seguridad, manifiestos de carga y demás dependiendo las políticas de descarga de la empresa receptora. Así mismo, se debe verificar las características de transporte, por ejemplo, si la descarga corresponde a productos perecederos se debe validar que el vehículo cumpla con las condiciones de temperatura para que el producto no se haya deteriorado en el transporte.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-10.col-12.mb-4.mb-md-0
              h4 Descarga
              p Se deberá trasladar el producto desde el vehículo hasta la zona de recepción e inspección a través del equipo y recursos planeados con anterioridad. En ese momento se procede a realizar la verificación visual, validando si el embalaje llegó en condiciones adecuadas, si está bien posicionado, si la mercancía ha sufrido golpes, que la información de las etiquetas esté visible, si la cantidad y referencias son correctas. Si existieran inconsistencias se deberán registrar en la nota de remisión, además de separarla de las demás mercancías para realizar una revisión exhaustiva, decidir si se realizará una devolución posteriormente y notificar al área de compras la situación que se presentó.
            .col-md-2.col-10
              figure
                img(src='@/assets/curso/temas/tema2/tema2-3.svg', alt='')

    p.mb-5(data-aos="fade-down") En la verificación documental se debe garantizar:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/cn_1.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#134F9D")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#134F9D")
              h5.mb-0 Validar
            p Que la descripción, la cantidad y los valores de la orden del producto correspondan con la verificación visual de la mercancía y las notas de remisión.
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/cn_2.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#134F9D")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#134F9D")
              h5.mb-0 Informar
            p Sobre anomalías, faltantes, daños y condiciones en las notas de remisión.
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/cn_3.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#134F9D")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#134F9D")
              h5.mb-0 Garantizar
            p Que se firme  la orden por parte del transportista y el receptor de la mercancía de las notas de remisión.
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema2/cn_4.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#134F9D")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#134F9D")
              h5.mb-0 Registrar
            p Datos de importancia como la hora, la fecha de entrega y despacho y el nombre del lugar establecido.

    p.mb-5(data-aos="fade-down") Finalmente, esta documentación se deberá entregar firmada y sellada al personal de la empresa transportadora para que el vehículo pueda retirarse del muelle de descarga. 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Procesos de inspección y cuarentena

    p.mb-5(data-aos="fade-down") Luego del proceso de descarga se deberá realizar el proceso de inspección más detallada, en donde se desempaca y valida el estado físico, la cantidad, calidad y las etiquetas de las mercancías recibidas, de acuerdo con los procedimientos de revisión establecidos en la empresa, la normatividad técnica y los acuerdos contractuales realizados en el proceso de compra, esta actividad la realiza específicamente personal del área de calidad.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .cajon.color-secundario.p-4.px-lg-5
          p.mb-0 En este proceso de inspección de calidad se examinan las características técnicas del producto y sus materiales usando instrumentos de medición, laboratorios de ensayo y fichas técnicas de producto con el fin de validar si las expectativas en cuanto diseño y funcionalidad se cumplen.
      .col-12.col-lg-10
        p Las características técnicas del producto generalmente están determinadas a través de estándares que se pueden evidenciar a través de las fichas o normas técnicas, estas como tal describen los atributos o variables de un producto. Los atributos son características o cualidades que generan alguna utilidad al consumidor, al momento de realizar la inspección se hace a través de la observación y juicio de una persona, está la deberá clasificar como buena o defectuosa. Por ejemplo, si se realiza la inspección de una pieza metálica o una prenda se podrá observar, si hay cambios de color, si tiene una forma simétrica, si el producto está limpio, si tiene una textura defectuosa, entre otras condiciones. 
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-5.col-10.mb-2.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-4.png', alt='')
      .col-md-7.col-12
        p Por otro lado, las variables de medición permiten representar el resultado en una cifra, por ejemplo, la medida del diámetro de un cilindro metálico utilizando un calibrador, así mismo, se podrán medir longitudes, peso, volumen, temperatura, resistencia del material e incluso el color con múltiples herramientas de medición. 
        .cajon.color-primario.p-4.px-lg-5.mb-3
          p.mb-0 Las anomalías que se puedan presentar en la inspección deberán ser objeto de una devolución al proveedor, así mismo durante la revisión se clasifica y separa la mercancía para su posterior almacenamiento. En consecuencia, se diligenciará una hoja de control que permitirá el registro de cada una de las inconsistencias presentadas para enviarla al proveedor. 
        p Si el producto es aprobado se liberará para ser ubicado en las estanterías del almacén, si es rechazado se debe trasladar a la zona de decisión, que básicamente se refiere a la ubicación para determinar la disposición de esta mercancía que puede ser: destrucción o devolución.

    p.mb-5(data-aos="fade-down") Existen productos que son susceptibles de procesos de cuarentena, que no es más que la retención de la mercancía hasta su aprobación o rechazo para tener una disposición final. Estas mercancías tienen condiciones que pueden afectar la salud de las personas debido a los riesgos biológicos, adicionalmente si son para el consumo humano o animal ya que pueden generar enfermedades contagiosas. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los productos que generalmente tienen este tipo de almacenamiento son los medicamentos o biológicos para el consumo humano o animal, y su liberación depende de la verificación técnica realizada por experto hasta comprobar que no tiene riesgos para el consumo. 
          br
          br
          | Un caso muy representativo son las vacunas contra el COVID 19 que tuvieron un proceso de cuarentena donde el INVIMA (Instituto Nacional de Vigilancia de Medicamentos y Alimentos) en Colombia, realizó la respectiva verificación para poder otorgar los permisos y liberaron las dosis a ser aplicadas en la población.

    p.mb-5(data-aos="fade-down") Otros productos que son susceptibles de cuarentena son los productos y subproductos de origen animal que son importados y que son para el consumo humano y animal, como la carne de diferentes especies, lácteos. Adicional el material genético, materias primas de origen animal para elaboración de alimentos entre otros productos que generen algún tipo de riesgo. 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Muestreo de productos

    p.mb-3(data-aos="fade-down") Durante el proceso de inspección se realiza la validación de la mercancía recibida, sin embargo, la revisión difícilmente se podrá hacer al 100 %, por esto se utilizan técnicas de muestreo, donde se toma una pequeña cantidad que permita identificar productos no conformes, para así tomar la decisión de aprobar o rechazar la mercancía recibida. 
    p.mb-5(data-aos="fade-down") A continuación, se muestran los diferentes tipos de muestreo:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-acento-botones")
      .row.justify-content-center(titulo="Muestreo aleatorio")
        .col-12.col-lg-10.mb-3
          p.mb-0 Cuando las muestras se seleccionan al azar se denomina muestreo aleatorio, donde todas las piezas tienen la misma probabilidad de ser seleccionadas, por ejemplo:
        .col-12.col-lg-10.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
        .col-12.col-lg-10
          p En este grupo de productos se seleccionan 2 unidades al azar, sin tener que pensar cual convendría más o menos, simplemente se escogen por sorteo.
      .row.justify-content-center(titulo="Muestreo sistemático")
        .col-12.col-lg-10.mb-3
          p.mb-0 En este caso implica conocer el tamaño de la población y el tamaño de la muestra, la división de estos dos valores será el intervalo de escogencia del producto que será la muestra.
        .col-12.col-lg-10.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')
        .col-12.col-lg-10
          p Por ejemplo, en este caso, se tienen 8 productos en total de la producción a seleccionar,  los elementos serán: 8/2 = 4, es decir cada 4 elementos se debe realizar la selección. Para seleccionar el primer elemento inicialmente seleccionamos un número aleatorio entre 1 y 4, por ejemplo 2, y luego se le sumará el intervalo para seleccionar el nuevo elemento. Por tanto, quedarán seleccionados el elemento 2 y luego el elemento 6.
      .row.justify-content-center(titulo="Muestreo estratificado")
        .col-12.col-lg-10.mb-3
          p En donde la población se divide en grupos, por ejemplo, un pedido que venga con diferentes referencias o colores, en este caso se escogerán de cada grupo o estrato, una muestra significativa al azar.
        .col-12.col-lg-10.mb-3
          figure
            img(src='@/assets/curso/temas/tema2/tema2-8.png', alt='')
        .col-12.col-lg-10
          p En este caso se tienen 8 elementos en total, sin embargo, este lote se divide en dos grupos de colores, verde y azul, donde se deberá seleccionar un tamaño de muestra de 2 elementos, es así, que se seleccionarán dos elementos al azar de cada grupo.

    p.mb-3(data-aos="fade-down") Para realizar el control de calidad dentro de la organización de establecen planes de muestreo de los atributos y las variables que se decida validar en los productos, este plan define un procedimiento y criterios de decisión a la hora de verificar los productos, que facilitan la inspección del producto por parte del personal del área. 
    p.mb-5(data-aos="fade-down") Adicional el plan define de qué manera se seleccionará el tamaño de la muestra, generalmente existen normas técnicas que facilitan este cálculo como la norma #[em Military Standard] 105E (MIL-STD-105E), que es un sistema de planes de muestreo desarrollado por el ejército de estados unidos y que usualmente es usado para el proceso de inspección de mercancía. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .cajon.color-primario.p-4.px-lg-5
          p.mb-0 Debido a su gran aceptación fue adoptado por la ISO (#[em International Standardization Organization]) conocido como Organización Internacional de Estandarización, a través la norma ISO 2859, en la cual se estandarizan los procedimientos de muestreo para inspección de productos por atributos.
      .col-12.col-lg-10
        p Esta norma técnica facilita los acuerdos comerciales entre proveedor y cliente, ya que define el tamaño de la muestra dependiendo de los criterios de aceptación y rechazo de la mercancía, permitiendo que el proveedor pueda mejorar la calidad de sus productos y entregas, además pueda garantizar al cliente una entrega adecuada. 

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Pictogramas y normatividad 
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-5.col-10.mb-2.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-9.png', alt='')
      .col-md-7.col-12
        p En los envases y empaques de la mercancía se puede observar los pictogramas, que son los símbolos que se utilizan para identificar a lo largo de la cadena de suministro las condiciones de manipulación, protección personal, transporte, almacenamiento y conservación.
        p La norma ISO 780, pone a disposición los estándares para llevar la calidad a los diferentes procesos, mejorando los esquemas de trabajo, dentro de los cuales están los de logística y distribución de mercancías a través los sistemas de empaque y embalaje con el fin de evitar daños al personal y a la mercancía. 
        p A continuación, se presentan algunos Pictogramas para el reconocimiento del conjunto de símbolos gráficos utilizados en los envases y embalajes de distribución, con el fin de comunicar las instrucciones de manipulación y cuidado, estas formas pictóricas ayudan al ejercicio de la manipulación desde un lenguaje no verbal evitando los limitantes del idioma:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.mb-2.mb-md-0
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Pictogramas</i>
        figure
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-1a.svg', alt='En la figura 1 se muestran los pictogramas para el reconocimiento del conjunto de símbolos gráficos utilizados en los envases y embalajes de distribución.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-1b.svg', alt='En la figura 1 se muestran los pictogramas para el reconocimiento del conjunto de símbolos gráficos utilizados en los envases y embalajes de distribución.')
          figcaption Nota. Tomada del ICONTEC IS0 780:2015

    p.mb-5(data-aos="fade-down") Por otro lado, la norma ISO 13274 menciona las condiciones para el embalaje de transporte de mercancías peligrosas, clasificándolas así:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .tarjeta.color-primario.mb-5.p-4.p-lg-5(data-aos="fade-down")
          SlyderA(tipo="b")
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 1 - Explosivos
                p Son diamantes de color naranja, con pictogramas de color negro. 
                p De esta clase hay varios tipos de explosivos que se utilizan principalmente para actividades de exploración y explotación minera o petrolera. 
                p La única empresa autorizada en Colombia para fabricar explosivos es INDUMIL.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-10.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 2 - Gases
                p Los gases son sustancias químicas que no tienen forma ni volumen constante y tienden a llenar el recipiente que les contiene.
                p El diamante rojo con el número 2 representa la presencia de gases inflamables, el diamante verde con el número 2 representa la presencia de gases no inflamables ni tóxicos, y el diamante blanco con el número 2 representa la presencia de gases tóxicos. 
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-11.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 3 - Líquidos inflamables
                p Son líquidos inflamables los líquidos, mezcla de líquidos, o líquidos que contienen sustancias sólidas en solución o suspensión, por ejemplo, pinturas, barnices, lacas, entre otras.
                p Son diamantes rojos que contienen el número 3, con un pictograma en forma de llama de color blanco o negro.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-12.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 4 - Sólidos inflamables
                p Son sustancias que presentan riesgo de combustión espontánea y sustancias que, en contacto con el agua, desprenden gases inflamables.
                p Los diamantes con el número 4 representan la presencia de sólidos como desechos de caucho, azufres, nitrocelulosa, entre otros. 
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 5 - Sustancias comburentes y peróxidos orgánicos
                p Las mezclas de sustancias comburentes con materias combustibles, e incluso con materias como azúcar, harina, aceites comestibles, aceites minerales, etc., estos diamantes con el número 5 evidencian la presencia de este tipo de sustancias.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-14.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 6 - Sustancias tóxicas e infecciosas
                p Esta clase se representa a través de diamantes blancos con líneas punteadas y el número 6. El primer diamante con la figura de una calavera, representa sustancias tóxicas y el segundo representa la presencia de sustancias infecciosas, como, por ejemplo, la manipulación de pesticidas, mercurio, venenos, entre otros.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-15.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 7 - Materiales radioactivos
                p Los productos radiactivos son sustancias que en forma espontánea y continua emiten ciertos tipos de radiación, se simbolizan con un diamante con línea punteada, con los colores blanco y amarillo, estos los encontramos en productos como el cobalto, cesio, yodo, generalmente son productos utilizados en medicina o investigación científica.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-16.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 8 - Sustancias Corrosivas
                p Las sustancias corrosivas son materiales tan poderosos que pueden dañar o destruir metales, generalmente son ácidos que en contacto con la piel puede destruir el tejido, por ejemplo, el ácido clorhídrico, ácido sulfúrico, ácido nítrico, entre otros. La presencia de estas sustancias está representada por un diamante con línea punteada y el número 8, en colores blanco y negro.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-17.svg', alt='')
            .row
              .col-md-6.col-12.mb-4.mb-md-0
                h4 Clase 9 - Sustancias y objetos peligrosos varios
                p Estas sustancias no están relacionadas en las otras clases, por ejemplo, el asbesto o amianto, las semillas o harina de ricino, los compuestos para el moldeado de plástico, harina y desechos de pescado, nieve carbónica o hielo seco. Están representadas por un diamante con línea punteada y el número 9, también por una rejilla de barras en la parte superior.
              .col-md-6.col-10
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-18.svg', alt='')

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Registro de empaques y embalajes

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-5.col-10.mb-2.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/tema2-19.png', alt='')
      .col-md-7.col-12
        p En la recepción de mercancías, es necesaria la actividad de registro de la cantidad ingresada de empaques y embalajes. Para el proceso de validación se podrá realizar el conteo uno a uno, sin embargo, para facilitar el proceso, garantizar la exactitud de las unidades, agilizar la descarga, se tienen disponibles herramientas tecnológicas para la identificación de mercancías.
        p Dentro de estas se encuentra el sistema RFID (por sus siglas en inglés: #[em Radio Frecuency Identification] o Identificación por radiofrecuencia), es una tecnología de identificación automática y captura de datos, que permite que un lector capte la señal que emite la etiqueta de la mercancía, identificando el producto y así mismo su cantidad.  La etiqueta RFID está compuesta por una antena que capta ondas de radio, un chip que genera un código identificador y el sustrato, que es el material de respaldo al que se fijan la antena y el chip.

    p.mb-5(data-aos="fade-down") También como un elemento importante están las etiquetas, dentro de estas se entrega información del producto, pero ante todo se encuentran los códigos de identificación, que pueden ser códigos EAN, sus siglas en inglés: #[em European Article Number] o Número de artículo europeo, en la actualidad también conocidos como códigos GTIN con sus siglas en inglés: #[em Global Trade Item Number] o Número de artículo comercial global, estos como tal unifican la nomenclatura en toda la cadena de abastecimiento, eliminando la operación de etiquetado al recibir e inspeccionar el producto, en este sentido se utiliza el mismo lenguaje desde el inicio del proceso hasta el cliente final. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-3
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-20.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El código de barras se relaciona con casi todos los productos que se consumen a diario, y es el insumo para identificar y cuantificar la mercancía recibida. Para usarla dentro del proceso es necesario conocer la norma Icontec ISO 28219:2017 que provee información para que los elementos etiquetados se pueden leer en entornos de escaneo en las instalaciones de la compañía y así facilitar el proceso de identificación.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Elementos de protección personal

    p.mb-5(data-aos="fade-down") Dentro de los recursos necesarios para la recepción de pedidos se encuentran los elementos de protección personal, que son todos los aparatos o dispositivos fabricados para preservar la integridad del cuerpo humano, son necesarios para la recepción de mercancía ya que protegerán al trabajador de posibles accidentes al momento de realizar la operación de recepción y descarga de mercancía, para esta operación, se requiere principalmente, casco de seguridad, protección auditiva, gafas, tapabocas, chaleco reflectivo, guantes y botas de seguridad, que se detallan a continuación: 


    .row.justify-content-center.mb-5(data-aos="fade-down-left")  
      .col-12
        ImagenInfografica.color-acento-botones.d-none.d-md-block(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/info-1a.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="44%" y="12%" numero="+")
            p Para #[b cascos] de seguridad se recomienda que sea ligero, deberá ser capaz de resistir climas adversos, resistencia al fuego, debe como tal limitar la presión aplicada al cráneo distribuyendo los posibles impactos a la superficie del mismo, este protegerá al trabajador de caídas de objetos desde un nivel superior o golpes con superficies que puedan tener contacto con la cabeza.
          .tarjeta.color-acento-botones.p-3(x="27%" y="41%" numero="+")
            p Los #[b tapa oídos] protegen al trabajador de riesgos físicos provocados por el ruido, como tal de maquinaria o automotores, se recomienda el uso de protectores que sean cómodos, higiénicos, que sean fáciles de usar y que se puedan adaptar al entorno de trabajo. 
          .tarjeta.color-acento-botones.p-3(x="27%" y="63.5%" numero="+")
            p Las #[b gafas] protegen al trabajador de riesgos químicos y mecánicos causados por la exposición a sustancias o partículas sólidas que puedan generar accidentes oculares. Por otro lado, los elementos de protección respiratoria como los tapabocas son necesarios si se está expuesto a micropartículas, excesiva contaminación, o sustancias peligrosas. 
          .tarjeta.color-acento-botones.p-3(x="27%" y="86.5%" numero="+")
            p El #[b chaleco reflectivo] o ropa de alta visibilidad es necesaria en almacenes con poca iluminación, y donde hay circulación permanente de vehículos, ya que se puede identificar rápidamente al trabajador y evitar accidentes dentro de la bodega con equipos de manipulación.
          .tarjeta.color-acento-botones.p-3(x="72%" y="40%" numero="+")
            p Los #[b tapabocas] son aquellos elementos con los cuales se protegen de posibles riesgos laborales generados por partículas que se encuentran en el aire, generadas por la manipulación del producto en la recepción. Dichas partículas generan daños en el sistema respiratorio de la persona, para lo cual según el producto a recibir se pueden utilizar máscaras protectoras en caso de ser un riesgo elevado o tapabocas para riesgos moderados, cuya finalidad es contar con un filtro que separe e impida el ingreso de las sustancias peligrosas a las fosas nasales del personal.
          .tarjeta.color-acento-botones.p-3(x="72%" y="64%" numero="+")
            p Los #[b guantes] son útiles para la prevención de cortes, generados por la utilización de herramientas corto-punzantes ya sea para abrir los embalajes o dividir los productos, así mismo evitan la contaminación por ataques micobacterianos generados por manipulación de alimentos o químicos.
          .tarjeta.color-acento-botones.p-3(x="72%" y="85.5%" numero="+")
            p Las #[b botas] o calzado de seguridad protegerán a los trabajadores de golpes ocasionados por riesgos mecánicos y físicos causado por la manipulación de cargas, así mismo previenen caídas por deslizamiento de las personas, ya que cuentan con suelas adherentes y también existen aquellas botas impermeables que pueden prevenir ataques micobacterianos generados por plagas o condiciones húmedas.
        .d-block.d-md-none
          figure
            img(src='@/assets/curso/temas/tema2/info-1b.svg', alt='')

    p.mb-5(data-aos="fade-down") Estos elementos de protección personal son esenciales para salvaguardar la salud y seguridad de los trabajadores durante las operaciones de recepción de mercancía, cumpliendo así con los estándares de seguridad laboral y promoviendo un ambiente de trabajo seguro.


</template>

<script>
export default {
  name: 'Tema2',
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
