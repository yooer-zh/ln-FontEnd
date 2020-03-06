<template>
  <div>
    <div>计算属性</div><hr>
    <!-- <div>{{msg.split('').reverse().join('')}}</div> -->
    <div>{{reversedMessage}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'helloworld demo4'
      }
    },
    computed: {
      reversedMessage () {
        return this.msg.split('').reverse().join('')
      }
    }
  }
</script>
