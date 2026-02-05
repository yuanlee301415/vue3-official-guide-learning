<script setup>
import ChildCompB from './ChildCompB.vue'
import { ref } from 'vue'

const count = ref(0)
setTimeout(() => {
  count.value++
})
</script>

<template>
  <div>
    <h1>将解析的 props 传递到函数中</h1>
    <hr />
    <ChildCompB :count="count" />
  </div>
</template>

<style scoped lang="less"></style>
