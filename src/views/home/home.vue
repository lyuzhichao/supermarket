<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="center">Shopping Mall</div>
    </navBar>
    <swiper_test :cbanners="banners">
    </swiper_test>
  </div>

</template>

<script>
  import navBar from "../../components/common/navbar/navBar";
  import {getHomeMultidata} from "../../network/home";
  import swiper_test from "../../components/common/swiper/Swiper";


  export default {
    name: "home",
    data() {
      return {
        banners: [],
        recommends: [],
      }
    }
    ,
    components: {
      navBar,
      swiper_test,
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>