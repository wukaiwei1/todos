<template>
  <div>
    <button style="cursor: pointer" @click="Peeling">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>

    <div>
      <h4>按钮组件</h4>
      <!-- type为按钮类型
          round为圆角按钮
          文字使用默认插槽，不写显示默认文字（按钮组件）
       -->
      <wkw-button></wkw-button>
      <wkw-button type="main" round>主要按钮</wkw-button>
      <wkw-button type="succeed">成功按钮</wkw-button>
      <wkw-button type="warning" round>警告按钮</wkw-button>
      <wkw-button type="dangerous">危险按钮</wkw-button>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import mybutton from './components/btn-wkw/button'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    'wkw-button': mybutton
  },

  created() {},

  methods: {
    Peeling() {
      this.$store.dispatch('Peeling/updataColor')
    }
  }
}
</script>

<style scoped></style>
