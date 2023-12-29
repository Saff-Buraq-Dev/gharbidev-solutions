<template>
  <div class="team-area ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="team-content" data-aos="fade-up" data-aos-duration="1200">
            <span class="sub-title">Our Creative Team</span>
            <h2>Our team believes you deserve only the best</h2>
            <p>Meet the Brains Behind SimiliSnap: a group of passionate innovators, dedicated developers, and creative
              thinkers. United by a vision to revolutionize photo management, our team combines expertise with creativity
              to deliver an unmatched user experience. We're committed to excellence, ensuring that every feature of
              SimiliSnap not only meets but exceeds your expectations.</p>
            <router-link to="/" class="btn-style-one red-light-color">Meet Our Team <i
                class="ph-caret-right"></i></router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="team-member-list">
            <ul>
              <li data-aos="zoom-in" data-aos-duration="1200">
                <img src="../../assets/images/team/team1.png" alt="member-image">
              </li>
              <li data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
                <img src="../../assets/images/team/team2.png" alt="member-image">
              </li>
              <li data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
                <img src="../../assets/images/team/team3.png" alt="member-image">
              </li>
              <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                <img src="../../assets/images/team/team4.png" alt="member-image">
              </li>
              <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <img src="../../assets/images/team/team5.png" alt="member-image">
              </li>
              <li data-aos="fade-down" data-aos-duration="1200" data-aos-delay="500">
                <img src="../../assets/images/team/team6.png" alt="member-image">
              </li>
            </ul>
            <img src="../../assets/images/shape/bg-shape1.jpg" alt="bg-image" class="bg-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team"
};
</script>
