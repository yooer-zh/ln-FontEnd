<template>
  <div>
    <h2>条件渲染</h2><hr>
    <h4 v-if="ok">Yes</h4>
    <hr>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <hr>
    <div v-show="isShow">isShow</div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        ok: true,
        type: '',
        isShow: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>