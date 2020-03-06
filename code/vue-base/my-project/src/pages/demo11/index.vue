<template>
  <div>
    <h2>VUE中的DOM操作</h2>
    <hr>
    <div ref="head" id="head"></div>

  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      // 挂载之后调用的生命周期函数
      // DOM 已经生成
      // document.getElementById('head')
      this.$refs.head.innerHTML = 'hello demo11'

    }
  }
</script>

<style lang="scss" scoped>

</style>