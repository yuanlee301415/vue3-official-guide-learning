<script setup>
defineOptions({ inheritAttrs: false })
</script>

<template>
  <div>
    <details open>
      <summary>Child A</summary>
      <code>$attrs: {{ $attrs }}</code>
    </details>
  </div>
</template>

<style scoped lang="less"></style>
