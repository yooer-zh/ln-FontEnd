<template>
  <div>
    <h2>列表渲染</h2>
    <hr>
    <ul id="example-1">
      <!-- 没有加:key -->
      <li v-for="item in items">{{item.message}}</li>
    </ul>
    <hr>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="index">{{index}} - {{item.message}}</li>
    </ul>
    <hr>
    <ul id="example-3" class="demo">
      <li v-for="(value,key) in object">
        {{key}} : {{value}}
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {message: 'Foo'},
          {message: 'Bar'}
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>