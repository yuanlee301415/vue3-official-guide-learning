<script setup>
import ChildA from './ChildA.vue'
</script>

<template>
  <div>
    <h1>多根节点的 Attributes 继承</h1>
    <pre>
      和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 $attrs 没有被显式绑定，将会抛出一个运行时警告。
    </pre>
    <ChildA class="text-2xl" />
  </div>
</template>

<style scoped lang="less"></style>
