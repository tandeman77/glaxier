<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">Hey! We are</span>

            <h1>Glaxier!</h1>
            <div>
              We are<br />
              <client-only>
                <span class="typing"
                  ><vue-typer
                    :text="typeString"
                    initialAction="erasing"
                    :preTypeDelay="5"
                  ></vue-typer
                ></span>
              </client-only>
              <!--
              <vue-typed-js
                :typeSpeed="30"
                :startDelay="1000"
                :loop="true"
                :contentType="'html'"
                :strings="typeString"
              >
                <span class="typing"></span>
              </vue-typed-js>
              -->
            </div>
            <p>
              We are a group of young digital specialists who are eager to
              deliver results for your business. In the age where everything is
              connected at a touch of a finger tip, there are no recipes to
              succeed in the digital world, only the best way for you. Our goal
              is to find that perfect recipe for you.
            </p>
            <a href="#contact" class="btn radius-btn">Get In Touch</a>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img">
            <img src="assets/img/hero/phone.jpg" alt="Hero image" />
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <div class="hero-shape custom-animation">
      <img src="assets/img/hero/hero-shape.png" alt="animation shape" />
    </div>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
export default {
  name: "HeroArea",
  components: {},
  data() {
    return {
      typeString: [
        "Digital Advertising Specialists.",
        "Google Ads Experts.",
        "Facebook Ads Gurus.",
        "Copywriters.",
        "SEO Experts.",
        "Website Developers.",
        "App Developers.",
        "Graphic Designers.",
      ],
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