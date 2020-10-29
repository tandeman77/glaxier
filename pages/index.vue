<template>
  <div>
    <HeroArea />
    <ServiceArea />
    <AboutArea />
    <ResumeArea />
    <!--
    <WorksArea />
    <PriceArea />
    <HireArea />
    -->
    <TestimonialArea />
    <!--
    <BlogArea />
    -->
    <ContactArea />
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
  data() {
    return {
      pageTitle:
        "Glaxier | A Digital Savvy Team To Help Your Grow Your Business Online",
      pageDescription:
        "Revolutionary full service digital agency. At Glaxier, we help businesses grow and compete online by offering digital advertising, graphic design, website developement and copy writing services. All to the highest quality guide by industry best practice with a boost of Glaxier's innovations.",
    };
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
