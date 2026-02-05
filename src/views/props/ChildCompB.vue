<script setup>
import { watch } from 'vue'

const { count } = defineProps({
  count: Number,
})

watch(
  () => count,
  (newVal) => {
    console.log(newVal)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div>
    <pre>
      当我们需要传递解构的 prop 到外部函数中并保持响应性时，这是推荐做法：
      <code>useComposable(() => foo)</code>
    </pre>
    <b>ChildCompA>count: {{ count }}</b>
  </div>
</template>

<style scoped lang="less"></style>
