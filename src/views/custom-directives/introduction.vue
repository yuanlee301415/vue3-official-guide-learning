<script setup>
defineOptions({ name: 'custom-directives_introduction' })

const vHighlight = {
  mounted(el) {
    el.style.backgroundColor = '#ca8a04'
    el.style.color = 'white'
  },
}
</script>

<template>
  <div>
    <h1>介绍</h1>
    <pre>
      自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。
    </pre>
    <hr />
    <div v-highlight>高亮</div>
  </div>
</template>

<style scoped lang="less"></style>
