<script setup>
import { provide } from 'vue'
import { MESSAGE_INJECTION_KEY } from '@/constants/tokens.js'
import RootComp from './modules/RootComp.vue'

defineOptions({ name: 'working-with-symbol-keys' })

provide(MESSAGE_INJECTION_KEY, 'Hello')
</script>

<template>
  <div>
    <h1>使用 Symbol 作注入名</h1>
    <pre>
      如果你正在构建大型的应用，包含非常多的依赖提供，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。
    </pre>

    <hr />

    <RootComp />
  </div>
</template>

<style scoped lang="less"></style>
