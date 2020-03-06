<template>
<div class="c-footer">
  <ul class="footer-ul">
    <li><img src="@/assets/首页-选中@2x.png" alt=""><span>首页</span></li>
    <li><img src="@/assets/发现@2x.png" alt=""><span>发现</span></li>
    <li><img src="@/assets/下载@2x.png" alt=""><span>下载</span></li>
    <li><img src="@/assets/我的@2x.png" alt=""><span>我的</span></li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  .c-footer {
    position: fixed;
    z-index: 3;
    width: 375px;
    background: #fff;
    border-top: 1px solid #F3F5F7;
    bottom: 0;
  }

  .footer-ul {
    display: flex;
  }

  .footer-ul li {
    display: flex;
    height: 50px;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }

  .footer-ul li img {
    width: 24px;;
  }

</style>
