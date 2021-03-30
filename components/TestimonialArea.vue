<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding sky-blue" id="testimonial">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{content.testimonialTitle}}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <!-- start testimonial carousel -->
          <client-only>
            <div class="test-slider">
              <!-- start tetimonial item -->
              <div 
                v-for="client in content.testimonials"
                :key="client._key"
                class="test-item d-flex justify-content-around flex-column">
                <block-content :blocks="child" v-for="child in client.cardDescription" :key="child._id" />
                <div class="author-info">
                  <SanityImage
                    :project-id="projectId"
                    :alt="client.logo.alt"
                    :asset-id="client.logo.image.asset._ref"
                    auto="format"
                  ></SanityImage>
                  <h4>{{client.companyName}}</h4>
                  <div class="position">
                    <span>{{client.personName}}</span>
                    , {{client.position}}
                  </div>
                </div>
              </div>
              <!-- end tetimonial item -->
            </div>
          </client-only>
          <!-- end testimonial carousel -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Area -->
</template>

<script>
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'
export default {
  name: "TestimonialArea",
  props: ['content'],
  components: {
    SanityImage
  },
  data() {
    return {
      projectId: process.env.SANITY_PROJECT_ID
    };
  },
};
</script>
