<script setup>
import ChildA from './ChildA.vue'
</script>

<template>
  <div>
    <h1>插槽内容与出口</h1>
    <pre>
      slot 元素是一个插槽出口 (slot outlet)，标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染。
    </pre>

    <hr />
    <ChildA>父组件传入的内容</ChildA>
  </div>
</template>

<style scoped lang="less"></style>
