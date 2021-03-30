export default {
  name: 'footer',
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
      type: 'string',
      name: 'mediaTitle'
    },
    {
      type: 'array',
      name: 'socialLinks',
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            {
              type: 'string',
              name: 'icon'
            },
            {
              type: 'string',
              name: 'link'
            }
          ]
        }
      ]
    },
    {
      type: 'string',
      name: 'copyrightText'
    }
  ]
}