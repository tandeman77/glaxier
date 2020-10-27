<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding sky-blue" id="testimonial">
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
              <div class="test-item d-flex justify-content-around flex-column">
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
                    <span>Surintra P.</span>
                    , Managing Director
                  </div>
                </div>
              </div>
              <div class="test-item d-flex justify-content-around flex-column">
                <p>
                  We've had bad experiences before with other agencies. But
                  working with Glaxier has been nothing but amazing. We've sold
                  more products in one month than we did in the previous 3
                  months. Our cost per lead halved and had to turn off our ads
                  because we were getting too many sales. Highly recommend these
                  guys for anyone looking for to grow their business.
                </p>
                <div class="author-info">
                  <img
                    src="assets/img/testimonial/metal-business-card-australia-logo.png"
                    alt="metal business card australia logo"
                  />
                  <h4>Metal Business Cards Australia</h4>
                  <div class="position">
                    <span>Jacob T.</span>
                    , Owner
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
