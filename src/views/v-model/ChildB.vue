<script setup>
const countModel = defineModel('count')
</script>

<template>
  <details open>
    <summary>ChildB</summary>
    <input v-model="countModel" type="number" />
  </details>
</template>

<style scoped lang="less"></style>
