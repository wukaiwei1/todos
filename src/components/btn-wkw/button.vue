<template>
  <div id="app">
    <button
      :class="[btnBgc, isRound]"
      @mousedown.prevent="btnClickDown"
      @mouseup.prevent="btnClickUp"
      ref="btn"
    >
      <slot>按钮组件</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'myBtn',
  props: {
    // 类型
    type: {},
    // 圆角
    round: {
      // 设置默认值
      default: 'basis'
    }
  },
  data() {
    return {
      btnBgc: '',
      isRound: ''
    }
  },

  created() {
    // 背景样式
    this.setComponent()
    // 圆角
    this.isRoundFn()
  },

  methods: {
    // 根据用户传入的值组件背景样式发生改变
    setComponent() {
      switch (this.type) {
        case 'main':
          this.btnBgc = 'main'
          break
        case 'dangerous':
          this.btnBgc = 'dangerous'
          break
        case 'warning':
          this.btnBgc = 'warning'
          break
        case 'succeed':
          this.btnBgc = 'succeed'
          break
        default:
          this.btnBgc = 'default'
          break
      }
    },
    // 是否为圆角按钮
    isRoundFn() {
      // 如果用户没有传round，则存在默认值，为true
      // 如果传了为空，则为false
      // 所以取反
      if (!this.round) {
        this.isRound = 'round'
      }
    },
    // 鼠标按下事件
    btnClickDown() {
      switch (this.type) {
        case 'main':
          this.$refs.btn.style.backgroundColor = '#3a8ee6'
          break
        case 'dangerous':
          this.$refs.btn.style.backgroundColor = '#dd6161'
          break
        case 'warning':
          this.$refs.btn.style.backgroundColor = '#cf9236'
          break
        case 'succeed':
          this.$refs.btn.style.backgroundColor = '#5daf34'
          break
        default:
          this.$refs.btn.style.borderColor = '#3a8ee6'
          break
      }
    },
    // 鼠标抬起事件
    btnClickUp() {
      this.$refs.btn.style.backgroundColor = ''
      this.$refs.btn.style.borderColor = ''
    }
  }
}
</script>

<style scoped lang="less">
#app {
  display: inline-block;
  button {
    margin: 5px;
    width: 100px;
    height: 40px;
    color: #fff;
    cursor: pointer;
  }
  // 主要按钮
  .main {
    background-color: #409eff;
    &:hover {
      background-color: #66b1ff;
    }
  }
  // 危险按钮
  .dangerous {
    background-color: #f56c6c;
    &:hover {
      background-color: #f78989;
    }
  }
  //警告按钮
  .warning {
    background-color: #e6a23c;
    &:hover {
      background-color: #ebb563;
    }
  }
  // 成功按钮
  .succeed {
    background-color: #67c23a;
    &:hover {
      background-color: #85ce61;
    }
  }

  // 默认按钮
  .default {
    border: 1px solid #ccc;
    color: #333;
    &:hover {
      color: #66b1ff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  // 圆角样式
  .round {
    border-radius: 20px;
  }
}
</style>
