<template>
  <div class="slider-item">
  <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "swiper_item_test"
  }
</script>

<style scoped>
.slider-item {
  display: flex;
  position: relative;
}


</style>