<template>
  <div>
    <Navbar />
    <Team />
    <FooterStyleTwo />
  </div>
</template>

<script>

import Navbar from "../Layouts/Navbar.vue";
import Team from "../Team/Team.vue";
import FooterStyleTwo from "../Layouts/FooterStyleTwo.vue";

export default {
  name: "TeamPage",
  components: {
    Navbar,
    Team,
    FooterStyleTwo
  }
};
</script>
