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
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Home</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/similisnap" class="nav-link">SimiliSnap</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Health Care</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Property</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Big Data</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Distance
                      Learning</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Chat Bot</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Software</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Features</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Features</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Team</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Pricing</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Courses</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Courses
                      Details</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Pages</a>
                <ul class="dropdown-menu">
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">About Us</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">IT Startup</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Insurance</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Team</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Testimonials</router-link>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Courses</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Courses</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Courses
                          Details</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Pricing</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Features</router-link>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Services</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Services Style 01</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Services Style
                          02</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Services Style
                          03</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Services Style
                          04</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/" class="nav-link">Services
                          Details</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item"> <router-link to="/" class="nav-link">Login/Register</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Forgot Password</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">FAQ</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Privacy Policy</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Terms &
                      Conditions</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Coming Soon</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Thank You</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Blog</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Tech</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">AWS</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Software Architecture</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>

          <div class="others-option">
            <router-link to="/login" class="btn-style-one blue-dark-color">
              Login
              <i class="ph-caret-right"></i>
            </router-link>
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
