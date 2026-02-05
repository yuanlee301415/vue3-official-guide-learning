<script setup>
import { ref } from 'vue'
import ChildCompA from './ChildCompA.vue'

const count = ref(0)
setTimeout(() => {
  count.value++
}, 1000)
</script>

<template>
  <div>
    <h1>响应式 Props 解构</h1>

    <hr />
    <ChildCompA :count="count" />
  </div>
</template>

<style scoped lang="less"></style>
