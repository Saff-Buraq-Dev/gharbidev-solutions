<template>
  <div>
    <Navbar />
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <h1>Terms and Conditions</h1>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
    <TermsAndConditions />
    <FooterStyleTwo />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions.vue";
import FooterStyleTwo from "../Layouts/FooterStyleTwo.vue";

export default {
  name: "TermsAndConditionsPage",
  components: {
    Navbar,
    TermsAndConditions,
    FooterStyleTwo
  }
};
</script>
