<script setup>
import { ref, watch } from 'vue'

/*--------------------前置刷新（默认配置）--------------------*/
const preCount = ref(0)
const preRef = ref(null)

watch(preCount, () => {
  console.log('pre textContent:', preRef.value?.textContent) // undefined
})

preCount.value++
preCount.value++
preCount.value++

/*--------------------同步刷新--------------------*/
const syncCount = ref(0)
const syncRef = ref(null)

watch(
  syncCount,
  () => {
    console.log('sync textContent:', syncRef.value?.textContent)
  },
  { flush: 'sync' },
)

syncCount.value++
syncCount.value++
syncCount.value++
</script>

<template>
  <div>
    <h1>同步侦听</h1>
    <pre>
      你还可以创建一个同步触发的侦听器，它会在 Vue 进行任何更新之前触发
    </pre>
    <code ref="preRef">preCount: {{ preCount }}</code>
    <code ref="syncRef">syncCount: {{ syncCount }}</code>
  </div>
</template>

<style scoped lang="less"></style>
