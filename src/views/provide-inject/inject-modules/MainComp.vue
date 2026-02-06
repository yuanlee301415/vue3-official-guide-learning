<script setup>
import SideComp from './SideComp.vue'
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Main Comp</summary>
    <SideComp v-bind="$attrs" />
  </details>
</template>

<style scoped lang="less"></style>
