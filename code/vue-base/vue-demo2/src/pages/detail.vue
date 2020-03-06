<template>
<div class="detail-page">
  <div class="video">
    <video src="https://v3.mukewang.com/jiuyeban/5c775203e520e508558b456b/H.mp4" controls="controls">
    </video>
    <router-link to='/'>
      <div class="video-back">&lt;</div>
    </router-link>
  </div>
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
  .video {
    position: relative;
    height: 211px;
  }

  .video video {
    height: 100%;
    width: 100%;
  }

  .video-back {
    position: absolute;
    width: 32px;
    height: 32px;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    border-radius: 2px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    font-weight: 700;
    top: 16px;
    left: 16px;
  }
</style>
