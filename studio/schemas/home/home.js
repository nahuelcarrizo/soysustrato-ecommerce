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
      title: 'Compra comunitaria',
      name: 'recommended',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
          options: {
            filter: 'tag == $tag',
            filterParams: {tag: 'Compra comunitaria'},
          },
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
