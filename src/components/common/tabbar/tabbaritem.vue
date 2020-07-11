<template>
  <div class="tabbar-item" v-on:click="btnClick">
    <slot v-if="!isActive" name="tabbar-icon"></slot>
    <slot v-else name="tabbar-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "tabbaritem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive () {
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle () {
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      btnClick () {
        return this.$router.replace(this.path)
      },

    }
  }
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    font-size: 14px;
  }

  .tabbar-item img {
    padding-top: 5px;
    width: 24px;
    height: 24px;
  }
</style>