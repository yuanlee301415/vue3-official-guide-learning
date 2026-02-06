<script setup>
defineOptions({ inheritAttrs: false })
defineProps(['open'])
</script>

<template>
  <div>
    <details :open="open">
      <summary>Child B</summary>
      <code>$attrs: {{ $attrs }}</code>
    </details>
    <button v-bind="$attrs">Child B</button>
  </div>
</template>

<style scoped lang="less"></style>
