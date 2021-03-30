export default {
  name: 'metaData',
  type: 'object',
  title: 'Meta Data',
  description: 'You must enter the title and description fields. Other fields are used for SEO only.',
  fieldsets: [
    { name: 'metadata', title: 'Meta Data' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string'
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'string'
    },
    {
      title: 'Meta Keyword',
      name: 'metaKeyword',
      type: 'string'
    },
    {
      title: 'Canonical Urls',
      name: 'canonicalUrls',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Hreflang tags',
      name: 'hreflang',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}