<template>
<div>
  <ul class="c-course">
    <router-link to="/detail">
      <li v-for="(item, index) in arrList" :key="index">
        <img :src="item.imgUrl" alt="">
          <h1>{{item.title}}</h1>
          <p>{{item.msg}}</p>
      </li>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    arrList: Array
  }
}
</script>

<style scoped>
.c-course li {
  width: 335px;
  height: 72px;
  margin: 0 20px;
  font-size: 0;
  position: relative;
  padding-top: 24px;
}

.c-course img {
  width: 108px;
  position: absolute;
}

.c-course h1 {
  font-size: 15px;
  font-weight: normal;
  color: #2B333B;
  position: absolute;
  left: 120px;
}

.c-course p {
  font-size: 12px;
  color: #71777D;
  position: absolute;
  left: 120px;
  top: 49px;
}
</style>
