<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="item in todosList"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          v-model="item.done"
          @change="isdone(item)"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="removetodos(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todosList: this.$store.state.todos.todosList,
      isfinish: true
    }
  },
  methods: {
    removetodos(id) {
      this.$store.dispatch('todos/removetodos', id)
    },
    isdone(item) {
      this.$store.dispatch('todos/isDone', item)
    }
  }
}
</script>
