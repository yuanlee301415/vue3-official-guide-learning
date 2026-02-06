<script setup>
import ChildA from './ChildA.vue'
</script>

<template>
  <div>
    <h1>禁用 Attributes 继承_1-禁用</h1>
    <pre>
      如果你不想要一个组件自动地继承 attribute，你可以在组件选项中设置 inheritAttrs: false。
    </pre>

    <hr />
    <ChildA class="text-3xl" />
  </div>
</template>

<style scoped lang="less"></style>
