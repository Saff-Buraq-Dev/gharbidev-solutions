<template>
  <div>
    <Navbar />
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <span class="sub-title">Frequently Ask & Question</span>
          <h1>Ciao! How Can We Help You?</h1>
          <form @submit.prevent>
            <label><i class="ph-magnifying-glass"></i></label>
            <input type="text" class="input-search" placeholder="Search a question..." v-model="query">
          </form>
        </div>
      </div>
    </div>
    <Faq :query="query" />
    <Partner />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import Faq from "../Faq/Faq.vue";
import Partner from "../Faq/Partner.vue";
import Footer from "../Layouts/Footer.vue";

export default {
  name: "FaqPage",
  components: {
    Navbar,
    Faq,
    Partner,
    Footer
  },
  data() {
    return {
      query: ""
    };
  }
};
</script>
