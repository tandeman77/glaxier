<template>
  <!-- About Area Start -->
  <section class="about-area section-padding sky-blue" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="img-about">
            <SanityImage
              :project-id="projectId"
              class="img-fluid"
              :alt="content.aboutImage.alt"
              :asset-id="content.aboutImage.image.asset._ref"
              auto="format"
            ></SanityImage>
          </div>
          <!-- End About Area Image -->
        </div>

        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div class="about-details">
            <div class="section-title mb-50">
              <h2>{{content.aboutTitle}}</h2>
            </div>
            <div class="quality-tags d-flex flex-wrap">
              <span v-for="tag in content.aboutTags" :key="tag" class="quality-tag m-1">{{tag}}</span>
            </div>
            <block-content :blocks="child" v-for="child in content.aboutDescription" :key="child._id" />
            <!--
            <ul class="about-info mt-4">
              <li>
                <span>Name:</span>
                <span>Karim EzZat</span>
              </li>
              <li>
                <span>Date of birth:</span>
                <span>November 28, 1993</span>
              </li>
              <li>
                <span>Address:</span>
                <span>Mansoura El-Dakahlia, Egypt</span>
              </li>
              <li>
                <span>Zip code:</span>
                <span>1234</span>
              </li>
              <li>
                <span>Email:</span>
                <span>karim@gmail.com</span>
              </li>
              <li>
                <span>Phone:</span>
                <span>+1-2345-6789-0-0</span>
              </li>
            </ul>
            -->
            <div class="download-btn mt-5">
              <a class="btn radius-btn" href="#contact">{{content.aboutCta}}</a>
            </div>
          </div>
          <!-- End About Detail -->
        </div>
      </div>
    </div>
  </section>
  <!-- About Area End -->
</template>

<script>
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'

export default {
  name: "AboutArea",
  props: ['content'],
  component: {SanityImage},
  data(){
    return {
      projectId: process.env.SANITY_PROJECT_ID
    }
  }
};
</script>
