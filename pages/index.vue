<template>
  <div>
    <HeroArea :content="content[0].heroSection"/>
    <ServiceArea :content="content[0].serviceSection"/>
    <AboutArea :content="content[0].aboutSection"/>
    <ResumeArea :content="content[0].experienceSection"/>
    <!--
    <WorksArea />
    <PriceArea />
    <HireArea />
    -->
    <TestimonialArea :content="content[0].testimonialSection"/>
    <!--
    <BlogArea />
    -->
    <ContactArea :content="content[0].contactSection"/>
  </div>
</template>

<script>
import ogImage from "~/static/assets/img/logo.png";
import HeroArea from "~/components/HeroArea";
import ServiceArea from "~/components/ServiceArea";
import AboutArea from "~/components/AboutArea";
import ResumeArea from "~/components/ResumeArea";
import WorksArea from "~/components/WorksArea";
import PriceArea from "~/components/PriceArea";
import HireArea from "~/components/HireArea";
import TestimonialArea from "~/components/TestimonialArea";
import BlogArea from "~/components/BlogArea";
import ContactArea from "~/components/ContactArea";

//data query
import { groq } from '@nuxtjs/sanity'

export default {
  components: {
    HeroArea,
    ServiceArea,
    AboutArea,
    ResumeArea,
    WorksArea,
    PriceArea,
    HireArea,
    TestimonialArea,
    BlogArea,
    ContactArea,
  },
  async asyncData({$sanity, app}){
    console.log(app.i18n.locale)
    const query = groq`{ "content": *[_type == 'home' && language == '${app.i18n.locale}'] }`
    return $sanity.fetch(query)
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageDescription,
        },
        { hid: "og:title", name: "og:title", content: this.pageTitle },
        {
          hid: "og:description",
          name: "og:description",
          content: this.pageDescription,
        },
        { hid: "og:image", name: "og:image", content: this.BASE_URL + ogImage },
      ],
    };
  },
};
</script>
