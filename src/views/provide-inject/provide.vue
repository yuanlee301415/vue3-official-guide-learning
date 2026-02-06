<script setup>
import { ref, provide } from 'vue'
import RootComp from './provide-modules/RootComp.vue'

defineOptions({ name: 'ProvidePage' })

const message = ref('Hello')
provide('message', message)
</script>

<template>
  <div>
    <h1>Provide(提供)</h1>
    <pre>
      要为组件后代提供数据，需要使用到 provide() 函数
    </pre>
    <pre>
      provide() 函数接收两个参数。第一个参数被称为注入名，可以是一个字符串或是一个 Symbol。
      后代组件会用注入名来查找期望注入的值。
      一个组件可以多次调用 provide()，使用不同的注入名，注入不同的依赖值。
    </pre>

    <hr />
    <RootComp />
  </div>
</template>

<style scoped lang="less"></style>
