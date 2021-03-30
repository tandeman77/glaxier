export default {
  name: 'imageBlock',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      type: 'string'
    },
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'caption',
      type: 'string'
    }
  ]
}