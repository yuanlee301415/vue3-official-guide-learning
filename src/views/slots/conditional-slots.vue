<script setup>
import ChildC from './ChildC.vue'
</script>

<template>
  <div>
    <h1>条件插槽</h1>
    <hr />

    <ChildC>
      <template #header>
        <h2>Header</h2>
      </template>

      <h2>Main</h2>
    </ChildC>
  </div>
</template>

<style scoped lang="less"></style>
