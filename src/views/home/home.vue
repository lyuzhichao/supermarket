<template>
  <div id="home">
    <navBar class="home-nav">
      <div slot="center">Shopping Mall</div>
    </navBar>
<!--  <homeSwiper :cbanners="banners"></homeSwiper>-->
    <swiper_test>
      <swiper_item_test>
        <slider_imgs v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="" class="slider-img">
          </a>
        </slider_imgs>

      </swiper_item_test>
    </swiper_test>
  </div>

</template>

<script>
  import navBar from "../../components/common/navbar/navBar";
  import {getHomeMultidata} from "../../network/home";
import homeSwiper from "./homecomponents/homeswiper";
import swiper_test from "../../components/common/swiper/swiper_test";
import swiper_item_test from "../../components/common/swiper/swiper_item_test";
import slider_imgs from "../../components/common/swiper/slider_imgs";

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
      homeSwiper,
      swiper_test,
      swiper_item_test,
      slider_imgs
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
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