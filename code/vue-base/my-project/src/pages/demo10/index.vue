// 页面
<template>
  <div>
    <h2>表单控件绑定</h2>
    <hr>
    <countdown :color="red" @end='end'></countdown>
  </div>
</template>

<script>
// 1. 引入组件
import countdown from '@/components/countdown'
  export default {
    data () {
      return {
        red: 'red',

      }
    },
    components: {
      // 2. 在这里注册一下组件
      countdown
    },
    methods: {
      end(msg){
        alert('end' + 'msg')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>