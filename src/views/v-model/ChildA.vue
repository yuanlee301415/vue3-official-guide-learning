<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <details open>
    <summary>ChildA</summary>
    <input type="text" :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" />
  </details>
</template>

<style scoped lang="less"></style>
