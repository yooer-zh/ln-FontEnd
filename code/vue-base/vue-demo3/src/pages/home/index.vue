<template>
<div class="home">
  <header class="g-header-container">
    <home-header/>
  </header>
  <!-- 由于滚动条组件是一个可视区，直接替换成容器，容器组件 -->
  <me-scroll
    :data="recommends"
    pullDown
    @pull-down="pullToRefresh"
  >
    <home-slider/>
    <home-nav/>
    <!-- <home-recommend @loaded="updateScroll"/> -->
    <home-recommend @loaded="getRecommends"/>
  </me-scroll>
  <div class="g-backtop-container"></div>
  <router-view></router-view>
</div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from 'base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend
  },
  data () {
    return {
      recommends: []
    }
  },
  methods: {
    updateScroll () {
    },
    getRecommends (recommends) {
      this.recommends = recommends
    },
    pullToRefresh (end) {
      setTimeout(() => {
        console.log('下拉刷新，父组件pullToRefresh方法1s后触发的')
        end()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
