<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  import tabbaritem from "./tabbaritem";
  export default {
    name: "tabbar",
    components: {tabbaritem}
  }
</script>

<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 1px rgba(125,125,125,.2);

}
</style>