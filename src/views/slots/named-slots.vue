<script setup>
import ChildB from './ChildB.vue'
</script>

<template>
  <div>
    <h1>具名插槽</h1>
    <pre>
      slot 元素可以有一个特殊的 attribute name，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容
    </pre>

    <pre>
      这类带 name 的插槽被称为具名插槽 (named slots)。没有提供 name 的 slot 出口会隐式地命名为“default”。
    </pre>

    <hr />
    <ChildB>
      <h4>默认插槽内容 1</h4>

      <template #header>
        <h2>Header</h2>
      </template>

      <h4>默认插槽内容 2</h4>

      <template #footer>
        <h3>Footer</h3>
      </template>

      <h4>默认插槽内容 3</h4>
    </ChildB>
  </div>
</template>

<style scoped lang="less"></style>
