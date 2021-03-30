export default {
  name: 'contactSection',
  title: 'Contact Secion',
  type: 'object',
  fieldsets: [
    { name: 'contactSection' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'contactTitle',
      type: 'string'
    },
    {
      name: 'contactMeans',
      type: 'array',
      of: [
        {
          name: 'contact',
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'string'
            },
            {
              name: 'meanTitle',
              type: 'string'
            },
            {
              name: 'meanString',
              type: 'string'
            },
            {
              name: 'link',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'contactCta',
      type: 'string'
    }
  ]
}