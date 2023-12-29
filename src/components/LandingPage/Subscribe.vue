<template>
  <div class="subscribe-area bg-f9f9f9 ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="subscribe-content" data-aos="fade-down" data-aos-duration="1200">
            <span class="sub-title">Subscribe Our Newsletter</span>
            <h2>The latest resources, sent to your inbox weekly</h2>
            <form class="newsletter-form" @submit.prevent>
              <div class="row">
                <div class="col-xl-8 col-lg-7 col-md-8">
                  <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                </div>
                <div class="col-xl-4 col-lg-5 col-md-4">
                  <button type="submit" class="btn-style-one red-light-color">
                    Subscribe Now
                    <i class="ph-caret-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="subscribe-image" data-aos="fade-up" data-aos-duration="1200">
            <img src="../../assets/images/subscribe1.png" alt="subscribe-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe"
};
</script>
