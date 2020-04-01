<template>
<div class="mine-loading" :class="{'mine-loading-inline': inline}">
  <span class="mine-loading-indicator" v-if="indicator==='on'">
    <!-- 在这里预留了插槽，可以自定义图片，不传的话就使用自己默认的 -->
    <slot><img src="./loading.gif" alt=""></slot>
  </span>
  <span class="mine-loading-text" v-if="text">{{loadingText}}</span>
</div>
</template>

<script>
export default {
  name: 'MeLoading',
  props: {
    indicator: {
      type: String,
      default: 'on',
      validator (value) {
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    text: {
      type: String,
      default: '加载中...'
    },
    inline: {
      type: Boolean,
      default: false // 默认false上下
    }
  },
  data () {
    return {
      loadingText: this.text
    }
  },
  methods: {
    setText (text) {
      /**
       * 解决，下拉到一定距离后改变文字，会造成页面闪动的bug
       * 并注意，不能在子组件修改父组件传过来的text，
       * 需要保存一下然后修改自己的
       */
      this.loadingText = text
    }
  },
  watch: { // 当传进来的值改变的时候，也能够修改loadingText，监听text
    text (text) {
      this.loadingText = text
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
// 希望loading默认可以在  父容器中垂直水平居中
.mine-loading {
  overflow: hidden;
  width: 100%;
  height: 100%;
  @include flex-center(column);

  &.mine-loading-inline {
    flex-direction: row;
    .mine-loading-indicator ~.mine-loading-text {
      margin-top: 0px;
      margin-left: 6px;
    }
  }
}

.mine-loading-indicator ~.mine-loading-text {
  margin-top: 6px;
}
</style>
