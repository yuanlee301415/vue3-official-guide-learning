<script setup>
const countModel = defineModel()
</script>

<template>
  <div>
    <h1>基础用法</h1>
    <pre>
      v-model 可以在组件上使用以实现双向绑定。

      从 Vue 3.4 开始，推荐的实现方式是使用 defineModel() 宏
    </pre>

    <pre>
      defineModel() 返回的值是一个 ref。它可以像其他 ref 一样被访问以及修改，不过它能起到在父组件和当前变量之间的双向绑定的作用：
      它的 .value 和父组件的 v-model 的值同步；
      当它被子组件变更了，会触发父组件绑定的值一起更新。
      这意味着你也可以用 v-model 把这个 ref 绑定到一个原生 input 元素上，在提供相同的 v-model 用法的同时轻松包装原生 input 元素
    </pre>

    <hr />
    <input v-model="countModel" type="number" />
    <code>countModel: {{ countModel }}</code>
  </div>
</template>

<style scoped lang="less"></style>
