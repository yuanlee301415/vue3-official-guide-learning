<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

watch(
  count,
  (newVal) => {
    console.log('new count:', newVal)
  },
  {
    once: true,
  },
)

function updateCount() {
  count.value++
}
</script>

<template>
  <div>
    <h1>一次性侦听器</h1>
    <pre>
      每当被侦听源发生变化时，侦听器的回调就会执行。如果希望回调只在源变化时触发一次，请使用 once: true 选项。
    </pre>
    <button @click="updateCount">更新 `count`</button>
    <code>count: {{ count }}</code>
  </div>
</template>

<style scoped lang="less"></style>
