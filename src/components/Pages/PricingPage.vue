<template>
  <div>
    <Navbar />
    <PageTitle subTitle="Pricing Table" heding="No Hidden Charge Applied, Choose Your Plan" />
    <Pricing />
    <Features />
    <Faq />
    <Testimonials />
    <GetStarted />
    <FooterStyleThree />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import PageTitle from "../Common/PageTitle.vue";
import Pricing from "../Pricing/Pricing.vue";
import Features from "../Pricing/Features.vue";
import Faq from "../Pricing/Faq.vue";
import Testimonials from "../Pricing/Testimonials.vue";
import GetStarted from "../Pricing/GetStarted.vue";
import FooterStyleThree from "../Layouts/FooterStyleThree.vue";

export default {
  name: "PricingPage",
  components: {
    Navbar,
    PageTitle,
    Pricing,
    Features,
    Faq,
    Testimonials,
    GetStarted,
    FooterStyleThree
  }
};
</script>
