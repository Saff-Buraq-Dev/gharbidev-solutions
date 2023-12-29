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
import MainBanner from "../SimiliSnap/MainBanner.vue";
import HelpDesk from "../SimiliSnap/HelpDesk.vue";
import Services from "../SimiliSnap/Services.vue";
import WhatWeDo from "../SimiliSnap/WhatWeDo.vue";
import Faq from "../SimiliSnap/Faq.vue";
import Team from "../SimiliSnap/Team.vue";
import Subscribe from "../SimiliSnap/Subscribe.vue";
import Partner from "../SimiliSnap/Partner.vue";
import Testimonials from "../SimiliSnap/Testimonials.vue";

import Blog from "../Common/Blog.vue";

import Footer from "../Layouts/Footer.vue";

export default {
  name: "SimiliSnap",
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
