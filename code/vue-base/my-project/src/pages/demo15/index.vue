// demo15/index.vue
<template>
  <div>
    <!-- 常用于组件调用中 -->
    <h2>Slot插槽</h2>
    <hr>

    <slot2>
      <div>我是父组件中定义的</div>

      <div slot="bottom">父组件指定插槽显示内容，name=bottom</div>
    </slot2>
    

  </div>
</template>

<script>
import slot2 from '@/components/slot'
  export default {
    data () {
      return {
        
      }
    },
    components: {
      slot2
    }
  }
</script>

<style lang="scss" scoped>

</style>