<template>
  <div class="template-footer-two pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <router-link to="/" class="logo">
              <img src="../../assets/images/white-gharbidev.png" alt="logo">
            </router-link>
            <p>Innovating for a Smarter Tomorrow: Your Partner in Advanced IT and Cloud Solutions.</p>
            <ul class="footer-contact-info">
              <li>
                <i class="ph-phone-call"></i>
                <a href="tel:+1-514-713-0322">+1-514-713-0322</a>
              </li>
              <li>
                <i class="ph-envelope-simple"></i>
                <a href="mailto:sgharbi@gharbidev.com">sgharbi@gharbidev.com</a>
              </li>
              <li>
                <i class="ph-map-pin"></i>
                9130, Rue Saint-Urbain, H2N1S7, Montréal, Qc, Canada.
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget pl-3">
            <h3>Quick links</h3>
            <ul class="quick-links">
              <li><router-link to="/coming-soon">GharbiDev</router-link></li>
              <li><router-link to="/coming-soon">Blog AWS</router-link></li>
              <li><router-link to="/coming-soon">SimiliSnap</router-link></li>
              <li><router-link to="/coming-soon">Health Care</router-link></li>
              <li><router-link to="/coming-soon">Property</router-link></li>
              <li><router-link to="/coming-soon">Big Data</router-link></li>
              <li><router-link to="/coming-soon">Distance Learning</router-link></li>
              <li><router-link to="/coming-soon">Chat Bot</router-link></li>
              <li><router-link to="/coming-soon">Software</router-link></li>
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
                <button type="submit" class="btn-style-one red-light-color">
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
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-7">
            <p>
              Copyright @{{ currentYear }} GharbiDev. All Rights Reserved by
              <a href="https://solutions.gharbidev.com/" target="_blank">GharbiDev</a>
            </p>
          </div>
          <div class="col-lg-6 col-md-5">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterStyleTwo",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
