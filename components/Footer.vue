<template>
  <!-- Start Footer -->
  <footer class="footer-area sky-blue">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="footer-top flex-column">
            <div class="footer-logo text-center">
              <a href="/#top">
                <SanityImage
                  :project-id="projectId"
                  :alt="content.logo.alt"
                  :asset-id="content.logo.image.asset._ref"
                  auto="format"
                ></SanityImage>
              </a>
              <h4>{{content.mediaTitle}}</h4>
            </div>
            <div
              v-for="socialLink in content.socialLinks"
              :key="socialLink._key"
              class="footer-social text-center">
              <a :href="socialLink.link"
                ><i class="fa transition" :class="socialLink.icon"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer-bottom text-center justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          {{content.copyrightText}}
        </p>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
<script>
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'

export default {
  name: "Footer",
  components: {SanityImage},
  data(){
    return {
      content: this.$store.state.staticContent[this.$i18n.locale].footer[0]
    }
  }
};
</script>
