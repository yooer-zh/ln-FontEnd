<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
    :direciton="direciton"
    :loop="loop"
    :interval="interval"
    :pagination="pagination"
    v-else
  >
    <swiper-slide
      v-for="(item, index) in sliders"
      :key="index"
    >
      <a :href="item.linkUrl" class="slider-link">
        <img :src="item.picUrl" alt="" class="slider-img">
      </a>
    </swiper-slide>
  </me-slider>
  </div>
</template>

<script>
import MeSlider from 'base/slider'
import {swiperSlide} from 'vue-awesome-swiper' // 注意：这里虽然引入了JS，但是css还没有引入
import {sliderOptions} from './config'
import {getHomeSlider} from 'api/home'
import MeLoading from 'base/loading'

export default {
  name: 'HomeSlider',
  components: {
    MeSlider,
    MeLoading,
    swiperSlide
  },
  data () {
    return {
      direciton: sliderOptions.direciton,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    }
  },
  created () {
    // 一般都会在 created 生命周期函数中，获取数据
    this.getSliders() // 获取数据，赋值给上面sliders用于渲染
  },
  methods: {
    getSliders () {
      getHomeSlider().then(data => {
        this.sliders = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-wrapper {
  width: 100%;
  height: 183px;
}

.slider-link {
  display: block;
}

.slider-link,
.slider-img {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}

</style>
