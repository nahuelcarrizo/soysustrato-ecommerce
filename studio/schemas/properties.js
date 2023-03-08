import {BsCardList} from 'react-icons/bs'

export default {
  name: 'properties',
  icon: BsCardList,
  type: 'array',
  title: 'Propiedades',
  of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Apto Freezer', value: 'apto freezer'},
          {title: 'Apto Liquidos', value: 'apto liquidos'},
        ],
      },
    },
  ],
}
