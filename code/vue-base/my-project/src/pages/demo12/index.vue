<template>
  <div>
    <h2>过渡效果</h2>
    <hr>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <!-- 需要过渡的元素使用transition标签，然后起个name -->
      <transition name="fade">
        <p v-if="show" class="show">hello</p>
      </transition>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .show {
    color: red;
    font: {
      size: 40px;
      weight: 700;
      family: Arial;
    }
    // opacity: 0.5;
  }
  /**
  1. 显示=》隐藏 leave
  leave  --  leave-active  -- leave-to

  2. 隐藏=》显示 enter
  */

  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }

</style>