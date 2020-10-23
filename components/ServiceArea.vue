<template>
  <!-- Services Area Start -->
  <section class="service-area section-padding" id="services">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <div class="process-block pl-4">
            <span class="text-uppercase text-sm letter-spacing"
              >Our Services</span
            >
            <h2 class="service-title mb-4 mt-3">
              We can do these awesome things
            </h2>
            <p>
              Our team has a collaborative and hollistic view of the digital
              landscape. Our services range from the fundamental assets such as
              a website, brochures, logo, to your outreach strategy to attract
              your perfect target customers.
            </p>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mb-4 mb-lg-0">
                <i>
                  <fa :icon="['fas', 'bullhorn']" />
                </i>
                <h4>Digital Advertising</h4>
                <p>
                  A complete solution for digital-ready businesses. Generate
                  sales/leads/engagement across Google, Facebook, Instagram or
                  trending platforms like Tik Tok.
                </p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4 mb-4 mb-lg-0">
                <i>
                  <fa :icon="['fas', 'users']" />
                </i>
                <h4>Social Media Management</h4>
                <p>
                  Generate brand loyalty and engagement with organic social
                  strategy across platforms like Facebook, Instagram and
                  LinkedIn.
                </p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center">
                <i>
                  <fa :icon="['fas', 'paint-brush']" />
                </i>
                <h4>Graphic Design</h4>
                <p>
                  Design eye-catching assets for your website, social media
                  channels, adverts or even your physical stores! We all know
                  how important good creatives are, right?
                </p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4">
                <i>
                  <fa :icon="['fas', 'globe']" />
                </i>
                <h4>Website Development</h4>
                <p>
                  The bare minimum to create a successful online brand is to
                  have an online presence. Build engagement and trust through a
                  killer website.
                </p>
              </div>
              <!-- End Single Service Block -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Area End -->
</template>

<script>
export default {
  name: "ServiceArea",
};
</script>
