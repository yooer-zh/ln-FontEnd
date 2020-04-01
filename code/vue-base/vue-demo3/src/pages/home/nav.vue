<template>
  <div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in navs" :key="index">
          <a :href="item.linkUrl" class="nav-link">
            <img :src="item.picUrl" class="nav-pic" />
            <span>{{item.text}}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {navItems} from './config'
export default {
  name: 'HomeNav',
  /**
   * 拓展： 这里数据没必要放在data里面，因为放在data里面的数据都会
   * 被添加 proxyGetter、proxySetter 监听数据的变化，数据发生变化会立即响应到视图中
   * 这种不改变的数据就可以不放在data中，所以就移到了created中
   */
  data () {
    return {
      // navs: navItems
      navs: []
    }
  },
  created () {
    this.navs = navItems
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';

.nav {
  width: 100%;
  padding-top: 15px;
  background-color: #fff;

  &-list {
    display: flex;
    flex-wrap: wrap; // flex默认是一行排列，这里设置折行
  }

  &-item {
    width: 20%;
    margin-bottom: 15px;
  }

  // 图片文字都在 nav-link 容器下
  &-link {
    @include flex-center(column);
  }

  &-pic {
    width: 60%;
    margin-bottom: 8px;
  }

}

</style>
