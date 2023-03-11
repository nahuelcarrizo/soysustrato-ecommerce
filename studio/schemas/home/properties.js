import {BsCardList} from 'react-icons/bs'

export default {
  name: 'properties',
  icon: BsCardList,
  type: 'document',
  title: 'Propiedades',
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
