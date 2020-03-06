<template>
  <div>
    <h2>状态管理vuex</h2>
    <hr>
    <div>{{state}}</div>
    <button @click="change">button</button>
    {{num}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        state: '120',
        num: '110'
      }
    },
    methods: {
      change () {
        // vuex取数据
        this.state = this.$store.state.count

        // 修改公共数据 dispatch:派遣、发送
        this.$store.dispatch('increment', 100000)
        this.num = this.$store.state.num
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>