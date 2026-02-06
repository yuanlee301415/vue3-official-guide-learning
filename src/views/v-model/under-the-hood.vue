<script setup>
import ChildA from './ChildA.vue'
import { ref } from 'vue'

const foo = ref('test')
</script>

<template>
  <div>
    <h1>底层机制</h1>
    <pre>
      defineModel 是一个便利宏。编译器将其展开为以下内容：
        一个名为 modelValue 的 prop，本地 ref 的值与其同步；
        一个名为 update:modelValue 的事件，当本地 ref 的值发生变更时触发。
    </pre>

    <hr />
    <code>foo: {{ foo }}</code>
    <ChildA :modelValue="foo" @update:modelValue="(value) => (foo = value)" />
  </div>
</template>

<style scoped lang="less"></style>
