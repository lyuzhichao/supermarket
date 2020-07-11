<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar>
      <div slot="center">Shop Mall</div>
    </mainTabBar>
  </div>
</template>

<script>
  import mainTabBar from "./components/content/mainTabBar/mainTabBar";
  export default {
    name:'app',
    components:{
      mainTabBar
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
