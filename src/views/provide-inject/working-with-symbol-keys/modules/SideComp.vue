<script setup>
import { inject } from 'vue'
import { MESSAGE_INJECTION_KEY } from '@/constants/tokens.js'

const message = inject(MESSAGE_INJECTION_KEY)
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Side Comp</summary>
    <code>message: {{ message }}</code>
  </details>
</template>

<style scoped lang="less"></style>
