<script setup>
import { watchEffect } from 'vue'

const { count } = defineProps({
  count: Number,
})

watchEffect(() => {
  /**
   * 在 3.5 及以上版本，当在同一个 setup 代码块中访问由 defineProps 解构的变量时，Vue 编译器会自动在前面添加 props.
   */
  console.log(count)
})
</script>

<template>
  <div>
    <b>ChildCompA>count: {{ count }}</b>
  </div>
</template>

<style scoped lang="less"></style>
