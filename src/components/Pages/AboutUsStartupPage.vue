<template>
  <div>
    <Navbar />
    <PageTitle subTitle="About Us" heding="Hello World! This is GharbiDev Solutions!" />
    <About />
    <WhyChooseUs />
    <OurWorkingProcess />
    <Funfacts />
    <Team />
    <Testimonials />
    <Partner />
    <GetStarted />
    <FooterStyleTwo class="bg-f9f9f9 " />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import PageTitle from "../Common/PageTitle.vue";
import About from "../AboutUsStartup/About.vue";
import WhyChooseUs from "../AboutUsStartup/WhyChooseUs.vue";
import OurWorkingProcess from "../AboutUsStartup/OurWorkingProcess.vue";
import Funfacts from "../AboutUsStartup/Funfacts.vue";
import Team from "../AboutUsStartup/Team.vue";
import Testimonials from "../Common/Testimonials.vue";
import Partner from "../AboutUsStartup/Partner.vue";
import GetStarted from "../AboutUsStartup/GetStarted.vue";
import FooterStyleTwo from "../Layouts/FooterStyleTwo.vue";

export default {
  name: "AboutUsStartup",
  components: {
    Navbar,
    PageTitle,
    About,
    WhyChooseUs,
    OurWorkingProcess,
    Funfacts,
    Team,
    Testimonials,
    Partner,
    GetStarted,
    FooterStyleTwo
  }
};
</script>
