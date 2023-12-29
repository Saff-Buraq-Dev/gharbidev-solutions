<template>
  <div class="page-title-area">
    <div class="container">
      <div class="page-title-content">
        <span class="sub-title red-light-color">{{ subTitle }}</span>
        <h1>{{ heding }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["subTitle", "heding"]
};
</script>
