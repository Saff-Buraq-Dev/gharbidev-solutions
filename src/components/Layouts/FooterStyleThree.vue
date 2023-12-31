<template>
  <div class="template-footer-three pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <router-link to="/" class="logo">
              <img src="../../assets/images/gharbidev.png" alt="logo">
            </router-link>
            <p>Innovating for a Smarter Tomorrow: Your Partner in Advanced IT and Cloud Solutions.</p>
            <ul class="social-links">
              <li>
                <a href="https://www.https://www.linkedin.com/.com/" target="_blank">
                  <i class="flaticon-facebook-app-symbol"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  <i class="flaticon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i class="flaticon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i class="flaticon-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget pl-3">
            <h3>Quick links</h3>
            <ul class="quick-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about-us">About Us</router-link></li>
              <li><router-link to="/blog-grid">Latest News</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
              <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
              <li><router-link to="/terms-conditions">Terms & Conditions</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <h3>Newsletter</h3>
            <div class="box">
              <p>Latest resources, sent to your inbox weekly</p>
              <form class="newsletter-form" @submit.prevent>
                <input type="text" class="input-newsletter" placeholder="Enter your email address" name="EMAIL">
                <button type="submit" class="btn-style-one light-green-color">
                  Subscribe Now
                  <i class="ph-caret-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-area">
      <div class="container">
        <p>
          Copyright @{{ currentYear }} Vumy. All Rights Reserved by
          <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
        </p>
      </div>
    </div>
    <div class="shape5"><img src="../../assets/images/shape/shape5.png" alt="shape"></div>
  </div>
</template>

<script>
export default {
  name: "FooterStyleThree",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
