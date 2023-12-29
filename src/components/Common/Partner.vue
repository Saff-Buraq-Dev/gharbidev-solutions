<template>
  <div class="partner-area">
    <div class="container">
      <div class="partner-slides">
        <carousel :autoplay="5000" :wrap-around="true" :breakpoints="breakpoints">
          <Slide v-for="slide in carouselItems" :key="slide.id">
            <div class="partner-item">
              <img :src="slide.image" alt="image">
            </div>
          </Slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Partner",
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center"
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/images/partner/partner1.png")
      },
      {
        id: 2,
        image: require("../../assets/images/partner/partner2.png")
      },
      {
        id: 3,
        image: require("../../assets/images/partner/partner3.png")
      },
      {
        id: 4,
        image: require("../../assets/images/partner/partner4.png")
      },
      {
        id: 5,
        image: require("../../assets/images/partner/partner5.png")
      },
      {
        id: 6,
        image: require("../../assets/images/partner/partner2.png")
      },
      {
        id: 7,
        image: require("../../assets/images/partner/partner3.png")
      },
      {
        id: 8,
        image: require("../../assets/images/partner/partner4.png")
      },
      {
        id: 9,
        image: require("../../assets/images/partner/partner5.png")
      }
    ],
    breakpoints: {
      0: {
        itemsToShow: 2
      },
      576: {
        itemsToShow: 3,
        snapAlign: "center"
      },
      768: {
        itemsToShow: 4,
        snapAlign: "center"
      },
      1200: {
        itemsToShow: 5,
        snapAlign: "left"
      }
    }
  })
});
</script>
