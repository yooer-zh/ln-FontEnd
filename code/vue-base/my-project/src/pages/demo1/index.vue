<template>
  <div>
    helloWorld
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    // 生命周期函数
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('create')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeDestory() {
      console.log('beforeDestory')
    },
    destoryed() {
      console.log('destoryed')
    },

  }
</script>