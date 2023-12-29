<template>
  <div class="blog-area with-top-border pb-75 pt-100">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">Latest News</span>
        <h2>Our latest articles & resources</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200">
          <div class="single-blog-post">
            <div class="image">
              <router-link to="/" class="d-block">
                <img src="../../assets/images/blog/blog1.jpg" alt="blog-image">
              </router-link>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <i class="ph-tag"></i>
                  <router-link to="/">Technology</router-link>
                </li>
                <li>
                  <i class="ph-calendar-check"></i>
                  25 Nov, 2021
                </li>
              </ul>
              <h3>
                <router-link to="/">Empowering Your Cloud Journey: A Curated List of Resources to Master AWS</router-link>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          <div class="single-blog-post">
            <div class="image">
              <router-link to="/" class="d-block">
                <img src="../../assets/images/blog/blog2.jpg" alt="blog-image">
              </router-link>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <i class="ph-tag"></i>
                  <router-link to="/">Security</router-link>
                </li>
                <li>
                  <i class="ph-calendar-check"></i>
                  24 Nov, 2021
                </li>
              </ul>
              <h3>
                <router-link to="/">Gérer l’accès sécurisé à AWS avec Identity and Access Management (IAM)</router-link>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          <div class="single-blog-post">
            <div class="image">
              <router-link to="/" class="d-block">
                <img src="../../assets/images/blog/blog3.jpg" alt="blog-image">
              </router-link>
            </div>
            <div class="content">
              <ul class="meta">
                <li>
                  <i class="ph-tag"></i>
                  <router-link to="/">Tutorial</router-link>
                </li>
                <li>
                  <i class="ph-calendar-check"></i>
                  23 Nov, 2021
                </li>
              </ul>
              <h3>
                <router-link to="/">Découverte d’EC2: Votre Portail Vers le Cloud Computing avec AWS</router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>
