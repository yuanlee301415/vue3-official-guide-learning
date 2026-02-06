<script setup>
import ButtonD from './ButtonD.vue'
</script>

<template>
  <div>
    <h1>深层组件继承</h1>
    <pre>
      有些情况下一个组件会在根节点上渲染另一个组件。
    </pre>
    <pre>
      请注意：

        透传的 attribute 不会包含组件自身已经声明过的 props 或是针对 emits 声明事件的 v-on 侦听函数，换句话说，声明过的 props 和侦听函数被 组件“消费”了。

        透传的 attribute 若符合声明，也可以作为 props 传入深层组件。
    </pre>

    <hr />
    <ButtonD class="text-2xl" />
  </div>
</template>

<style scoped lang="less"></style>
