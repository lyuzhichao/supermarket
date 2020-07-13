<template>
  <div id="main-slider">
    <div class="slider">
      <swiper_item_test>
        <slider_imgs v-for="item in cbanners">
          <a :href="item.link">
            <img :src="item.image" alt="" class="slider-img">
          </a>
        </slider_imgs>
      </swiper_item_test>
    </div>
    <swiper_indicator>
      <div v-for="(item,index) in cbanners" :class="{active:index===timecount-1}" class="indicator-item"  :key="index"></div>
    </swiper_indicator>
  </div>
</template>

<script>
  import swiper_item_test from "./swiper_item_test";
  import slider_imgs from "./slider_imgs";
  import swiper_indicator from "./swiper_indicator";
  
  export default {
    name: "swiperTest",
    props: {
      cbanners: {
        type: Array,
        default: []
      },
    },
    mounted() {
      setTimeout(()=>{
        this.addNode();
        this.moveImg();
        this.restart_slider();
      },200)
    },
    data:function(){
      return {
        timecount: 1,
        startx: 0,
        swipe: 0,
        swiperatio: 0.25,
        distance: 0,
        currentIndex:1
      }
    },
    components: {
      swiper_item_test,
      slider_imgs,
      swiper_indicator
    },

    computed: {
      getNum: function () {
        let slider_img = document.getElementsByClassName('slider-img');
        return slider_img.length;
      },
    },

    methods: {
      addNode() {
        let slider_item = document.querySelector('.slider-item')
        let first_node = slider_item.firstChild.cloneNode(true)
        let last_node = slider_item.lastChild.cloneNode(true)
        slider_item.appendChild(first_node)
        slider_item.insertBefore(last_node, slider_item.firstChild)
        slider_item.style.left = -window.innerWidth + 'px'
      },
      moveImg() {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum;
        let that=this;
        let timeMaker = setInterval( ()=> {
          that.timecount++
          if (that.timecount < img_num - 1) {
            slider_item.style.transition = '1s'
            slider_item.style.left = -window.innerWidth * that.timecount + 'px'

          } else {
            slider_item.style.transition = '1s'
            slider_item.style.left = -window.innerWidth * that.timecount + 'px'
            setTimeout(function () {
              slider_item.style.transition = '0s'
              slider_item.style.left = -window.innerWidth + 'px'
            }, 900)
            that.timecount = 1
          }
        }, 1500);
        this.stop_slider(timeMaker)
      },
      stop_slider(timer_id) {
        let slider_item = document.querySelector('.slider-item')
        let that = this
        slider_item.addEventListener('touchstart', function (e) {
          window.clearInterval(timer_id)
          that.startx = e.touches[0].pageX
          that.drag_slider()
        })
      },
      restart_slider() {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum;
        let that = this
        slider_item.addEventListener('touchend', function () {
          if (that.swipe >= that.swiperatio) {
            that.timecount--
            if (that.timecount >= 1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
            } else {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = -window.innerWidth * (img_num - 2) + 'px'
              }, 100)
              that.timecount = img_num - 2
            }
          } else if (that.swipe <= -that.swiperatio) {
            that.timecount++
            if (that.timecount < img_num - 1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'

            } else if (that.timecount === img_num - 1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'

              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = -window.innerWidth + 'px'
              }, 100)
              that.timecount = 1
            } else {
              that.timecount = 0
            }
          } else {
            slider_item.style.transition = '0.2s'
            slider_item.style.left = -window.innerWidth * (that.timecount) + 'px'
          }
          setTimeout(that.moveImg(), 1000)
        })
      },
      drag_slider() {
        let slider_item = document.querySelector('.slider-item')
        let that = this
        slider_item.addEventListener('touchmove', function (e) {
          e.preventDefault()
          let currentx = e.touches[0].pageX
          let distance = currentx - that.startx
          that.swipe = distance / window.innerWidth
          if (that.timecount === 5) {
            that.timecount = 1
          }
          slider_item.style.transition = '0s'
          slider_item.style.left = -that.timecount * window.innerWidth + distance + 'px'
        })

      }
    },
  }
</script>

<style scoped>

  #main-slider {
    position: relative;
  }

  .slider {
    position: relative;
    overflow: hidden;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indicator-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: white;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indicator-item.active {
    background-color: rgba(212, 62, 46, 1.0);
  }
</style>