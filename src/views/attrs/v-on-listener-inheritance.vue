<script setup>
import ButtonC from './ButtonC.vue'

/**
 * 继承的监听器
 */
function handleClick() {
  console.log('继承的监听器')
}
</script>

<template>
  <div>
    <h1>v-on 监听器继承</h1>
    <pre>
      如果一个子组件的根元素已经有了 click attribute，它会和从父组件上继承的值合并。
    </pre>
    <hr />
    <ButtonC @click="handleClick" />
  </div>
</template>

<style scoped lang="less"></style>
