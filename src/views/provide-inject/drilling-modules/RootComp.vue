<script setup>
import MainComp from './MainComp.vue'
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Root Comp</summary>
    <MainComp v-bind="$attrs" />
  </details>
</template>

<style scoped lang="less"></style>
