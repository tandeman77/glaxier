export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fieldsets: [
    { name: 'aboutSection' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      type: 'string',
      name: 'aboutTitle'
    },
    {
      type: 'array',
      name: 'aboutTags',
      of: [{type: 'string', name: 'aboutTag'}]
    },
    {
      type: 'richText',
      name: 'aboutDescription'
    },
    {
      type: 'string',
      name: 'aboutCta'
    },
    {
      type: 'imageBlock',
      name: 'aboutImage'
    }
  ]
}