<script setup>
import { ref } from 'vue'
import ChildD from './ChildD.vue'

const txt = ref('')
</script>

<template>
  <div>
    <h1>处理 v-model 修饰符</h1>
    <ChildD v-model.capitalize="txt" />
  </div>
</template>

<style scoped lang="less"></style>
