<script setup>
import { ref, nextTick } from 'vue'

const count = ref(0)

async function add() {
  count.value++
  await nextTick()
  console.log(document.querySelector('#countCode').textContent)
}
</script>

<template>
  <div>
    <h1>DOM 更新时机</h1>
    <pre>
      当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，以确保不管你进行了多少次状态修改，每个组件都只会被更新一次。

      要等待 DOM 更新完成后再执行额外的代码，可以使用 nextTick() 全局 API
    </pre>
    <button @click="add">Add</button>
    <code id="countCode">{{ count }}</code>
  </div>
</template>

<style scoped lang="less"></style>
