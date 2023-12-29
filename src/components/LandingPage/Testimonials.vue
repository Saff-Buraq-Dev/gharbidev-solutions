<template>
  <div class="testimonials-area bg-1d2b53 ptb-100">
    <div class="container">
      <div class="section-title white-color">
        <span class="sub-title">Testimonials</span>
        <h2>Here’s what our amazing clients are saying</h2>
      </div>
      <div class="testimonials-slides">
        <carousel :autoplay="5000" :wrap-around="true">
          <Slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-testimonials-item">
              <p>{{ slide.desc }}</p>
              <div class="client-info d-flex align-items-center justify-content-center">
                <img :src="slide.image" alt="user">
                <div class="info">
                  <h3>{{ slide.name }}</h3>
                  <span>{{ slide.position }}</span>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

// Importing images
import user1 from "../../assets/images/user/user1.jpg";
import user2 from "../../assets/images/user/user2.jpg";
import user3 from "../../assets/images/user/user3.jpg";
import user4 from "../../assets/images/user/user4.jpg";
import user5 from "../../assets/images/user/user5.jpg";

export default defineComponent({
  name: "Testimonials",
  components: {
    Carousel,
    Slide,
    Pagination
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center"
    },
    carouselItems: [
      {
        id: 1,
        desc: "The cybersecurity enhancements they implemented for us have been top-notch. Their proactive approach to network security has safeguarded our company’s data and boosted our confidence in handling client information.",
        image: user1,
        name: "Kevin Smith",
        position: "IT Manager, SecureNet Technologies"
      },
      {
        id: 2,
        desc: "This team’s innovative development and strategic consulting have been crucial in our digital transformation journey. They have consistently gone above and beyond to ensure our needs are met with the highest standard of service.",
        image: user2,
        name: "Sophia Martinez",
        position: "CEO, Digital Horizons"
      },
      {
        id: 3,
        desc: "The technical support and customized solutions provided have been exceptional. Their ability to tailor services to our unique data needs has given us a competitive edge in the market.",
        image: user3,
        name: "Ethan Garcia",
        position: "Head of Data Analytics, AnalyzeIT"
      },
      {
        id: 4,
        desc: "Their commitment to delivering cutting-edge IT solutions is unmatched. Their guidance through our cloud migration was seamless and impactful, significantly improving our operational efficiency.",
        image: user4,
        name: "Michael Chen",
        position: "Director of IT, GreenTech Solutions"
      },
      {
        id: 5,
        desc: "Partnering with this team transformed our approach to digital solutions. Their expertise in cloud integration and innovative IT strategies has been pivotal in our growth and success.",
        image: user5,
        name: "James Robertson",
        position: "CTO of TechInnovate"
      }
    ]
  })
});
</script>
