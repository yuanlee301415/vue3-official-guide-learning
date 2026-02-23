<script setup>
import RootComp from './modules/RootComp.vue'

defineOptions({ name: 'InjectDefaultValues' })
</script>

<template>
  <div>
    <h1>注入默认值</h1>
    <pre>
      在一些场景中，默认值可能需要通过调用一个函数或初始化一个类来取得。为了避免在用不到默认值的情况下进行不必要的计算或产生副作用，我们可以使用工厂函数来创建默认值
    </pre>
    <hr />

    <RootComp />
  </div>
</template>

<style scoped lang="less"></style>
