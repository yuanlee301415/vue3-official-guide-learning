<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <div>
    <details open>
      <summary>Child B</summary>
      <code>attrs: {{ attrs }}</code>
    </details>
  </div>
</template>

<style scoped lang="less"></style>
