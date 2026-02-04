<script setup>
import { computed, ref } from 'vue'

const seed = ref(1)
const randomSeed = computed(() => {
  return (seed.value * Math.random() * 10 ** 5) | 0
})

function random() {
  return (Math.random() * 10 ** 5) | 0
}
</script>

<template>
  <div>
    <h1>计算属性缓存 vs 方法</h1>
    <pre>
      计算属性值会基于其响应式依赖被缓存。
    </pre>
    <button @click="seed++">更新 `seed`</button>
    <ol>
      <li v-for="n of 5" :key="n">{{ randomSeed }}</li>
    </ol>

    <hr />
    <pre>
      方法调用总是会在重渲染发生时再次执行函数。
    </pre>

    <ol>
      <li v-for="n of 5" :key="n">{{ random() }}</li>
    </ol>
  </div>
</template>

<style scoped lang="less"></style>
