<script setup>
import ChildComp from './ChildComp.vue'

defineOptions({ name: 'usage-on-components' })

const vBorder = (el) => {
  el.style.borderColor = 'gray'
  el.style.borderWidth = '1px'
}
</script>

<template>
  <div>
    <h1>在组件上使用</h1>

    <pre>
      当在组件上使用自定义指令时，它会始终应用于组件的根节点，和透传 attributes 类似。

      需要注意的是组件可能含有多个根节点。当应用到一个多根组件时，指令将会被忽略且抛出一个警告。和 attribute 不同，指令不能通过 v-bind="$attrs" 来传递给一个不同的元素。
    </pre>

    <hr />

    <ChildComp v-border />
  </div>
</template>

<style scoped lang="less"></style>
