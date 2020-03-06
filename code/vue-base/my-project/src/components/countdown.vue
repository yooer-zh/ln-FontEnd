// 子组件 countdown.vue
<template>
<div>
  <p :style="{'color': color}">{{time}}</p>
  {{color}}
</div>
  
</template>

<script>
  export default {
    data () {
      return {
        time: 10
      }
    },
    mounted () {
      var vm = this
      var t = setInterval(function(){
        vm.time--;
        if(vm.time == 0) {
          clearInterval(t)
          vm.$emit("end", 'msg')
        }
      }, 1000)
    },
    props: {
      color: {
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>