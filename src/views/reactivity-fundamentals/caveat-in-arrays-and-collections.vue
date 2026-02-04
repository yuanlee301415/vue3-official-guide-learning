<script setup>
import { reactive, ref } from 'vue'

const books = reactive([ref('Vue3')])

/**
 * 需要 .value
 */
console.log(books[0].value)

const map = new Map([['count', ref(0)]])

/**
 * 需要 .value
 */
console.log(map.get('count').value)
</script>

<template>
  <div>
    <h1>数组和集合的注意事项</h1>
    <pre>
      与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包
    </pre>
  </div>
</template>

<style scoped lang="less"></style>
