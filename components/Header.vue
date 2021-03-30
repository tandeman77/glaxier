<template>
  <!-- Header Start -->
  <header>
    <div class="header-area header-transparrent">
      <div class="main-header header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2 col-md-2">
              <div class="logo">
                <nuxt-link :to="localePath('/')">
                  <SanityImage
                    :project-id="projectId"
                    :alt="content.logo.alt"
                    :asset-id="content.logo.image.asset._ref"
                    auto="format"
                  ></SanityImage>
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-10">
              <!-- Main-menu -->
              <div class="main-menu float-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li class="nav-item">
                      <nuxt-link class="nav-link transition active" :to="localePath(content.navLinks[0].linkPath)">{{content.navLinks[0].linkText}}</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link transition" :to="localePath(content.navLinks[1].linkPath)">{{content.navLinks[1].linkText}}</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link transition" :to="localePath(content.navLinks[2].linkPath)">{{content.navLinks[2].linkText}}</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link transition" :to="localePath(content.navLinks[3].linkPath)">{{content.navLinks[3].linkText}}</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link transition" :to="localePath(content.navLinks[4].linkPath)">{{content.navLinks[4].linkText}}</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link transition" :to="localePath(content.navLinks[5].linkPath)">{{content.navLinks[5].linkText}}</nuxt-link>
                    </li>
                    <li class="nav-item">
                      <p class="nav-link transition">Switch Language</p>
                      <ul class="submenu transition">
                        <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
                        <li><nuxt-link :to="switchLocalePath('th')">Thai</nuxt-link></li>
                      </ul>
                    </li>
                    <!--
                    <li class="nav-item">
                      <a class="nav-link transition" href="/#works">Works</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link transition" href="/#blog">Blog</a>
                      <ul class="submenu transition">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Blog Details</a></li>
                      </ul>
                    </li>
                    -->
                  </ul>
                </nav>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'
export default {
  name: "Header",
  components: {
    SanityImage
  },
  data(){
    return {
      content: this.$store.state.staticContent[this.$i18n.locale].header[0]
    }
  }
};
</script>
