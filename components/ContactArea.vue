<template>
  <!-- Start Contact Area -->
  <section class="contact-area section-padding" id="contact">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
          <div class="contact-left">
            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-envelope-letter"></i>
              </div>
              <div class="media-body">
                <h4>Email</h4>
                <span
                  ><a class="contact-link" href="mailto:contact@glaxier.com.au"
                    >contact@glaxier.com.au</a
                  ></span
                >
              </div>
            </div>

            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-screen-smartphone"></i>
              </div>
              <div class="media-body">
                <h4>Phone</h4>
                <span
                  ><a class="contact-link" href="tel:0424 555 959"
                    >0424 555 959</a
                  ></span
                >
              </div>
            </div>
            <!--
            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-social-skype"></i>
              </div>
              <div class="media-body">
                <h4>Facebook</h4>
                <span
                  ><a
                    href="https://www.facebook.com/Digital-123-106029914504675"
                    >Glaxier</a
                  ></span
                >
              </div>
            </div>
            -->
          </div>
        </div>
        <div class="col-lg-7 offset-lg-2 col-md-8">
          <form
            id="contact-form"
            class="row contact-form"
            action="#"
            method="POST"
            data-netlify="true"
            name="contact"
          >
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Enter the discussion title"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <button type="submit" class="btn radius-btn">
                  Send Message now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Area -->
</template>

<script>
export default {
  name: "ContactArea",
};
</script>

<style scoped>
.contact-link {
  text-decoration: none;
  color: #e4a0a9;
}

.contact-link:hover {
  color: #e4707f;
}
</style>