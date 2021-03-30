export default {
  name: 'serviceSection',
  title: 'Service Section',
  type: 'object',
  fieldsets: [
    { name: 'serviceSection', title: 'Service Section' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      type: 'string',
      name: 'serviceIntro'
    },
    {
      type: 'string',
      name: 'serviceTitle'
    },
    {
      type: 'richText',
      name: 'serviceDescription'
    },
    {
      type: 'array',
      name: 'serviceCards',
      of: [
        {
          name: 'card',
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'icon'
            },
            {
              type: 'string',
              name: 'cardTitle'
            },
            {
              type: 'richText',
              name: 'cardDescription'
            }
          ]
        }
      ]
    }
  ]
}