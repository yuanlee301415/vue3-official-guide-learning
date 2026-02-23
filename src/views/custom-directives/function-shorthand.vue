<script setup>
defineOptions({ name: 'function-shorthand' })

const vBorder = (el) => {
  el.style.borderColor = 'gray'
  el.style.borderWidth = '1px'
}
</script>

<template>
  <div>
    <h1>简化形式</h1>
    <pre>
      对于自定义指令来说，一个很常见的情况是仅仅需要在 mounted 和 updated 上实现相同的行为，除此之外并不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令
    </pre>
    <hr />
    <div v-border>示例</div>
  </div>
</template>

<style scoped lang="less"></style>
