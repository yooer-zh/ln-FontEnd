<template>
<div class="recommend">
  <h3 class="recommend-title">热卖推荐</h3>
  <div class="loading-container" v-if="!recommends.length">
    <me-loading inline></me-loading>
  </div>
  <ul class="recommend-list" v-else>
    <li class="recommend-item"
    v-for="(item, index) in recommends"
    :key="index"
    >
      <router-link class="recommend-link"
      :to="{name: 'home-product', params: {id: item.baseinfo.itemId}}"
      >
        <p class="recommend-pic"><img alt="" class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></p>
        <p class="recommend-name">{{item.name.shortName}}</p>
        <p class="recommend-origPrice"><del>￥{{item.price.origPrice}}</del></p>
        <p class="recommend-info">
          <span class="recommend-price">￥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
          <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
        </p>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import {getHomeRecommend} from 'api/home'
import MeLoading from 'base/loading'

export default {
  name: 'HomeRecommend',
  components: {
    MeLoading
  },
  data () {
    return {
      recommends: [],
      curPage: 1,
      totalPage: 1 // 所有页码暂时不知道，在发送一次请求后更新此数据
    }
  },
  created () {
    this.getRecommand()
  },
  methods: {
    getRecommand () {
      if (this.curPage > this.totalPage) {
        return
      }
      getHomeRecommend(this.curPage).then(data => {
        if (data) {
          // console.log(data)
          this.curPage++
          this.totalPage = data.totalPage
          this.recommends = this.recommends.concat(data.itemList)
          // 更新完数据，需要冒泡更新滚动条
          this.$emit('loaded', this.recommends)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
.recommend {
  &-title {
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: $font-size-l;
    text-align: center;
    // 使用伪类达到横穿字体的直线效果
    &:before,
    &:after {
      content: ''; // 伪类要显示一定要加content，否则不显示
      position: absolute;
      top: 50%;
      width: 40%;
      height: 1px;
      background-color: #ddd;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }

  &-list {
    @include flex-between();
    flex-wrap: wrap;
  }

  &-item {
    width: 49%;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12);
    margin-bottom: 8px;
  }

  &-link {
    display: block;
  }

  &-pic {
    width: 100%;
    margin-bottom: 6px;
  }

  &-img {
    width: 100%;
  }

  &-name {
    height: 36px;
    padding: 0 5px;
    margin-bottom: 8px;
    line-height: 1.5;
    @include multiline-ellipsis(); // 两行，超出的话就显示省略号
  }

  &-origPrice {
    padding: 0 5px;
    margin-bottom: 8px;
    color: #ccc;
  }

  &-info {
    @include flex-between();
    padding: 0 5px;
    margin-bottom: 8px;
  }

  &-price {
    color: #e61414;
  }

  &-price-num {
    font-size: 20px;
  }

  &-count {
    color: #999;
  }
}

.loading-container {
  padding-top: 100px;
}
</style>
