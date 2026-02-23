<script setup>
import { ref, provide } from 'vue'
import RootComp from './modules/RootComp.vue'

defineOptions({ name: 'InjectPage' })

const message = ref('Hello')
provide('message', message)
</script>

<template>
  <div>
    <h1>Inject(注入)</h1>

    <hr />
    <RootComp />
  </div>
</template>

<style scoped lang="less"></style>
