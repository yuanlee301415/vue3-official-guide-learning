<script setup>
/**
 * 自身的监听器
 */
function click() {
  console.log('自身的监听器')
}
</script>

<template>
  <button @click="click">Click Me</button>
</template>

<style scoped lang="less"></style>
