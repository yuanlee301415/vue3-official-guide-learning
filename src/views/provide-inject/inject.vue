<script setup>
import { ref, provide } from 'vue'
import RootComp from './inject-modules/RootComp.vue'

defineOptions({ name: 'ProvidePage' })

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
