export default {
  name: 'header',
  type: 'document',
  fields: [
    {
      title: "Language",
      type: "string",
      name: "language",
      options: {
        list: [
            {title: 'English', value: 'en'},
            {title: 'Thai', value: 'th'}
          ]
      }
    },
    {
      type: 'imageBlock',
      name: 'logo'
    },
    {
      type: 'array',
      name: 'navLinks',
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            {
              type: 'string',
              name: 'linkText'
            },
            {
              type: 'string',
              name: 'linkPath'
            }
          ]
        }
      ]
    }
  ]
}