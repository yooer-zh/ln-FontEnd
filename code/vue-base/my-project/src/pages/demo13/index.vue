<template>
  <div>
    <h2>vue-router</h2>
    <hr>
    <!-- 1. 简单写法不传参 -->
    <router-link to="/demo8">demo8</router-link>
    <!-- 2. 传参的路由 -->
    <!-- 这里就用上了router里的name，跳转到对应的name路由 -->
    <!--
      router.js里的路由配置就变成了下面这样
      {
      path: '/demo8/:userId', 冒号为通配符，不能为空
      name: 'demo8',
      component: Demo8
    },
    -->
    <router-link :to="{name: 'demo8', params: {userId: 123}}">params</router-link>

    <!-- 3. 带query参数的路由 -->
    <router-link :to="{name: 'demo8', params: {userId: 123}, query:{plan: 'private'}}">query-link</router-link>
    <hr>
    <!-- 4. 不适用模板跳转，使用JS跳转，同样可以带参数 -->
    <button @click="toURL">JSclick事件跳转页面</button>

  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      toURL(){
        // 注意：主动JS跳转这里的 router 带 'r'

        // 不带参数跳转
        // this.$router.push({path: '/demo7'})

        // 带参数跳转
        // this.$router.push({name: 'demo8', params: {userId: 123}})
        this.$router.push({name: 'demo8', params: {userId: 'haha'}, query: {plan: 'js'}})
      }
    }
  }
</script>

<style lang="scss" scoped> 
  a {
    text-decoration: none;
  }
  a:visited {
    color: black;
    
  }

  a:hover {
    color: pink;
  }
</style>