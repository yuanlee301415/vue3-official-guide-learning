<script setup>
import RootComp from './drilling-modules/RootComp.vue'
import { ref } from 'vue'

const collapsed = ref(true)
</script>

<template>
  <div>
    <h1>Prop 逐级透传问题</h1>
    <pre>
      通常情况下，当我们需要从父组件向子组件传递数据时，会使用 props。
      有一些多层级嵌套的组件，形成了一棵巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。
      在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦
    </pre>

    <hr />
    <RootComp :collapsed="collapsed" />
  </div>
</template>

<style scoped lang="less"></style>
