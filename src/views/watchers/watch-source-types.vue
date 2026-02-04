<script setup>
import { ref, watch } from 'vue'

const x = ref(1)
const y = ref(2)

/**
 * 单个 ref
 */
watch(x, (newX) => {
  console.log('x is:', newX)
})

/**
 * getter 函数
 */
watch(
  () => x.value + y.value,
  (sum) => {
    console.log('sum of x + y is:', sum)
  },
)

/**
 * 多个来源组件的数组
 */
watch([x, () => y.value], ([newX, newY]) => {
  console.log('x is:', newX, 'adn y is:', newY)
})

function updateX() {
  x.value++
}

function updateY() {
  y.value++
}
</script>

<template>
  <div>
    <h1>侦听数据源类型</h1>
    <pre>
      watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组
    </pre>
    <button @click="updateX">更新 `x`</button>
    <button @click="updateY">更新 `y`</button>
    <code>x: {{ x }}</code>
    <code>y: {{ y }}</code>
  </div>
</template>

<style scoped lang="less"></style>
