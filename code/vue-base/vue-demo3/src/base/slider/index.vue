<template>
  <swiper :options="swiperOption">
    <!-- 图片容器 -->
    <!-- 因为这里是基础组件，目前没有数据，所以不能在这循环 -->
    <slot></slot>
    <!-- 分页器， 这里的插槽是swiper留的 -->
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// 这里使用的是 引入组件的方式
import {swiper} from 'vue-awesome-swiper'
export default {
  name: 'MeSlider',
  components: {
    swiper
  },
  props: {
    // 基础组件从父组件接收关于swiper的参数，然后再通过swiperOption自定义swiper设置
    // 幻灯片水平还是垂直滑动
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return [
          'horizontal', 'vertical'
        ].indexOf(value) > -1
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator (value) {
        return value >= 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      swiperOption: {
        watchOverflow: true, // 如果只有一张图片，就不让左右滑动了，轮播也就失效了
        direction: this.direction, // 传过来的参数
        autoplay: this.interval ? { // 是否开启自动轮播
          delay: this.interval,
          disableOnInteraction: false // 一旦有交互动作就停止轮播
        } : false,
        slidesPerView: 1, // 设置slider容器同时能够显示几张图片
        loop: this.loop, // 是否开启无缝滚动
        pagination: { // 分页器
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
