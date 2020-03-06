<template>
  <div>
    <h2>事件处理器</h2>
    <hr>
    <div id="example-1">
      <!-- 直接操作数据 -->
      <button v-on:click="counter += 1">增加 1</button>
      <p>这个按钮被点击了 {{counter}} 次</p>
    </div>
    <hr>
    <div id="example-2">
      <!-- 定义方法处理数据 -->
      <button @click="greet">Greet</button>
    </div>
    <hr>
    <div id="example-3">
      <!-- say是在下面定义的方法名 -->
      <input type="text" v-model="saymsg">
      <button @click="say()">say</button>
    </div>
    <hr>
    <!-- 修饰符 -->
    <div @click="dothis2">
      <!-- stop:阻止事件冒泡 -->
      <button @click.stop="doThis">
        doThis
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        counter: 0,
        saymsg: 'hi'
      }
    },
    methods: {
      greet(){
        this.counter = this.counter + 1
      },
      say() {
        alert(this.saymsg)
      },
      dothis2() {
        alert('dothis2')
      },
      doThis() {
        alert('dothis')
      }
    },
    mounted() {
      // 注意： 接收参数的地方 route 最后不带 'r'
      alert(this.$route.params.userId)
      alert(this.$route.query.plan)
    }
  }
</script>

<style lang="scss" scoped>

</style>