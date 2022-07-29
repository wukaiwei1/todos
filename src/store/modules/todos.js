export default {
  // 开始命名空间
  namespaced: true,
  state: {
    todosList: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    // 添加数据
    settodolist(state, payload) {
      state.todosList.unshift(payload)
    },
    // 删除数据
    removetodos(state, payload) {
      const index = state.todosList.findIndex((item) => item.id === payload)
      state.todosList.splice(index, 1)
    },
    // 修改状态
    isDone(state, payload) {
      const index = state.todosList.findIndex((item) => item.id === payload.id)
      state.todosList[index] = payload
    }
  },
  actions: {
    // 添加数据
    settodolist(context, payload) {
      context.commit('settodolist', payload)
    },
    // 删除数据
    removetodos(context, payload) {
      context.commit('removetodos', payload)
    },
    // 修改数据
    isDone(context, payload) {
      context.commit('isDone', payload)
    }
  },
  getters: {
    todoListId(state) {
      return state.todosList[state.todosList.length - 1].id
    }
  }
}
