<template>
  <div>
    <h2>vue-resource</h2>
    <hr>

  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      // 一般请求后端数据都是在 mounted函数中
      // get 请求
      this.$http.get('/someUrl').then(resource => {
        // get body data
        console.log(response.body)
      },response => {
        // error callback
      })

      // post请求
      this.$http.post('/someUrl', {foo: 'bar'}).then(resource => {
        // get body data
        console.log(response.body)
      },response => {
        // error callback
      })

      // 设置parms、headers
      this.$http.get('/someUrl', {params: {foo: 'bar'}, headers: {'XCustom': '..'}}).then(resource => {
        // get body data
        console.log(response.body)
      },response => {
        // error callback
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>