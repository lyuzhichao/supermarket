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
        timecount: 0,
        startx: 0,
        swipe: 0,
        swiperatio: 0.25
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
        let slider = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let first_node = slider.firstChild.cloneNode(true)
        slider.appendChild(first_node)
      },

      moveImg(timecount) {
        let slider = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let timeMaker = setInterval(function () {
          if (timecount < img_num - 1) {
            slider.style.transition = '0.5s'
            slider.style.left = -window.innerWidth * timecount + 'px'
            console.log('aa'+timecount)
            timecount++

          } else {
            slider.style.transition = '0.5s'
            slider.style.left = -window.innerWidth * timecount + 'px'
            setTimeout(function () {
              slider.style.transition = '0s'
              slider.style.left = 0
            }, 900)
            timecount = 1
          }
        }, 1500);
        this.stop_slide(timeMaker);
        this.drag_slide()

      },
      stop_slide(timer_id) {
        let slider = document.querySelector('.slider')
        let that = this
        slider.addEventListener('touchstart', function (e) {
          window.clearInterval(timer_id)
          that.startx = e.touches[0].pageX
        })
      },
      restart_slide() {
        let slider = document.querySelector('.slider')
        let slider_item = document.querySelector('.slider-item')
        let img_num = this.getNum();
        let that = this
        console.log(that.timecount)
        slider.addEventListener('touchend', function () {

          if (that.swipe >= that.swiperatio) {
            that.timecount--
            console.log(that.timecount)
            slider_item.style.transition = '0.2s'
            slider_item.style.left = -window.innerWidth * that.timecount + 'px'
          } else if (that.swipe <= -that.swiperatio) {
            that.timecount++
            console.log(that.timecount)
            if (that.timecount<img_num-1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
            } else if (that.timecount===img_num-1) {
              slider_item.style.transition = '0.2s'
              slider_item.style.left = -window.innerWidth * that.timecount + 'px'
              setTimeout(function () {
                slider_item.style.transition = '0s'
                slider_item.style.left = 0
              },100)
              that.timecount = 0
            }

          }
          setTimeout(that.moveImg(that.timecount), 500)
        })
      },
      drag_slide() {
        let slider = document.querySelector('.slider')
        let that = this
        slider.addEventListener('touchmove', function (e) {
          let currentx = e.touches[0].pageX
          let distance = currentx - that.startx
          that.swipe = distance / window.innerWidth
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