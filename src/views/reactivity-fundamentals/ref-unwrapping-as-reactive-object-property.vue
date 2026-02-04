<script setup>
import { reactive, ref } from 'vue'

const count = ref(0)
const state = reactive({
  count,
})
console.log(state.count)
state.count = 1
console.log(count.value)
</script>

<template>
  <div>
    <h1>作为 reactive 对象的属性</h1>
    <pre>
      一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。
    </pre>
  </div>
</template>

<style scoped lang="less"></style>
