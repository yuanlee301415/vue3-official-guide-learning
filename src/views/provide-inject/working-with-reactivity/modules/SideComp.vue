<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Side Comp</summary>
    <button @click="updateLocation">Update Location</button>
    <code>location: {{ location }}</code>
  </details>
</template>

<style scoped lang="less"></style>
