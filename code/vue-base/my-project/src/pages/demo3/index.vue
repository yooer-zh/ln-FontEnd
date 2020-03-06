<template>
  <div>
    <div>模板语法</div>
    <hr>
    <!-- data -->
    <div>
      data: {{msg}}
    </div>
    <hr>
    <!-- 模板中嵌入js代码 -->
    <div>{{ number + 1 }}</div>
    <hr>
    <!-- 指令 -->
      <!-- v-html -->
    <div v-html="rawHtml"></div>
    <hr>
      <!-- v-bind 动态绑定属性，例如class、id等 简写为: -->
    <div v-bind:class="red">v-bind</div>
    <button @click="changeColor">改变颜色</button>
    <div v-bind:style="{color: input_color}">可改变颜色的文字</div>
    <input type="text" placeholder="请输入要改变的颜色"  v-model="input_color">
    <hr>
      <!-- v-on 绑定事件 简写为@ -->
    <div v-on:click="say('hi')">v-on click sayhi</div>
    <hr>

    <!-- 过滤器 -->
    <div>{{ message | capitalize }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'msg demo3',
        input_color: '',

        number: 1,
        rawHtml: '<span style="color: red;">123</span>',
        // rawHtml: '<script type="text/javascript">alert("11")',
        red: 'red2',
        message: 'Zy',

      }
    },
    methods: {
      changeColor() {
        this.red = 'blue'
      },
      say(msg){
        alert(msg)
      }
    },
    filters: {
      // 过滤器
      capitalize (msg) {
        return msg.toUpperCase()
      }
    }

  }
</script>

<style>
.red2 {
  color: red;
}
.blue {
  color: blue;
}
</style>

