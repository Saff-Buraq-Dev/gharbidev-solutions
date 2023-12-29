<template>
  <div>
    <Navbar />
    <PageTitle subTitle="Get in Touch" heding="Connecting People With Knowledge" />
    <Contact />
    <FooterStyleTwo />
  </div>
</template>

<script>
import Navbar from "../Layouts/Navbar.vue";
import PageTitle from "../Common/PageTitle.vue";
import Contact from "../Contact/Contact.vue";
import FooterStyleTwo from "../Layouts/FooterStyleTwo.vue";

export default {
  name: "ContactPage",
  components: {
    Navbar,
    PageTitle,
    Contact,
    FooterStyleTwo
  }
};
</script>
