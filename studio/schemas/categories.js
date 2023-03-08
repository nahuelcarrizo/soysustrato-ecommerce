import {BsArchive} from 'react-icons/bs'

export default {
  name: 'categories',
  icon: BsArchive,
  type: 'document',
  title: 'Categorias',
  fields: [
    {
      title: 'Imagen',
      name: 'image',
      type: 'image',
      options: {
        metadata: ['lqip'],
      },
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
    {
      title: 'Descripción',
      name: 'description',
      type: 'string',
      layout: 'box',
    },
    {
      title: 'Usos',
      name: 'uses',
      type: 'string',
    },
    {
      title: 'Para',
      name: 'for',
      type: 'string',
    },
  ],
}
