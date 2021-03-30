<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container pt-5">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">{{content.heroIntro}}</span>

            <h1>{{content.heroTitle}}</h1>
            <div>
              {{content.heroPreRunning}}<br />
              <client-only>
                <vue-typed-js
                  :typeSpeed="30"
                  :startDelay="1000"
                  :loop="true"
                  :contentType="'html'"
                  :strings="content.heroRunningText"
                >
                  <span class="typing"></span>
                </vue-typed-js>
              </client-only>
            </div>
            
            <block-content :blocks="child" v-for="child in content.heroDescription" :key="child._id" />
            <a href="#contact" class="btn radius-btn">{{content.heroCta}}</a>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img">
            <SanityImage
              :project-id="projectId"
              :alt="content.heroImage.alt"
              :asset-id="content.heroImage.image.asset._ref"
              auto="format"
            ></SanityImage>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <client-only>
      <div class="hero-shape custom-animation">
        <img src="assets/img/hero/hero-shape.png" alt="animation shape" />
      </div>
    </client-only>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'

export default {
  name: "HeroArea",
  components: {
    SanityImage
  },
  props: {
    content: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  data() {
    return {
      projectId: process.env.SANITY_PROJECT_ID
    };
  },
};
</script>

<style scoped>
.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.vue-typer span {
  color: #e45447;
}
</style>