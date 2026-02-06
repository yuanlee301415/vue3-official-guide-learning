<script setup>
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <div>
    <details open>
      <summary>ChildC</summary>
      FirstName: <input v-model="firstName" /> LastName: <input v-model="lastName" />
    </details>
  </div>
</template>

<style scoped lang="less"></style>
