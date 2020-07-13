<template>
  <div class="slider-imgs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "slider_imgs"
  }
</script>

<style scoped>
  .slider-imgs{
    width: 100%;
    flex-shrink: 0;
  }
  .slider-imgs img {
    width: 100%;
  }
</style>