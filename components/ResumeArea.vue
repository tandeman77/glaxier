<template>
  <!-- industry experience Area Start -->
  <section class="resume-area section-padding" id="resume">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{content.experienceTitle}}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-3 d-block mb-3 mb-lg-0">
          <!-- Start industry experience Nav -->
          <nav id="navi">
            <ul
              class="d-flex align-items-center justify-content-around d-lg-inline"
            >
              <li v-for="(industry,i) in content.industries" :key="industry._key">
                <a :href="`#page-${i+1}`">{{industry.industryTitle}}</a>
              </li>
            </ul>
          </nav>
          <!-- End industry experience Nav -->
        </div>
        <div class="col-lg-9 col-md-12">
          <!-- Start experience -->
          <div v-for="(industry, i) in content.industries" :key="industry._key" :id="`page-${i+1}`" class="page">
            <h3 class="heading text-center text-sm-left">{{industry.industryTitle}}</h3>
            <div
              v-for="brand in industry.industries"
              :key="brand._key"
              class="resume-wrap transition d-flex flex-column flex-sm-row align-items-center align-items-sm-start"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span :class="brand.icon"></span>
              </div>
              <div class="text pl-sm-3 text-center text-sm-left">
                <h4 class="my-1 my-sm-0">{{brand.title}}</h4>
                <block-content :blocks="child" v-for="child in brand.description" :key="child._id" />
              </div>
            </div>
          </div>
          <!-- End experience -->

          <!--
            skills section
          <div id="page-3" class="page three">
            <h3 class="heading">Non-Profit Industry</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>Photoshop</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width: 90%">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>jQuery</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width: 85%">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>HTML5</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width: 95%">
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>CSS3</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width: 90%">
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>WordPress</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width: 70%">
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>SEO</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width: 80%">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          end skill section

          awards section
          <div id="page-4" class="page four">
            <h3 class="heading">Awards</h3>
            <div class="resume-wrap transition d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-sm-3 text-center text-sm-left">
                <span class="date">2014-2015</span>
                <h4 class="my-1 my-sm-0">Top 10 Web Developer</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-sm-3 text-center text-sm-left">
                <span class="date">2014-2015</span>
                <h4 class="my-1 my-sm-0">Top 5 LeaderShip Exellence Winner</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex flex-column flex-sm-row align-items-center align-items-sm-start">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-sm-3 text-center text-sm-left">
                <span class="date">2014-2015</span>
                <h4 class="my-1 my-sm-0">Top 4 Web Tester</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
          </div>
          end award section
           -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>
<script>
export default {
  name: "ResumeArea",
  props: ['content']
};
</script>
