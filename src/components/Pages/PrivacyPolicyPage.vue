<template>
  <div>
    <Navbar />
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <h1>Privacy Policy</h1>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
    <PrivacyPolicy />
    <FooterStyleTwo />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy.vue";
import FooterStyleTwo from "../Layouts/FooterStyleTwo.vue";

export default {
  name: "PrivacyPolicyPage",
  components: {
    Navbar,
    PrivacyPolicy,
    FooterStyleTwo
  }
};
</script>
