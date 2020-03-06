<template>
  <div>
    <div>
      选项数据
    </div>
    <div><hr/></div>
    <div>{{ msg }}</div>
    <div><hr/></div>
    <div>computed: {{aDouble}}</div>
    <div><hr/></div>
    <div @click="say('hi')">点击</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 全局组件的变量定义，数据绑定
        msg: 'hello world demo2 msg',
        num: 1

      }
    },
    computed: {
      aDouble() {
        return this.num * 2
      }
    },
    methods: {
      // methods 里面的函数是给事件用的
      say(msg) {
        alert(msg)
      }
    }
  }
</script>
