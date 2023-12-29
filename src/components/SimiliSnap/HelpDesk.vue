<template>
  <div class="help-desk-area pt-100 pb-75">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">How Can We Help You</span>
        <h2>We revolutionize the way you store, search, and share your photos</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
          <div class="single-help-desk-box">
            <div class="icon">
              <img src="../../assets/images/icon/icon1.png" alt="icon">
            </div>
            <h3>Advanced Similarity Search</h3>
            <p>Instantly find matching photos in your vast gallery with our cutting-edge image similarity technology.
            </p>
            <router-link to="/coming-soon" class="link-btn">
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
            <h3>Effortless Gallery Management</h3>
            <p>Organize, sort, and manage your photo collection with ease using our user-friendly interface.
            </p>
            <router-link to="/coming-soon" class="link-btn">
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
            <h3>Secure Cloud Storage</h3>
            <p>Your memories are precious. Store your images safely in the cloud with
              top-tier encryption and privacy protection.
            </p>
            <router-link to="/coming-soon" class="link-btn">
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
            <h3>Sharing and Collaboration</h3>
            <p>Easily share and collaborate on photo albums with friends and family, enhancing your shared memories.
            </p>
            <router-link to="/coming-soon" class="link-btn">
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
