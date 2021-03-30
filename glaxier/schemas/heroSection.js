export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fieldsets: [
    { name: 'heroSection', title: 'Hero Section' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      type: 'string',
      name: 'heroIntro'
    },
    {
      type: 'string',
      name: 'heroTitle'
    },
    {
      type: 'string',
      name: 'heroPreRunning'
    },
    {
      type: 'array',
      name: 'heroRunningText',
      of: [{type: 'string'}]
    },
    {
      type: 'richText',
      name: 'heroDescription'
    },
    {
      type: 'string',
      name: 'heroCta'
    },
    {
      type: 'imageBlock',
      name: 'heroImage'
    }
  ]
}