<template>
  <!-- Services Area Start -->
  <section class="service-area section-padding" id="services">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <div class="process-block pl-sm-4">
            <span class="text-uppercase text-sm letter-spacing"
              >{{content.serviceIntro}}</span
            >
            <h2 class="service-title mb-4 mt-3">
              {{content.serviceTitle}}
            </h2>
            <block-content :blocks="child" v-for="child in content.serviceDescription" :key="child._id" />
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mb-4 mb-lg-0">
                <i>
                  <fa :icon="['fas', content.serviceCards[0].icon]" />
                </i>
                <h4>{{content.serviceCards[0].cardTitle}}</h4>
                <block-content :blocks="child" v-for="child in content.serviceCards[0].cardDescription" :key="child._id" />
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-sm-4 mb-4 mb-lg-0">
                <i>
                  <fa :icon="['fas', content.serviceCards[1].icon]" />
                </i>
                <h4>{{content.serviceCards[1].cardTitle}}</h4>
                <block-content :blocks="child" v-for="child in content.serviceCards[1].cardDescription" :key="child._id" />
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center">
                <i>
                  <fa :icon="['fas', content.serviceCards[2].icon]" />
                </i>
                <h4>{{content.serviceCards[2].cardTitle}}</h4>
                <block-content :blocks="child" v-for="child in content.serviceCards[2].cardDescription" :key="child._id" />
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4">
                <i>
                  <fa :icon="['fas', content.serviceCards[3].icon]" />
                </i>
                <h4>{{content.serviceCards[3].cardTitle}}</h4>
                <block-content :blocks="child" v-for="child in content.serviceCards[3].cardDescription" :key="child._id" />
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
  props: ['content']
};
</script>
