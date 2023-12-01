export default {
  global: {
    componenteFormativo: 'Procesos de inspección y recibo de mercancías',
    descripcionCurso:
      'Los procesos de recepción e inspección de mercancía son actividades que evidencian el cumplimiento del proveedor con respecto a un pedido solicitado, además de requisitos técnicos y legales que permiten una entrega perfecta. Por tanto, se abordarán elementos de la operación de recibo de mercancías, la documentación requerida, su naturaleza, las especificaciones de los empaques, las operaciones y normatividad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La entrega perfecta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Naturaleza y tipo de mercancías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Especificaciones de empaques, pesaje y embalajes',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operaciones de recibo e inspección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Procesos de inspección y cuarentena',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Muestreo de productos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Pictogramas y normatividad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Registro de empaques y embalajes',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Elementos de protección personal',
            hash: 't_2_5',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema3',
      //   numero: '3',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_13710129.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. La entrega perfecta',
      referencia:
        '[CursoLaboral]. (2021, 10 de enero). Carga y descarga de mercancías Operador de autotransporte.',
      tipo: 'Video',
      link: 'https://youtu.be/ZYthsutIhDk',
    },
    {
      tema: '2.1 Descargue de mercancías',
      referencia:
        'Sena. [Ecosistema de Recursos Educativos Digitales SENA]. (2021, 26 de marzo). Cargue y descargue de mercancía.',
      tipo: 'Video',
      link: 'https://youtu.be/sJEmDKjP990',
    },
    {
      tema: '2.4 Pictogramas y normatividad',
      referencia:
        'Ministerio de Transporte. (2013). Portal de mercancías peligrosas.',
      tipo: 'Cartillas',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Cartillas%20Conductores/Cartillas%20Conductores.htm',
    },
    {
      tema: '2.4 Pictogramas y normatividad',
      referencia:
        'Andrade, C. [SMART de Colombia Carmenza Andrade]. (2020, 7 de octubre). Sistemas de empaques y embalajes y algunas normas ISO. ',
      tipo: 'Video',
      link: 'https://youtu.be/tVCkd8rl78k',
    },
    {
      tema: '2.5 Elementos de protección personal',
      referencia:
        'Mutual de Seguridad CChC. [Mutual de Seguridad CChC]. (2021, 12 de agosto). Manejo Manuel de carga. ',
      tipo: 'Video',
      link: 'https://youtu.be/1gYCnfjemvs',
    },
  ],
  glosario: [
    {
      termino: 'Albarán',
      significado:
        'nota de remisión que elabora el proveedor y que diligencia el personal que recibe, realizando las anotaciones sobre las inconsistencias del pedido.',
    },
    {
      termino: 'Calibrador',
      significado:
        'instrumento de medición de unidades físicas como lo son largo, profundidad y diámetros de objetos físicos.',
    },
    {
      termino: 'Empaque',
      significado:
        'es un contenedor para un producto específico, el cual tiene la función de: proteger de agentes externos; mantener las propiedades internas: ser un instrumento para el <em>marketing</em>; facilitar el almacenamiento y transporte de mercancías.',
    },
    {
      termino: 'Estiba (<em>Pallet</em>)',
      significado:
        'es una estructura movible colocada en la base de la mercancía consolidada, utilizada para facilitar los procesos de almacenamiento y movilidad de los productos.',
    },
    {
      termino: 'Factura',
      significado:
        'documento que relaciona los valores, la cantidad y la descripción de la mercancía, facilita el cotejo de los productos recibidos.',
    },
    {
      termino: 'Logística',
      significado:
        'son los procesos de coordinación de la gestión de los recursos, para cumplir un fin específico. Se clasifica comúnmente en logística de aprovisionamiento, logística de distribución y logística de Producción.',
    },
    {
      termino: 'Muestreo',
      significado:
        'técnica con la cual se selecciona un grupo de empaques o productos para realizar una inspección, con el fin de validar un lote de productos.',
    },
    {
      termino: 'Orden de compra',
      significado:
        'contiene la información correspondiente al pedido, los datos de cantidad, descripción, fecha y lugar de entrega.',
    },
    {
      termino: 'Pictograma',
      significado:
        'gráfico que representa las condiciones de manipulación y cuidado de la mercancía.',
    },
    {
      termino: 'Recibo de mercancías',
      significado:
        'operación logística, que permite el cumplimiento del compromiso del proveedor.',
    },
  ],
  referencias: [
    {
      referencia:
        'DIAN. (S.F). Preguntas frecuentes ¿Qué es una factura? Página <em>web</em> de la Dian. ',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/Paginas/preguntasfrecuentes.aspx#:~:text=QU%C3%89%20ES%20LA%20FACTURA%3A,comprador%20o%20beneficiario%20del%20servicio.%E2%80%9D',
    },
    {
      referencia: 'ICONTEC. (2015). ISO 780:2015. CND <em>Standars</em>. ',
      link:
        'https://cdn.standards.iteh.ai/samples/59933/915de3679aec4181966bdf57235183af/ISO-780-2015.pdf',
    },
    {
      referencia:
        'ICONTEC. (2013). ISO 13274 Transporte de paquetes peligrosos. CND <em>Standars</em>. ',
      link:
        'https://cdn.standards.iteh.ai/samples/53591/cd4fa28030b0412ebc0a724d246e990d/ISO-13274-2013.pdf',
    },
    {
      referencia:
        'Ministerio de transporte. (2013). Manifiesto de Carga, Ministerio de transporte, Página <em>web</em> Ministerio de transporte. ',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/documentos/manifiesto.htm',
    },
    {
      referencia:
        'Ministerio de Transporte. (2013). Cartillas conductoras. Página <em>web</em> Ministerio de Transporte. ',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Cartillas%20Conductores/Cartillas%20Conductores.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
