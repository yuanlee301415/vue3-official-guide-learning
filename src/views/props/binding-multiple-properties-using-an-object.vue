<script setup>
import { reactive } from 'vue'
import ChildCompC from './ChildCompC.vue'

const post = reactive({
  id: '001',
  title: 'Vue',
})
</script>

<template>
  <div>
    <h1>使用一个对象绑定多个 prop</h1>
    <pre>
      如果你想要将一个对象的所有属性都当作 props 传入，你可以使用没有参数的 v-bind
    </pre>
    <hr />
    <ChildCompC v-bind="post" />
  </div>
</template>

<style scoped lang="less"></style>
