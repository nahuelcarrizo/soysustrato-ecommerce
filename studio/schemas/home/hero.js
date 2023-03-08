export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      title: 'Imagen',
      name: 'image',
      type: 'array',
      of: [
        {
          type: 'image',
          optiond: {
            metadata: ['lqip'],
          },
        },
      ],
    },
    {
      title: 'Videos Hero',
      name: 'video',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            accept: 'video/mp4',
          },
        },
      ],
    },
    {
      title: 'Titulo',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitulo',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Texto del boton izquierdo',
      name: 'buttonTextLeft',
      type: 'string',
    },
    {
      title: 'Url del boton izquierdo',
      name: 'buttonURLLeft',
      type: 'string',
    },
    {
      title: 'Texto del boton derecho',
      name: 'buttonTextRight',
      type: 'string',
    },
    {
      title: 'Url del boton derecho',
      name: 'buttonURLRight',
      type: 'string',
    },
  ],
}
