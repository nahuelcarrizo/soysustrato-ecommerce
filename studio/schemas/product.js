import {BsBag} from 'react-icons/bs'

export default {
  title: 'Producto (tamaño único)',
  icon: BsBag,
  name: 'product',
  type: 'document',
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Descripcion',
      name: 'material',
      type: 'string',
    },
    {
      title: 'Material',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Precio por unidad',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Precio por paquete de X unidades',
      description:
        'En caso de ser un producto que se venda en paquetes de unidades, especificar cantidad y precio',
      name: 'priceChart',
      type: 'array',
      of: [
        {
          title: 'Producto en venta por Paquete y Precio',
          name: 'priceChartRow',
          type: 'object',
          fields: [
            {name: 'package', type: 'number', title: 'Unidades'},
            {name: 'price', type: 'number', title: 'Precio del paquete'},
          ],
        },
      ],
    },
    {
      title: 'Stock',
      name: 'stock',
      type: 'number',
    },
    {
      title: 'Etiquetas',
      name: 'tags',
      type: 'array',
      _ref: 'tag',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    },
    {
      title: 'Fotos',
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
      title: 'Categoría',
      name: 'categories',
      type: 'array',
      _ref: 'categories',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}],
        },
      ],
    },
    {
      title: 'Propiedades',
      name: 'properties',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Apto Freezer', value: 'Apto Freezer'},
          {title: 'Apto Liquidos', value: 'Apto Liquidos'},
          {title: 'Envios por correo', value: 'Envios por correo'},
        ],
        layout: 'checkbox',
      },
    },
  ],
}
