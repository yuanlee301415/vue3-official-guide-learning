<script setup>
import { ref, watchEffect } from 'vue'

defineOptions({ name: 'WatchEffect' })

const id = ref(1)
const user = ref(null)

/**
 * 自动跟踪回调的响应式依赖
 */
watchEffect(async () => {
  console.log('id:', id.value)
  const res = await fetch(`/data/users/${id.value}.json`)
  user.value = await res.json()
})
</script>

<template>
  <div>
    <h1>watchEffect()</h1>
    <pre>
      watchEffect() 允许我们自动跟踪回调的响应式依赖。
    </pre>
    <hr />
    User id:
    <select v-model="id" style="width: 10rem">
      <option v-for="n of 4" :value="n" :key="n">{{ n }}</option>
    </select>
    <code>user: {{ user }}</code>
  </div>
</template>

<style scoped lang="less"></style>
