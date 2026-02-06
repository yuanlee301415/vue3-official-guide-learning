<script setup>
import ButtonB from './ButtonB.vue'
</script>

<template>
  <div>
    <h1>对 class 和 style 合并</h1>
    <pre>
      如果一个子组件的根元素已经有了 class 或 style attribute，它会和从父组件上继承的值合并。
    </pre>

    <hr />
    <ButtonB class="large" />
  </div>
</template>

<style scoped lang="less"></style>
