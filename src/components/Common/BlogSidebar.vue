<template>
  <div class="widget-area">
    <div class="widget widget_search">
      <h3 class="widget-title"><span>Search</span></h3>
      <form class="search-form" @submit.prevent>
        <input type="search" class="search-field" placeholder="Search...">
        <button type="submit"><i class="ph-magnifying-glass"></i></button>
      </form>
    </div>
    <div class="widget widget_categories">
      <h3 class="widget-title"><span>Categories</span></h3>
      <ul>
        <li><router-link to="/">Business <span class="count">(6)</span></router-link></li>
        <li><router-link to="/">Privacy <span class="count">(4)</span></router-link></li>
        <li><router-link to="/">Technology <span class="count">(5)</span></router-link></li>
        <li><router-link to="/">Tips <span class="count">(3)</span></router-link></li>
        <li><router-link to="/">Log in <span class="count">(8)</span></router-link></li>
        <li><router-link to="/">Uncategorized <span class="count">(1)</span></router-link></li>
      </ul>
    </div>
    <div class="widget widget_vumy_posts_thumb">
      <h3 class="widget-title"><span>Popular Posts</span></h3>
      <div class="item">
        <router-link to="/" class="thumb">
          <img src="../../assets/images/blog/blog1.jpg" alt="blog-image">
        </router-link>
        <div class="info">
          <h4 class="title"><router-link to="/">Standard operating procedures (SOP) changes with an
              LMS</router-link></h4>
          <span class="date">19th Sep, 2021</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/" class="thumb">
          <img src="../../assets/images/blog/blog2.jpg" alt="blog-image">
        </router-link>
        <div class="info">
          <h4 class="title"><router-link to="/">Questions to ask vendors before choosing an LMS
              platform</router-link></h4>
          <span class="date">19th Sep, 2021</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/" class="thumb">
          <img src="../../assets/images/blog/blog3.jpg" alt="blog-image">
        </router-link>
        <div class="info">
          <h4 class="title"><router-link to="/">In person, virtual or hybrid: helpful tools for back
              to school</router-link></h4>
          <span class="date">19th Sep, 2021</span>
        </div>
      </div>
      <div class="item">
        <router-link to="/" class="thumb">
          <img src="../../assets/images/blog/blog4.jpg" alt="blog-image">
        </router-link>
        <div class="info">
          <h4 class="title"><router-link to="/">Corporate online learning trends you still need to
              implement in 2021</router-link></h4>
          <span class="date">19th Sep, 2021</span>
        </div>
      </div>
    </div>
    <div class="widget widget_follow_us">
      <h3 class="widget-title"><span>Follow Us</span></h3>
      <ul>
        <li><a href="#" target="_blank">Facebook</a></li>
        <li><a href="#" target="_blank">Twitter</a></li>
        <li><a href="#" target="_blank">Instagram</a></li>
        <li><a href="#" target="_blank">Pinterest</a></li>
        <li><a href="#" target="_blank">Linkedin</a></li>
      </ul>
    </div>
    <div class="widget widget_tag_cloud">
      <h3 class="widget-title"><span>Tags</span></h3>
      <div class="tagcloud">
        <router-link to="/">Advertisment</router-link>
        <router-link to="/">Business</router-link>
        <router-link to="/">Life</router-link>
        <router-link to="/">Lifestyle</router-link>
        <router-link to="/">Fashion</router-link>
        <router-link to="/">Ads</router-link>
        <router-link to="/">Advertisment</router-link>
        <router-link to="/">Business</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar"
};
</script>
