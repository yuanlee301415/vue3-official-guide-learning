<script setup>
import ChildD from '../ChildD.vue'
</script>

<template>
  <div>
    <h1>作用域插槽_1-默认插槽</h1>
    <pre>
      某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。

      我们也确实有办法这么做！可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes
    </pre>

    <hr />
    <ChildD v-slot="slotProps">
      <time>{{ slotProps.time.getHours() }}:{{ slotProps.time.getMinutes() }}:{{ slotProps.time.getSeconds() }}</time>
    </ChildD>
  </div>
</template>

<style scoped lang="less"></style>
