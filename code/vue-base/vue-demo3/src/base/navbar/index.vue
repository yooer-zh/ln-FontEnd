<template>
<div class="mine-navbar">
  <!-- 如果$slots.left 存在 说明有人使用了这个left，才会显示 -->
  <div class="mine-navbar-left" v-if="$slots.left">
    <!-- 预留出的插槽位，父组件传入name=left就会到这个插槽 -->
    <slot name="left"></slot>
  </div>
  <div class="mine-navbar-center" v-if="$slots.center">
    <slot name="center"></slot>
  </div>
  <div class="mine-navbar-right" v-if="$slots.right">
    <slot name="right"></slot>
  </div>
  <h1 class="mine-navbar-title" v-if="title">
    <!-- 内层加入显示文字的span标签，可以解决flex布局和ellipsis冲突的问题 -->
    <span class="mine-navbar-text" v-text="title"></span>
  </h1>
</div>
</template>

<script>
export default {
  name: 'MeNavbar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .mine-navbar {
    @include flex-between();
    height: 50px;
    background-color: #fff;
    position: relative;

    &-left {
      margin-left: 10px;
      // 使用CSS3 ~ 选择器，表示 后面的兄弟节点
      /**
        ‘+’选择器则表示某元素后相邻的兄弟元素，也就是紧挨着的，是单个的。
        而‘~’选择器则表示某元素后所有同级的指定元素，强调所有的。
      */
      ~ .mine-navbar-right {
        position: static;
      }
    }

    &-center {
      flex: 1;
      margin: 0 10px;

      ~ .mine-navbar-right {
        position: static;
      }
    }

    &-right {
      margin-right: 10px;
      position: absolute;  // 加入绝对定位，就不能享受父容器的flex布局了，需要自己加
      right: 0;
      @include flex-center();
      height: 100%;
    }

    &-title {  // 绝对定位到头部，flex布局设置内容居中显示
      position: absolute;
      bottom: 0;
      left: 20%;
      right: 20%;
      height: 100%;
      @include flex-center();
      font-size: 18px;
    }

    &-text {
      @include ellipsis();
    }
  }

</style>
