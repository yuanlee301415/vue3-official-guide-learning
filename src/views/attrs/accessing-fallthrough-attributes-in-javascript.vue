<script setup>
import ChildB from './ChildB.vue'
</script>

<template>
  <div>
    <h1>在 JS 中访问 Attributes</h1>
    <pre>
      如果需要，你可以在 script setup 中使用 useAttrs() API 来访问一个组件的所有透传 attribute
    </pre>
    <pre>
      需要注意的是，虽然这里的 attrs 对象总是反映为最新的透传 attribute，但它并不是响应式的 (考虑到性能因素)。
    </pre>
    <hr />
    <ChildB class="text-2xl" icon="logo" />
  </div>
</template>

<style scoped lang="less"></style>
