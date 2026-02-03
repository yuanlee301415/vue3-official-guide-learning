<script setup>
import { ref } from 'vue'

/**
 * 深层响应性
 */
const obj = ref({
  nested: { count: 0 },
  arr: ['one', 'two'],
})

function mutateDeeply() {
  obj.value.nested.count++
  obj.value.arr.push(new Date().toLocaleString())
}
</script>

<template>
  <div>
    <h1>深层响应性</h1>
    <pre>
      Ref 可以持有任何类型的值，包括深层嵌套的对象、数组或者 JavaScript 内置的数据结构，比如 Map。
      Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到
    </pre>
    <button @click="mutateDeeply">Update</button>
    <code>obj: {{ obj }}</code>
  </div>
</template>

<style scoped lang="less"></style>
