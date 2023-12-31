<template>
  <div class="testimonials-area pt-100 pb-75" style="">
    <div class="container">
      <div class="section-title" data-aos="fade-up" data-aos-duration="1200">
        <span class="sub-title light-green-color">Testimonials</span>
        <h2>Here’s what our amazing clients are saying</h2>
      </div>
      <div class="testimonials-slides-two">
        <carousel :autoplay="5000" :wrap-around="true">
          <Slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-testimonials-box">
              <div class="row align-items-center">
                <div class="col-lg-7 col-md-7">
                  <i class="flaticon-left-quote"></i>
                  <h5>{{ slide.title }}</h5>
                  <p>{{ slide.desc }}</p>
                  <div class="info">
                    <h3>{{ slide.name }}</h3>
                    <span>{{ slide.position }}</span>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 text-center">
                  <img :src="slide.image" alt="user">
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
// Importing images
import user1 from "../../assets/images/user/user1.jpg";
import user2 from "../../assets/images/user/user2.jpg";
import user3 from "../../assets/images/user/user3.jpg";

import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

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
      }
    ]
  })
});
</script>
