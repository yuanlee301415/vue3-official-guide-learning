<script setup>
defineProps({
  collapsed: Boolean,
})
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Side Comp</summary>
    <code>collapsed: {{ collapsed }}</code>
  </details>
</template>

<style scoped lang="less"></style>
