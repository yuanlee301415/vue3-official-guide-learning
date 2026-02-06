<script setup>
import ChildB from './ChildB.vue'

function handleClick() {}
</script>

<template>
  <div>
    <h1>禁用 Attributes 继承_2-$attrs</h1>
    <pre>
      最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 inheritAttrs 选项为 false，你可以完全控制透传进来的 attribute 被如何使用。

      这些透传进来的 attribute 可以在模板的表达式中直接用 $attrs 访问到
    </pre>

    <pre>
      这个 $attrs 对象包含了除组件所声明的 props 和 emits 之外的所有其他 attribute，例如 class，style，v-on 监听器等等。
    </pre>

    <hr />
    <ChildB class="text-3xl" icon="logo" :open="true" @click="handleClick" />
  </div>
</template>

<style scoped lang="less"></style>
