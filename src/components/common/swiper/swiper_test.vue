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
  export default {
    name: "swiperTest",

    data() {
      return {
        timecount: 1,
        startx: 0,
        swipe: 0,
        swiperatio: 0.25,
        distance:0
      }
    },
    updated() {
      this.addNode();
      this.moveImg(this.timecount);
      this.restart_slide()
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
        let last_node=slider_item.lastChild.cloneNode(true)
        slider_item.appendChild(first_node)
        slider_item.insertBefore(last_node,slider_item.firstChild)
        slider_item.style.left = -window.innerWidth + 'px'
      },

      moveImg(timecount) {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let timeMaker = setInterval(function () {
          if (timecount < img_num-1) {
            slider_item.style.transition = '1s'
            slider_item.style.left = -window.innerWidth * timecount + 'px'
            timecount++

          } else {
            slider_item.style.transition = '1s'
            slider_item.style.left = -window.innerWidth * timecount + 'px'
            setTimeout(function () {
              slider_item.style.transition = '0s'
              slider_item.style.left = -window.innerWidth + 'px'
            }, 900)
            timecount = 2
          }
        }, 1500);
        this.stop_slide(timeMaker);
        this.drag_slide()

      },
      stop_slide(timer_id) {
        let slider_item = document.querySelector('.slider-item')
        let that = this
        slider_item.addEventListener('touchstart', function (e) {
          window.clearInterval(timer_id)
          that.startx = e.touches[0].pageX
        })
      },
      restart_slide() {
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let that = this
        slider_item.addEventListener('touchend', function () {
          if (that.swipe >= that.swiperatio) {
            that.timecount--
            if (that.timecount>=1){
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
            } else {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = -window.innerWidth*(img_num-2) + 'px'
              },100)
              that.timecount=img_num-2
            }
          } else if (that.swipe <= -that.swiperatio) {

            that.timecount++
            if (that.timecount<img_num-1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
            } else if (that.timecount===img_num-1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = -window.innerWidth + 'px'
              },100)
              that.timecount = 1
            } else {
              that.timecount=0
            }
          } else {
            slider_item.style.transition = '0.2s'
            slider_item.style.left = -window.innerWidth*(that.timecount) + 'px'
          }
          setTimeout(that.moveImg(that.timecount), 1000)
        })
      },
      drag_slide() {
        let slider_item = document.querySelector('.slider-item')
        let that = this
        slider_item.addEventListener('touchmove', function (e) {
          e.preventDefault()
          let currentx = e.touches[0].pageX
          let distance = currentx - that.startx
          that.swipe = distance / window.innerWidth
          slider_item.style.transition = '0s'
          slider_item.style.left = -window.innerWidth * that.timecount+distance + 'px'
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