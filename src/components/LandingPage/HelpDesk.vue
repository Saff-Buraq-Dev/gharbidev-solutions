<template>
  <div class="help-desk-area pt-100 pb-75">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">How Can We Help You</span>
        <h2>We're here to guide and support you through every step of your technological journey</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
          <div class="single-help-desk-box">
            <div class="icon">
              <img src="../../assets/images/icon/icon1.png" alt="icon">
            </div>
            <h3>Cloud Strategy and Implementation</h3>
            <p>We offer tailored strategies and expert implementation services to transition your business to the cloud,
              ensuring scalability, security, and cost-effectiveness.
            </p>
            <router-link to="/" class="link-btn">
              Learn More
              <i class="ph-caret-right"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          <div class="single-help-desk-box">
            <div class="icon">
              <img src="../../assets/images/icon/icon2.png" alt="icon">
            </div>
            <h3>Custom IT Solutions</h3>
            <p>Every business is unique, and so are our solutions. We specialize in developing custom IT solutions that
              align with your specific business needs, driving efficiency and innovation for optimal performance
            </p>
            <router-link to="/" class="link-btn">
              Learn More
              <i class="ph-caret-right"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          <div class="single-help-desk-box">
            <div class="icon">
              <img src="../../assets/images/icon/icon4.png" alt="icon">
            </div>
            <h3>Technology Consulting</h3>
            <p>Leverage our deep industry knowledge to stay ahead in the game. Our consulting services encompass the
              latest technology trends, from AI to cybersecurity, helping you make informed decisions
            </p>
            <router-link to="/" class="link-btn">
              Learn More
              <i class="ph-caret-right"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <div class="single-help-desk-box">
            <div class="icon">
              <img src="../../assets/images/icon/icon3.png" alt="icon">
            </div>
            <h3>Ongoing Support and Maintenance</h3>
            <p>Our commitment doesn’t end with deployment. We provide continuous support, keeping you up-to-date with the
              latest technological advancements
            </p>
            <router-link to="/" class="link-btn">
              Learn More
              <i class="ph-caret-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpDesk"
};
</script>
