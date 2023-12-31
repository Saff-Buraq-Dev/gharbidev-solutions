<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="vumy-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/images/gharbidev.png" alt="logo" width="350">
          </router-link>

          <div class="navbar-toggler" @click="show = !show" :aria-pressed="show ? 'true' : 'false'"
            v-bind:class="{ show: button_show_state }" v-on:click="button_show_state = !button_show_state">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </div>

          <div class="collapse navbar-collapse" :class="{ show: show }">
            <ul class="navbar-nav">
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Pages</a>
                <ul class="dropdown-menu">
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">About Us</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/about-us-startup" class="nav-link">IT Startup</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/coming-soon" class="nav-link">Insurance</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/team" class="nav-link">Team</router-link>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Blog</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="https://aws.gharbidev.com" target="_blank" class="nav-link">AWS</a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/coming-soon" class="nav-link">Tech Blog</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link">FAQ</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/privacy-policy" class="nav-link">Privacy Policy</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/terms-and-conditions" class="nav-link">Terms &
                      Conditions</router-link>
                  </li>
                </ul>
              </li>

              <!-- -->

              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isSticky: false,
      show: false,
      button_show_state: false
    };
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  }
};
</script>
