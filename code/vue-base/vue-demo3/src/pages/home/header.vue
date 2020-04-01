<template>
  <me-navbar class="header">
    <!-- 这里使用了组件，而且在子组件的插槽内添加了内容，使用slot属性指定位置 -->
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">搜索框</div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'home-header',
  components: {
    MeNavbar
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.header {
  &.mine-navbar {
    background-color: transparent;
    // background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }

}
</style>
