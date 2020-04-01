<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading"></me-loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import MeLoading from 'base/loading'
import {
  PULL_DOWN_HEIGHT,
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END
} from './config'

export default {
  name: 'MeScroll',
  components: {
    swiper,
    swiperSlide,
    MeLoading
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
    },
    pullDown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pulling: false,
      pullDownText: PULL_DOWN_TEXT_INIT,
      swiperOption: {
        direction: 'vertical', // 垂直滚动
        slidesPerView: 'auto', // 一页显示几张图片？自适应
        freeMode: true, // 自由模式，随便滚
        setWrapperSize: true, // 自动计算高度并设置el样式
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true // 是否自动隐藏
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
        }
      }
    }
  },
  watch: {
    data () {
      this.update()
    }
  },
  methods: {
    update () { // 更新滚动条方法
      /**
       * swiper更新的API： swiper.update，但是这里的swiper是
       * new出来的实例，不是组件，所以在这个组件中应该怎么获取swiper实例？
       */
      this.$refs.swiper && this.$refs.swiper.swiper.update()
    },

    scroll () {
      const swiper = this.$refs.swiper.swiper
      if (this.pulling) { // 如果正在下拉，就直接返回，不再反复操作
        return
      }
      if (swiper.translate > 0) { // 下拉
        if (!this.pullDown) {
          return
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          // 下拉超过高度，就可以改变文本,会造成重新渲染的闪动
          // this.pullDownText = '111'
          // 所以调用子组件中的方法，更新文字
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
        }
      }
    },
    touchEnd () {
      const swiper = this.$refs.swiper.swiper
      if (this.pulling) { // 如果正在下拉，就直接返回，不再反复操作
        return
      }

      if (swiper.translate > PULL_DOWN_HEIGHT) { // 超过了就可以下拉了
        if (!this.pullDown) {
          return
        }
        this.pulling = true
        swiper.allowTouchmove = false // 加载过程中 禁止触摸
        swiper.setTransition(swiper.params.speed) // 设置为初始的速度
        swiper.setTranslate(PULL_DOWN_HEIGHT) // 拖过了回到原位置
        swiper.params.virtualTranslate = true // 定住不给回弹
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING)
        /**
         * 这个是基础组件，跟业务没关系，所以要告诉调用方，现在已经下拉了
         * 在外部做完操作后需要再调用pullDownEnd，恢复配置
         */
        this.$emit('pull-down', this.pullDownEnd)
      }
    },
    pullDownEnd () {
      const swiper = this.$refs.swiper.swiper
      this.pulling = false
      this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
      swiper.params.virtualTranslate = false
      swiper.allowTouchmove = true
      swiper.setTransition(swiper.params.speed)
      swiper.setTranslate(0)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: auto;
}

.mine-scroll-pull-down {
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  height: 80px;
}
</style>
