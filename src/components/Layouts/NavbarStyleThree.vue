<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="vumy-nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/images/gharbidev.png" alt="logo">
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
                    <router-link to="/" class="nav-link">IT Startup</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/business" class="nav-link">Business</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/app" class="nav-link">App</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/insurance" class="nav-link">Insurance</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/property" class="nav-link">Property</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/big-data" class="nav-link">Big Data</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/distance-learning" class="nav-link">Distance
                      Learning</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/chat-bot" class="nav-link">Chat Bot</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/software" class="nav-link">Software</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/medical" class="nav-link">Medical</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item megamenu"> <a href="#" class="dropdown-toggle nav-link">Features</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <ul class="megamenu-submenu">
                            <li class="nav-item">
                              <router-link to="/services" class="nav-link">Services Style
                                01</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/services-two" class="nav-link">Services Style
                                02</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/services-three" class="nav-link">Services
                                Style 03</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/services-four" class="nav-link">Services Style
                                04</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/services-details" class="nav-link">Services
                                Details</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="col">
                          <ul class="megamenu-submenu">
                            <li class="nav-item">
                              <router-link to="/features" class="nav-link">Features</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/team" class="nav-link">Team</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/pricing" class="nav-link">Pricing</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/courses" class="nav-link">Courses</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/courses-details" class="nav-link">Courses
                                Details</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="col">
                          <ul class="megamenu-submenu">
                            <li class="nav-item">
                              <router-link to="/blog-grid" class="nav-link">Blog
                                Grid</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/blog-left-sidebar" class="nav-link">Blog Left
                                Sidebar</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/blog-right-sidebar" class="nav-link">Blog
                                Right Sidebar</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/blog-special" class="nav-link">Blog
                                Special</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/blog-details" class="nav-link">Blog
                                Details</router-link>
                            </li>
                          </ul>
                        </div>
                        <div class="col">
                          <router-link to="/courses-grid" class="d-block p-0">
                            <img src="../../assets/images/navbar.jpg" alt="image">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Pages</a>
                <ul class="dropdown-menu">
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">About Us</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/about-us" class="nav-link">IT Startup</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/about-us-two" class="nav-link">Insurance</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/team" class="nav-link">Team</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Courses</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/courses" class="nav-link">Courses</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/courses-details" class="nav-link">Courses
                          Details</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pricing" class="nav-link">Pricing</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/features" class="nav-link">Features</router-link>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Services</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/services" class="nav-link">Services Style 01</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/services-two" class="nav-link">Services Style
                          02</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/services-three" class="nav-link">Services Style
                          03</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/services-four" class="nav-link">Services Style
                          04</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/services-details" class="nav-link">Services
                          Details</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item"> <router-link to="/profile-authentication"
                      class="nav-link">Login/Register</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/lost-password" class="nav-link">Forgot Password</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link">FAQ</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/privacy-policy" class="nav-link">Privacy Policy</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/terms-conditions" class="nav-link">Terms &
                      Conditions</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/coming-soon" class="nav-link">Coming Soon</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/thank-you" class="nav-link">Thank You</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Portfolio</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/portfolio" class="nav-link">Classic Two Column</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/portfolio-two" class="nav-link">Modern Two Column</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/portfolio-details" class="nav-link">Portfolio
                      Details</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Shop</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/products" class="nav-link">Products List</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/cart" class="nav-link">Cart</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/checkout" class="nav-link">Checkout</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products-details" class="nav-link">Products Details</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Blog</a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/blog-grid" class="nav-link">Blog Grid</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/blog-left-sidebar" class="nav-link">Blog Left
                      Sidebar</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/blog-right-sidebar" class="nav-link">Blog Right
                      Sidebar</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/blog-special" class="nav-link">Blog Special</router-link>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Single Layouts</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/blog-details" class="nav-link">Left Sidebar</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-details-two" class="nav-link">Right
                          Sidebar</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-details-three" class="nav-link">No
                          Sidebar</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item"> <a href="#" class="dropdown-toggle nav-link">Extra</a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/blog-author" class="nav-link">Author</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-categories" class="nav-link">Categories</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-tag" class="nav-link">Tag</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-search-result" class="nav-link">Search
                          Result</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>

          <div class="others-option">
            <router-link to="/pricing" class="btn-style-one red-light-color">
              Download Now
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
  name: "NavbarStyleThree",
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
