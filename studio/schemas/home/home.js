export default {
  name: 'homeSettings',
  type: 'document',
  title: 'Home sections',
  fields: [
    {
      title: 'Título de la página',
      name: 'homePageTitle',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      title: 'Foto destacada',
      name: 'hero',
      type: 'hero',
    },
    {
      title: 'Categorias',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}],
        },
      ],
    },
    {
      title: 'Properties',
      name: 'properties',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'properties'}],
        },
      ],
    },
    {
      title: 'Historias Felices',
      name: 'userReviews',
      type: 'userReviews',
    },
  ],
  initialValue: () => ({
    homePageTitle: 'Configuración Home',
  }),
}
