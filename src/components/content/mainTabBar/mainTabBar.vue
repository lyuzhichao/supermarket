<template>
  <tabbar>
    <tabbaritem path="/home">
      <img slot="tabbar-icon" src="@assets/img/tabbar/home.svg" alt="">
      <img slot="tabbar-icon-active" src="@assets/img/tabbar/home_active.svg" alt="">
      <div slot="tabbar-text">Home</div>
    </tabbaritem>
    <tabbaritem path="/category">
      <img slot="tabbar-icon" src="@assets/img/tabbar/category.svg" alt="">
      <img slot="tabbar-icon-active" src="@assets/img/tabbar/category_active.svg" alt="">
      <div slot="tabbar-text">Category</div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <img slot="tabbar-icon" src="@assets/img/tabbar/shopcart.svg" alt="">
      <img slot="tabbar-icon-active" src="@assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="tabbar-text">Cart</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="tabbar-icon" src="@assets/img/tabbar/profile.svg" alt="">
      <img slot="tabbar-icon-active" src="@assets/img/tabbar/profile_active.svg" alt="">
      <div slot="tabbar-text">Profile</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from "../../common/tabbar/tabbar";
  import tabbaritem from "../../common/tabbar/tabbaritem";
  export default {
    name: "mainTabBar",
    components:{
      tabbar,
      tabbaritem
    }
  }
</script>

<style scoped>

</style>