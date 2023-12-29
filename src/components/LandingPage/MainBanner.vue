<template>
  <div class="it-startup-banner-area movearea" @mousemove="onMousemove"
    :style="{ backgroundColor: `hsl(${x}, 99%, 99%)` }">
    <div class="container">
      <div class="row align-items-center m-0">
        <div class="col-lg-6 col-md-12 p-0">
          <div class="it-startup-banner-content">
            <h1>Secure & Innovative IT solutions for your buisness value</h1>
            <p>Discover the forefront of technology with our cutting-edge cloud and IT solutions. Transform your business
              landscape and elevate your potential with us.</p>
            <router-link to="/" class="btn-style-one red-light-color">
              Get In Touch Now
              <i class="ph-caret-right"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 p-0">
          <div class="it-startup-banner-image" data-aos="fade-up">
            <img src="../../assets/images/banner/banner1.png" alt="banner-image">
          </div>
        </div>
      </div>
    </div>
    <div class="shape1"><img src="../../assets/images/shape/shape1.png" alt="shape"></div>
    <div class="shape2" data-speed="0.10" data-revert="true">
      <img src="../../assets/images/shape/shape2.png" alt="shape" width="200">
    </div>
    <div class="shape3"><img src="../../assets/images/shape/shape3.png" alt="shape"></div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  data() {
    return {
      x: 0
    };
  },
  methods: {
    onMousemove(e) {
      this.x = e.clientX;
    }
  }
};
</script>
