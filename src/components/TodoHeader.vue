<template>
  <header class="header">
    <h1 :style="{ color: colors }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="taskData"
      @keydown.enter="submit"
    />
  </header>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'
const { mapState: peelingState } = createNamespacedHelpers('Peeling')
export default {
  data() {
    return {
      taskData: ''
    }
  },
  methods: {
    submit() {
      // 触发actions
      this.$store.dispatch('todos/settodolist', {
        name: this.taskData,
        id: this['todos/todoListId'] + 1,
        done: false
      })
      // 清空
      this.taskData = ''
    }
  },
  computed: {
    ...mapGetters(['todos/todoListId']),
    ...peelingState(['colors'])
  }
}
</script>
