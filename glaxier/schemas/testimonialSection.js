export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fieldsets: [
    { name: 'testimonialSection', title: 'Testimonial Section' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'testimonialTitle',
      type: 'string'
    },
    {
      name: 'testimonials',
      type:'array',
      of: [
        {
          name: 'testimonial',
          type: 'object',
          fields: [
            {
              type: 'richText',
              name: 'cardDescription'
            },
            {
              type: 'imageBlock',
              name: 'logo'
            },
            {
              type: 'string',
              name: 'companyName'
            },
            {
              type: 'string',
              name: 'personName'
            },
            {
              type: 'string',
              name: 'position'
            }
          ]
        }
      ]
    }
  ]
}