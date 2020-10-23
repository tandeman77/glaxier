<template>
  <!-- Start Works Area -->
  <section class="works-area section-padding sky-blue" id="works">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>My Projects</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row mb-4">
        <div class="col-xs-12">
          <div class="filters">
            <ul>
              <li class="active" data-filter=".all">All</li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".creative">Creative Work</li>
              <li data-filter=".web-design">Web Design</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="filters-content">
        <div class="row grid">
          <!-- start single work item -->
          <div class="single-work col-lg-4 col-md-6 col-sm-12 all creative">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image img-fluid"
                  src="https://via.placeholder.com/360x369"
                  alt="work"
                />
              </div>
              <a class="overlay transition" href="#"></a>
              <div class="short-info transition">
                <h4>Web Design</h4>
                <div class="cat">Client Project</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div
            class="single-work col-lg-4 col-md-6 col-sm-12 all web-design branding"
          >
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image  img-fluid"
                  src="https://via.placeholder.com/360x419"
                  alt="work"
                />
              </div>
              <a class="overlay transition" href="#"></a>
              <div class="short-info transition">
                <h4>Web Design</h4>
                <div class="cat">Client Project</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div
            class="single-work col-lg-4 col-md-6 col-sm-12 all branding web-design"
          >
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image  img-fluid"
                  src="https://via.placeholder.com/360x339"
                  alt="work"
                />
              </div>
              <a class="overlay transition" href="#"></a>
              <div class="short-info transition">
                <h4>Web Design</h4>
                <div class="cat">Client Project</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 col-md-6 col-sm-12 all web-design">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image  img-fluid"
                  src="https://via.placeholder.com/360x339"
                  alt="work"
                />
              </div>
              <a class="overlay transition" href="#"></a>
              <div class="short-info transition">
                <h4>Web Design</h4>
                <div class="cat">Client Project</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 col-md-6 col-sm-12 all creative">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image  img-fluid"
                  src="https://via.placeholder.com/360x309"
                  alt="work"
                />
              </div>
              <a class="overlay transition" href="#"></a>
              <div class="short-info transition">
                <h4>Web Design</h4>
                <div class="cat">Client Project</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 col-md-6 col-sm-12 all branding">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image  img-fluid"
                  src="https://via.placeholder.com/360x259"
                  alt="work"
                />
              </div>
              <a class="overlay transition" href="#"></a>
              <div class="short-info transition">
                <h4>Web Design</h4>
                <div class="cat">Client Project</div>
              </div>
            </div>
          </div>
          <!-- end single work item -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Works Area -->
</template>

<script>
export default {
  name: "WorksArea"
};
</script>
