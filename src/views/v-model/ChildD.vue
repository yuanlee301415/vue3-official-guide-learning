<script setup>
const [model, modifiers] = defineModel({
  set(val) {
    if (!modifiers.capitalize) return val
    return val.charAt(0).toUpperCase() + val.slice(1)
  },
})
console.log(modifiers)
</script>

<template>
  <div>
    <details open>
      <summary>ChildD</summary>
      <input v-model="model" type="text" />
    </details>
  </div>
</template>

<style scoped lang="less"></style>
