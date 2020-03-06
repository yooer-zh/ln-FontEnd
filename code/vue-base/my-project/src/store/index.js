/**
 * /src/store.index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 共享的数据
  state: {
    count: 0,
    num: 1
  },
  mutations: {
    // 定义方法  ， 单词：变异
    increment (state, num) {
      state.count++
      state.num = num
    }
  },
  actions: {
    // actions里面调用 mutations里定义的方法
    increment ({commit}, obj) {
      commit('increment', obj)
    }
  }
})
