import {BsTags} from 'react-icons/bs'

export default {
  name: 'tag',
  icon: BsTags,
  type: 'document',
  title: 'Etiquetas',
  fields: [
    {
      title: 'Imagenes',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            metadata: ['lqip'],
          },
        },
      ],
    },
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'searchName',
      type: 'string',
    },
  ],
}
