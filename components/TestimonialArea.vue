<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding sky-blue">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Testimonials</h2>
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
              <div class="test-item">
                <p>
                  Glaxier has been amazing to work with. We did not know the
                  potential Facebook ads could make on our business until Tan
                  (founder) recommended it. Thank you for your hardwork. Very
                  happy with your service.
                </p>
                <div class="author-info">
                  <img
                    src="assets/img/testimonial/ufi-logo.png"
                    alt="UFI logo"
                  />
                  <h4>UFI</h4>
                  <div class="position">
                    Managing Director
                    <span>Surintra P.</span>
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
export default {
  name: "TestimonialArea",
};
</script>
