<template>
  <div>
    <Navbar />
    <MainBanner />
    <HelpDesk />
    <Services />
    <WhatWeDo />
    <Faq />
    <Testimonials />
    <Team />
    <Blog />
    <Subscribe />
    <Partner />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import MainBanner from "../LandingPage/MainBanner.vue";
import HelpDesk from "../LandingPage/HelpDesk.vue";
import Services from "../LandingPage/Services.vue";
import WhatWeDo from "../LandingPage/WhatWeDo.vue";
import Faq from "../LandingPage/Faq.vue";
import Team from "../LandingPage/Team.vue";
import Subscribe from "../LandingPage/Subscribe.vue";
import Partner from "../LandingPage/Partner.vue";
import Testimonials from "../LandingPage/Testimonials.vue";

import Blog from "../Common/Blog.vue";

import Footer from "../Layouts/Footer.vue";

export default {
  name: "LandingPage",
  components: {
    Navbar,
    MainBanner,
    HelpDesk,
    Services,
    WhatWeDo,
    Faq,
    Testimonials,
    Team,
    Blog,
    Subscribe,
    Partner,
    Footer
  }
};
</script>
