<template>
<!-- /src/components/slot.vue -->
  <div>
    <h1>插槽测试组件 slot.vue</h1>
    <!-- 给父组件中在标签里写的内容 预留的标签slot -->
    <!-- 如果没有这个标签，父组件中写的内容将不会被保存、显示 -->
    <slot></slot>

    <p>我是最底部</p>
    <!-- 带name属性的slot -->
    <slot name="bottom"></slot>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>