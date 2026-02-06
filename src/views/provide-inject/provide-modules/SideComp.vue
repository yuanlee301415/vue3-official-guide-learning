<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Side Comp</summary>
    <code>message: {{ message }}</code>
  </details>
</template>

<style scoped lang="less"></style>
