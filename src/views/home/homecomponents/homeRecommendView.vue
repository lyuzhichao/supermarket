<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeRecommendView",
    props:{
      recommends:{
        type:Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom:8px solid #eeeeee ;
}
  .recommend img {
    width: 80%;
    margin-bottom: 10px;
  }
</style>