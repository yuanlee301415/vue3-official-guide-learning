<script setup>
import ButtonA from './ButtonA.vue'
</script>

<template>
  <div>
    <h1>Attributes 继承</h1>
    <pre>
      “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器。最常见的例子就是 class、style 和 id。

        当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。
    </pre>

    <hr />
    <ButtonA class="large" />
  </div>
</template>

<style scoped lang="less"></style>
