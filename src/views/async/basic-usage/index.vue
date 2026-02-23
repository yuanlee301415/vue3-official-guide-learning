<script setup>
import { defineAsyncComponent } from 'vue'

defineOptions({ name: 'basic-usage' })

const AsyncComp = defineAsyncComponent(() => import('./modules/AsyncComp.vue'))
</script>

<template>
  <div>
    <h1>基本用法</h1>
    <pre>
      在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue 提供了 defineAsyncComponent 方法来实现此功能
    </pre>
    <pre></pre>
    <hr />

    <AsyncComp />
  </div>
</template>

<style scoped lang="less"></style>
