// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//import schema files
import home from './home.js'
import metaData from './metaData'
import richText from './richText'
import imageBlock from './imageBlock'
import heroSection from './heroSection'
import serviceSection from './serviceSection'
import aboutSection from './aboutSection'
import experienceSection from './experienceSection'
import testimonialSection from './testimonialSection'
import contactSection from './contactSection'
import header from './header'
import footer from './footer'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    metaData,
    richText,
    heroSection,
    serviceSection,
    aboutSection,
    experienceSection,
    testimonialSection,
    imageBlock,
    contactSection,
    header,
    footer
  ]),
})
