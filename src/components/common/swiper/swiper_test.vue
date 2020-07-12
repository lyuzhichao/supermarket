<template>
  <div id="main-slider">
    <div class="slider">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator"></slot>
    </div>
  </div>
</template>

<script>
  var params={
    timecount: 0,
    startx: 0,
    swipe: 0,
    swiperatio: 0.25,
    distance: 0
  }
  export default {
    name: "swiperTest",
    updated() {
      this.addNode();
      this.moveImg();
      this.restart_slide()
    },
    data () {
      return params
    },
    methods: {

      getNum() {
        let slider_img = document.getElementsByClassName('slider-img');
        return slider_img.length;
      },
      addNode() {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let first_node = slider_item.firstChild.cloneNode(true)
        let last_node = slider_item.lastChild.cloneNode(true)
        slider_item.appendChild(first_node)
        slider_item.insertBefore(last_node, slider_item.firstChild)
        slider_item.style.left = -window.innerWidth + 'px'
      },

      moveImg() {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let timeMaker = setInterval(function () {
          params.timecount++
          if (params.timecount < img_num - 1) {
            slider_item.style.transition = '1s'
            slider_item.style.left = -window.innerWidth * params.timecount + 'px'

          } else {
            slider_item.style.transition = '1s'
            slider_item.style.left = -window.innerWidth *params.timecount + 'px'
            setTimeout(function () {
              slider_item.style.transition = '0s'
              slider_item.style.left = -window.innerWidth + 'px'
            }, 900)
            params.timecount = 1
          }
        }, 1500);
        this.stop_slide(timeMaker)
      },
      stop_slide(timer_id) {
        let slider_item = document.querySelector('.slider-item')
        let that = this
        slider_item.addEventListener('touchstart', function (e) {
          window.clearInterval(timer_id)
          params.startx = e.touches[0].pageX
          that.drag_slide()
        })
      },
      restart_slide() {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let that = this
        slider_item.addEventListener('touchend', function () {
          if (params.swipe >= params.swiperatio) {
            params.timecount--
            if (params.timecount >= 1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * params.timecount + 'px'
            } else {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * params.timecount + 'px'
              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = -window.innerWidth * (img_num - 2) + 'px'
              }, 100)
              params.timecount = img_num - 2
            }
          } else if (params.swipe <= -params.swiperatio) {
            params.timecount++
            if (params.timecount < img_num - 1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * params.timecount + 'px'

            } else if (params.timecount === img_num - 1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * params.timecount + 'px'

              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = -window.innerWidth + 'px'
              }, 100)
              params.timecount = 1
            } else {
              params.timecount = 0
            }
          } else {
            slider_item.style.transition = '0.2s'
            slider_item.style.left = -window.innerWidth * (params.timecount) + 'px'
          }
          setTimeout(that.moveImg(), 1000)
        })
      },
      drag_slide() {
        let slider_item = document.querySelector('.slider-item')
        let that = this
        slider_item.addEventListener('touchmove', function (e) {
          e.preventDefault()
          let currentx = e.touches[0].pageX
          let distance = currentx - params.startx
          params.swipe = distance / window.innerWidth
          if (params.timecount===5){
            params.timecount=1
          }
          console.log(params.timecount)
          slider_item.style.transition = '0s'
          slider_item.style.left = -params.timecount*window.innerWidth + distance + 'px'
        })

      }
    },
  }
</script>

<style scoped>

  .slider {
    position: relative;
    overflow: hidden;
  }
</style>