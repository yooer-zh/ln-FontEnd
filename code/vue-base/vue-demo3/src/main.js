import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastclick from 'fastclick'

import 'assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'

// fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  preLoad: 1, // 小数，还差多少就可以加载
  error: require('assets/img/error.png'), // 失败显示的图片
  loading: require('assets/img/loading.gif'), // 成功显示的图片
  attempt: 1 // 尝试加载次数
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
