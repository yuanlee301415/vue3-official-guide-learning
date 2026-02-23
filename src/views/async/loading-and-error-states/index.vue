<script setup>
import { defineAsyncComponent } from 'vue'
import LoadingComp from './modules/LoadingComp.vue'
import ErrorComp from './modules/ErrorComp.vue'

defineOptions({ name: 'loading-and-error-states' })

const AsyncComp = defineAsyncComponent({
  loader: () => import('./modules/AsyncComp.vue'),
  loadingComponent: LoadingComp,
  errorComponent: ErrorComp,
  delay: 2000,
  timeout: 5000,
})
</script>

<template>
  <div>
    <h1>加载和错误状态</h1>
    <hr />

    <AsyncComp />
  </div>
</template>

<style scoped lang="less"></style>
