<template>
  <div class="thank-you-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="thank-you-content">
            <img src="../../assets/images/404.png" alt="thank-you">
            <h3>Oops! You've Discovered Uncharted Territory...</h3>
            <p>It looks like the page you're searching for has either moved to a new location or doesn't exist. But don't
              worry, this isn't a dead end!</p>
            <router-link to="/" class="btn-style-one red-light-color">Back to Home <i
                class="ph-caret-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>
