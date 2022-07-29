import Vue from 'vue'
import Vuex from 'vuex'
// 引入todos模块
import todos from './modules/todos'
import Peeling from './modules/Peeling'
import createVuexPersised from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos,
    Peeling
  },
  plugins: [createVuexPersised()]
})
