export default {
  name: 'home',
  type: 'document',
  title: 'Home',
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
      type: 'metaData',
      name: 'metaData',
      title: 'Meta Data'
    },
    {
      type: 'heroSection',
      name: 'heroSection'
    },
    {
      type: 'serviceSection',
      name: 'serviceSection'
    },
    {
      type: 'aboutSection',
      name: 'aboutSection'
    },
    {
      type: 'experienceSection',
      name: 'experienceSection'
    },
    {
      type: 'testimonialSection',
      name: 'testimonialSection'
    },
    {
      type: 'contactSection',
      name: 'contactSection'
    },
  ]
}