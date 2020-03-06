<template>
<div class="home-page">
  <v-header></v-header>
  <!-- <ul class="nav"> -->
    <!-- <li><img src="@/assets/前端开发@2x.png" alt=""><span>前端开发</span></li>
    <li><img src="@/assets/后端开发@2x.png" alt=""><span>后端开发</span></li>
    <li><img src="@/assets/移动开发@2x.png" alt=""><span>移动开发</span></li>
    <li><img src="@/assets/数据库@2x.png" alt=""><span>数据库</span></li>
    <li><img src="@/assets/云计算大数据2.png" alt=""><span>云计算</span></li> -->
  <!-- </ul> -->
  <!-- 改造上方的代码为 v-for -->
  <ul class="nav">
    <li v-for="(item, index) in arrList" :key="index">
      <!-- <img :src="item.imgUrl" alt="">  直接这么写，图片会找不到，要用import -->
      <img :src="item.imgUrl" alt="">
      <span>{{item.name}}</span>
    </li>
  </ul>

  <v-course :arrList="array"></v-course>

  <v-footer></v-footer>
</div>
</template>

<script>
import Header from '@/components/header'
import webImg1 from '@/assets/前端开发@2x.png'
import webImg2 from '@/assets/后端开发@2x.png'
import webImg3 from '@/assets/移动开发@2x.png'
import webImg4 from '@/assets/数据库@2x.png'
import webImg5 from '@/assets/云计算大数据2.png'
import Course from '@/components/course'
import Footer from '@/components/footer'
export default {
  data () {
    return {
      arrList: [],
      array: []
    }
  },
  mounted () {
    // 初始化一些值可以再mounted函数中操作
    this.arrList = [
      {
        imgUrl: webImg1,
        name: '前端开发'
      },
      {
        imgUrl: webImg2,
        name: '前端开发'
      },
      {
        imgUrl: webImg3,
        name: '前端开发'
      },
      {
        imgUrl: webImg4,
        name: '前端开发'
      },
      {
        imgUrl: webImg5,
        name: '前端开发'
      }
    ]
    this.array = [
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: require('@/assets/img.png'),
        title: '实例秒解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      }
    ]
  },
  components: {
    'v-header': Header,
    'v-course': Course,
    'v-footer': Footer
  }
}
</script>

<style scoped>
 .home-page .nav {
   height: 100px;
   padding-top: 44px;
   background: #F3F5F7;
   overflow-x: auto;
   white-space: normal;
   font-size: 0;
 }

 .nav li {
   width: 88px;
   display: inline-block;
   text-align: center;
   font-size: 14px;
 }

 .nav li img {
   display: block;
   width: 32px;
   margin: 20px auto 12px;
 }
</style>
