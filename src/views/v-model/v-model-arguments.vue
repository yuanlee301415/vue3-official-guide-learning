<script setup>
import { ref } from 'vue'
import ChildB from './ChildB.vue'

const num = ref(0)
</script>

<template>
  <div>
    <h1>v-model 的参数</h1>
    <pre>
      组件上的 v-model 也可以接受一个参数
    </pre>
    <pre>
      在子组件中，我们可以通过将字符串作为第一个参数传递给 defineModel() 来支持相应的参数
    </pre>
    <hr />
    <input type="number" v-model="num" />
    <ChildB v-model:count="num" />
  </div>
</template>

<style scoped lang="less"></style>
