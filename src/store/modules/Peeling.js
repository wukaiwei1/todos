export default {
  // 开始命名空间
  namespaced: true,
  state: {
    colors: '#b83f45'
  },
  mutations: {
    //   更换颜色
    updataColor(state) {
      //   state.colors
      //   生成随机数
      state.colors = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
        )`
    }
  },
  actions: {
    updataColor(context) {
      context.commit('updataColor')
    }
  }
}
