<script setup>
import MyModal from './MyModal.vue'

defineOptions({ name: 'Teleport-basic-usage' })
</script>

<template>
  <div>
    <h1>基本用法</h1>

    <pre>
      有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在其他地方，甚至在整个 Vue 应用外部。
    </pre>

    <hr />

    <MyModal />
  </div>
</template>

<style scoped lang="less"></style>
