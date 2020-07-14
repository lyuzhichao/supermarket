<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="center">Shopping Mall</div>
    </navBar>
    <swiper :cbanners="banners">
    </swiper>
    <homeRecommendView :recommends="recommends"></homeRecommendView>
  </div>

</template>

<script>
  import navBar from "../../components/common/navbar/navBar";
  import {getHomeMultidata} from "../../network/home";
  import swiper from "../../components/common/swiper/Swiper";
  import homeRecommendView from "./homecomponents/homeRecommendView";

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
      swiper,
      homeRecommendView
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