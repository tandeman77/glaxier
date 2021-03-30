export default {
  name: 'experienceSection',
  title: 'Experience Section',
  type: 'object',
  fieldsets: [
    { name: 'experienceSection' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      type: 'string',
      name: 'experienceTitle'
    },
    {
      type: 'array',
      name: 'industries',
      of: [{
        name: 'industry',
        type: 'object',
        fields: [
          {
            name: 'industryTitle',
            type: 'string'
          },
          {
            name: 'industries',
            type: 'array',
            of:[{
                name: 'industry',
                type: 'object',
                fields: [
                  {
                    name: 'icon',
                    type: 'string'
                  },
                  {
                    name: 'title',
                    type: 'string'
                  },
                  {
                    name: 'description',
                    type: 'richText'
                  }
                ]
              }]
            }]
          }
        ]
    }
  ]
}